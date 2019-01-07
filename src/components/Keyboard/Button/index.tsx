/*
 * @Author: lifan
 * @Date: 2018-12-21 22:52:04
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-03 14:53:14
 */
import React, { PureComponent } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

interface MyButtonProps {
  title: string;
  classNames: string;
  textDirection?: 'column' | 'row';
  active?: boolean;
}

class Button extends PureComponent<MyButtonProps> {
  static defaultProps = {
    textDirection: 'column',
    active: false,
  };

  render() {
    const { classNames, title, textDirection, active } = this.props;
    return (
      <div className={cn(styles.myButton, classNames)} style={{ flexDirection: textDirection }}>
        <span className={cn(styles.button, { [styles.active]: active })} />
        <span className={styles.title} style={{ textAlign: textDirection === 'row' ? 'left' : 'center' }} >{title}</span>
      </div>
    );
  }
}

export default Button;
