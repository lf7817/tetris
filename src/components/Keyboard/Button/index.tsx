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
}

class Button extends PureComponent<MyButtonProps> {
  render() {
    const { classNames, title } = this.props;
    return (
      <div className={cn(styles.myButton, classNames)}>
        <span className={styles.button}></span>
        <span className={styles.title}>{title}</span>
      </div>
    );
  }
}

export default Button;
