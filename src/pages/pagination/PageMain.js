import React,{useEffect} from 'react'
import {useGlobalContext} from '../../components/context'
import Loader from '../../components/Loader'
import PageList from './PageList'
import PageNum from './PageNum'
import {Link} from 'react-router-dom'
// 
function PageMain() {

    const {
        fetchPaginate,
        tourload,
        pagPostPerPage,
        pagPost,
        pagCurrPage
        } = useGlobalContext()
    // 
    useEffect(() => {
        fetchPaginate()
    }, [fetchPaginate])
    // 
    const indexOfLastPost =  pagPostPerPage * pagCurrPage
    const indexOfFirstPost = indexOfLastPost - pagPostPerPage
    const pagCurrPost = pagPost.slice(indexOfFirstPost,indexOfLastPost)
    // 
    if(tourload){
        return <Loader/>
    }
    // 
    return (
        <>
         <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-12">
                      <div className="justify-content-center text-center">
                          <PageList item={pagCurrPost}/>
                          
                      </div>
                      <PageNum pagPostPerPage={pagPostPerPage}
                       totalPost={pagPost.length}
                       />
                  </div>
              </div>
              <div className='row justify-content-center my-5'>
                  <div className='col-lg-4 col-12 align-item-center col-12 text-center'>
                        <Link to='/' className='btn btn-info'>Home</Link>
                  </div>
              </div>
          </div> 
        </>
    )
}

export default PageMain
