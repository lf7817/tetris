/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-20 17:12:29
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

    return (
      <Decorate>
        <div className={style.wrapper}>
          <div ref={this.$ref_Panl} className={style.panl}>
            <svg width="100%" height="100%">
              {
                matrix.map((row, index) => (
                  row.map((b, i) => (
                    <Pixel key={`${index}_${i}`} width={12} x={50} y={50} highlight={!!b} />
                  ))
                ))
              }
            </svg>
          </div>
        </div>
      </Decorate>
    );
  }
}

export default Screen;
