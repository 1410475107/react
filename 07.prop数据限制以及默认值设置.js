import React, { Component } from 'react';
import MyProp from './components/prop/MyProp';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'123'
        }
    }
    render() {
        return (
            <div>
               页面
               <MyProp 
            //    datetimes={new Date().toLocaleString()}
            //    username={this.state.username}
               fun={()=>console.log(1)}
               gender="男" 
               age={{age:30}}
               />
            </div>
        );
    }
}

export default App;
