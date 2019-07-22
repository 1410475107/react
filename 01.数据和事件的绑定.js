import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    // 放数据的地方
    this.state = {
      username:'贺子航'
    }
    // 提前处理好this指向问题
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(123);
    console.log(this);
    // this.state.username = '李梦玉';  没有响应效果
    // 修改数据一定要使用setState
    this.setState({
      username:'杜奕君'
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          姓名:{this.state.username}
        </div>
      </div>
    );
  }
}

export default App;
