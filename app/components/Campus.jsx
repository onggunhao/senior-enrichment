import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

function Campus(props) {

  const { campus, students } = props
  console.log(props)
  console.log(campus)
  console.log(students)

  return (
    <div>
      <div className="row">
        <div className="card" style={{ width: "20rem" }} key={campus.id}>
          <img className="card-img-top" src={campus.imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">{campus.name}</h4>
          </div>
          <ul className="list-group list-group-flush">
            {
              students.map(student => {
                return (
                  <li className='list-group-item'>
                    {student.name}
                  </li>
                )
              })
            }
            <div className="card-body">
              <button className="btn btn-danger">Delete Campus</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId)
  return {
    campus: state.campuses.find(campus => campus.id === campusId),
    students: state.students.filter(student => student.campusId === campusId),
    campusId
  }
}

export default connect(mapStateToProps)(Campus)