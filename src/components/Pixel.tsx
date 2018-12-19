/*
 * @Author: lifan
 * @Date: 2018-12-19 09:02:19
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-19 09:11:19
 */
import React, { memo } from 'react';

interface BlockProps {
  x: number;
  y: number;
  width: number;
  highlight?: boolean;
}

const HighLightFillColor = '#000000';
const DefaultFillColor = '#879372';
const DefaultStrokeColor = '#9ead86';

const Block = ({ highlight, x, y, width }: BlockProps) => {
  const fillColor = highlight ? HighLightFillColor : DefaultFillColor;
  const strokeColor = DefaultStrokeColor;
  return (
    <g>
      <rect x={x} y={y} width={width} height={width} style={{ fill: fillColor }} />
      <rect x={x + 2} y={y + 2} width={width - 4} height={width - 4} style={{ stroke: strokeColor, strokeWidth: 2, fill: fillColor }} />
    </g>
  );
};

Block.defaultProps = {
  highlight: false
};

export default memo(Block);
