/*
 * @Author: lifan
 * @Date: 2019-01-11 13:58:04
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-16 14:06:56
 */
import React, { Component } from 'react';
import Character from '../Character';
import styles from './style.module.scss';

interface INumberProps {
  className?: string;
  value: number;
  length: number;
  title: string;
}

interface INumberState {
  list: CharacterValue[];
}

class Number extends Component<INumberProps, INumberState> {
  public static defaultProps = {
    className: '',
  };

  public static getDerivedStateFromProps(nextProps: INumberProps, prevState: INumberState) {
    const { length, value } = nextProps;
    const data = value.toString().split('');
    const nullData = new Array(length - data.length).fill('');

    return {
      list: nullData.concat(data),
    };
  }

  public state = {
    list: [],
  };

  public shouldComponentUpdate(nextProps: INumberProps) {
    const { className, title, value, length } = this.props;
    if (nextProps.className !== className || nextProps.length !== length ||
      nextProps.title !== title || nextProps.value !== value) {
      return true;
    }

    return false;
  }

  public render() {
    const { title } = this.props;
    const { list } = this.state;

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
