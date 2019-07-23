import React, { Component } from 'react';
import MyReact from './components/prop/MyReact';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'屈岩杰'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        let username = '侯总';
        if(username == this.state.username){
            return ;
        }
        this.setState({
            username:'侯总'
        });
    }
    render() {
        console.log('f render');
        return (
            <div>
                <MyReact username={this.state.username} />
                <div onClick={this.handleClick}>
                {this.state.username}
                </div>
            </div>
        );
    }
}

export default App;
