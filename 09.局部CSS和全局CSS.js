import React, { Component } from 'react';
import Login from './components/login/Login';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div>
                <input type="text" className="input" />
               <Login />
            </div>
        );
    }
}

export default App;
