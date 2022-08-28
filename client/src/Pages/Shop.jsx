import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Pagination from '../Components/UI/Paginaition'
import { Link } from 'react-router-dom'
const Shop = () => {

  const [books,setBooks] = useState([]);

  const fetchBooks = () => {
    axios.get('http://localhost:8080/app/books').then(res => {
      setBooks(res.data)
    }).catch(err => {
      console.log(err);
    })
  }
  useEffect(() => {
    fetchBooks();
  },[])

  return (
    <>
        <Navbar activeBooks='true'/>
        <div className='fixed inset-0 m-auto bg-white rounded-md w-[1320px] h-[800px] mt-24 -z-10'> 
          <input className='block float-right py-2 px-2 md:w-16 lg:w-[420px] mr-4 mt-4 border border-zinc-200 rounded-md placeholder:opacity-30 focus:outline-none focus:border-gray-600 sm:text-sm' type="search" name="search" id="search" placeholder='Search Books' />
          <div className='flex sm:flex-col md:flex-row flex-wrap justify-start mt-24 ml-3'>
            {books.map((book)=> {
              return (
                <Link to={`/book/${book._id}`} key={book._id} >
                  <div className='h-[310px] w-[230px] bg-gray-100 rounded-lg shadow-sm my-3 mx-7 cursor-pointer transition hover:-translate-y-3'>
                    <img src={`http://localhost:8080/${book.imageUrl}`} alt="Book" className='h-1/2 w-full object-cover rounded-t-lg' />
                    <p className='ml-5 text-lg font-bold text-gray-900'>{book.price} DT</p>
                    <h4 className='text-xl text-center cursor-pointer font-bold text-indigo-700'>{book.title}</h4>
                    <div className='ml-5 w-48 description'>{book.description}</div>
                  </div>
                </Link>
              )
            })}
          </div> 
          <div className='absolute bottom-3 right-[34%]'>
            <Pagination />
          </div>
        </div>
    </>
  )
}

export default Shop