import React from 'react'
import {useGlobalContext} from '../../components/context'
import '../../App.css'
import {Link} from 'react-router-dom'
// 
function ParaMain() {
    const {lordigit,setlordigit,lorpara,loremeventHandler} = useGlobalContext()
    return (
        <>
           <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-7 col-md-8 col-12'>
                    <div className='paraheader'>
                        <h6 className='text-primary my-5'>
                            Select Number of para </h6>
                            <div className='formpara'>
                                <form className='form-control' onSubmit={loremeventHandler}>
                                    <input type='number' value={lordigit}
                                     onChange={(e)=>setlordigit(e.target.value)}
                                      className='form-control input mb5'/>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </form>
                            </div>
                            <div className='paraafter'>
                                {
                                    lorpara.map((item,index)=>{
                                        return <p key={index}>{item}</p>
                                    })
                                }
                           </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-12 text-center align-item-center'>
                    <Link to='/' className='btn btn-info'>Home</Link>
                </div>
            </div>
           </div> 
        </>
    )
}

export default ParaMain
