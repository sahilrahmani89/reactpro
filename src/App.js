import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Main from './components/Main';
import Accordion from './pages/accordion/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tours from './pages/tours/Tours';
import FoodMenu from './pages/foodmenu/FoodMenu';
import Todo from './pages/todo/Todo'
import PageMain from './pages/pagination/PageMain';
import ParaMain from './pages/loremipsum/ParaMain'
import NavApp from './pages/navbar/NavApp'
import CartApp from './pages/cart/CartApp';
import CockAbout from './pages/cocktails/CockAbout'
import TailIdComp from './pages/cocktails/TailIdComp';
import CockMain from './pages/cocktails/CockMain';
import Error from './components/Error'
import QuizApp from './pages/quiz/QuizApp';
import Weather from './pages/weatherapp/Weather';
// 
function App() {
  return (
    <>
   
      <Router>
          <Switch>
              <Route exact path='/'>
                <Main/>
              </Route>
              <Route exact path='/accordion'>
                  <Accordion/>
              </Route>
              <Route exact path='/tour'>
                  <Tours/>
              </Route>
              <Route exact path ='/foodmenu'>
                <FoodMenu/>
              </Route>
              <Route exact path='/todo'>
                <Todo/>
              </Route>
              <Route exact path ='/pagination'>
                <PageMain/>
              </Route>
              <Route exact path ='/loremipsum'>
                <ParaMain/>
              </Route>
              <Route exact path='/navbar'>
                  <NavApp/>
              </Route>
              <Route exact path ='/cart'>
                <CartApp/>
              </Route>
              <Route exact path ='/cocktails'>
                <CockMain/>
              </Route>
              <Route exact path ='/cocktails/about'>
                  <CockAbout/>
              </Route>
              <Route exact path ='/cocktails/:id'>
                 <TailIdComp/>
              </Route>
              <Route exact path ='/quiz'>
                  <QuizApp/>
              </Route>
              <Route exact path='/weather'>
                <Weather/>
              </Route>
              <Route path='*'>
                <Error/>
              </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
