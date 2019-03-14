import React, {Component} from "react"
import {Route, Switch, BrowserRouter, Redirect } from "react-router-dom"

import nested1 from "./nestedpageconcept/nested1.js"
import nested2 from "./nestedpageconcept/nested2.js"

class componentpage1 extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(<div className="App-header">
                <h1>This is page 1 component with nested componenets</h1>
                <ul className="header">
                    <li><a href="/">Home</a></li>
                    <li><a href={`${this.props.match.url}/nested1`}>Nested 1</a></li>
                    <li><a href={`${this.props.match.url}/nested2`}>Nested 2</a></li>
                </ul>
                

                <BrowserRouter>
                <Switch>
                    <Route path={`${this.props.match.url}/nested1`} component={nested1} />
                    <Route path={`${this.props.match.url}/nested2`} component={nested2} />
                </Switch>
                </BrowserRouter>

                </div>
        )
    }
}

export default componentpage1