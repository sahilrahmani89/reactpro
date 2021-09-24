import React from 'react'
import {Link} from 'react-router-dom'

function CockAbout() {
    return (
        <>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-7 col-12 text-center align-item-center'>
                    <h1 className='text-primary'>About Section</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
									quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
									consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
									cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
									proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className='row my-5 justify-content-center'>
                <div className='col-lg-4 col-12 align-item-center text-center'>
                    <Link to ='/cocktails' className='btn btn-info'>Home</Link>
                </div>
            </div>
        </div> 
        </>
    )
}

export default CockAbout
