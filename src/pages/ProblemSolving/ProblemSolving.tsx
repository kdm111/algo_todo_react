import React from 'react';
import { useParams } from 'react-router-dom';

const ProblemSolving: React.FC = () => {
  const { problemId } = useParams()
	
  return (
    <>
     <h1>Problem Solving</h1> 
    	<h2>현재 문제 번호는 { problemId }번 입니다</h2>
    </>
  )
}

export default ProblemSolving;

