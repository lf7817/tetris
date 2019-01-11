/*
 * @Author: lifan
 * @Date: 2018-12-19 09:02:19
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 12:24:37
 */
import React, { Component, Fragment } from 'react';
import MediaQuery from 'react-responsive';
import style from './style.module.scss';

interface PixelProps {
  x: number;
  y: number;
  width: number;
  highlight?: boolean;
  hide?: boolean;
}

class Pixel extends Component<PixelProps> {

  static defaultProps = {
    highlight: false,
    hide: false,
  };

  shouldComponentUpdate(nextProps: PixelProps) {
    const { highlight, x, y, width, hide } = this.props;
    if (nextProps.highlight !== highlight || nextProps.x !== x ||
      nextProps.y !== y || nextProps.width !== width || nextProps.hide !== hide) {
      return true;
    }

    return false;
  }

  render() {
    const { highlight, x, y, width, hide } = this.props;
    const fillColor = highlight ? style.fillHighlight : style.fillDefault;
    const strokeColor = highlight ? style.strokeHighlight : style.strokeDefault;
    const isHide = hide ? 0 : 1;

    return (
      <Fragment>
        <MediaQuery maxWidth={414}>
          <g opacity={isHide}>
            <rect
              x={x + 1.5}
              y={y + 1.5}
              width={width - 3}
              height={width - 3}
              style={{ strokeWidth: 1.75, fillOpacity: 0 }}
              className={strokeColor}
            />
            <rect
              x={x + 3.5}
              y={y + 3.5}
              width={width - 7}
              height={width - 7}
              className={fillColor}
            />
          </g>
        </MediaQuery>
        <MediaQuery minWidth={414} maxWidth={539}>
          <g opacity={isHide}>
            <rect
              x={x + 1.25}
              y={y + 1.25}
              width={width - 2.5}
              height={width - 2.5}
              style={{ strokeWidth: 1.5, fillOpacity: 0 }}
              className={strokeColor}
            />
            <rect
              x={x + 3.5}
              y={y + 3.5}
              width={width - 7}
              height={width - 7}
              className={fillColor}
            />
          </g>
        </MediaQuery>
        <MediaQuery minWidth={540}>
          <g opacity={isHide}>
            <rect
              x={x + 2}
              y={y + 2}
              width={width - 4}
              height={width - 4}
              style={{ strokeWidth: 2, fillOpacity: 0 }}
              className={strokeColor}
            />
            <rect
              x={x + 5}
              y={y + 5}
              width={width - 10}
              height={width - 10}
              className={fillColor}
            />
          </g>
        </MediaQuery>
      </Fragment>
    );
  }
}

export default Pixel;
