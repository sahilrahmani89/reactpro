import React from 'react'
import {useGlobalContext} from '../../components/context'
import TodoAlert from '../todo/TodoAlert'
import '../../App.css'

function QuizForm() {
    const {
        quizFormCon,
        todoalert,
        setquizName,
        quizName,
        quizFormHandler,
        emptyField
    } = useGlobalContext()
    return (
        <>
    { quizFormCon &&
        <div className='container my-5 py-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-5 col-12 align-item-center'>
                    <div className='form-box'>
                        {
                            todoalert.show && <TodoAlert  />
                        }
                        <form>
                            <input type='text' placeholder='Enter Your Name'
                            className='form-control my-1'
                            value={quizName}
                            onChange={e=>setquizName(e.target.value)}
                            ref={emptyField}
                            />
                            <button  onClick={(e)=>quizFormHandler(e)}
                             className='btn btn-primary'
                            >Enter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     }
        </>
    )
}

export default QuizForm
