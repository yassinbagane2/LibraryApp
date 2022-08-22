import { useEffect } from 'react';
import axios from 'axios'
const people = [
    { name: 'Jane Cooper', title: 'Regional Paradigm Technician', quantity: '10', email: 'jane.cooper@example.com' },
    // More people...
  ]
  
  export default function Books() {

    // const  fetchBooks = () => {
    //   axios.get('http://localhost:8080/app/books')
    //     .then(response => {
    //       console.log(response);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
      
    // }
    // useEffect(() => {
    //   fetchBooks()
    // },[])
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Author
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center pr-16">{person.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-blue-600 hover:text-blue-700 ">
                          Edit
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-700 ml-5">
                          View
                        </a>
                        <a href="#" className="text-red-600 hover:text-red-700 ml-5">
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  