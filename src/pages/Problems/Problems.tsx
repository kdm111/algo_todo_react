import React, { useState } from 'react'
import Navbar from '../../components/Navbar.js/Navbar'
import ProblemCell from '../../components/Problem/ProblemCell'
export default function Problems() {
  const [searchKeyword, setSearchKeyword] = useState('')
  const problems = [
    {title : '문제 1'},
    {title : '문제 2'}
  ]
  return (
    <>
      <Navbar />
      <h1>Problems</h1>
      <input type="text" 
        onChange={(e) => {
          setSearchKeyword(e.target.value)
        }}
      />
      <main>
        {problems.map((el, idx) => {
          return (
          <>
            <ProblemCell
              key={ idx }
              title={el.title}
            />
          </>)
        })}
      </main>
    </>
  )
}
