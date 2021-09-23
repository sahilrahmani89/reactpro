const reducer =(state,action)=>{
    if(action.type==='CLEAR_CART'){
        return{...state,cartPost:[]}
    }
    if(action.type==='LOADING'){
        return{...state,loading:true}
    }
    if(action.type==='DISPLAY_CART'){
        return{...state,loading:false,cartPost:action.load}
    }
    if(action.type==='LOADFALSE'){
        return{...state,loading:false}
    }
    if(action.type==='REMOVE_CART'){
        return{...state,
            cartPost:state.cartPost.filter((item)=>item.id !== action.load)}
    }
    if(action.type==='TOGGLE_AMOUNT'){
        let newPost = state.cartPost
        .map((item)=>{
            if(item.id===action.load.id){
                if(action.load.type==='inccart'){
                    return{...item,quantity:item.quantity+1}
                }
                if(action.load.type==='deccart'){
                    return{...item,quantity:item.quantity-1}
                }
            }
            return item
        })
        .filter((item)=>item.quantity!==-1)
        return{...state,cartPost:newPost}
    }
    if(action.type==='CART_QUANTITY'){
        let {cartTotal , cartQuantity} = state.cartPost.reduce(
            (postTotal,postItem) =>{
                const { price, quantity } = postItem
                const itemTotal = price * quantity
                postTotal.cartTotal += itemTotal
                postTotal.cartQuantity += quantity
                return postTotal
            },{cartTotal:0,cartQuantity:0}
        )
        cartTotal = parseFloat(cartTotal.toFixed(2))
        return {...state, cartTotal, cartQuantity}  
    }
    throw new Error('no matching action type')
}
export default reducer