import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { increment, decrement } from '../actions';

const Controls = (props) => {
  return (
    <div>

      <button type="button" onClick={props.decrement}>-</button>
      <button type="button" onClick={props.increment}>+</button>
    </div>
  );
};

// can think of as mapActionsToProps
const mapDispatchToProps = {
  increment,
  decrement,
};

export default withRouter(connect(null, mapDispatchToProps)(Controls));
