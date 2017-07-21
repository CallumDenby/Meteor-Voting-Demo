import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import Votes from '../collections/votes'
import Cats from './cats'
import Dogs from './dogs'

class App extends Component {
  addVote(animal) {
    return () => {
      Meteor.call('addVote', animal)
    }
  }

  render() {
    return (
      <div className="container">
        <Dogs count={this.props.dogs} onClick={this.addVote('dogs')} />
        <Cats count={this.props.cats} onClick={this.addVote('cats')} />
      </div>
    )
  } 
}

export default createContainer(() => {
  const handle = Meteor.subscribe('votes')
  return {
    ready: handle.ready(),
    dogs: Votes.find({ animal: 'dogs' }).fetch().length,
    cats: Votes.find({ animal: 'cats' }).fetch().length
  }
}, App)