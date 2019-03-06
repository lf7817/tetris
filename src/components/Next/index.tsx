/*
 * @Author: lifan
 * @Date: 2019-01-14 22:03:47
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-16 14:06:50
 */
import React, { Component } from 'react';
import intl from 'react-intl-universal';
import { BLOCK_SHAPE } from '../../constants/block';
import Matrix from '../Matrix';
import styles from './style.module.scss';

const xy = { // 方块在下一个中的坐标
  I: [1, 0],
  L: [0, 0],
  J: [0, 0],
  Z: [0, 0],
  S: [0, 0],
  O: [0, 1],
  T: [0, 0],
};

interface INextProps {
  shap: BlockShap;
  width: number;
}

interface INextState {
  matrix: number[][];
}

class Next extends Component<INextProps, INextState> {

  public static getDerivedStateFromProps(nextProps: INextProps, prevState: INextState) {
    const shap = BLOCK_SHAPE[nextProps.shap];
    const empty = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    for (let i = 0; i < shap.length; i++) {
      const row = shap[i];
      for (let j = 0; j < row.length; j++) {
        const item = row[j];
        if (item !== 0) {
          empty[i + xy[nextProps.shap][0]][j + xy[nextProps.shap][1]] = 1;
        }
      }
    }

    return {
      matrix: empty,
    };
  }
  public state = {
    matrix: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  };

  public shouldComponentUpdate(nextProps: INextProps, nextState: INextState) {
    if (this.props.shap !== nextProps.shap || this.props.width !== nextProps.width ||
      this.state.matrix !== nextState.matrix) {
      return true;
    }

    return false;
  }

  public render() {
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
