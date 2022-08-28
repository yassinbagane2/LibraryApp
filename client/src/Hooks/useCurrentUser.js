import React from 'react'
import { useState } from 'react'

const useCurrentUser = () => {
    const [values, setValues] = useState({
        fullname: document.getElementById('fullname')?.value,
        email: document.getElementById('email')?.value,
        password: document.getElementById('password')?.value,
        birthday: document.getElementById('birthday')?.value
    });
  return values
}

export default useCurrentUser