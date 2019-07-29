import React from 'react';
import style from './HeaderMenu.module.css';
import {Link} from 'react-router-dom';
export default (props)=>{
    return (
        <div>
            <h1>{props.noww}</h1>
           <ul className={style.ul}>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于我们</Link></li>
            <li><Link to="/list">产品列表</Link></li>
        </ul>  
        </div>
       
    );
}
