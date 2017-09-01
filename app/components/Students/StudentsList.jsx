import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


function StudentsList(props) {
  const { students, campuses } = props
  return (
    <div>
     
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




          // <!-- START StudentListComponent -->
          // <div class="col-lg-8">
          
          //             <div class="widget-11-2 card no-border card-condensed no-margin widget-loader-circle full-height d-flex flex-column">
          //               <div class="padding-25">
          //                 <div class="pull-left">
          //                   <h2 class="text-danger">Jakarta</h2>
          //                   <p class="p-l-5">6 students</p>
          //                 </div>
          //                 <h3 class="pull-right semi-bold"><sup>
          //                   <button class="btn btn-success">Add Student</button>
          //                 </h3>
          //                 <div class="clearfix"></div>
          //               </div>
          //               <table class="table table-hover table-condensed" id="condensedTable">
          //                   <thead>
          //                     <tr>
          //                       <th style="width:10%">ID</th>
          //                       <th style="width:20%">Name</th>
          //                       <th style="width:40%">Email</th>
          //                       <th style="width:20%">Campus</th>
          //                       <th style="width:10%"></th>
          //                     </tr>
          //                   </thead>
          //                   <tbody>
          //                     <tr>
          //                       <td class="v-align-middle semi-bold">1</td>
          //                       <td class="v-align-middle">William Shaw</td>
          //                       <td class="v-align-middle semi-bold">william@shaw.com</td>
          //                       <td class="v-align-middle semi-bold">Makassar</td>
          //                       <td class="v-align-middle semi-bold">
          //                         <button class="btn btn-danger">
          //                           <i class="fa fa-trash-o"></i>
          //                         </button>
          //                       </td>
          //                     </tr>
          //                   </tbody>
          //                 </table>
          //             </div>
          
          //           </div>
          //           <!-- END StudentListComponent -->
          



          // THE OLD VERSION


      //      <div className="row">
      //   <div className="col-md-8">
      //   <h1 className='display-3'>Students</h1>
      //   </div>
      //   <div className="col-md-4">
      //   <button type="button" className="btn btn-success btn-lg">Add Student</button>
      //   </div>
        
      // </div>
      // <div className="row">
      //   <table className='table table-hover'>
      //     <thead className='thead-inverse'>
      //       <tr>
      //         <th>ID</th>
      //         <th>Name</th>
      //         <th>Email</th>
      //         <th>Campus</th>
      //         <th>Actions</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {
      //         students.map(student => {
      //           const campusName = campuses.find((campus) => campus.id === student.campusId).name
      //           return (
      //             <tr key={student.id}>
      //               <th>{student.id}</th>
      //               <td>{student.name}</td>
      //               <td>{student.email}</td>
      //               <td>{campusName}</td>
      //               <td>
      //                 <button type='button' className='btn btn-danger'>
      //                   Delete
      //             </button>
      //               </td>
      //             </tr>
      //           );
      //         })
      //       }
      //     </tbody>
      //   </table>
      // </div>
