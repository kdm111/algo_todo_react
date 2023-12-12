import React from 'react'
import Navbar from '../../components/Navbar.js/Navbar'
import { useParams } from 'react-router-dom'

const ProblemCategory:React.FC = () => {
  const { category } = useParams()
  return (
    <>
      <Navbar />
      <h1>현재 {category}에 대한 문제 리스트</h1>
    </>
  )
}

export default ProblemCategory