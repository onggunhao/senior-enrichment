import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function CampusesList(props) {
  const { students, campuses } = props

  return (
    <div className="col-lg-3">
      <div className="row">
        <div className="col-md-12 m-b-10">
          <div className="campus-card-background-image widget-9 card no-border no-margin widget-loader-bar " style={{ 'backgroundImage':'url(http://localhost:1337/img/jakarta.jpg)'}}>
            <div className="full-height d-flex flex-column campus-card-background-overlay">
              <div className="card-header ">
                <div className="card-title text-black">
                  <span className="font-montserrat fs-11 all-caps text-white">Campus 1</span>
                </div>
              </div>
              <div className="p-l-20">
                <h2 className="no-margin p-b-5 text-white semi-bold">Jakarta</h2>
                <span className="small hint-text text-white">6 Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-success btn-cons">Add Campus</button>
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
