import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


function StudentsList(props) {

  const { students, campuses } = props

  return (
    <div className="col-lg-8">
    
      <div className="widget-11-2 card no-border card-condensed no-margin widget-loader-circle full-height d-flex flex-column">
        <div className="padding-25">
          <div className="pull-left">
            <h2 className="text-danger">Jakarta</h2>
            <p className="p-l-5">6 students</p>
          </div>
          <h3 className="pull-right semi-bold">
            <button className="btn btn-success">Add Student</button>
          </h3>
          <div className="clearfix"></div>
        </div>
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
              <tr>
                <td className="v-align-middle semi-bold">1</td>
                <td className="v-align-middle">William Shaw</td>
                <td className="v-align-middle semi-bold">william@shaw.com</td>
                <td className="v-align-middle semi-bold">Makassar</td>
                <td className="v-align-middle semi-bold">
                  <button className="btn btn-danger">
                    <i className="fa fa-trash-o"></i>
                  </button>
                </td>
              </tr>
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