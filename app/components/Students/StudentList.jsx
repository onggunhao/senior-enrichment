import React from 'react';
import IndividualStudent from './IndividualStudent'

function StudentList(props) {

  const { 
    students, activeCampus, numStudents, 
    showAddStudentButton, showAddStudentForm, 
    displayAddStudent,
    handleAddStudentSubmit
  } = props

  return (
    <div className="widget-11-2 card no-border card-condensed no-margin widget-loader-circle full-height d-flex flex-column">
      <div className="padding-25">
        <div className="pull-left">
          <h2 className="text-danger">{activeCampus.name}</h2>
          <p className="p-l-5">{numStudents} Students</p>
        </div>
        <h3 className="pull-right semi-bold">
          {
            showAddStudentButton && <button className="btn btn-success" onClick={displayAddStudent}>Add Student</button>
          }
        </h3>
        <div className="clearfix"></div>
      </div>
      {
        (showAddStudentForm) && (
          <form role="form" onSubmit={handleAddStudentSubmit}>
            <div className="form-group-attached">
              <div className="row addStudentForm">
                <div className="col-sm-1">
                  <div className="form-group form-group-default disabled">
                    <label>ID</label>
                    <input type="text" className="form-control" name="id" disabled />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group form-group-default required">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" required />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group form-group-default required">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" required />
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="form-group form-group-default disabled">
                    <label>Campus</label>
                    <input type="text" className="form-control" value={activeCampus.name} name="campus" disabled/>
                    <input type="hidden" className="form-control" value={activeCampus.id} name="campusId" disabled />
                  </div>
                </div>
                <div className="col-sm-2">
                <div className="form-group form-group-default addStudentButtonContainerDiv">
                  <button className="btn btn-complete btn-animated from-left fa fa-check addStudentButton">
                    <span>Submit</span>
                </button>
                </div>
                </div>
              </div>
            </div>
          </form>
        )
      }
      <table className="table table-hover table-condensed" id="condensedTable">
        <thead>
          <tr>
            <th width="9%">ID</th>
            <th width="25%">Name</th>
            <th width="29%">Email</th>
            <th width="18%">Campus</th>
            <th width="12%"></th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student) => <IndividualStudent key={student.id} student={student} />)
          }

        </tbody>
      </table>
    </div>
  )
}

import { connect } from 'react-redux'
import { toggleAddStudentForm, postStudent } from '../../store'

const mapDispatchToProps = (dispatch) => {
  return {
    displayAddStudent() {
      dispatch(toggleAddStudentForm());
    },
    handleAddStudentSubmit(evt) {
      evt.preventDefault();
      const newStudent = { 
        name: evt.target.name.value,
        email: evt.target.email.value,
        campusId: evt.target.campusId.value
      }
      dispatch(postStudent(newStudent))
    }
  }
}

export default connect(null, mapDispatchToProps)(StudentList)
