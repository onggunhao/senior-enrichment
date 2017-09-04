import React from 'react'


function IndividualStudent(props) {

  const { student, deleteStudent } = props

  return (
    <tr key={student.id}>
      <td className="v-align-middle semi-bold">{student.id}</td>
      <td className="v-align-middle">{student.name}</td>
      <td className="v-align-middle semi-bold">{student.email}</td>
      <td className="v-align-middle semi-bold">{student.campus.name}</td>
      <td className="v-align-middle semi-bold">
        <button className="btn btn-danger" onClick={evt => deleteStudent(evt, student)}>
          <i className="fa fa-trash-o"></i>
        </button>
      </td>
    </tr>
  )
}

// React-Redux
import { connect } from 'react-redux'
import { deleteStudent } from '../../store'

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent(evt, student) {
      dispatch(deleteStudent(student))
    }
  }
}

export default connect(null, mapDispatchToProps)(IndividualStudent);
