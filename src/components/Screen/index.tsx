/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-16 14:07:09
 */
import React, { Component, Fragment } from 'react';
import intl from 'react-intl-universal';
import Character from '../Character';
import Decorate from '../Decorate';
import Matrix from '../Matrix';
import Next from '../Next';
import Number from '../Number';
import Time from '../Time';
import styles from './style.module.scss';

interface IScreenProps {
  matrix: number[][];
  score: number;
  max: number;
  speed: number;
  startLines: number;
  clearLines: number;
  playing: boolean;
  pause: boolean;
  sound: boolean;
  next: BlockShap;
}

interface IScreenState {
  w: number;
  scoreFlashflag: boolean;
}

class Screen extends Component<IScreenProps, IScreenState> {
  public state = {
    w: 0,
    scoreFlashflag: false,
  };
  private readonly $refPanl: React.RefObject<HTMLDivElement> = React.createRef();

  public calcWidth = () => {
    if (this.$refPanl.current) {
      this.setState({
        w: this.$refPanl.current.clientWidth,
      });
    }
  }

  public scoreFlash() {
    setInterval(() => {
      if (this.props.playing) {
        return;
      }

      if (this.props.score === 0) {
        this.setState({
          scoreFlashflag: false,
        });
      } else {
        this.setState({
          scoreFlashflag: !this.state.scoreFlashflag,
        });
      }
    }, 3000);
  }

  public componentDidMount() {
    this.calcWidth();
    this.scoreFlash();
    window.addEventListener('resize', this.calcWidth);
  }

  public shouldComponentUpdate(nextProps: IScreenProps, nextState: IScreenState) {
    const { matrix, score, max, speed, startLines, clearLines, pause, playing, sound, next } = this.props;
    const { w, scoreFlashflag } = this.state;
    if (nextProps.score !== score || nextProps.matrix !== matrix || nextProps.next !== next ||
      nextProps.max !== max || nextProps.speed !== speed || nextProps.sound !== sound ||
      nextProps.startLines !== startLines || nextProps.clearLines !== clearLines ||
      nextProps.pause !== pause || nextProps.playing !== playing ||
      nextState.w !== w || nextState.scoreFlashflag !== scoreFlashflag) {
      return true;
    }

    return false;
  }

  public render() {
    const { matrix, max, score, startLines, clearLines, pause, playing, speed, sound, next } = this.props;
    const { w, scoreFlashflag } = this.state;
    const pixelWidth = w / matrix[0].length;

    return (
      <div className={styles.wrapper}>
        <Decorate />
        <div className={styles.center}>
          <div className={styles.screenWrapper}>
            <div className={styles.screen}>
              <div className={styles.mainPanel}>
                <div ref={this.$refPanl}>
                  <Matrix matrix={matrix} width={w} />
                </div>
              </div>
              <div className={styles.statusPanel}>
                {
                  playing ?
                    <Fragment>
                      <Number title={intl.get('score')} length={6} value={score} />
                      <Number title={intl.get('cleans')} length={6} value={clearLines} />
                      <Number title={intl.get('speed')} length={1} value={speed} />
                    </Fragment> :
                    <Fragment>
                      {
                        !scoreFlashflag ? <Number title={intl.get('max')} length={6} value={max} /> :
                          <Number title={intl.get('lastRound')} length={6} value={score} />}
                      <Number title={intl.get('startLines')} length={6} value={startLines} />
                      <Number title={intl.get('speed')} length={1} value={speed} />
                    </Fragment>
                }
                <Next shap={next} width={pixelWidth * 4} />
                <Character value={sound ? 'sound_on' : 'sound_off'} className={styles.sound} />
                <Character value={pause ? 'pause_on' : 'pause_off'} className={styles.pause} />
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
