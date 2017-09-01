import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


function StudentsList(props) {

  const { students, campuses } = props

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
        <h1 className='display-3'>Students</h1>
        </div>
        <div className="col-md-4">
        <button type="button" className="btn btn-success btn-lg">Add Student</button>
        </div>
        
      </div>
      <div className="row">
        <table className='table table-hover'>
          <thead className='thead-inverse'>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Campus</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map(student => {
                const campusName = campuses.find((campus) => campus.id === student.campusId).name
                return (
                  <tr key={student.id}>
                    <th>{student.id}</th>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{campusName}</td>
                    <td>
                      <button type='button' className='btn btn-danger'>
                        Delete
                  </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

export default connect(mapStateToProps)(StudentsList)