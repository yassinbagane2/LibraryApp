import {Link} from 'react-router-dom'
export default function Register() {
    return (
      <>
        <div className="bg-blue-100 opacity-75 min-h-full fixed inset-0 m-auto flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <Link className='text-blue-500' to='/login'>Login</Link>
                </p>
            </div>
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                    Full name
                  </label>
                  <div className="mt-1">
                    <input
                      id="fullname"
                      name="fullname"
                      type="fullname"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
           
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Profile Image
                  </label>
                  <div className="mt-1">
                    <input
                      id="profileImage"
                      name="profileImage"
                      type="file"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="Birthday" className="block text-sm font-medium text-gray-700">
                    Birth Date
                  </label>
                  <div className="mt-1">
                    <input
                      id="birthday"
                      name="birthday"
                      type="date"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className='flex items-center'>
                    <label for="gender">Gender</label>
                    <select className='ml-4' name="gender" id="gender" form="genderform">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
  
            </div>
          </div>
        </div>
      </>
    )
  }
  