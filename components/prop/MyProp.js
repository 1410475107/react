import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class MyProp extends Component {
    constructor(props){
        super(props);
        console.log(PropTypes);
    }
    
    render() {
        return (
            <div>
                子组件接收属性值：{this.props.datetimes} ----
        {this.props.username}
            </div>
        )
    }
}

// 对出入的属性值进行限制   propTypes  固定的     PropTypes 首字母大写是上面引入的
MyProp.propTypes = {
    username: PropTypes.string.isRequired,
    fun: PropTypes.func,
    gender:PropTypes.oneOf(['男', '女', '保密']),
    age:PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])

}

let dt = new Date().toLocaleString();
MyProp.defaultProps = {
    username:"加载中...",
    datetimes:dt
}

