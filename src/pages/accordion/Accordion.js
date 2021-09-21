import React  from 'react'
import {useGlobalContext} from '../../components/context'
import AccordList from './AccordList'
import {Link} from 'react-router-dom'
// 
function Accordion() {
    const {accordList} = useGlobalContext()
    return (
        <div className='container'>
           <div className='row justify-content-center '>
               <div className='col-lg-7 col-12 align-item-center'>
                    <div className='my-5 '>
                        <div className='text-center my-2'><h1>FAQ</h1></div>
                        {
                            accordList.map((item,index)=>{
                                return(
                                <AccordList accordlist={item} accordIndex={index} key={index}/>
                                )
                            })
                        }
                        <div className='text-center justify-content-center'>
                            <Link to='/' className='btn btn-primary '>Home</Link>
                        </div>
                    </div>
               </div>
            </div> 
        </div>
    )
}

export default Accordion
