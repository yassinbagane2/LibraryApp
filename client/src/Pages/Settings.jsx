import React from 'react'
import Navbar from '../Components/Navbar'
import Button from '../Components/UI/Button'

const Settings = () => {
  return (
    <>
        <Navbar />
        <div className='h-full'>
            <div className='flex flex-col fixed inset-0 m-auto w-[490px] h-[680px] bg-white rounded-md shadow-sm overflow-hidden -z-10'>
                <div className='text-white bg-gray-800 h-36 font-bold text-4xl flex justify-center items-center'>
                    <h1>Settings</h1>
                </div>
                <form action="" method='POST' className='mt-10 flex flex-col items-center justify-between'>
                    <div className='w-3/4'>
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                        Full name<span className='text-red-600'>*</span>
                        </label>
                        <div className="mt-1">
                        <input
                            id="fullname"
                            name="fullname"
                            type="fullname"
                            required
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        />
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                        Email Address<span className='text-red-600'>*</span>
                        </label>
                        <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        />
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        New Password
                        </label>
                        <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        />
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <label htmlFor="repeated-password" className="block text-sm font-medium text-gray-700">
                        Password Confirmation
                        </label>
                        <div className="mt-1">
                        <input
                            id="repeatedPassword"
                            name="repeatedPassword"
                            type="password"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        />
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <label htmlFor="repeated-password" className="block text-sm font-medium text-gray-700">
                          Profile Image
                        </label>
                        <div className="mt-1">
                        <input
                            id="profileImage"
                            name="profileImage"
                            type="file"
                            required
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        />
                        </div>
                    </div>
                    
                    <button
                    type="submit"
                    className="mt-10 items-center w-3/4 px-2 md:px-6 py-2 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"         
                    >
                        Submit
                    </button>
                </form> 
            
            </div>
        </div>
    </>
  )
}

export default Settings