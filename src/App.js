import React, { Component } from 'react'

import { HashRouter as Router,Route,Switch ,Redirect} from "react-router-dom"

import  Login  from "./pages/Login"
import  Layout  from "./pages/Layout"

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                  <Route path="/login" component={Login}/>
                  <Route path="/index" component={Layout}/>
                  <Redirect to="/index" />
                </Switch>
            </Router>
        )
    }
}
