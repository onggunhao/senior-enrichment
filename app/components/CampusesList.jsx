import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


function CampusesList(props) {

  const { students, campuses } = props

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <h1 className='display-3'>Campuses</h1>
        </div>
        <div className="col-md-4">
          <button type="button" className="btn btn-success btn-lg">Add Campus</button>
        </div>

      </div>
      <div className="row">
        {
          campuses.map(campus => {
            
            const numberOfStudents = students.filter((student) => student.campusId === campus.id).length

            return (
              <div className="card" style={{width: "20rem"}}key={campus.id}>
                <img className="card-img-top" src={campus.imageUrl} alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">{campus.name}</h4>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{numberOfStudents} students</li>
                  <div className="card-body">
                  <button className="btn btn-danger">Delete Campus</button>
                </div>
                </ul>
              </div>
            )
          })
        }
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

export default connect(mapStateToProps)(CampusesList)