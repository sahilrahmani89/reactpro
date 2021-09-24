import React from 'react'
import {useGlobalContext} from '../../components/context'
import '../../App.css'


function Question() {
    const {showQuestion,
        questions,
        questionIndex,
        quizGetValue,
        quizInputref,
        quizHandleChange,
        checkQuizAns
    } = useGlobalContext()
    const {question,a,b,c,d} = questions[questionIndex]||{}
    return (
        <>
           <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-7 col-12 align-item-center'>
                        {
                            showQuestion &&
                            <div>
                                <h6>{question}</h6>
                                
                    <div className="ans ml-2 d-flex align-items-center align-self-center">
                      <div className="option relative">A</div>
                        <label className="radio"> 
                        <input type="radio"  className="answer"
                        onClick={quizGetValue}
                        ref={quizInputref}
                         id="ans1"
                         name="labelinput"
                         onChange={quizHandleChange}
                         value="brazil"/>
                        <span className="option1">{a}</span>
                        </label>
                    </div>
                    <div className="ans ml-2 d-flex align-items-center align-self-center">
                      <div className="option relative">B</div>
                         <label className="radio"> <input type="radio"  className="answer"
                         onClick={quizGetValue}
                         ref={quizInputref}
                         onChange={quizHandleChange}
                          id="ans2"
                          name="labelinput"
                          value="brazil"
                           />
                          <span className="option2">{b}</span>
                        </label>
                    </div>
                    <div className="ans ml-2 d-flex align-items-center align-self-center">
                      <div className="option relative">C</div>
                        <label className="radio"> <input type="radio"  className="answer"
                        onClick={quizGetValue}
                        id="ans3" 
                        name="labelinput"
                        ref={quizInputref}
                        onChange={quizHandleChange}
                         value="brazil" />
                        <span className="option3">{c}</span>
                        </label>
                    </div>
                    <div className="ans ml-2 d-flex align-items-center align-self-center">
                      <div className="option relative">D</div>
                        <label className="radio"> <input type="radio"  className="answer" 
                        onClick={quizGetValue}
                        ref={quizInputref}
                        onChange={quizHandleChange}
                        name="labelinput" id="ans4" /> 
                        <span className="option4">{d}</span>
                        </label>
                    </div>
                
                 <div className="btn-link right my-3">
                 
                  <button className="btn-main next"
                   ref={quizInputref}
                  onClick={(e)=>checkQuizAns(e)}
                  >submit</button>
                </div>
                            </div>

                        }
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Question
