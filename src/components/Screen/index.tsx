/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-09 22:22:19
 */
import React, { Component } from 'react';
import Matrix from '../Matrix';
import Decorate from './Decorate';
import cn from 'classnames';
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
                <div className={cn(styles.sound, { [styles.soundActive]: true })} />
                <div className={cn(styles.pause, { [styles.pauseActive]: true })} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
