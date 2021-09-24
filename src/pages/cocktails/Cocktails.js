import React from 'react'
import {useGlobalContext} from '../../components/context'
import Loader from '../../components/Loader'
import CockList from './CockList'
import '../../App.css'

function Cocktails() {
    const {cockTailLoad,cockTailPost} = useGlobalContext()
    if(cockTailLoad){
        return(<Loader/>)
    }
    if(cockTailLoad.length<1){
        return(
        <div className='container my-5'>
            <div className='row jsutify-content-center'>
                <div className='col-lg-4 col-12 align-item-center text-center'>
                    <h1 className='text-info'>Oops..</h1>
                </div>
            </div>
        </div>
        )
    }
    return (
        <>
        <div className='container my-5'>
            <div className='row'>
                {
                   cockTailPost.map((item)=>{
                        return (
                            <div className='col-lg-6 col-md-6 col-12' key={item.id}>
                                   <CockList  {...item}></CockList>
                            </div>)
                    })
                }
            </div>
        </div>

        </>
    )
}

export default Cocktails
