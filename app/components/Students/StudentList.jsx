import React from 'react';
import IndividualStudent from './IndividualStudent'

function StudentList(props) {

  const { students, activeCampus, numStudents } = props

  return (
    <div className="widget-11-2 card no-border card-condensed no-margin widget-loader-circle full-height d-flex flex-column">
    <div className="padding-25">
      <div className="pull-left">
        <h2 className="text-danger">{activeCampus.name}</h2>
        <p className="p-l-5">{numStudents} Students</p>
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
          <th width="30%">Name</th>
          <th width="30%">Email</th>
          <th width="18%">Campus</th>
          <th width="12%"></th>
        </tr>
      </thead>
      <tbody>
        {
          students.map((student) => <IndividualStudent key={student.id} student={student}/>)
        }

      </tbody>
    </table>
    </div>
    )
}

export default StudentList;