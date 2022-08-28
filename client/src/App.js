import React, { useEffect } from 'react'
import axios from 'axios';
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Shop from './Pages/Shop';
import Settings from './Pages/Settings';
import BookInfo from './Pages/BookInfo';
import useAuth from './Hooks/useAuth';
import ProtectedRoutes from './utils/ProtectedRoutes';
const App = () => {
  const location = useLocation();
  const { user,setUser } = useAuth();

  useEffect(() => {
      if (location.pathname === '/register' || location.pathname === '/login') return
      const fetchUserData = () => {
        axios.get('http://localhost:8080/app/user',{
          withCredentials: true
        }).then(user => {
          if(!user) return
          setUser(prev => ({
            ...prev,
            accessToken: user.data.accessToken,
            email: user.data.user.email,
            fullName: user.data.user.fullname,
            gender: user.data.user.gender,
            birthday: user.data.user.birthday,
            profileImage: user.data.user.profileImage
          }))
        })
      } 
      fetchUserData();
    },[user.accessToken]);
  
  return (
      <Routes> 
        <Route element={<ProtectedRoutes/>} >
          <Route path='/' element={<Dashboard />} exact/>
          <Route path='/settings' element={<Settings />} />
        </Route> 
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/books' element={<Shop />} />
        <Route path='/book/:bookId' element={<BookInfo />} />
      
        
      </Routes>
  )
}

export default App