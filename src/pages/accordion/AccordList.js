import React,{useState} from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

function AccordList({accordlist,accordIndex}) {
    const [passage,setpassage] =useState(false)
    const {id,title,body} = accordlist;
    return (
        <React.Fragment key ={accordIndex}>
           <div className='accordTitle' key={id}><h6 className='text-primary mb-0'>{title}</h6>
                   <button onClick={()=>setpassage(!passage)} className='btnStyle1'>
                       {
                      passage?<AiOutlineMinus/>:<AiOutlinePlus/>
                       }
                   </button>
             </div>
             <div className={passage?'accordPara':'accordNone'}>
                    {
                        passage&&<p>{body}</p>
                   }
            </div>
        </React.Fragment>
    )
}

export default AccordList
