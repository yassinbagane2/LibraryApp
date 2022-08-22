const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path')

const cookieParser = require('cookie-parser')
const multer = require('multer'); 

require("dotenv").config();

// images upload config
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/');
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
            cb(null, true)
    }
    else {
        cb (null, false)
    }
}

const corsConfig = {
    origin: true,
    credentials: true,
  };

// middlewares
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(express.json());
app.use(cookieParser());
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));
app.use('/images',express.static(path.join(__dirname,'images')));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'OPTION, GET, POST, PUT, PATCH, DELETE ');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});



// routes
app.use('/', require('./routes/authRoutes'));
app.use('/app', require('./routes/userRoutes'));

app.get('/user', function(req, res) {
    console.log('req.cookies', req.cookies);
    res.send(req.cookies);
});

app.use((error, req, res, next) => {
    const data = error.data;
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message, data: data})
});

mongoose
    .connect(`mongodb+srv://yassinbagane2:${process.env.CLUSTER_PWD}@cluster0.qollkp9.mongodb.net/Project1`)
    .then(() => {
        app.listen(8080);
        console.log('connected');
    })
    .catch(err => {
        console.log(err);
    });