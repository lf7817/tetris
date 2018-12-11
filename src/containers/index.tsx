import React, { Component } from 'react';
import { connect } from 'react-redux';
import { iRootState, Dispatch } from '../store';
import './style.css';

const mapState = (state: iRootState) => ({
  count: state.count,
});

const mapDispatch = (dispatch: Dispatch) => ({
  incrementAsync: dispatch.count.incrementAsync
});

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
type Props = connectedProps;

class App extends Component<Props> {
  render() {
    const { count, incrementAsync } = this.props;
    return (
      <div className="app">
        <p>{count}</p>
        <button onClick={() => incrementAsync(1)}>add</button>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(App);
