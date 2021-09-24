import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

function CockNav() {
    return (
        <>
            <nav className='navBar'>
            <div className='container'>
                <div className='d-flex '>
                    <div className='navLogo'>
                        <h4>Logo</h4>
                    </div>
                    <div className='ml-auto'>
                    <ul className='nav-links'>
                        <li>
                            <Link to='/cocktails'>Home</Link>
                        </li>
                        <li>
                            <Link to='/cocktails/about'>About</Link>
                        </li>
                    </ul>  
                    </div>
                </div>
            </div>
        </nav> 
        </>
    )
}

export default CockNav
