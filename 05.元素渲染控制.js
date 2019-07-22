import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        // 放数据的地方
        this.state = {
            ifshow:false,
            isLogin:true
        }
    }

    showMe(){
        if(this.state.ifshow){
            return <p>显示我</p>;
        }
    }

    loginStatus(){
        if(this.state.isLogin){
            return  <p>欢迎你回来</p>;
        }else{
            return  <p>注册|登录</p>;
        }
    }

    render() {
        return (
            <div>
                下面的元素是否显示：
                {this.showMe()}
                {this.loginStatus()}
            </div>
        );
    }
}

export default App;
