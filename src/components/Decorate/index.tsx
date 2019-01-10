/*
 * @Author: lifan
 * @Date: 2019-01-09 14:30:08
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-09 14:40:38
 */
import React, { Component } from 'react';
import intl from 'react-intl-universal';
import Matrix from '../Matrix';
import { BLOCK_DECORATE, BLOCK_DECORATE_REVERSE } from '../../constants/block';
import styles from './style.module.scss';

interface DecorateProps {

}

interface DecorateState {
  w: number;
}

export default class Decorate extends Component<DecorateProps, DecorateState> {
  private readonly $ref_Left: React.RefObject<HTMLDivElement> = React.createRef();
  public state = {
    w: 0,
  }

  calcWidth = () => {
    if (this.$ref_Left.current) {
      this.setState({
        w: this.$ref_Left.current.clientWidth
      });
    }
  }

  componentDidMount() {
    this.calcWidth();
    window.addEventListener('resize', this.calcWidth);
  }

  shouldComponentUpdate(nextProps: DecorateProps, nextState: DecorateState) {
    if (nextState.w !== this.state.w) {
      return true;
    }

    return false;
  }

  render() {
    const { w } = this.state;
    return (
      <div className={styles.decorate}>
        <h1 className={styles.logo}>
          {
            intl.get('gameName')
          }
        </h1>
        <div className={styles.left} ref={this.$ref_Left}>
          <Matrix matrix={BLOCK_DECORATE} width={w} hideBlankPixel />
        </div>
        <div className={styles.right}>
          <Matrix matrix={BLOCK_DECORATE_REVERSE} width={w} hideBlankPixel />
        </div>
        <div className={styles.dotWrapper}>
          <div className={styles.dotsLeft}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
          <div className={styles.dotsRight}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
        </div>
      </div>
    );
  }
}
