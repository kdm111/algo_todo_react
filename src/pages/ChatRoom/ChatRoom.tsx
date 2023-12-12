import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar.js/Navbar'
import { axiosInstance } from '../../common/axiosInstance'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'

const ChatRoom : React.FC = () => {
  const { chatRoomId } = useParams()
  useEffect(() => {
    const socket = io(`${process.env.REACT_APP_URL}`, {
      withCredentials: true,
    });
    socket.on('connect', () => {
      console.log('connect to server')
    })
    socket.on('message', (message) => {
      console.log(message)
    })
    socket.emit('join-room', `${chatRoomId}`, 'userId')
  }, [chatRoomId])
  return (
    <>
      <Navbar />
      <h1>ChatRoom</h1>
      <p>{chatRoomId}번 방입니다.</p>
      <div
        className='video-grid'
      >
        
      </div>
    </>
  )
}

export default ChatRoom