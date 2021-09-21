import React from 'react'
import { useGlobalContext } from '../../components/context'
import '../../App.css'

function Foodbtn({foodCategory}) {
    const {filterFoodMenu,foodCatAct} = useGlobalContext()
    return (
       <>
        <div className='menu'>
                <ul className="nav nav-tabs list-inline">
                    {
                         foodCategory.map((item,index)=>{
                             return(
                                <li  key={index}  className='nav-item'>
                                     <a href="!#" className={foodCatAct===index?"btn-menu active":"btn-menu"}
                                        onClick={(e)=>filterFoodMenu(e,item,index)}>
                                        {item}
                                    </a>
                                </li>
                             )
                         })
                    }
                </ul>  
        </div>
       </>
    )
}

export default Foodbtn
