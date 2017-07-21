import { Meteor } from 'meteor/meteor'
import Votes from '../collections/votes'

Meteor.methods({
  addVote(animal) {
    if(!Meteor.userId()) throw new Meteor.error(403, 'Unauthorised')

    const voted = Votes.findOne({
      user: Meteor.userId()
    })

    if(voted && voted.animal === animal) {
      Votes.remove({
        _id: voted._id
      })
      return
    } 

    Votes.insert({
      user: Meteor.userId(),
      animal
    })
  }
})