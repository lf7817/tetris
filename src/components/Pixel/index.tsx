/*
 * @Author: lifan
 * @Date: 2018-12-19 09:02:19
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 12:24:37
 */
import React, { Fragment, FunctionComponent, memo } from 'react';
import MediaQuery from 'react-responsive';
import style from './style.module.scss';

interface IPixelProps {
  x: number;
  y: number;
  width: number;
  highlight?: boolean;
  hide?: boolean;
}

const Pixel: FunctionComponent<IPixelProps> = (props) => {
  const { highlight = false, x, y, width, hide = false } = props;
  const fillColor = highlight ? style.fillHighlight : style.fillDefault;
  const strokeColor = highlight ? style.strokeHighlight : style.strokeDefault;

  return (
    <Fragment>
      <MediaQuery maxWidth={414}>
        {
          !hide ?
            <g>
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
            </g> : null
        }
      </MediaQuery>
      <MediaQuery minWidth={414} maxWidth={539}>
        {
          !hide ?
            <g>
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
            </g> : null
        }
      </MediaQuery>
      <MediaQuery minWidth={540}>
        {
          !hide ?
            <g>
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
            </g> : null
        }
      </MediaQuery>
    </Fragment>
  );
};

export default memo(Pixel);
