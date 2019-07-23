import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (
            <div>
                首页
        <Link to="/about">关于我们</Link>
            </div>
        )
    }
}
