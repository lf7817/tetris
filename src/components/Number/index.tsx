/*
 * @Author: lifan
 * @Date: 2019-01-11 13:58:04
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-16 14:06:56
 */
import React, { FunctionComponent, memo } from "react";
import Character from "../Character";
import styles from "./style.module.scss";

interface INumberProps {
  className?: string;
  value: number;
  length: number;
  title: string;
}

const Num: FunctionComponent<INumberProps> = memo(props => {
  const { title, length, value } = props;
  const data = value.toString().split("");
  const list = new Array(length - data.length).fill("").concat(data);

  return (
    <div className={styles.number}>
      <p>{title}</p>
      <div>
        {list.map((item, index) => (
          <Character key={index} value={item} />
        ))}
      </div>
    </div>
  );
});

export default Num;
