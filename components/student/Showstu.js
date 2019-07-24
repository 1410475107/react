import React, { Component } from 'react';
import store from '../../store';
// import {DEL_STUDENT} from '../../store/actionTypes';
import {DEL_STUDENT_CREATOR} from '../../store/actionCreators';

class Showstu extends Component {
    constructor(props) {
        super(props);
        this.delStu = this.delStu.bind(this);
    }

    delStu(){
        // let action = {
        //     type:DEL_STUDENT,
        //     value:this.props.ind
        // };
        store.dispatch(DEL_STUDENT_CREATOR(this.props.ind));
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