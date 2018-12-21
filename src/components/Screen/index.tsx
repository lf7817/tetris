/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-21 13:46:56
 */
import React, { PureComponent } from 'react';
import Decorate from '../Decorate';
import Matrix from '../Matrix';

import style from './style.module.scss';

interface ScreenProps {
  matrix: number[][];
  windowWidth: number;
}

interface ScreenState {
  w: number;
}

class Screen extends PureComponent<ScreenProps, ScreenState> {
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
  }

  public componentDidUpdate(prevProps: ScreenProps) {
    if (this.props.windowWidth !== prevProps.windowWidth) {
      this.calcWidth();
    }
  }

  public render() {
    const { matrix, windowWidth } = this.props;
    const { w } = this.state;
    console.log('resize');

    return (
      <Decorate windowWidth={windowWidth}>
        <div className={style.wrapper}>
          <div className={style.container}>
            <div ref={this.$ref_Panl} className={style.panl}>
              <Matrix matrix={matrix} width={w} />
            </div>
          </div>
        </div>
      </Decorate>
    );
  }
}

export default Screen;
