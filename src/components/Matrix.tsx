/*
 * @Author: lifan
 * @Date: 2018-12-21 10:29:52
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-16 14:06:40
 */
import React, { FunctionComponent, memo } from 'react';
import Pixel from './Pixel';

interface IMatrixProps {
  matrix: number[][];
  width: number;
  hideBlankPixel?: boolean;
}

const Matrix: FunctionComponent<IMatrixProps> = (props) => {
  const { matrix, width, hideBlankPixel = false } = props;
  const pixelWidth = width / matrix[0].length || 10;
  const height = matrix.length * pixelWidth;

  return (
    <svg width={width} height={height}>
      {
        matrix.map((row, i) => (
          row.map((b, j) => (
            <Pixel key={`${i}_${j}`} width={pixelWidth} x={j * pixelWidth} y={i * pixelWidth} highlight={!!b} hide={hideBlankPixel && b === 0} />
          ))
        ))
      }
    </svg>
  );
};

function areEqual(prevProps: IMatrixProps, nextProps: IMatrixProps) {
  const { matrix, width, hideBlankPixel } = prevProps;
  if (nextProps.matrix !== matrix || nextProps.width !== width ||
      nextProps.hideBlankPixel !== hideBlankPixel) {
    return false;
  }
  return true;
}

export default memo(Matrix, areEqual);
