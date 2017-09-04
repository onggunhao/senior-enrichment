import React, { Component } from 'react';

// Components
import StudentList from './StudentList'

class AllStudentsList extends Component {

  componentDidMount() {
    this.props.changeCampus({ name: 'All Campuses'})
  }

  render() {
    return (
      <StudentList {...this.props} />
    )
  }
}

// React-Redux
import { connect } from 'react-redux'
import { changeCampus } from '../../store'

const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    numStudents: state.students.length,
    activeCampus: state.activeCampus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCampus(newCampusName) {
      dispatch(changeCampus(newCampusName));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudentsList)