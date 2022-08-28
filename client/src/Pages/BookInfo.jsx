import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Button from '../Components/UI/Button'
import { useParams } from 'react-router-dom'


const BookInfo = () => {
    const [bookDetails,setBookDetails] = useState([]);
    const {bookId} = useParams();
    const fetchBookInfo = () => {
        axios.get(`http://localhost:8080/app/book/${bookId}`)
            .then(res => {
                setBookDetails(res.data.book);
            }).catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchBookInfo();
    },[]);
  return (
    <>
        <Navbar />
        <section className='mt-36 w-full h-3/4 flex items-center justify-center overflow-hidden relative'>
            <div className=' bg-white h-[32rem] w-[58rem] rounded-lg flex'>
                <img className='w-[35%] h-full rounded-l-lg' src={`http://localhost:8080/${bookDetails.imageUrl}`} alt="book" />
                <div className='w-[75%] h-full rounded-r-lg'>
                    <div className='p-5'>
                        <h1 className='text-start font-extrabold text-4xl font-mono mt-2'>{bookDetails.title}</h1>
                        <p className='text-2xl text-gray-900 py-2'>{bookDetails.price} DT</p>                      
                        <p className='py-4'>{bookDetails.description}</p>
                        
                        <div className='my-4 absolute bottom-3'>
                            <p>Owner's Informations:</p>
                            <div className='flex items-center'>
                                <img
                                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className='flex flex-col justify-center ml-3 text-zinc-500'>
                                    <div>
                                        yassin.bagane2@gmail.com
                                    </div>
                                    <div>
                                        +216 52544318
                                    </div>
                                </div>
                                <div className='ml-24'><Button>Send A Message!</Button></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BookInfo