/*
 * @Author: lifan
 * @Date: 2018-12-21 10:29:52
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-21 10:36:50
 */
import React, { memo } from 'react';
import Pixel from './Pixel';

interface MatrixProps {
  matrix: number[][];
  width: number;
  height: number;
}

const Matrix = ({ matrix, width, height }: MatrixProps) => {
  const pixelWidth = width / matrix[0].length || 10;

  return (
    <svg width={width} height={height}>
      {
        matrix.map((row, i) => (
          row.map((b, j) => (
            <Pixel key={`${i}_${j}`} width={pixelWidth} x={j * pixelWidth} y={i * pixelWidth} highlight={!!b} />
          ))
        ))
      }
    </svg>
  );
};

export default memo(Matrix);
