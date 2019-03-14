import React, {Component} from "react"
import "./../App.css"

class componentpage2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : []
        }
    }
    handleformdata = event => {
        debugger;
        var data = [event.target.user_name.value, event.target.password.value];
        this.setState({user:[...this.state.user,data]});
        console.log(data);
        console.log(this.state.user);
    }

    render() {
        return(<div className="App-header">
                <ul className="header">
                    <li><a href="/">Home</a></li>

                </ul>
                <h1>This is component 2 with form</h1>
                <form onSubmit={this.handleformdata}>
                    <div className="form-row">
                    <label>User Name</label>
                    <input type="text" name="user_name" placeholder="User Name"/>
                    </div>
                    <div className="form-row">
                    <label>Password</label>
                    <input type="text" name="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="sumbit" />
                </form>
                <div><h1>Input data</h1>{this.state.user}</div>
                </div>
        )
    }
}

export default componentpage2