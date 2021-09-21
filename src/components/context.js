import React ,{useState,useEffect,useContext,useCallback} from 'react'
import AccordData from '../pages/accordion/AccordData'
import {FoodData} from '../pages/foodmenu/FoodData'
import ParaData from '../pages/loremipsum/ParaData'
import {navdata} from '../pages/navbar/navdata'
// 
const AppContext = React.createContext()
// 
const AllCategory = ['All',...new Set(FoodData.map((item)=>item.category))]
// 
const todogetLocalStorage =()=>{
    let list =localStorage.getItem('list')
    if(list){
        return JSON.parse(localStorage.getItem('list'))
    }
    else{
        return []
    }
}
// 
const AppProvider = ({children}) =>{
    const [accordList, setaccordList] = useState(AccordData) //accordion 
    const [tourload, settourload] = useState(false) //tourloading state
    const [tour, settour] = useState([]) //tour array
    const [foodPost, setfoodPost] = useState(FoodData) //foodmenu post
    const [foodCategory, setfoodCategory] = useState(AllCategory) // foodmenu category button state
    const [foodCatAct, setfoodCatAct] = useState(0) //foodmenu categories index state
    const [todofname, settodofname] = useState('') //todo form input state
    const [todoalert, settodoalert] = useState({show:false,msg:'',cName:''})  //todo alert state
    const [todoList, settodoList] = useState(todogetLocalStorage()) // todo state for mapping form added data
    const [todoEdit, settodoEdit] = useState(false) // todo edit state
    const [todoEditNum, settodoEditNum] = useState(null) //todo edit num state
    const [pagPost, setpagPost] = useState([]) //pagination
    const [pagPostPerPage, setpagPostPerPage] = useState(10) //pagination post quantity
    const [pagCurrPage,setpagCurrPage] = useState(1)  // page current page
    const [lordigit, setlordigit] = useState(0) //loremipsum
    const [lorpara, setlorpara] = useState([]) //loremipsum
    const [navData, setnavData] = useState(navdata) // navbar
    const [isSidebarOpen,setisSidebarOpen] = useState(false) //navbar
    const [navHovDisp, setnavHovDisp] = useState(false) //navbar
    const [navLocation, setnavLocation] = useState({}) //navbar
    const [navpage, setnavpage] = useState({ page: '', links: [] }); //navbar
    const [navcol,setnavcol] =useState(6) //navbar
    // fetch tour 
    const fetchTour = useCallback( async()=>{
        settourload(true)
        try{
            const response = await fetch('https://my-json-server.typicode.com/sahilrahmani89/dataapi/db')
            const tourData = await response.json()
            const tours = tourData.users;
            settour(tours)
            settourload(false)
        }
        catch(error){
            console.log(error)
            settourload(false)
        }
    },[])
    // fetch tour end
    // fetchpaginate
    const fetchPaginate =useCallback(async()=>{
             settourload(true)
             try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const datapage = await response.json()
                setpagPost(datapage)
                settourload(false)
             }
             catch(error){
                 console.log(error)
                 settourload(false)
             }
    },[])
    // fetchPaginate end
    // filter foodmenu
    const filterFoodMenu =(e,item,index) =>{
        e.preventDefault()
        if(item==='All'){
            setfoodPost(FoodData)
            setfoodCatAct(0)
            return;
        }
        let filterItem = FoodData.filter((items)=>items.category===item)
        setfoodPost(filterItem)
        setfoodCatAct(index)
    }
    // filter foodmenu end

    // removeTour
    const removeTour =(id)=>{
        let newTour =tour.filter((item)=>item.id!==id)
        settour(newTour)
    }
    // removeTour end

    // todo form eventHandler
    const todoEventHandler =(e)=>{
        e.preventDefault()
        if(!todofname){
            todoShowAlert(true,'Fill up the input','danger')
        }
        else if(todofname && todoEdit){
            let newList = todoList.map((item)=>{
                if(item.id===todoEditNum){
                    return {...item,todoTitle:todofname}
                }
                return item
            })
            settodoList(newList)
            todoShowAlert(true,'Edited','info')
            settodoEditNum(null)
            settodofname('')
            settodoEdit(false)
        }
        else{
            settodoEdit(false)
            let newList = {id:new Date().getTime().toString(),todoTitle:todofname}
            settodoList([...todoList,newList])
            settodofname('')
            todoShowAlert(true,'List Added','success')
        }
    }
    // todo form eventHandler end
    // todoalert function
    const todoShowAlert = (show=false,msg='',cName='')=>{
        settodoalert({show,msg,cName})
    }
    // todoalert funtion end
    // todo clearAll list 
    const todoClrList=()=>{
        settodoList([])
        todoShowAlert(true,'All List Clear','info')
    }
    // todo clearAll list form
    // todo dlt item
    const tododltItem=(e,id)=>{
        e.preventDefault()
        let newList = todoList.filter((item)=>item.id!==id)
        settodoList(newList)
        todoShowAlert(true,'Item Deleted','danger')
    }
    // todo dlt item end
    // todo edit list
    const todoeditList=(e,id)=>{
        e.preventDefault()
        settodoEdit(true)
        let clickedId = todoList.find((item)=>item.id===id)
        todoShowAlert(true,'Editing','warning')
        settodofname(clickedId.todoTitle)
        settodoEditNum(id)
    }
    // todo edit list item
    // 
    const getPostHandler =(e,item)=>{
        e.preventDefault()
        setpagCurrPage(item)
    }
    // 
    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(todoList))
    }, [todoList])
    // loremeventhandler
        const loremeventHandler =(e)=>{
            e.preventDefault()
            let newDigit = parseInt(lordigit)
            if(newDigit>9){
                newDigit=9;
            }
            if(newDigit<0){
                newDigit=0;
            }
            setlorpara(ParaData.slice(0,newDigit))
        }
    // loremeventhandler end
    // opensidebar navbar
    const openSidebar =()=>{
        setisSidebarOpen(true)
    }
    // opensidbar navbar end
    // close sibar navbar
    const closeSider =()=>{
        setisSidebarOpen(false)
    }
    // close sidebar navbar end
    // navbar handlesubmenu 
    const navHandlesubMenu =(e)=>{
        if(!e.target.classList.contains('link-main')){
            navRemoveContent()
        }
    }
    // navbar handle submenu end
    //  navbar navremovecontent
    const navRemoveContent =()=>{
        setnavHovDisp(false)
    }
    // navbar navremovecontent
    // navbar display submenu
    const navdispSub=(e,index)=>{
        const tempBtn = e.target.getBoundingClientRect()
        const navcenter = (tempBtn.left+tempBtn.right)/2
        const navbottom = tempBtn.bottom
        navShowContent(index,{navcenter,navbottom});
    }
    // navbar display submenu end
    // navshowcontent navbar
    const navShowContent =(navIndex,cordinates)=>{
        let newPage = navData.find((item,index)=>index===navIndex)
        setnavpage(newPage)
        setnavLocation(cordinates)
        setnavHovDisp(true)
    }
    // navshowcontent navbar end
    return(
        <AppContext.Provider
         value={{
            accordList,
            tour,
            tourload,
            removeTour,
            fetchTour,
            foodPost,
            foodCategory,
            filterFoodMenu,
            foodCatAct,
            todoalert,
            todofname,
            settodofname,
            todoEventHandler,
            todoClrList,
            todoShowAlert,
            todoList,
            todoEdit,
            tododltItem,
            todoeditList,
            fetchPaginate,
            pagPostPerPage,
            pagPost,
            getPostHandler,
            pagCurrPage,
            lordigit,
            setlordigit,
            lorpara,
            loremeventHandler,
            navData,
            openSidebar,
            navHandlesubMenu,
            isSidebarOpen,
            closeSider,
            navHovDisp,
            navLocation,
            navdispSub,
            navpage,
            navcol,
        }}>
            {children}
        </AppContext.Provider>
    )
}
// 
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
// 
export {AppContext,AppProvider}