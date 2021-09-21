import React,{useState} from 'react'
import '../../App.css'
import {useGlobalContext} from '../../components/context'
// 
function TourList({tours}) {
    const {removeTour} = useGlobalContext()
    const {id,img,body,price,title} =tours
    const [read,setread]= useState(false)
    // eventHandler
    const eventHandler = (e)=>{
        e.preventDefault()
        setread(!read)
    }
    // 
    return (
        <div className='col-lg-6 col-md-8 col-12'>
            
            <div className='tourCompo'>
                <article key={id} className='articleBody'>
                    <div className='imgofart'>
                        <img src={img} alt={title}/>
                    </div>
                     <div className='d-flex artBody'>
                         <h6 className='pc'>{title}</h6>
                        <span  className='ml-auto sc'>${price}</span>
                    </div>   
                    <p>{read?body:`${body.substring(0,90)}...`}
                        <a href='!#' onClick=
                        {eventHandler}>
                            { read?'show less':'read more'}
                        </a>
                    </p>
                    <div className='text-center my-1'>
                        <button className='btn btn-main btn-block' onClick={()=>removeTour(id)}>Not intersted</button>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default TourList
