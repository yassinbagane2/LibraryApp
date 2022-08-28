import React, { useState } from 'react'
import Modal from './UI/Modal'
import Button from './UI/Button'
import Input from './UI/Input'
import Textarea from './UI/Textareas'
import { XIcon } from '@heroicons/react/outline'
import axios from 'axios'
import useAuth from '../Hooks/useAuth'

const Addbook = (props) => {

  const { user } = useAuth();
  const [values, setValues] = useState({
    title: '',
    author: '',
    description: '',
    price: Number,
  });
  const [bookImage, setBookImage] = useState('');

  const onFileChange = (e) => {
    setBookImage(e.target.files[0]);
    console.log(bookImage);
  }

  const onChange = e => {
    setValues(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  const formData = new FormData();
  formData.append('title',values.title);
  formData.append('author',values.author);
  formData.append('description',values.description);
  formData.append('price',values.price);
  formData.append('image',bookImage);

  const addBookHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/app/addbook',formData,{
      headers:{
        Authorization: `Bearer ${user.accessToken}`
      }
    }).then(res => {
      props.setBooks([...props.books, res.data.book]);
      props.showAddBook(props.onClick);
    })
  }
  return (
    <Modal onClick={props.onClick}>
        <div className='w-[480px] h-[480px] rounded-md fixed inset-0 m-auto bg-white z-10'>
          <XIcon className="block h-6 w-6 float-right m-1 hover:cursor-pointer hover:rotate-12" onClick={props.onClick} aria-hidden="true" />
            <form action="" method='POST' className='mt-10 flex flex-col  items-center min-h-[200px] justify-around'>
                <Input label='Title' name='title' onChange={onChange} id='title' placeholder='Book Title'/>
                <Input label='Author' name='author' onChange={onChange} id='author' placeholder='Book Author'/>
                <Textarea onChange={onChange}/>
                <Input type='number' label='Price' name='price' onChange={onChange} id='price'/>
                <Input type='file' label='Book Image' onChange={onFileChange} name='image' id='image'/>
            </form>   
            <div className='flex w-full items-center justify-center mt-5'>
                <Button type='submit' onClick={addBookHandler}>Save Book</Button>
            </div>
        </div>
    </Modal>
    
  )
}

export default Addbook