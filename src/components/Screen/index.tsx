/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-09 13:14:27
 */
import React, { Component } from 'react';
import intl from 'react-intl-universal';
import Matrix from '../Matrix';
import { BLOCK_DECORATE, BLOCK_DECORATE_REVERSE } from '../../constants/block';

import style from './style.module.scss';

interface ScreenProps {
  matrix: number[][];
}

interface ScreenState {
  w: number;
  w1: number;
}

class Screen extends Component<ScreenProps, ScreenState> {
  private readonly $ref_Panl: React.RefObject<HTMLDivElement> = React.createRef();
  private readonly $ref_Left: React.RefObject<HTMLDivElement> = React.createRef();
  public state = {
    w: 0,
    w1: 0
  }

  calcWidth = () => {
    if (this.$ref_Panl.current && this.$ref_Left.current) {
      this.setState({
        w: this.$ref_Panl.current.clientWidth,
        w1: this.$ref_Left.current.clientWidth
      });
    }
  }

  componentDidMount() {
    this.calcWidth();

    window.addEventListener('resize', this.calcWidth);
  }

  shouldComponentUpdate(nextProps: ScreenProps, nextState: ScreenState) {
    if (nextProps.matrix !== this.props.matrix || nextState.w !== this.state.w) {
      return true;
    }

    return false;
  }

  render() {
    const { matrix } = this.props;
    const { w, w1 } = this.state;

    return (
      <div className={style.wrapper}>
        <div className={style.decorate}>
          <h1 className={style.logo}>
            {
              intl.get('gameName')
            }
          </h1>
        </div>
        <div className={style.left} ref={this.$ref_Left}>
          <Matrix matrix={BLOCK_DECORATE} width={w1} hideBlankPixel />
        </div>
        <div className={style.right}>
          <Matrix matrix={BLOCK_DECORATE_REVERSE} width={w1} hideBlankPixel />
        </div>
        <div className={style.center}>
          <div className={style.dotsLeft}>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
          </div>
          <div className={style.dotsRight}>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
          </div>
          <div className={style.screenWrapper}>
            <div className={style.screen}>
              <div className={style.main}>
                <div ref={this.$ref_Panl}>
                  <Matrix matrix={matrix} width={w} />
                </div>
              </div>
              {/* <div className={style.record}>
                record
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
