import React, { Component } from 'react'
import style from './Login.module.css';
console.log(style);
export default class Login extends Component {
    render() {
        return (
            <div>
                <form action="" method="post">
                    <label htmlFor="username">姓名：</label>
                    <input type="text" name="username" id="username" className={style.input + ' input'} value="" />  <hr />
                    <label htmlFor="passwd">密码：</label>
                    <input type="password" name="passwd" id={style.passwd} className={style.input} value="" />  <hr />
                    <input type="submit" value="登录" />
                </form>
            </div>
        )
    }
}
