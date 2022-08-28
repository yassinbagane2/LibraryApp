import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Books from '../Components/Books'
import Booksheader from '../Components/Booksheader'
const Dashboard = () => {
  const [books, setBooks] = useState([]);
  return (
    <div className='w-full min-h-screen relative'>
        <Navbar activeHome='true'/>  
        <div className=' fixed inset-0 mt-[18rem] w-full lg:w-2/3 m-auto'>
            <Booksheader setBooks = {setBooks} books = {books}/>
            <Books setBooks = {setBooks} books = {books} />
        </div>
    </div>
  )
}

export default Dashboard