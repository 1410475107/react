import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import Button from 'antd/es/button';
import { Pagination, Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default class Home extends Component {
    constructor(props){
        super(props);
        this.goBookList = this.goBookList.bind(this);
    }
    goBookList(){
        // 函数式跳转
        // this.props.history.push('/blist');
        this.props.history.push({
            pathname:'/blist',
            mystate:{
                id:100,
                name:101,
                age:30
            }
        });
    }
    render() {
        return (
            <div>
                首页
        <Link to="/about">关于我们</Link>
        <Link to="/blist">图书</Link>

        <hr />
        <DatePicker />
        <hr />
        <Button type="primary">Button</Button>
        <hr />
        <Pagination defaultCurrent={1} total={50} />
        <hr />
        <button type="button" onClick={this.goBookList}>跳转到列表页面</button>
            </div>
        )
    }
}
