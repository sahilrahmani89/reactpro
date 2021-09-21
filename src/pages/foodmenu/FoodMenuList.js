import React from 'react'
import '../../App.css'
// 
function FoodMenuList({list}) {
    const {id,img,title,category,body} = list||{}
    return (
        <div className='col-lg-4 col-md-6 col-12' key={id}>
             <article  className='itembody'>
                            <img src ={img} alt ={title} className='img-fluid'/>
                            <div className="i-cont">
                                <div className='d-flex'>
                                    <h5 className="pc">{title}</h5>
                                    <h6 className='ml-auto'>{category}</h6> 
                                </div>
                            <p>{body}</p>
                            </div>
             </article>
        </div>
    )
}

export default FoodMenuList
