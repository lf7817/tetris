/*
 * @Author: lifan
 * @Date: 2019-01-10 13:48:44
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 12:45:48
 */
import React, { Component } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

interface CharacterProps {
  value?: CharacterValue;
  className?: string;
}

class Character extends Component<CharacterProps> {
  static defaultProps = {
    value: '',
    className: '',
  }

  shouldComponentUpdate(nextProp: CharacterProps) {
    const { value, className } = this.props;

    if (nextProp.value !== value || nextProp.className !== className) {
      return true;
    }

    return false;
  }

  render() {
    const { value, className } = this.props;
    return (
      <span className={cn(styles.character, className, styles[`character_${value}`])} />
    );
  }
}

export default Character;
