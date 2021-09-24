import React from 'react'
import {useGlobalContext} from '../../components/context'

import '../../App.css'

function QuizResult() {
    const {quizName,score,questions,quizResult} = useGlobalContext()
    return (
        <>
             {
               quizResult && 
                <div className='container my-5 py-5'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-4 col-12 align-item-center quizResult'>
                            <div className='my-5 quizResultStyle'>
                               <h1>hey {quizName}</h1> 
                               <p> you score {score} / {questions.length}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='row justify-content-center my-3'>
                        <div className='col-lg-4 col-12 align-item-center text-center'>
                         <a href="/" className='btn btn-primary'>Home</a>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default QuizResult
