import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './navBar'

export default class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/students" />
          <Route path="/students/:studentId" />
          <Route path="/students/new" />
          <Route exact path="/campuses" />
          <Route path="/campuses/:campusId" />
          <Redirect to="/campuses" />
        </Switch>
      </div>
    )
  }
}