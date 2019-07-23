import React, { Component } from 'react'

export default class StuInfo extends Component {
    constructor(props){
        super(props);
        this.delStu = this.delStu.bind(this);
    }

    // 你是否确定修改组件数据
    shouldComponentUpdate(){
        console.log(0);
        return  true;
    }
    componentWillUpdate(){
        console.log('1');
    }

    componentDidUpdate(){
        console.log('3');
    }

    componentWillUnmount(){
        console.log('被卸载');
    }
    delStu(){
        this.props.deloper();
    }
  render() {
      console.log(2);

    return (
      <div>
        <div  onClick={this.delStu}>{this.props.stu}</div>
      </div>
    )
  }
}
