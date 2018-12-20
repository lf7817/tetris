/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-20 20:46:31
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
  private readonly $ref_Panl: React.RefObject<HTMLDivElement> = React.createRef();
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
    const { matrix } = this.props;
    const pixelWidth = this.state.w / matrix[0].length || 10;

    return (
      <Decorate>
        <div className={style.wrapper}>
          <div className={style.container}>
            <div ref={this.$ref_Panl} className={style.panl}>
              <svg width="100%" height={this.state.w * 2}>
                {
                  matrix.map((row, i) => (
                    row.map((b, j) => (
                      <Pixel key={`${i}_${j}`} width={pixelWidth} x={j * pixelWidth} y={i * pixelWidth} highlight={!!b} />
                    ))
                  ))
                }
              </svg>
            </div>
          </div>
        </div>
      </Decorate>
    );
  }
}

export default Screen;
