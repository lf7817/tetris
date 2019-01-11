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

  state = {
    list: []
  }

  static getDerivedStateFromProps(nextProps: NumberProps, prevState: NumberState) {
    const { length, value } = nextProps;
    const data = value.toString().split('');
    const nullData = new Array(length - data.length).fill('');

    return {
      list: nullData.concat(data)
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  shouldComponentUpdate(nextProps: NumberProps) {
    const { className, title, value, length } = this.props;
    if (nextProps.className !== className || nextProps.length !== length ||
      nextProps.title !== title || nextProps.value !== value) {
      return true;
    }

    return false;
  }

  render() {
    const { title } = this.props;
    const { list } = this.state;

    console.log('number render');
    return (
      <div className={styles.number}>
        <p>{title}</p>
        <div>
          {
            list.map((item, index) => (
              <Character key={index} value={item} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Number;
