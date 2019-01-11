/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 22:41:38
 */
import React, { Component } from 'react';
import intl from 'react-intl-universal';
import Matrix from '../Matrix';
import Decorate from '../Decorate';
import Character from '../Character';
import Time from '../Time';
import Number from '../Number';
import styles from './style.module.scss';

interface ScreenProps {
  matrix: number[][];
  score: number;
  max: number;
  speed: number;
  startLines: number;
  clearLines: number;
}

interface ScreenState {
  w: number;
}

class Screen extends Component<ScreenProps, ScreenState> {
  private readonly $ref_Panl: React.RefObject<HTMLDivElement> = React.createRef();
  public state = {
    w: 0
  }

  calcWidth = () => {
    if (this.$ref_Panl.current) {
      this.setState({
        w: this.$ref_Panl.current.clientWidth
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
    const { matrix, max, score, startLines, clearLines } = this.props;
    const { w } = this.state;

    console.log('screen render');

    return (
      <div className={styles.wrapper}>
        <Decorate />
        <div className={styles.center}>
          <div className={styles.screenWrapper}>
            <div className={styles.screen}>
              <div className={styles.mainPanel}>
                <div ref={this.$ref_Panl}>
                  <Matrix matrix={matrix} width={w} />
                </div>
              </div>
              <div className={styles.statusPanel}>
                <Number title={intl.get('max')} length={6} value={max} />
                <Number title={intl.get('lastRound')} length={6} value={score} />
                <Number title={intl.get('score')} length={6} value={score} />
                <Number title={intl.get('startLine')} length={6} value={startLines} />
                <Number title={intl.get('cleans')} length={6} value={clearLines} />
                {/* <Number title={intl.get('speed')} length={1} value={speed} /> */}
                <Character value={'sound_off'} className={styles.sound} />
                <Character value={'pause_on'} className={styles.pause} />
                <Time className={styles.time} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
