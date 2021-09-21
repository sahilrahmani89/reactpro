import React from 'react'
import {useGlobalContext} from '../../components/context'
import Foodbtn from './Foodbtn'
import FoodMenuList from './FoodMenuList'
import '../../App.css'
import {Link} from 'react-router-dom'


function FoodMenu() {
    const {foodPost,foodCategory} = useGlobalContext()
    return (
        <>
           
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-12 col-md-12 col-12 align-item-centers'>
                    <div className='fheader my-5 text-center justify-content-center'>
                       <h3 className="pc">Food Menu</h3>
                    </div>
                    <div className="my-3">
                        <Foodbtn foodCategory={foodCategory} />
                    </div>
                       
                </div>
            </div>
        </div>
        <div className='container'>
                <div className='row'>
                    {
                        foodPost.map((item,index)=>{
                            return(<FoodMenuList key={index} list={item}/>)
                        })
                    }
                </div>
        </div>
         <div className='container'>
                    <div className='row justifyu-content-center'>
                        <div className='col-lg-4 col-12 text-center'>
                            <Link to='/' className='btn btn-info'>Home</Link>
                        </div>
                    </div>
         </div>
        </>
    )
}

export default FoodMenu
