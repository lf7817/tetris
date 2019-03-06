/*
 * @Author: lifan
 * @Date: 2019-01-09 14:30:08
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-09 14:40:38
 */
import React, { Component } from 'react';
import intl from 'react-intl-universal';
import { BLOCK_DECORATE, BLOCK_DECORATE_REVERSE } from '../../constants/block';
import Matrix from '../Matrix';
import styles from './style.module.scss';

interface IDecorateState {
  w: number;
}

export default class Decorate extends Component<any, IDecorateState> {
  public state = {
    w: 0,
  };
  private readonly $refLeft: React.RefObject<HTMLDivElement> = React.createRef();

  public calcWidth = () => {
    if (this.$refLeft.current) {
      this.setState({
        w: this.$refLeft.current.clientWidth,
      });
    }
  }

  public componentDidMount() {
    this.calcWidth();
    window.addEventListener('resize', this.calcWidth);
  }

  public shouldComponentUpdate(nextProps: any, nextState: IDecorateState) {
    if (nextState.w !== this.state.w) {
      return true;
    }

    return false;
  }

  public render() {
    const { w } = this.state;
    return (
      <div className={styles.decorate}>
        <h1 className={styles.logo}>
          {
            intl.get('gameName')
          }
        </h1>
        <div className={styles.left} ref={this.$refLeft}>
          <Matrix matrix={BLOCK_DECORATE} width={w} hideBlankPixel={true} />
        </div>
        <div className={styles.right}>
          <Matrix matrix={BLOCK_DECORATE_REVERSE} width={w} hideBlankPixel={true} />
        </div>
        <div className={styles.dotWrapper}>
          <div className={styles.dotsLeft}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.dotsRight}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>
      </div>
    );
  }
}
