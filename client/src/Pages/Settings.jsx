import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import useAuth from '../Hooks/useAuth'
const Settings = () => {
    const { user } = useAuth(); 
 
    const [values, setValues] = useState({

    });
    const [fileName, setFileName] = useState('');
    const onChange = (e) => {
        setValues((prev) => {
          return {...prev, [e.target.name]: e.target.value}
        });
    }

    const onChangeFile = e => {
        setFileName(e.target.files[0]);
      };
    const formData = new FormData();
    // formData.append('email',values.email);
    // formData.append('password',values.password);
    // formData.append('birthday',values.birthday);
    // formData.append('image',fileName);

    const updateUser = (e) => {
        e.preventDefault();
        console.log(formData.fullname);
        // axios.put('http://localhost:8080/update-user', {
        //     headers:{
        //         Authorization: `Bearer ${user.accessToken}`
        //       }
        // }).then(res => {
        //     console.log(res);
        // })
    }
    
  return (
    <>
        <Navbar />
        <div className='h-full'>
            <div className='flex flex-col fixed inset-0 m-auto w-[490px] h-[680px] bg-white rounded-md shadow-sm overflow-hidden -z-10'>
                <div className='text-white bg-gray-800 h-36 font-bold text-4xl flex justify-center items-center'>
                    <h1>Settings</h1>
                </div>
                <form method='POST' className='mt-10 flex flex-col items-center justify-between' onSubmit={updateUser}>
                    <div className='w-3/4'>
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                        Full name<span className='text-red-600'>*</span>
                        </label>
                        <div className="mt-1">
                        <input
                            id="fullname"
                            name="fullname"
                            type="fullname"
                            onChange={onChange}
                            defaultValue={user.fullName}
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
                            onChange={onChange}
                            type="email"
                            defaultValue={user.email}
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
                            onChange={onChange}
                            name="password"
                            type="password"
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        />
                        </div>
                    </div>
                    <div className='w-3/4'>
                        <label htmlFor="Birthday" className="block text-sm font-medium text-gray-700">
                            Birth Date
                        </label>
                        <div className="mt-1">
                            <input
                            id="birthday"
                            onChange={onChange}
                            name="birthday"
                            type="date"
                            required
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
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
                            onChange={onChangeFile}
                            type="file"
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