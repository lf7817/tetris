/*
 * @Author: lifan
 * @Date: 2018-12-21 10:29:52
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-21 14:08:30
 */
import React, { Component } from 'react';
import Pixel from './Pixel';

interface MatrixProps {
  matrix: number[][];
  width: number;
  hideBlankPixel?: boolean;
}

class Matrix extends Component<MatrixProps> {
  static defaultProps = {
    hideBlankPixel: false
  }

  shouldComponentUpdate(nextProps: MatrixProps) {
    const { matrix, width, hideBlankPixel } = this.props;
    if (nextProps.matrix !== matrix || nextProps.width !== width ||
        nextProps.hideBlankPixel !== hideBlankPixel) {
      return true;
    }
    return false;
  }

  render() {
    const { matrix, width, hideBlankPixel } = this.props;
    const pixelWidth = width / matrix[0].length || 10;
    const height = matrix.length * pixelWidth;

    console.log('matrix rerender');

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
  }
}

export default Matrix;
