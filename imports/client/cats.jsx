import React, { Component } from 'react'

export default class Cats extends Component {
  render() {
    return (
      <div className="item cats" onClick={this.props.onClick}>
        <div className="label counter">Cats</div>
        <div className="label counter">{this.props.count}</div>
      </div>
    )  
  }
}