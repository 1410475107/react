import React from 'react';
import store from '../../store';
// import {ADD_STUDENT} from '../../store/actionTypes';
import {ADD_STUDENT_CREATOR} from '../../store/actionCreators';
// console.log(require('../../store/actionTypes'));
class AddStu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:store.getState().username
        }
        this.handleChange = this.handleChange.bind(this);
        this.addStu = this.addStu.bind(this);
    }
    handleChange(e){
        let form_data = {};
        let v = e.target.value;
        let n = e.target.name;
        form_data[n] = v;
        this.setState(form_data);
    }

    addStu(){
        // const action = {
        //     type:ADD_STUDENT,
        //     value:this.state.username
        // }
        store.dispatch(ADD_STUDENT_CREATOR(this.state.username));
    }

    render(){
        return (
            <div>
                学生姓名：<input value={this.state.username} name="username" onChange={this.handleChange} />
                   <input type="button" value="添加" onClick={this.addStu} />
            </div>
        );
    }
}

export default AddStu;