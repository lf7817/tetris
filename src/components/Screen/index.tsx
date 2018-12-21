/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-21 10:46:46
 */
import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import Decorate from '../Decorate';
import Matrix from '../Matrix';

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
    window.addEventListener('resize', debounce(this.calcWidth, 50));
  }

  public render() {
    const { matrix } = this.props;
    const { w } = this.state;

    return (
      <Decorate>
        <div className={style.wrapper}>
          <div className={style.container}>
            <div ref={this.$ref_Panl} className={style.panl}>
              <Matrix matrix={matrix} width={w} height={w * 2} />
            </div>
          </div>
        </div>
      </Decorate>
    );
  }
}

export default Screen;
