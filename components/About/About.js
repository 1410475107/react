import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class About extends Component {
  render() {
    return (
      <div>
        关于我们  
        <Link to="/">回到首页</Link>
      </div>
    )
  }
}
