import React, {Component} from "react"

import "./../App.css";

class APIclass extends Component {

    constructor(props){
        super(props);
        this.state = {
            output: []
        }
    }

    getuserdata(){
      fetch('https://reqres.in/api/users?page=2').then(result => { 
          return result.json();
        }).then(result => { 
            this.setState({output: result.data}); 
        });
    }

    componentDidMount(){
        this.getuserdata();
    }

    render() {
        return(<div className="App-header">
        <ul className="header">
            <li><a href="/">Home</a></li>
        </ul>
        <h1>These contents are retrieved from an <a href="https://reqres.in/api/users?page=2">API</a></h1>
        <div className="api-header">
            {this.state.output.map(data => (
                <div className="row"><img src={data.avatar} /><p>{data.first_name}</p><p>{data.last_name}</p></div>
            ))}
            </div>
        </div>);
    }
}

export default APIclass