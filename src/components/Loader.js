import React from 'react'
import '../App.css'

function Loader() {
    return (
        <div className='loaderBody '>
        <div className='conatiner my-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-12 text-center align-item-center'>
                <div className="shadow">
                    <div className="loader">
                        <div className="mask"></div>
                    </div>​
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Loader
