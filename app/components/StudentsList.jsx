import React, { Component } from 'react';
import { Link, withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

function Table(props) {

  const { students, campuses } = props
  console.log(campuses)

  return (
    <table className="table table-hover table-condensed" id="condensedTable">
      <thead>
        <tr>
          <th width="10%">ID</th>
          <th width="20%">Name</th>
          <th width="40%">Email</th>
          <th width="20%">Campus</th>
          <th width="10%"></th>
        </tr>
      </thead>
      <tbody>
      {
        students.map( (student) => {
          return (
            <tr key={student.id}>
            <td className="v-align-middle semi-bold">{student.id}</td>
            <td className="v-align-middle">{student.name}</td>
            <td className="v-align-middle semi-bold">{student.email}</td>
            <td className="v-align-middle semi-bold">{campuses.find( (campus) => campus.id === student.campusId).name}</td>
            <td className="v-align-middle semi-bold">
              <button className="btn btn-danger">
                <i className="fa fa-trash-o"></i>
              </button>
            </td>
          </tr>
          )
        })
      }
        
      </tbody>
    </table>
  )
}

function CampusDetails(props) {

  const { campus, numStudents } = props
  console.log("//////")
  console.log(props)

  return (
    <div className="padding-25">
      <div className="pull-left">
        <h2 className="text-danger">{campus.name}</h2>
        <p className="p-l-5">{numStudents} Students</p>
      </div>
      <h3 className="pull-right semi-bold">
        <button className="btn btn-success">Add Student</button>
      </h3>
      <div className="clearfix"></div>
    </div>
  )
}

function StudentsListContainer(props) {

  const { students, campuses, match, allCampuses } = props
  let campus = null
  let filteredStudents = null
  console.log(props)

  if (allCampuses) {
    campus = { name: 'All Campuses' }
    filteredStudents = students
  } else {
    const campusId = Number(match.params.campusId)
    campus = campuses.find((campus) => campus.id === campusId)
    filteredStudents = students.filter((student) => student.campusId === campusId)
  }
  console.log("======")
  console.log(campus)
  console.log(filteredStudents)

  return (
    <div className="widget-11-2 card no-border card-condensed no-margin widget-loader-circle full-height d-flex flex-column">
      <CampusDetails 
        campus={campus}
        numStudents={filteredStudents.length}
      />
      <Table 
        campuses={campuses}
        students={filteredStudents}
      />
    </div>
  )
}

// Ideally, this would be refactored
function StudentsListRouteController(props) {

  const { campuses, students } = props
  console.log("*****************")
  console.log(props)

  return (
    <div className="col-lg-8">
      <Switch>
      <Route path="/campuses/:campusId" render={(ownProps) => (
        <StudentsListContainer 
          {...props}
          {...ownProps}
        />
      )} />
        <Route exact path="/" render={() => (
          <StudentsListContainer 
            {...props}
            allCampuses={true}
          />
        )} />

      </Switch>
    </div>

  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

export default withRouter(connect(mapStateToProps)(StudentsListRouteController))