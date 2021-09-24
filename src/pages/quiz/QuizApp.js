import React from 'react'
import Question from './Question'
import QuizForm from './QuizForm'
import QuizResult from './QuizResult'

function QuizApp() {
    return (
        <>
            <QuizForm/>
            <Question/>
            <QuizResult/>
        </>
    )
}

export default QuizApp
