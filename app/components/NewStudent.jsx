import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { writeChannelName, postChannel } from '../store';

// This is uncontrolled because I'm only spending max 15hrs on this
function NewStudentEntry (props) {

  const { newStudentEntry, handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Add a student</label>
        <input
          value={newStudentEntry}
          onChange={handleChange}
          className="form-control"
          type="text"
          name="channelName"
          placeholder="Enter channel name"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

const mapStateToProps = function (state) {
  return {
    newStudentEntry: state.newStudentEntry
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange (evt) {
      dispatch(writeChannelName(evt.target.value));
    },
    handleSubmit (evt) {
      evt.preventDefault();
      const name = evt.target.channelName.value;
      dispatch(postChannel({ name }, ownProps.history));
      dispatch(writeChannelName(''));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStudentEntry);
