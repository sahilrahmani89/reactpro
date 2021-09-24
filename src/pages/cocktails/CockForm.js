import React from 'react'
import '../../App.css'
import {useGlobalContext} from '../../components/context'

function CockForm() {
    const {tailHandler,searchCocktail,searchValue} = useGlobalContext()
    return (
        <>
        <div className='container my-5 '>
            <div className='row justify-content-center'>
                <div className=' col-lg-7 col-12 align-item-center text-center'>
                    <form onSubmit={tailHandler}>
                        <input type='text' 
                        className='form-control formArea'
                        onChange={searchCocktail}
                        ref={searchValue}
                        />
                    </form>
                </div>
            </div>
        </div>  
        </>
    )
}

export default CockForm
