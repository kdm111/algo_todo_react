import React, {useEffect} from 'react'
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar.js/Navbar'
import useUserStore from '../../store/useUserStore'
import './Main.css'
import { axiosInstance } from '../../common/axiosInstance'

export default function Main() {
  useEffect(() => {
    
  }, [])
  const arr = [
    "배열",
    "문자열",
    "해쉬",
    "다이나믹 프로그래밍",
    "그래프",
    "트리"
  ]
  return (
    <>
    <Navbar />
    <main className="main-container">
      {
        arr.map((el, idx) => {
          return (
            <Card
              key={idx}
              cardTitle={el}
            />)
        })
      }
      <button
        onClick={async () => {
          const response = await axiosInstance.get('/user/myinfo')
          console.log(response)
        }}
      >checkMyinfo</button>
    </main>
    </>
  )
}
