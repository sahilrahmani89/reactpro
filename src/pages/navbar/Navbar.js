import React from 'react'
import {useGlobalContext} from '../../components/context'
import {MdArrowDropDown} from 'react-icons/md'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../../App.css'

function Navbar() {
    const {navData,openSidebar,navHandlesubMenu,isSidebarOpen,navdispSub} = useGlobalContext();
    const prevRef =(e)=>{
        e.preventDefault()
    }
    return (
        <>
           {
           !isSidebarOpen  &&
          <nav className='bg-nav' onMouseOver={navHandlesubMenu}>
            <div className='container navItem'>
                <div className="navbar-hseader">
                    <h3><Link to="/navbar">Navbar</Link></h3>
                </div>
                <div className="ml-auto ">
                    <ul className='navUl'>
                        {
                            navData.map((item,index)=>{
                                return( <li key={index} className='navList'
                                onMouseOver={(e)=>navdispSub(e,index)}>
                                <a href="!#"  onClick={(e)=>prevRef(e)}  
                                className="link-main">
                                    {item.main}
                                    <span><MdArrowDropDown/></span>
                                </a>
                             </li>)
                               
                            })
                        }
                    </ul>
                        <div className='btnStyle'>
                            <button className='baricon' onClick={openSidebar}><FaBars/></button>
                        </div>
                </div>
                
            </div>
          </nav> 
          } 
        </>
    )
}

export default Navbar
