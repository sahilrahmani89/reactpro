import React from 'react'
import  {useGlobalContext} from '../../components/context'
// 
let scene = ''
// 
function ChennaiWeather() {
    const {chennaiWeatherData,convertIndegree} = useGlobalContext()
    const {main,name,weather} = chennaiWeatherData || {}
    const {temp,feels_like} = main||{}
    // 
    if(weather){
        scene = weather.map((item)=>{
            return(item.description)
        })
    }
    // 
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
            <div className='ml-auto'>{scene}</div>
        </div>
    </div>
    )
}

export default ChennaiWeather
