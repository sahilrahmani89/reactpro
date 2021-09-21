import React from 'react'
import TodoAlert from './TodoAlert'
import TodoList from './TodoList'
import '../../App.css'
import {useGlobalContext} from '../../components/context'
import {Link} from 'react-router-dom'

function Todo() {
    const {settodofname,
        todofname,
        todoEventHandler,
        todoalert,
        todoClrList,
        todoList,
        todoEdit
    } =useGlobalContext()
    // 
    return (
        <>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className="col-lg-8 col-md-8 col-12 align-item-center">
                    <div className="groce-header">
                        <h2 className='pc'>Grocery List</h2>
                    </div>
                    <div className="groce-form">
                        {
                            todoalert.show && <TodoAlert/>
                        }
                        <form>
                            <input type="text" placeholder="e.g. Honey" value={todofname} 
                            onChange={(e)=>settodofname(e.target.value)} 
                             className="form-control inputForm"/>
                            <button className="btn btn-primary" onClick={todoEventHandler}>
                                {
                                   todoEdit?'Edit':'Add'
                                }
                            </button>
                        </form>
                    </div>
                    
                    {todoList.length>0 &&(
                        <div className="groceryList">
                            <ul className="growUl">
                                {
                                    todoList.map((item,index)=>{
                                       return(<TodoList items= {item} key={index}/>)
                                    })
                                }
                            </ul>
                           
                            <div className="clr-btn mx-auto text-center">
                            <button className="btn btn-primary" onClick={todoClrList}>Clear List</button>
                            </div>
                            </div>
                    )}
                    
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-12 align-item-center text-center my-3'>
                    <Link to='/' className='btn btn-info'>Home</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo
