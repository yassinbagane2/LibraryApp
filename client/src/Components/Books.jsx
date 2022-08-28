import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import useAuth from '../Hooks/useAuth';
  export default function Books(props) {

    const {user} = useAuth();
    const  fetchBooks = () => {
      if(!user.accessToken) return;
      axios.get('http://localhost:8080/app/mybooks',{
        headers:{
          Authorization: `Bearer ${user.accessToken}`
        }
      })
        .then(response => {
          props.setBooks(response.data.books)
        })
        
      
    }
    useEffect(() => {
      fetchBooks();
    
    },[user.accessToken]);
    
    const handleDelete = (bookId) => {
      
      axios.delete('http://localhost:8080/app/delete/'+ bookId).then(res => {
        console.log(res);
        props.setBooks(books => books.filter(book => book._id !== res.data._id ));
      })
    }
    return (
      <div className="flex flex-col">
        {props.books.length > 0 ? <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">     
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
                   className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                 >
                   Price
                 </th>
                 <th scope="col" className="relative px-6 py-3">
                   <span className="sr-only">Edit</span>
                 </th>
               </tr>
             </thead>
             <tbody className="bg-white divide-y divide-gray-200">
               {props.books.length > 0 && props.books.map((book,i) => (
                 <tr key={i}>
                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{book.title}</td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.author}</td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                   <td className="py-4 whitespace-nowrap text-sm text-gray-500">{book.price}DT</td>
                   <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                     <a href="#" className="text-blue-600 hover:text-blue-700 ">
                       Edit
                     </a>
                     <Link  to={`/book/${book._id}`} className="text-blue-600 hover:text-blue-700 ml-5">View</Link>
                     <button onClick={() => {handleDelete(book._id)}} className="text-red-600 hover:text-red-700 ml-5">Delete</button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
       </div> : <p>No Books Added!</p>}
      </div>
    )
  }
  