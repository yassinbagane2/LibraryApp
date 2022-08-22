import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Shop from './Pages/Shop';
import Settings from './Pages/Settings';
import BookInfo from './Pages/BookInfo';
import useAuth from './Hooks/useAuth';

const App = () => {
  const { user,setUser } = useAuth();
    useEffect(() => {
      
    },[])
  
  return (
    <Router>     
      <Routes>      
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='' element={<Dashboard />} />
        <Route path='books' element={<Shop />} />
        <Route path='settings' element={<Settings />} />
        <Route path='/book/*' element={<BookInfo />} />
      </Routes>
    </Router>
  )
}

export default App