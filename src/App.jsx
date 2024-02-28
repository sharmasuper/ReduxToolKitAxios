
import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import MoviDetail from './component/MoviDetail/MoviDetail';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Footer from './component/Footer/Footer';
function App() {
  
  return (
    <>
    <div className='App'>
      <Router>
        <Header/>
       <div className='container'>
        <Routes>
         <Route path="/" exact element={<Home/>}/>
         <Route path="/movie/:imdbId" exact element = {<MoviDetail/>}/>
         <Route path = "/*" exact element={<PageNotFound/>}/>     
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
    </>
  )
}

export default App
