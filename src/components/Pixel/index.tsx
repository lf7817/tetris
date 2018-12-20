/*
 * @Author: lifan
 * @Date: 2018-12-19 09:02:19
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-20 16:27:32
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
      <rect x={x} y={y} width={width} height={width} className={fillColor} />
      <rect x={x + 2} y={y + 2} width={width - 4} height={width - 4} className={`${fillColor} ${style.strokeDefault}`} />
    </g>
  );
};

Block.defaultProps = {
  highlight: false
};

export default memo(Block);
