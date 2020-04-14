import React from 'react'
// import './App.css'
import {Switch,Route} from "react-router-dom"
import Home from './Pages/Home'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/:slug" component={Products}/>
        <Route exact path="/:slug/:id" component={SingleProduct}/>  
        {/* <Route component={Error}/> */}
      </Switch>
    </>
  );
}


export default App

