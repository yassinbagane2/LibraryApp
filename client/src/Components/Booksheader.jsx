import React, { useState } from 'react'
import Button from './UI/Button'
import Addbook from './Addbook'

const Booksheader = (props) => {
  const [addBook,showAddBook] = useState(false);
  const addBookHandler = () => {
    showAddBook(!addBook);
  }
  return (
    <div className='flex flex-shrink-0 justify-start lg:justify-between items-center h-20 -z-20'>
        <div className="mb-4 z-0">
            <Button onClick={addBookHandler}>Add Book</Button>
        </div>
          <input className='block py-2 px-2 md:w-96 lg:w-[720px] ml-4 mb-3 border border-zinc-200 rounded-md placeholder:opacity-30 focus:outline-none focus:border-gray-600 sm:text-sm' type="search" name="search" id="search" placeholder='Search Books' />
        {addBook && <Addbook onClick={addBookHandler} setBooks = {props.setBooks} books = {props.books} showAddBook = {showAddBook}/>}
    </div>
  )
}

export default Booksheader