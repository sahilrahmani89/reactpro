import React from 'react'

function PageList({item}) {
    return (
        <>
           {
               item.map((items,index)=>{
                   const {title} = items
                   return(
                       <article key={index}>
                           <p>{title}</p>
                       </article>
                   )
               })
           } 
        </>
    )
}

export default PageList
