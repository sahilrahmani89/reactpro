import React,{useRef,useEffect} from 'react'
import {useGlobalContext} from '../../components/context'
import {Link} from 'react-router-dom'

function HoverContent() {
  const {navHovDisp, navpage: { page, links },navLocation} = useGlobalContext()|| {}
//   
      const container = useRef(null)
        useEffect(() => {
        const hoverMain = container.current
        const { navcenter, navbottom } = navLocation  ||{}
        if(hoverMain){
            hoverMain.style.left = `${navcenter}px`
            hoverMain.style.top = `${navbottom}px`
        }
        }, [page, navLocation, links,navHovDisp])
    return (
        <>
           {
            navHovDisp &&
            <div className=" container hoverMain link-main" ref={container}>
               <div className='row'>
                        {links.map((link, index) => {
                            const { url, icon, label } = link
                            return (
                                <div className='col-lg-6 col-md-4 col-12'key={index}  >
                            <Link to={url}>
                                {icon}
                                {label}
                            </Link>
                            </div>
                            )
                        })}
                       
               </div>
            </div>
        } 
        </>
    )
}

export default HoverContent
