/*
 * @Author: lifan
 * @Date: 2019-01-10 22:40:52
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 13:32:23
 */
import React, { Component } from 'react';
import cn from 'classnames';
import Character from '../Character';
import styles from './style.module.scss';

interface TimeProps {
  className?: string;
}

interface TimeState {
  h: number;
  m: number;
}

class Time extends Component<TimeProps, TimeState> {
  static defaultProps = {
    className: ''
  };

  state = {
    h: 0,
    m: 0
  }

  shouldComponentUpdate(nextProps: TimeProps, nextState: TimeState) {
    if (nextProps.className !== this.props.className || nextState.h !== this.state.h ||
      nextState.m !== this.state.m) {
      return true;
    }

    return false;
  }

  calcTime = () => {
    const date = new Date();
    this.setState({
      h: date.getHours(),
      m: date.getMinutes()
    });
  }

  componentDidMount() {
    this.calcTime();
    setInterval(this.calcTime, 10000);
  }

  render() {
    const { className } = this.props;
    const { h, m } = this.state;
    const h1 = Math.floor(h / 10).toString() as CharacterValue;
    const h2 = (h % 10).toString() as CharacterValue;
    const m1 = Math.floor(m / 10).toString() as CharacterValue;
    const m2 = (m % 10).toString() as CharacterValue;

    return (
      <div className={cn(styles.time, className)}>
        <Character value={h1} />
        <Character value={h2} />
        <Character value="colon" />
        <Character value={m1} />
        <Character value={m2} />
      </div>
    );
  }
}

export default Time;
