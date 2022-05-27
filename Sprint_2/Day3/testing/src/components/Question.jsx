import React from 'react'

const Question = ({arr,index}) => {
  return (
    <div>
        <div data-testid="question">Question : {arr[index].question}</div>
        <div data-testid="answer">Answer : {arr[index].answer}</div>
    </div>
  )
}

export default Question