import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            booklist:[
                {
                    bid:1,
                    bname:'计算机编译原理1',
                    peice:56.0,
                    detail:'这本书还是不错'
                },
                {
                    bid:2,
                    bname:'计算机编译原理2',
                    peice:67.0,
                    detail:'这本书还是不错'
                },
                {
                    bid:3,
                    bname:'计算机编译原理3',
                    peice:78.0,
                    detail:'这本书还是不错'
                }
            ]
        }
    }

    componentDidMount(){
        // 接收函数式跳转的传值
        console.log(this.props.location.mystate);
    }

    showBookList(){
        return (
            this.state.booklist.map((binfo, ind)=>{
                return (<div key={binfo.bid}>
                    <Link to={"/binfo?bid=" + binfo.bid}>{binfo.bname}</Link>
                </div>);

            })
        );
    }
  render() {
    return (
      <div>
        { this.showBookList()}
      </div>
    )
  }
}
