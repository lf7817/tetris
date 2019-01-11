/*
 * @Author: lifan
 * @Date: 2019-01-11 13:58:04
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 17:23:15
 */
import React, { Component } from 'react';
import Character from '../Character';
import styles from './style.module.scss';

interface NumberProps {
  className?: string;
  value: number;
  length: number;
  title: string;
}

interface NumberState {
  list: CharacterValue[];
}

class Number extends Component<NumberProps, NumberState> {
  static defaultProps = {
    className: ''
  };

  static getDerivedStateFromProps(nextProps: NumberProps, prevState: NumberState) {
    return {
      list: ['1']
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  componentDidUpdate() {
    // this.calcList();
  }

  render() {
    const { title } = this.props;
    const { list } = this.state;
    return (
      <div className={styles.number}>
        <p>{title}</p>
        <div>
          {
            list.map((item, index) => (
              <Character key={index} value={item as CharacterValue} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Number;
