import React, { Component } from 'react';

// Components
import StudentList from './StudentList'

class FilteredStudents extends Component {

  componentDidMount() {
    this.props.changeCampus(this.props.activeCampus)
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

  const campusId = Number(ownProps.match.params.campusId)
  const students = state.students.filter(student => student.campusId === campusId)

  return {
    activeCampus: state.campuses.find(campus => campus.id === campusId) || { name: 'All Campuses' },
    students: students,
    numStudents: students.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCampus(newCampusName) {
      dispatch(changeCampus(newCampusName));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilteredStudents)