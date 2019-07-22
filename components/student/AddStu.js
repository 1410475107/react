import React from 'react';
class AddStu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:''
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
        // 调用父级的追加数据的方法
        this.props.opername(this.state.username);
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