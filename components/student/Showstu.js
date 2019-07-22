import React, { Component } from 'react';
class Showstu extends Component {
    constructor(props) {
        super(props);
        this.delStu = this.delStu.bind(this);
    }

    delStu(){
        console.log('删除学生');
        this.props.operName(this.props.ind);
    }
    render() {
        return (
            <li>
                {this.props.stuinfo} 
                <a href="###" onClick={this.delStu}>删除</a>
            </li>
        );
    }
}


export default Showstu;