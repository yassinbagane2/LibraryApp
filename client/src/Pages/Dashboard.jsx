import React from 'react'
import Navbar from '../Components/Navbar'
import Books from '../Components/Books'
import Booksheader from '../Components/Booksheader'
import useAuth from '../Hooks/useAuth'
import axios from 'axios'
const Dashboard = () => {
  const { user } = useAuth();
 
  console.log('user state',user)

  return (
    <div className='w-full min-h-screen relative'>
        <Navbar activeHome='true'/>  
        <div className=' fixed inset-0 mt-[18rem] w-full lg:w-2/3 m-auto'>
            <Booksheader />
            <Books />
        </div>
    </div>
  )
}

export default Dashboard