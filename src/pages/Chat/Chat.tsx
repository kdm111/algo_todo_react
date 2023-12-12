import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar.js/Navbar'
import { axiosInstance } from '../../common/axiosInstance'
import { useNavigate, Link } from 'react-router-dom'

const Chat : React.FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    // const chatroom = async () => {
    //   const response = await axiosInstance.get('/api/chat')
    //   navigate(`${response.data}`)
    // }
    // chatroom()
  }, [navigate])
  return (
    <>
      <Navbar />
      <h1>Chat</h1>
      <button
        onClick={async () => {
          const response = await axiosInstance.get('chat/room')
          if (response.status === 200) {
            navigate(response.data.redirectTo)
          } else {
            console.log('error')
          }
        }}
      >
        채팅방 바로가기
      </button>
    </>
  )
}

export default Chat