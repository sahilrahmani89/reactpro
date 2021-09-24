import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

function CockList({id,image,name,info,glass}) {
    return (
        <>
            <article key={id} className='d-flex my-2 cocklist' >
                <div className='img-container'>
                    <img src={image} alt={name} />
                </div>
                <div className='cocktail-footer'>
                    <div className='cocktail-footer-style'>
                        <h3>{name}</h3>
                        <h4>{glass}</h4>
                        <p>{info}</p>
                        <Link to={`/cocktails/${id}`} className='btn btn-primary btn-details'>
                        details
                        </Link>
                    </div>
                </div>
            </article> 
        </>
    )
}

export default CockList
