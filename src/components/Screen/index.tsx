/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-20 17:04:39
 */
import React, { Component } from 'react';
import Decorate from '../Decorate';
import Pixel from '../Pixel';
import style from './style.module.scss';

interface ScreenProps {
  matrix: number[][];
}

interface State {
  w: number;
}

class Screen extends Component<ScreenProps, State> {
  private $ref_Panl: React.RefObject<HTMLDivElement> = React.createRef();
  public state = {
    w: 0
  }

  private calcWidth = () => {
    if (this.$ref_Panl.current) {
      this.setState({
        w: this.$ref_Panl.current.clientWidth
      });
    }
  }

  public componentDidMount() {
    this.calcWidth();
    window.addEventListener('resize', this.calcWidth);
  }

  public render() {
    // const { matrix } = this.props;

    return (
      <Decorate>
        <div className={style.wrapper}>
          <div ref={this.$ref_Panl} className={style.panl}>
            <svg>
              <Pixel width={12} x={50} y={50} />
            </svg>
          </div>
        </div>
      </Decorate>
    );
  }
}

export default Screen;
