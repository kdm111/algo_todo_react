import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import useUserStore from '../../store/useUserStore'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../common/axiosInstance'
import './Navbar.css'

export default function Navbar() {
  const navigate = useNavigate()
  const { username, signout } = useUserStore()
  return (
    <nav className='navbar'>
      <h1 className='algo-todo-title'>
        <Link to="/" className='link'> ALGO-TODO</Link>
      </h1>
      <ul className='link-container'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/problems" className='link'>Problem</Link>
        {
         username && [
          <Link to="/todo" className='link'>Todo</Link>,
          <Link to="/chat" className='link'>chat</Link>
         ]
        } 
        {
          !username && [
            <Link to="/signup" className='link'>SignUp</Link>,
            <Link to="/signin" className='link'>SignIn</Link>,  
          ]
        }
        {
          username && 
            <button
            onClick={async () => {
              const response = await axiosInstance.get('/user/signout')
              if (response.status === 200) {
                signout()
                navigate('/signin')
              }
            }}
            className='link'
          >SignOut</button>
        }
        {
          username ? `사용자 이름 : ${username}` : '로그인을 해주세요'
        }
      </ul>
    </nav>
  )
}
