import React, {Component} from "react"
import "./../App.css"


class componentpage extends Component {
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
        alert('componentWillUnmount');
    }
    render() {
        return(        
            <div className="App-header">
                <h1>Simple example for multiple pages and component</h1>
                <ul className="header">
                <li><a href="/">Home</a></li>
                <li><a href="/page1">Page with nested</a></li>
                <li><a href="/form">form</a></li>
                <li><a href="/api">API Example Page</a></li>
                </ul>
            </div>
  )
    }
}

export default componentpage;