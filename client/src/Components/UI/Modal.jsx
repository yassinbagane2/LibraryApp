import React from 'react'
import ReactDOM  from 'react-dom'


const Backdrop = props => {
    return <div className='fixed inset-0 m-auto' onClick={props.onClick}></div>
}

const ModalOverlay = props => {
    return <div className=''>{props.children}</div>
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop onClick= {props.onClick} />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal