import React from 'react'
import '../../App.css'
import {useGlobalContext} from '../../components/context'

function WeadherWidget({name,temp,feels_like,description}) {
    const {convertIndegree} = useGlobalContext()
    return (
        <div className='wead-widget'>
            <div className='text-center mt-40'>
               <h3> {convertIndegree(temp)}°C </h3>
                <div className='fs-14'>
                    Feeels Like {convertIndegree(feels_like)}°C
                </div>
            </div>
            <div className='d-flex mt-40'>
                <div>{name}</div>
                <div className='ml-auto'>{description}</div>
            </div>
        </div>
    )
}

export default WeadherWidget
