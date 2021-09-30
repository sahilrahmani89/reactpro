import React from 'react'
import '../../App.css'
import {useGlobalContext} from '../../components/context'

function WeatherForm() {
    const {searchCityValue,weatherHandler,setCityName} = useGlobalContext()
    return (
        <>
            <form className='my-3'>
                <input  type='text'
                className='form-control w-100 my-2' 
                onChange ={e=>setCityName(e.target.value)}
                placeholder='Search City'
                ref={searchCityValue}
                ></input>
                <button className='btn btn-info'
                onClick={weatherHandler}>
                Search
                </button>
            </form>
        </>
    )
}

export default WeatherForm
