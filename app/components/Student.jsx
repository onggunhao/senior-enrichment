import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

function Student(props) {

  // const { campusId, campus, students } = props

  return (
    <div>Students</div>
    // <div>
    //   <div className="row">
    //     <div className="col-md-8">
    //       <h1 className='display-3'>Campuses</h1>
    //     </div>
    //     <div className="col-md-4">
    //       <button type="button" className="btn btn-success btn-lg">Add Student</button>
    //     </div>

    //   </div>
    //   <div className="row">
    //     <div className="card" style={{ width: "20rem" }} key={campus.id}>
    //       <img className="card-img-top" src={campus.imageUrl} alt="Card image cap" />
    //       <div className="card-body">
    //         <h4 className="card-title">{campus.name}</h4>
    //       </div>
    //       <ul className="list-group list-group-flush">
    //         <li className="list-group-item">{numberOfStudents} students</li>
    //         {
    //           students.map(student => {
    //             return (
    //               <li className='list-group-item'>
    //                 {student.name}
    //               </li>
    //             )
    //           })
    //         }
    //         <div className="card-body">
    //           <button className="btn btn-danger">Delete Student</button>
    //         </div>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  )
}

const mapStateToProps = function (state, ownProps) {
  // const campusId = Number(ownProps.match.params.campusId)
  // return {
  //   campus: state.campuses.find(campus => campus.id === campusId),
  //   students: state.students.filter(student => student.campusId === campusId),
  //   campusId
  // }
  return true
}

export default connect(mapStateToProps)(Student)