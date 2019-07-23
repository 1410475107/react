import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Abouti from './components/About/Abouti';
console.log(require('react-router-dom'));
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <Route path='/' component={Home} exact />
                <Route path='/about' component={About}/>
                <Route path='/abouti' component={Abouti}/>
            </Router>
        );
    }
}

export default App;
