import MainPage from './pages/MainPage'
import Register from './pages/Register'
import Login from './pages/Login'
import UserMenu from './pages/UserMenu'
import {HashRouter as Router, Route} from 'react-router-dom'
import React from 'react'
class App extends React.Component {
  render() {
    return (
        <>
          <Router> {/* to avoid api calls every time*/}
            <Route exact path = "/" component = {MainPage}/>
            <Route path = "/login" component = {Login}/>
            <Route path = "/register" component = {Register}/>
            <Route path = "/menu" component = {UserMenu}></Route>

          </Router> 
        </>
    )
  }
}
export default App;
