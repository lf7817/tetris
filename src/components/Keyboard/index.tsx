/*
 * @Author: lifan
 * @Date: 2018-12-21 22:32:13
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-03 14:50:44
 */
import React, { PureComponent } from 'react';
import MyButton from './Button';
import styles from './style.module.scss';

class Keyboard extends PureComponent {
  render() {
    return (
      <div className={styles.keyboard}>
        <MyButton title={'Pause(P)'} classNames={styles.keyPause} active />
        <MyButton title={'Pause(P)'} classNames={styles.keyPause} />
      </div>
    );
  }
}

export default Keyboard;
