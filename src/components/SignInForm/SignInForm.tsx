import { axiosInstance } from '../../common/axiosInstance';
import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInForm () {
  const navigate = useNavigate()
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');

  const usernameInput = useRef<HTMLInputElement>(null);
  const signin = async (): Promise<void> => {
    const response = await axiosInstance.post('user/signin', {
      username, password
    })
    if (response.status === 200) {
      navigate('/')
    } else if (response.status === 400) {
      alert('아이디나 비밀번호가 잘못 입력되었습니다.')
    } else {
      alert('알 수 없는 서버 에러')
    }
  }
  useEffect(() => {
    usernameInput?.current?.focus()
  }, []);
  return (
    <form>
      <h1>Sign In</h1>
      <input 
        type='text'
        placeholder='아이디'
        ref={ usernameInput }
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            signin()
          }
        }}
      />
      <input 
        type='password'
        placeholder='비밀번호'
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            signin()
          }
        }}
      />
      
      <button
        type='button'
        onClick={() => {
          signin()
        }}
      >
        Sign In
      </button>

    </form>
  )
}
