import React from 'react'
import '../../App.css'
import {useGlobalContext} from '../../components/context'
import {FaShoppingCart} from 'react-icons/fa'

function CartNavbar() {
    const {cartQuantity} = useGlobalContext()
    return (
        <>
        <nav className='head'>
            <div className='container'>
                <div className='navContent d-flex'>
                    <div className='cartnavLogo'>
                        <h3 className='white'>Navbar</h3>
                    </div>
                    <div className='ml-auto iconContent relative'>
                        <button className='basket'>
                            <FaShoppingCart/>
                        </button>
                        <div className='numOfBas white'>{cartQuantity}</div>
                    </div>
                </div>
            </div>
        </nav> 
        </>
    )
}

export default CartNavbar
