import React from 'react'
import '../../App.css'
import {useGlobalContext} from '../../components/context'
import WeatherForm from './WeatherForm'
import Loader from '../../components/Loader'
import {Link} from 'react-router-dom'
import WeadherWidget  from './WeadherWidget'
import TodoAlert from '../todo/TodoAlert'

let scene ='' ;
 
function Weather() {
    const {weatherData,
        weatherLoad,
        todoalert,
        delhiWeatherData,
        mumbaiWeatherData,
        hydrabadWeatherData,
        chennaiWeatherData,
    } = useGlobalContext() || {}
    const {main,name,weather} = weatherData 
    const {temp,feels_like} = main||{}
    if(weather){
        scene = weather.map((item)=>{
            return(item.description)
        })
    }
   
    if(weatherLoad){
        return(<Loader/>)
    }
    return (
        <div className='my-5 weather-main'>
            <div className='container'>
                <div className='row justify-content-center '>
                    <div className ='col-lg-7 col-md-6 col-12 align-item-center'>
                        <h3 className='text-info text-center'>Weather App</h3>
                        <div className='weather-body'>
                            {
                                todoalert.show && <TodoAlert  />
                            }
                            <WeatherForm/>
                            <div className='searchedCity text-center justify-content-center'>
        
                                {
                                    name && 
                                    <WeadherWidget
                                     name={name} temp= {temp} 
                                     feels_like= {feels_like} 
                                     description ={scene}/>
                                }

                            </div>
                        </div>
                    <div className='row my-3'>
                        <div className='col-lg-6 col-md-6 col-12'>
                            {
                                delhiWeatherData? delhiWeatherData.map((item,index)=>{
                                    const {main,name,weather} = item || {}
                                    const {temp,feels_like} = main||{}
                                    let scene
                                    if(weather){
                                         scene = weather.map((item)=>{
                                         return(item.description)
                                     })
                                    }
                                    
                                    return(
                                            <WeadherWidget key={index} name={name}
                                            temp={temp}
                                            feels_like={feels_like}
                                            description={scene}

                                            /> 
                                    )
                                }):''
                            }
                            
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                        {
                                mumbaiWeatherData? mumbaiWeatherData.map((item,index)=>{
                                    const {main,name,weather} = item || {}
                                    const {temp,feels_like} = main||{}
                                    let scene
                                    if(weather){
                                         scene = weather.map((item)=>{
                                         return(item.description)
                                     })
                                    }
                                    
                                    return(
                                            <WeadherWidget key={index} name={name}
                                            temp={temp}
                                            feels_like={feels_like}
                                            description={scene}

                                            /> 
                                    )
                                }):''
                            }
                            
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                        {
                                hydrabadWeatherData? hydrabadWeatherData.map((item,index)=>{
                                    const {main,name,weather} = item || {}
                                    const {temp,feels_like} = main||{}
                                    let scene
                                    if(weather){
                                         scene = weather.map((item)=>{
                                         return(item.description)
                                     })
                                    }
                                    
                                    return(
                                            <WeadherWidget key={index} name={name}
                                            temp={temp}
                                            feels_like={feels_like}
                                            description={scene}

                                            /> 
                                    )
                                }):''
                            }
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                        {
                               chennaiWeatherData? chennaiWeatherData.map((item,index)=>{
                                    const {main,name,weather} = item || {}
                                    const {temp,feels_like} = main||{}
                                    let scene
                                    if(weather){
                                         scene = weather.map((item)=>{
                                         return(item.description)
                                     })
                                    }
                                    
                                    return(
                                            <WeadherWidget key={index} name={name}
                                            temp={temp}
                                            feels_like={feels_like}
                                            description={scene}

                                            /> 
                                    )
                                }):''
                            }
                        </div>
                     </div>
                    </div>
                </div>
                <div className='row justify-content-center '>
                    <div className='col-lg-4 col-12 text-center align-item-center'>
                        <Link to ='/' className='btn btn-info'>Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
