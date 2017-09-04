import React from 'react';

// Components
import StudentList from './StudentList'

function AllStudentsList (props) {

  const { activeCampusName, numStudents, students} = props

  return (
    <StudentList {...props} />
  )
}

// React-Redux
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    numStudents: state.students.length,
    activeCampusName: 'All Campuses'
  }
}

export default connect(mapStateToProps)(AllStudentsList)