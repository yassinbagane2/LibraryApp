import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Pagination from '../Components/UI/Paginaition'
import useAuth from '../Hooks/useAuth'
const Shop = () => {

  const [books,setBooks] = useState(['abc','bcdbfvsd','jhijhbnijhk','abc','bcdbfvsd','jhijhbnijhk','bcdbfvsd','jhijhbnijhk'])
  const { user, setUser } = useAuth();
 
  console.log('user state',user)
  return (
    <>
        <Navbar activeBooks='true'/>
        <div className='fixed inset-0 m-auto bg-white rounded-md w-[1320px] h-[800px] mt-24 -z-10'> 
          <input className='block float-right py-2 px-2 md:w-16 lg:w-[420px] mr-4 mt-4 border border-zinc-200 rounded-md placeholder:opacity-30 focus:outline-none focus:border-gray-600 sm:text-sm' type="search" name="search" id="search" placeholder='Search Books' />
          <div className='flex sm:flex-col md:flex-row flex-wrap justify-evenly mt-24 ml-3'>
            {books.map((book ,i)=> {
              return (
                <div key={i} className='h-[280px] w-[230px] bg-gray-100 rounded-lg shadow-sm my-3 mx-7'></div>
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