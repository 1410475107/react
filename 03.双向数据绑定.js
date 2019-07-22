import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        // 放数据的地方
        this.state = {
            username:'刘林',
            age:21
        }
        // 提前处理好this的指向
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        console.log(1);
        // 把输入框的信息设置到 username数据之上
        let v = e.target.value;
        let n = e.target.name;
        let data={};
        data[n] = v;
        this.setState(data);
    }

    render() {
        return (
            <div>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                <input type="text" name="age" onChange={this.handleChange} value={this.state.age} />
            </div>
        );
    }
}

export default App;
