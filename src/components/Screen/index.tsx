/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-09 14:54:37
 */
import React, { Component } from 'react';
import Matrix from '../Matrix';
import Decorate from './Decorate';
import style from './style.module.scss';

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
      <div className={style.wrapper}>
        <Decorate />
        <div className={style.center}>
          <div className={style.screenWrapper}>
            <div className={style.screen}>
              <div className={style.mainPanel}>
                <div ref={this.$ref_Panl}>
                  <Matrix matrix={matrix} width={w} />
                </div>
              </div>
              <div className={style.statusPanel}>
                record
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Screen;
