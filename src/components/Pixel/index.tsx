/*
 * @Author: lifan
 * @Date: 2018-12-19 09:02:19
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-21 14:55:16
 */
import React, { memo, Fragment } from 'react';
import MediaQuery from 'react-responsive';
import style from './style.module.scss';

interface BlockProps {
  x: number;
  y: number;
  width: number;
  highlight?: boolean;
  hide?: boolean;
}

const Block = ({ highlight, x, y, width, hide }: BlockProps) => {
  const fillColor = highlight ? style.fillHighlight : style.fillDefault;
  const strokeColor = highlight ? style.strokeHighlight : style.strokeDefault;
  const isHide = hide ? 0 : 1;
  return (
    <Fragment>
      <MediaQuery maxWidth={414}>
        <g opacity={isHide}>
          <rect
            x={x}
            y={y}
            width={width}
            height={width}
            opacity={0}
          />
          <rect
            x={x + 1.5}
            y={y + 1.5}
            width={width - 3}
            height={width - 3}
            style={{ strokeWidth: 1.5, fillOpacity: 0.01 }}
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
      <MediaQuery minWidth={415} maxWidth={539}>
        <g opacity={isHide}>
          <rect
            x={x}
            y={y}
            width={width}
            height={width}
            opacity={0}
          />
          <rect
            x={x + 1.5}
            y={y + 1.5}
            width={width - 3}
            height={width - 3}
            style={{ strokeWidth: 1.5, fillOpacity: 0.01 }}
            className={strokeColor}
          />
          <rect
            x={x + 4}
            y={y + 4}
            width={width - 8}
            height={width - 8}
            className={fillColor}
          />
        </g>
      </MediaQuery>
      <MediaQuery minWidth={540}>
        <g opacity={isHide}>
          <rect
            x={x}
            y={y}
            width={width}
            height={width}
            opacity={0}
          />
          <rect
            x={x + 2}
            y={y + 2}
            width={width - 4}
            height={width - 4}
            style={{ strokeWidth: 2, fillOpacity: 0.01 }}
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
};

Block.defaultProps = {
  highlight: false,
  hide: false,
};

export default memo(Block);