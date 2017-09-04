import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function CampusCard(props) {
  const { name, id, imageUrl, students } = props

  return (
    <div className="campus-card">
      <div className="campus-card-background-image widget-9 card no-border no-margin widget-loader-bar " style={{ backgroundImage:`url(${imageUrl})` }}>
        <div className="full-height d-flex flex-column campus-card-background-overlay">
          <div className="card-header ">
            <div className="card-title text-black">
              <span className="font-montserrat fs-11 all-caps text-white">Campus {id}</span>
            </div>
          </div>
          <div className="p-l-20">
            <h2 className="no-margin p-b-5 text-white semi-bold">{name}</h2>
            <span className="small hint-text text-white">{ students && students.length} Students</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function CampusesListContainer(props) {
  const { campuses } = props

  return (
    <div className="col-lg-3">
      <div className="row">
        <div className="col-md-12 m-b-10">

          <NavLink exact to="/" activeClassName='active'>
            <CampusCard
              id="(All)"
              name="All Campuses"
            />
          </NavLink>

          {
            campuses.map(campus => {
              return (
                <NavLink to={`/campuses/${campus.id}`} activeClassName='active' key={campus.id}>
                  <CampusCard {...campus} />
                </NavLink>
              )
            })
          }

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

export default withRouter(connect(mapStateToProps)(CampusesListContainer))
