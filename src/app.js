import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Home, Blogs } from './routes'

export class App extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blogs' component={Blogs} />
        </Switch>
      </HashRouter>
    )
  }
}
