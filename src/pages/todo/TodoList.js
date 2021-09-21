import React from 'react'
import '../../App.css'
import {useGlobalContext} from '../../components/context'
import {MdEdit,MdDelete} from 'react-icons/md'
// 
function TodoList({items}) {
    // 
    const {tododltItem,todoeditList} = useGlobalContext()
    // 
    const {id,todoTitle} = items||{}
    return (
        <>

                    <li key={id} className="gList">{todoTitle} <span className="list-icon">
                        <a href="!#" 
                        className="mr-1"
                        onClick={(e)=>todoeditList(e,id)}>
                           <MdEdit/>
                        </a>
                        <a href="!#" onClick={(e)=>tododltItem(e,id)}>
                        <MdDelete/>
                        </a>
                        </span>
                    </li>

        </>
    )
}

export default TodoList
