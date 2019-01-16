/*
 * @Author: lifan
 * @Date: 2018-12-21 22:52:04
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-16 14:06:45
 */
/* eslint-disable no-undefined */
import React, { Component } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

interface MyButtonProps {
  title: string;
  classNames: string;
  textDirection?: 'column' | 'row';
  active?: boolean;
  isMobile?: boolean;
  touchStartHandler: ((event: GameEvent) => void) | undefined;
  touchEndtHandler: ((event: GameEvent) => void) | undefined;
}

class MyButton extends Component<MyButtonProps> {
  static defaultProps = {
    textDirection: 'column',
    active: false,
    isMobile: false,
  };

  shouldComponentUpdate(nextProps: MyButtonProps) {
    if (nextProps.active !== this.props.active || nextProps.isMobile !== this.props.isMobile) {
      return true;
    }

    return false;
  }

  render() {
    const { classNames, title, textDirection, active, touchStartHandler, touchEndtHandler, isMobile } = this.props;

    return (
      <div className={cn(styles.myButton, classNames)} style={{ flexDirection: textDirection }}>
        {
          isMobile ?
            <span
              className={cn(styles.button, { [styles.active]: active })}
              onTouchStart={touchStartHandler}
              onTouchEnd={touchEndtHandler}
            /> :
            <span
              className={cn(styles.button, { [styles.active]: active })}
              onMouseDown={touchStartHandler}
              onMouseUp={touchEndtHandler}
            />
        }
        <span
          className={styles.title}
          style={{ textAlign: textDirection === 'row' ? 'left' : 'center' }}>
          {title}
        </span>
      </div>
    );
  }
}

export default MyButton;
