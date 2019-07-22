import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    // 放数据的地方
    this.state = {
      stulist:[
        {username:'胡友作', gender:'女'},
        {username:'杜奕君', gender:'女'},
        {username:' 杨廷利', gender:'女'},
        {username:' 袁康', gender:'男'},
        {username:' 徐雪飞', gender:'男'},
      ]
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>姓名：徐雪飞,性别：男</li>
          {
              this.state.stulist.map((item, ind)=>{
                return <li key={ind}>姓名：{item.username},性别：{item.gender}</li>;
              })
          }
        </ul>
      </div>
    );
  }
}

export default App;
