import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/UI/Button'
const BookInfo = () => {
  return (
    <>
        <Navbar />
        <section className='mt-36 w-full h-3/4 flex items-center justify-center overflow-hidden'>
            <div className=' bg-white h-[32rem] w-[58rem] rounded-lg flex'>
                <img className='w-[35%] h-full rounded-l-lg' src="images/book.avif" alt="book" />
                <div className='w-[75%] h-full rounded-r-lg'>
                    <div className='p-5'>
                        <h1 className='text-start font-extrabold text-4xl font-mono mt-2'>Book Title</h1>
                        <p className='text-xl text-gray-900 py-2'>210 DT</p>                      
                        <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae error, id ex minus iste harum vero voluptates officiis excepturi, rem, eligendi quibusdam voluptatum hic ducimus nemo iure quidem rerum sunt.</p>
                        <p className='text-md text-green-500 mb-2'>En Stock &#10004;</p>
                        <Button>Message Owner</Button>
                        
                        <div className='my-4'>
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