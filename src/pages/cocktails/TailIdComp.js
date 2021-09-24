import React,{useState,useEffect,useCallback} from 'react'
import {Link,useParams} from 'react-router-dom'
import Loader from '../../components/Loader'
import '../../App.css'


function TailIdComp() {
    const [tailCompPost, settailCompPost] = useState() // tailcomponent post
    const [tailCompLoad, settailCompLoad] = useState(false) //tailcomponent load bool
    const { id } = useParams() //tailcomponent id
    // fetchtail comp data 
    const fetchTailCompData = useCallback(
        async() => {
            settailCompLoad(true)
           try{
                const response = await fetch( `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                const data = await response.json()
                if (data.drinks) {
                    const {
                      strDrink: name,
                      strDrinkThumb: image,
                      strAlcoholic: info,
                      strCategory: category,
                      strGlass: glass,
                      strInstructions: instructions,
                      strIngredient1,
                      strIngredient2,
                      strIngredient3,
                      strIngredient4,
                      strIngredient5,
                    } = data.drinks[0]
                    const ingredients = [
                      strIngredient1,
                      strIngredient2,
                      strIngredient3,
                      strIngredient4,
                      strIngredient5,
                    ] 
                  
                    const newCocktail = {
                      name,
                      image,
                      info,
                      category,
                      glass,
                      instructions,
                      ingredients,
                    } 
                    settailCompPost(newCocktail)
                    settailCompLoad(false)
                  } else {
                    settailCompPost(null)
                    settailCompLoad(false)
                  }
           } 
           catch(error){
               console.log(error)
               settailCompLoad(false)
           }
        },
        [id],
    )
    // fetchTailComp data end
    useEffect(() => {
        fetchTailCompData()
    }, [fetchTailCompData])
    //  
        if(tailCompLoad){
            return (<Loader/>)
        }
        if(!tailCompPost){
            return(
                <div className='container'>
                    <div className='row justify-content-center my-5'>
                        <div className='col-lg-4 col-12 align-item-center'>
                               <h4 className='text-warning'>Nothing To Display</h4>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            const {
                name,
                image,
                category,
                info,
                glass,
                instructions,
                ingredients,
              } = tailCompPost
    return (
        <>
        <div className='container'>
            <div className='row justify-content-center'>
             <div className='col-lg-5  col-md- 6 col-12 align-item-center'>
              <section className=' cocktail-section'>
                    
                    <h2 className='justify-content-center text-center '>{name}</h2>
                    <div className='drink'>
                    <img src={image} alt={name}></img>
                <div className='drink-info'>
                    <div className='drink-info-style'>
                    <p>
                <span className='drink-data'>name :</span> {name}
                </p>
                <p>
                <span className='drink-data'>category :</span> {category}
                </p>
                <p>
                <span className='drink-data'>info :</span> {info}
                </p>
                <p>
                <span className='drink-data'>glass :</span> {glass}
                </p>
                <p>
                <span className='drink-data'>instructons :</span> {instructions}
                </p>
                <p>
                <span className='drink-data'>ingredients :</span>
                {ingredients.map((item, index) => {
                    return item ? <span key={index}> {item}</span> : null
                })}
                </p>
                    </div>
                </div>
            </div>
        </section>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-12 align-item-center text-center'>
                        <Link to='/cocktails' className='btn btn-primary'>
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
 }
}

export default TailIdComp
