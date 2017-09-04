import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

// Importing sub-components
import AllStudentsList from './Students/AllStudentsList'
import FilteredStudentsList from './Students/FilteredStudents'


import CampusesListNavBar from './Campus/CampusesList'
// import NewStudent from './NewStudent'

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
            <CampusesListNavBar />
            <div className="col-lg-8">
              <Switch>
                <Route exact path="/" component={AllStudentsList} />
                <Route path="/campuses/:campusId" component={FilteredStudentsList} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
