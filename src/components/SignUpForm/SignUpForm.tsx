import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../common/axiosInstance'

export default function SignUpForm() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const usernameInput = useRef<HTMLInputElement>(null)
  const signUp = async ():Promise<void> => {
    try {
      const response = await axiosInstance.post('user/signup', 
        { 
          username,
          password
        }
      )
      console.log(response)
      if (response.status === 201) {
        navigate('/signin')
      }
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    usernameInput?.current?.focus()
  }, []);
  return (
    <form>
      <h1>Sign Up</h1>
      <input 
        type='text'
        placeholder='아이디'
        ref={ usernameInput }
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <input
        type='password'
        placeholder='비밀번호'
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <button
        type='button'
        onClick={ signUp }
      >Sign Up</button>
    </form>
  )
}
