import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

// Importing sub-components
// Students
import StudentsListContainer from './StudentsList'
// Campuses
import CampusesListContainer from './CampusesList'


// Importing store methods for container component
import store, { fetchStudents, fetchCampuses } from '../store'

export default class Root extends Component {
  
  componentDidMount() {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render() {
    return (
      <div className="page-content-wrapper">
        <div className="content sm-gutter">
          <div className="container-fluid padding-25 sm-padding-10 display-flex">
            <CampusesListContainer />
            <StudentsListContainer />
          </div>
        </div>
      </div>
    )
  }
}
