import React from 'react'
import {useGlobalContext} from '../../components/context'
import '../../App.css'

function PageNum({pagPostPerPage,totalPost}) {
    const {getPostHandler} = useGlobalContext()
    // 
    const  pageNum =[]
    for(let i=1; i<=Math.ceil(totalPost/pagPostPerPage);i++){
        pageNum.push(i)
    }
    // 
    return (
        <>
           <div className="my-1 justify-content-center ">
                <ul  className='liul text-center align-item-center'>
                    {
                            pageNum.map((item,index)=>{
                                return (<li className="liUi" key={index}>
                                    <a href="!#" onClick={(e)=>getPostHandler(e,item)}>{item}</a>
                                </li>)
                            })
                    }
                </ul>
            </div> 
        </>
    )
}

export default PageNum
