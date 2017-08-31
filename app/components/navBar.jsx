import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


function NavBar(props) {

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
      <Link to='/' className='navbar-brand'>Sekolah</Link>
      <ul className='navbar-nav'>
        <li className='nav-item' >
          <NavLink to='/campuses' className='nav-link' activeClassName='active'>
            Campuses
          </NavLink>
        </li>
        <li className='nav-item' >
          <NavLink to='/students' className='nav-link' activeClassName='active'>
            Students
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = function (state) {
  return state
}

export default withRouter(connect(mapStateToProps)(NavBar))