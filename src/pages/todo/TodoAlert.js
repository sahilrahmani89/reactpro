import React,{useEffect} from 'react'
import '../../App.css'
import {useGlobalContext} from '../../components/context'

function TodoAlert() {
    const{todoShowAlert,todoList,todoalert} = useGlobalContext()
    const {cName,msg} = todoalert ||{}
    useEffect(()=>{
        let removeAlert = setTimeout(()=>{
            todoShowAlert()
        },3000)
        return ()=> clearTimeout(removeAlert)   
    },[todoList,todoShowAlert,todoalert])
    return (
        <div  className={`alert alert-${cName}`}>{msg} 
        </div>
    )
}

export default TodoAlert
