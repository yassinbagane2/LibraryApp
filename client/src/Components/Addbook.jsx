import React from 'react'
import Modal from './UI/Modal'
import Button from './UI/Button'
import Input from './UI/Input'
import Textarea from './UI/Textareas'
import { XIcon } from '@heroicons/react/outline'


const Addbook = (props) => {
  return (
    <Modal onClick={props.onClick}>
        <div className='w-[480px] h-[480px] rounded-md fixed inset-0 m-auto bg-white z-10'>
          <XIcon className="block h-6 w-6 float-right m-1 hover:cursor-pointer hover:rotate-12" onClick={props.onClick} aria-hidden="true" />
            <form action="" method='POST' className='mt-10 flex flex-col  items-center min-h-[200px] justify-around'>
                <Input label='Title' name='Title' id='Title' placeholder='Book Title'/>
                <Input label='Author' name='author' id='author' placeholder='Book Author'/>
                <Input type='number' label='Quantity' name='Quantity' id='Quantity' placeholder='Number Of Copies'/>
                <Textarea />
                <Input type='file' label='Book Image' name='image' id='image'/>
            </form>   
            <div className='flex w-full items-center justify-center mt-5'>
                <Button>Save Book</Button>
            </div>
        </div>
    </Modal>
    
  )
}

export default Addbook