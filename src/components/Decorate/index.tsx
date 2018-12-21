import React, { PureComponent, ReactNode } from 'react';
import intl from 'react-intl-universal';
import Matrix from '../Matrix';
import style from './style.module.scss';

interface DecorateProps {
  children: ReactNode;
  windowWidth: number;
}

interface DecorateState {
  w: number;
}

const m = [
  [0, 1],
  [1, 1],
  [1, 0],
];
class Decorate extends PureComponent<DecorateProps, DecorateState> {
  private readonly $ref_Left: React.RefObject<HTMLDivElement> = React.createRef();

  state = {
    w: 0
  }

  private calcWidth() {
    if (this.$ref_Left.current) {
      const width = this.$ref_Left.current.clientWidth;
      this.setState({
        w: width,
      });
    }
  }

  componentDidMount() {
    this.calcWidth();
  }

  componentDidUpdate() {
    this.calcWidth();
  }

  render() {
    const { children } = this.props;
    const { w } = this.state;

    return (
      <div className={style.wrapper}>
        <div className={style.decorate}>
          <h1 className={style.logo}>
            {
              intl.get('gameName')
            }
          </h1>
        </div>
        <div className={style.left} ref={this.$ref_Left}>
          <Matrix matrix={m} width={w} hideBlankPixel />
        </div>
        <div className={style.right}>

        </div>
        <div className={style.center}>
          <div className={style.dotsLeft}>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
          </div>
          <div className={style.dotsRight}>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
            <span className={style.dot}></span>
          </div>
          <div className={style.screen}>
            {
              children
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Decorate;
