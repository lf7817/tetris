/*
 * @Author: lifan
 * @Date: 2019-01-14 22:03:47
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-16 14:06:50
 */
import React, { FunctionComponent, memo, useMemo } from "react";
import intl from "react-intl-universal";
import { BLOCK_SHAPE, BlockShap } from "../../constants/block";
import Matrix from "../Matrix";
import styles from "./style.module.scss";

const xy = {
  // 方块在下一个中的坐标
  I: [1, 0],
  L: [0, 0],
  J: [0, 0],
  Z: [0, 0],
  S: [0, 0],
  O: [0, 1],
  T: [0, 0],
};

interface INextProps {
  shap: BlockShap;
  width: number;
}

const Next: FunctionComponent<INextProps> = props => {
  const { width, shap } = props;
  const shapBlock = BLOCK_SHAPE[shap];
  const matrix = useMemo(() => {
    const empty = [[0, 0, 0, 0], [0, 0, 0, 0]];

    for (let i = 0; i < shapBlock.length; i++) {
      const row = shapBlock[i];
      for (let j = 0; j < row.length; j++) {
        const item = row[j];
        if (item !== 0) {
          empty[i + xy[shap][0]][j + xy[shap][1]] = 1;
        }
      }
    }

    return empty;
  }, [shap]);

  return (
    <div className={styles.next}>
      <p>{intl.get("next")}</p>
      <div>
        <Matrix matrix={matrix} width={width} />
      </div>
    </div>
  );
};

function areEqual(prevProps: INextProps, nextProps: INextProps) {
  if (prevProps.shap !== nextProps.shap || prevProps.width !== nextProps.width) {
    return false;
  }

  return true;
}

export default memo(Next, areEqual);
