import React ,{useState,useEffect,useContext,useCallback,useReducer} from 'react'
import AccordData from '../pages/accordion/AccordData'
import {FoodData} from '../pages/foodmenu/FoodData'
import ParaData from '../pages/loremipsum/ParaData'
import {navdata} from '../pages/navbar/navdata'
import reducer from './reducer'
import {quizData} from '../pages/quiz/quizData'
// 
const weatherUrlBase = "http://api.openweathermap.org/data/2.5/"
// 
const cartUrl = 'https://my-json-server.typicode.com/sahilrahmani89/cartapi/db'
// 
const AppContext = React.createContext()
// 
const AllCategory = ['All',...new Set(FoodData.map((item)=>item.category))]
// 
let ansVar ;
// 
const ctUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
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
const initialState ={
    loading: false,
    cartPost: [],
    cartTotal: 0, //total product price
    cartQuantity: 0, // num of cart added
}
// 
// 
const AppProvider = ({children}) =>{
    const searchValue = React.useRef('')
    const searchCityValue = React.useRef('')
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
    const [state,dispatch] = useReducer(reducer,initialState) //reducer hooks cart
    const [searchTailsForm, setsearchTailsForm] = useState('a') // cocktails form search state
    const [cockTailLoad, setcockTailLoad] = useState(false) //cocktails load bool
    const [cockTailPost, setcockTailPost] = useState([]) // cocktails post 
    const [quizName,setquizName] = useState('') //quiz
    const [quizFormCon,setquizFormCon] = useState(true) //quiz boolean
    const [questions, setquestions] = useState(quizData) // quiz data state management
    const [showQuestion, setshowQuestion] = useState(false) //show question
    const [questionIndex,setquestionIndex] = useState(0) //question index
    const [score, setscore] = useState(0) //score
    const [quizResult,setquizResult] = useState(false) //quizresult
    const [CityName, setCityName] = useState('') //weather search city
    const [weatherLoad,setweatherLoad] = useState(false) //weather loading boolean
    const[weatherData,setweatherData] = useState([]) //weather data
    const [delhiWeatherData,setdelhiWeatherData] = useState([])  //delhi weather
    const [mumbaiWeatherData,setmumbaiWeatherData] = useState([]) //mumbai weather
    const [chennaiWeatherData,setchennaiWeatherData] = useState([]) //chennai weather
    const [hydrabadWeatherData,sethydrabadWeatherData] = useState([]) //hydrabad weather
    // 
    const emptyField = React.useRef()
    const quizInputref = React.useRef()
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
    // fetchCockTailData
        const fetchCockTailData = useCallback(
            async() => {
                setcockTailLoad(true)
                try{
                    const response = await fetch(`${ctUrl}${searchTailsForm}`) 
                    const data = await response.json()
                    
                    let {drinks} = data
                    if(drinks){
                        const newDrinks = drinks.map((item)=>{
                            const{
                                idDrink,
                                strDrink,
                                strDrinkThumb,
                                strAlcoholic,
                                strGlass,
                             }= item
                             return(
                            {
                                id: idDrink,
                                name: strDrink,
                                image: strDrinkThumb,
                                info: strAlcoholic,
                                glass: strGlass,
                            }
                            )
                        })
                        setcockTailPost(newDrinks)
                        setcockTailLoad(false)
                    }
                    else{
                        setcockTailPost([])
                    }
                    
                }
                catch(error){
                    console.log(error)
                    setcockTailLoad(false)
                }
            },
            [searchTailsForm],
        )
    // fetchCockTail Data
    // fetchCityWeather4
    const fetchCityWeather = useCallback(
        async() => {
            setweatherLoad(true)
            try{
                const response = await fetch(`${weatherUrlBase}weather?q=${CityName}&appid=ad813cda902e28c2d40efb625a64e959`)
                const data = await response.json()
                setweatherData(data)
                setweatherLoad(false)
            }
            catch(error){
                console.log(error)
                setweatherLoad(false)
            }
        },
        [CityName],
    )
    // fetchCityWeather
    const fetchDelhiWeather = useCallback(
      
        async() => {
            setweatherLoad(true)
            try{
                const response = await fetch(`${weatherUrlBase}weather?q=Delhi&appid=ad813cda902e28c2d40efb625a64e959`)
                const data = await response.json()
                setdelhiWeatherData([data])
                setweatherLoad(false)
            }
            catch(error){
                console.log(error)
                setweatherLoad(false)
            }
        },
        [],
    )
    // fetchMumbaiWeather
    const fetchMumbaiWeather = useCallback(
       
        async() => {
            setweatherLoad(true)
            try{
                const response = await fetch(`${weatherUrlBase}weather?q=Mumbai&appid=ad813cda902e28c2d40efb625a64e959`)
                const data = await response.json()
                setmumbaiWeatherData([data])
                setweatherLoad(false)
            }
            catch(error){
                console.log(error)
                setweatherLoad(false)
            }
        },
        [],
    )
    // fetchMumbaiWeather
    // chennaiweather
    const fetchChennaiWeather = useCallback(
        async() => {
            setweatherLoad(true)
            try{
                
                const response = await fetch(`${weatherUrlBase}weather?q=Chennai&appid=ad813cda902e28c2d40efb625a64e959`)
                const data = await response.json()
                setchennaiWeatherData([data])
                setweatherLoad(false)
            }
            catch(error){
                console.log(error)
                setweatherLoad(false)
            }
        },
        [],
    )
    // chennaiweather
    // hydrabad weather
    const fetchHydrabadWeather = useCallback(
        async() => {
            setweatherLoad(true)
            try{
                const response = await fetch(`${weatherUrlBase}weather?q=Hyderabad&appid=ad813cda902e28c2d40efb625a64e959`)
                const data = await response.json()
                sethydrabadWeatherData([data])
                setweatherLoad(false)
            }
            catch(error){
                console.log(error)
                setweatherLoad(false)
            }
        },
        [],
    )
    // hydrabad weather
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
    // cart fetch data
    const fetchCart =useCallback(async()=>{
        dispatch({type:'LOADING'})
        try{
            const response = await fetch(cartUrl)
            const data = await response.json()
            const postData = data.cartItem
            dispatch({type:'DISPLAY_CART',load:postData})
        }
        catch(error){
            console.log(error)
            dispatch({type:'LOADFALSE'})
        }
    },[])
    // cart fetch data end
    // clear car
    const clearCart=()=>{
        dispatch({type:'CLEAR_CART'})
    }
    // clear cart end
    // cart toggle amount
    const cartToggleAmount =(id, type)=>{
            dispatch({type:'TOGGLE_AMOUNT',load:{id,type}})
    }
    // cart toggle amount end
    // cart remove
    const cartRemove =(id)=>{
        dispatch({type:'REMOVE_CART',load:id})
    }
    // cart remove end
    // cocktails  form handler
    const tailHandler = (e) =>{
        e.preventDefault()
    }
    // cocktails form handler end
    // search cocktail onchange
    const searchCocktail =()=>{
        setsearchTailsForm(searchValue.current.value)
    }
    // search cocktail onchange
    // quiz form handler
    const quizFormHandler=(e)=>{
        e.preventDefault()
        if(!quizName){
            todoShowAlert(
                true,
                'Fill Your Name',
                'danger'
            )
        }
        else{
            setquizFormCon(false)
            setquizName(quizName)
            setshowQuestion(true)
            emptyField.current.value =''
        }
    }
    // quiz form handler end
    // get checked value
    const quizGetValue =(e)=>{
        ansVar=e.currentTarget.id
        return ansVar
    }
    // get check value end
    // input focus 
    // const inputFocus =()=>{
    //     quizInputref.current.focus()
    // }
    // input focus 
    // input blur 
    // const inputBlur =()=>{
    //     quizInputref.current.blur()
    // }
    // input blur
    // chechquiz Ans
    const checkQuizAns =(e)=>{
        e.preventDefault()
        setquestionIndex(inc=>inc+1)
        if(ansVar===questions[questionIndex].ans){
            setscore(inc=>inc+1)
        }
        if(questionIndex===questions.length-1){
            setshowQuestion(false)
            setquizResult(true) 
         }
    }
    // 
    // coverintodecimal
    const convertIndegree =(temp) =>{
        let a= temp - 273.15
        return a.toFixed(2);
    }
    // chechquiz Ans end
    // weather handler
    const weatherHandler =(e)=>{
        e.preventDefault()
        if(!CityName){
            todoShowAlert(
                true,
                'Input City Name',
                'danger'
            )
        }
        else{
        setCityName(CityName)
        fetchCityWeather()
        searchCityValue.current.value=''
        }
    }
    // weather handler
    // 
    useEffect(() => {
        localStorage.setItem('list',JSON.stringify(todoList))
        fetchCart()
        fetchCockTailData()
        fetchDelhiWeather()
        fetchMumbaiWeather()
        fetchChennaiWeather()
        fetchHydrabadWeather()
    }, [todoList,fetchCart,fetchCockTailData, fetchDelhiWeather,
        fetchMumbaiWeather,
        fetchChennaiWeather,
        fetchHydrabadWeather])
    // 
    useEffect(()=>{
        dispatch({type:'CART_QUANTITY'})
    },[state.cartPost])
    return(
        <AppContext.Provider
         value={{
            ...state,
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
            cartRemove,
            cartToggleAmount,
            clearCart,
            tailHandler,
            searchCocktail,
            searchValue,
            cockTailPost,
            cockTailLoad,
            quizFormCon,
            setquizName,
            quizName,
            quizFormHandler,
            showQuestion,
            questions,
            questionIndex,
            checkQuizAns,
            quizGetValue,
            quizInputref,
            quizResult,
            emptyField,
            score,
            weatherHandler,
            searchCityValue,
            setCityName,
            weatherData,
            delhiWeatherData,
            mumbaiWeatherData,
            chennaiWeatherData,
            hydrabadWeatherData,
            convertIndegree,
            weatherLoad,
            CityName,
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