import React, { Component } from 'react'
import './App.css'
import  { BrowserRouter, Route, NavLink, Switch } from  'react-router-dom'
import Registration from './components/Registration'
import Home from './components/Home'
import Login from './components/Login'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div className='App'>
         <h1>Welcome to the Registration Form</h1>
         <NavLink to= '/Registration'>Registration</NavLink>
         <NavLink to='/login'>Login In</NavLink>
        </div>
        <div className='App'>
          <Switch>
            <Route path='/Registration'>
              <Registration/>
            </Route>
            <Route path='/Login'>
              <Login></Login>
            </Route>
            <Route path='/Home'>
            </Route>
            <Route path='/'>
              <h1>Click Registration or Login to enter Home</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
