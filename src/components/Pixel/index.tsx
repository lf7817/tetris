/*
 * @Author: lifan
 * @Date: 2018-12-19 09:02:19
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-20 20:30:00
 */
import React, { memo } from 'react';
import style from './style.module.scss';

interface BlockProps {
  x: number;
  y: number;
  width: number;
  highlight?: boolean;
}

const Block = ({ highlight, x, y, width }: BlockProps) => {
  const fillColor = highlight ? style.fillHighlight : style.fillDefault;
  return (
    <g>
      <rect x={x} y={y} width={width} height={width} opacity={0} />
      <rect x={x + 1} y={y + 1} width={width - 2} height={width - 2} className={fillColor} />
      <rect x={x + 3} y={y + 3} width={width - 6} height={width - 6} className={`${fillColor} ${style.strokeDefault}`} />
    </g>
  );
};

Block.defaultProps = {
  highlight: false
};

export default memo(Block);
