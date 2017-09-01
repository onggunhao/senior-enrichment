import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

// Importing sub-components
import NavBar from './NavBar'
// Students
import StudentsList from './StudentsList'
import Student from './Student'
import NewStudent from './NewStudent'
// Campuses
import CampusesList from './CampusesList'
import Campus from './Campus'
import NewCampus from './NewCampus'


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
      <div></div>
      // <div>
      //   <NavBar />
      //   <div className='container app'>
      //     <Switch>
      //       <Route exact path="/students" component={StudentsList}/>
      //       <Route path="/students/:studentId" component={Student}/>
      //       <Route path="/students/new" component={NewStudent}/>
      //       <Route exact path="/campuses" component={CampusesList}/>
      //       <Route path="/campuses/:campusId" component={Campus}/>
      //       <Route path="/campuses/new" component={NewCampus}/>
      //       <Redirect to="/campuses" />
      //     </Switch>
      //   </div>
      // </div>
    )
  }
}