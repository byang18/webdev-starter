// the counter literally displays the state.
// this is a connected component because it reads directly from the redux store

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Counter = (props) => {
  return (
    <div>Count: {props.count}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default withRouter(connect(mapStateToProps, null)(Counter));
