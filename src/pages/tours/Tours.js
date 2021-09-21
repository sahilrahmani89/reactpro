import React,{useEffect} from 'react'
import {useGlobalContext} from '../../components/context'
import TourList from './TourList'
import {Link} from 'react-router-dom'
import Loader from '../../components/Loader'

function Tours() {
    const {tour,tourload,fetchTour} = useGlobalContext()
    // 
    useEffect(() => {
        fetchTour()
    }, [fetchTour])
    //  
    if(tourload){
        return <Loader/>
    }  
    // 
    if(tour.length===0){
        return(
        <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-12'>
                <div className='mx-auto text-center my-5'>
                 <button className='btn btn-main ' onClick={fetchTour}>Refresh</button>
                </div>
              </div>
            </div>
        </div>
        )
    }
    // 
    return (
        <>
           <div className='container my-5'>
               <div className='row justify-content-center'>
                  <div className='col-12 text-center'>
                      <div className='tourTitle'>
                          <h3>Tours</h3>
                      </div>
                  </div>
               </div>
               <div className='row'>
                   {
                       tour.map((item,index)=>{
                           return(<TourList  key={index} tours={item}/>)
                       })
                   }
               </div>
               <div className='row justify-content-center'>
                   <div className='col-lg-4 col-12 text-center'>
                       <Link to='/' className='btn btn-info'>Home</Link>
                   </div>
               </div>
           </div> 
        </>
    )
}

export default Tours
