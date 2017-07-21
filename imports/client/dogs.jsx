import React, { Component } from 'react'

export default class Dogs extends Component {
  render() {
    return (
      <div className="item dogs" onClick={this.props.onClick}>
        <div className="label counter">Turtles</div>
        <div className="label counter">{this.props.count}</div>
      </div>
    )
  }
}