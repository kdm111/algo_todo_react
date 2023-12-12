import React from 'react'
import './ProblemCell.css'

interface ProblemCellProps {
  title: string
} 
const ProblemCell: React.FC<ProblemCellProps>  = ({ title }) => {
  
  return (
    <li className='problem-cell'>
      <h2>{title} </h2> 
    </li>
  )
}

export default ProblemCell