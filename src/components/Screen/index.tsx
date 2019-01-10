/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-10 22:47:47
 */
import React, { Component } from 'react';
import Matrix from '../Matrix';
import Decorate from '../Decorate';
import Character from '../Character';
import Time from '../Time';
import styles from './style.module.scss';

interface ScreenProps {
  matrix: number[][];
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
    const { matrix } = this.props;
    const { w } = this.state;

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
                <Character value={'sound_off'} className={styles.sound} />
                <Character value={'pause_on'} className={styles.pause} />
                <Character />
                <Time />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
