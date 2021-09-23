import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
// 

function Main() {
    return (
        <div className='container'>
            <div className='row '>
                <div className='col-lg-6 col-12'>
                    <div className='contentofmain linksmain'>
                        <Link to='/accordion'>Accordion</Link>
                    </div>
                </div>  
                <div className='col-lg-6 col-12'>
                    <div className='toursLink linksmain'>
                        <Link to='/tour'>Tours</Link>
                    </div>
                </div>
                <div className='col-lg-6 col-12'>
                    <div className='foodLink linksmain'>
                        <Link to ='/foodmenu'>FoodMenu</Link>
                    </div>
                </div>
                <div className='col-lg-6 col-12'>    
                    <div className='todoLink linksmain'>
                        <Link to='/todo'>Todo</Link>
                    </div>
                </div>    
                <div className='col-lg-6 col-12'>
                    <div className='paginationlink linksmain'>
                        <Link to ='/pagination'>pagination</Link>
                    </div>
                </div>
                <div className='col-lg-6 col-12'>   
                    <div className='loremipsumlink linksmain'>
                        <Link to ='/loremipsum'>LoremIpsum</Link>
                    </div>
                </div>   
                <div className='col-lg-6 col-12'> 
                    <div className='navbarlink linksmain'>
                        <Link to='/navbar'>Navbar</Link>
                    </div>
                </div>    
                <div className='col-lg-6 col-12'> 
                    <div className='cartlink linksmain'>
                        <Link to='/cart'>Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
