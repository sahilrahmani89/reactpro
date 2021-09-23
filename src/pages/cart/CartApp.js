import React from 'react'
import {useGlobalContext} from '../../components/context'
import Loader from '../../components/Loader'
import Cart from './Cart'
import CartNavbar from './CartNavbar'

function CartApp() {
    const {loading} = useGlobalContext()
    if(loading){
        return(<Loader/>)
    }
    return (
        <>
            <CartNavbar/>
            <Cart/>
        </>
    )
}

export default CartApp
