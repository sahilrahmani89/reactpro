import React from 'react'
import {useGlobalContext} from '../../components/context'
import '../../App.css'
import {Link} from 'react-router-dom'
import {MdExpandLess,MdExpandMore} from 'react-icons/md'

function Cart() {
    const {cartPost,
        cartRemove,
        cartToggleAmount,
        cartTotal,
        clearCart} = useGlobalContext()
        // 
    if(cartPost.length===0){
        return(
        <div className='container my-5'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-12'>
                    <h4 className='cartEmpty'>
                        Cart is empty
                    </h4>
                </div>
            </div>
       </div>
     )
    }
    return (
        <>
           
           <div className='container my-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-7 col-12'>
                        {
                            cartPost.map((item)=>{
                                const {id,name,img,price,quantity}= item || {}
                                return(
                                    <article key={id} className='d-flex justify-content-start my-2'>
                                        <div className='imgName'>
                                            <img src={img} className='cartImg img-fluid' alt={name}/>
                                        </div>
                                        <div className='nameContent mr-1'>
                                                <h4>{name}</h4>
                                                <p>${price}</p>
                                               <button className='noBtn btn-remove' onClick={()=>cartRemove(id)}>Remove</button>
                                        </div>
                                        <div className='ml-auto btnFnc'>
                                            <button className='noBtn inc'
                                             onClick={()=>cartToggleAmount(id,'inccart')}><MdExpandLess/></button>
                                            <p className='vm'>{quantity}</p>
                                            <button className='noBtn dec'
                                            onClick={()=>cartToggleAmount(id,'deccart')}><MdExpandMore/></button>
                                        </div>
                                    </article>
                                )
                            })
                        }
                        <div className='amount'>
                            <p>total Amount ${cartTotal}</p>

                        </div>
                        <div>
                            <button className='btn btn-primary outline' onClick={clearCart}>Clear Cart</button>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center my-5'>
                    <div className='col-lg-4 col-12 text-center align-item-center'>
                            <Link to ='/' className='btn btn-info'>Home</Link>
                    </div>
                </div>
           </div> 
        </>
    )
}

export default Cart
