import React, { Component } from 'react'

export default class MyReact extends Component {
  render() {
      console.log('son render');
    return (
      <div>
        {this.props.username}
      </div>
    )
  }
}
