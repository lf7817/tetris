import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { State } from '../store/reducers';
import { connect } from 'react-redux';
import { addCount } from '../store/actions';
import './style.css';

const mapState = (state: State) => ({
  count: state.count,
});

const mapDispatch = (dispatch: Dispatch) => ({
  addCount: (num: number) => dispatch(addCount(num))
});

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
type Props = connectedProps;

class App extends Component<Props> {
  render() {
    console.log(this.props);
    const { count, addCount } = this.props;
    return (
      <div className="app">
        <p>{count}</p>
        <button onClick={() => addCount(2)}>add</button>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(App);
