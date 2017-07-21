import React from 'react'
import { render } from 'react-dom'
import App from '../imports/client/App'
import { AccountsAnonymous } from 'meteor/brettle:accounts-anonymous'

Meteor.startup(() => {
  AccountsAnonymous.login()
  render(<App/>, document.getElementById('app'))
})