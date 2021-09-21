import React from 'react'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../../components/context'
import '../../App.css'
import {FaTimes} from 'react-icons/fa'


function MobileNav() {
    const {isSidebarOpen,closeSider,navData,navcol} = useGlobalContext()||{}
   
    return (
        <>
           {   isSidebarOpen  ?
            <div className="bg-nav">
            <div className='container'>
                <div className="d-flex mobNavHead">
                    <div className="navbar-header">
                        <h6><Link to="/navbar">Navbar</Link></h6>
                    </div>
                    <div className='btnStyle ml-auto'>
                            <button className='baricon' onClick={closeSider}><FaTimes/></button>
                    </div>
                </div>
                <div className='mobContent'>
                    

                    
                        {
                            navData.map((item,index)=>{
                                const {main,links} = item ||{}
                                return (
                                    <article key={index} className='row'>
                                      <div className='col-12'>
                                         <h4>{main}</h4>
                                      </div>
                                      <div className='sidebar-sublinks row mb-20'>
                                        {links.map((link, index) => {
                                          const {  icon, label } = link
                                          return (
                                            
                                              <div className={`col-sm-${navcol} col-${navcol}`}  key={index}> 
                                               <Link  to='/navbar'>
                                                <span className='mr-1'>{icon}</span>
                                                <span className='fs-16'> {label}</span>
                                               </Link>
                                           </div>
                                            
                                          )
                                        })}
                                      </div>
                                    </article>
                                  )
                            })
                        }
                    
                </div>
            </div>
        </div>  
        :''
      }
        </>
    )
}

export default MobileNav
