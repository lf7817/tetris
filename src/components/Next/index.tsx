/*
 * @Author: lifan
 * @Date: 2019-01-14 22:03:47
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-14 22:41:50
 */
import React, { Component } from 'react';
import intl from 'react-intl-universal';
import Matrix from '../Matrix';
// import { BLOCK_SHAPE } from '../../constants/block';
import styles from './style.module.scss';


interface NextProps {
  shap: BlockShap;
  width: number;
}

interface NextState {
  matrix: number[][];
}

class Next extends Component<NextProps, NextState> {
  state = {
    matrix: [
      [0, 1, 0, 0],
      [1, 1, 1, 0]
    ]
  }
  render() {
    const { width } = this.props;
    const { matrix } = this.state;
    return (
      <div className={styles.next}>
        <p>{intl.get('next')}</p>
        <div>
          <Matrix matrix={matrix} width={width} />
        </div>
      </div>
    );
  }
}

export default Next;
