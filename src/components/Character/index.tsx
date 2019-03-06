/*
 * @Author: lifan
 * @Date: 2019-01-10 13:48:44
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 12:45:48
 */
import cn from 'classnames';
import React, { Component } from 'react';
import styles from './style.module.scss';

interface ICharacterProps {
  value?: CharacterValue;
  className?: string;
}

class Character extends Component<ICharacterProps> {
  public static defaultProps = {
    value: '',
    className: '',
  };

  public shouldComponentUpdate(nextProp: ICharacterProps) {
    const { value, className } = this.props;

    if (nextProp.value !== value || nextProp.className !== className) {
      return true;
    }

    return false;
  }

  public render() {
    const { value, className } = this.props;
    return (
      <span className={cn(styles.character, className, styles[`character_${value}`])} />
    );
  }
}

export default Character;
