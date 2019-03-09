/*
 * @Author: lifan
 * @Date: 2019-01-10 22:40:52
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 13:32:23
 */
import cn from 'classnames';
import React, { FunctionComponent, memo, useEffect, useState } from 'react';
import Character from '../Character';
import styles from './style.module.scss';

interface ITimeProps {
  className?: string;
}

interface ITimeState {
  h1: CharacterValue;
  m1: CharacterValue;
  h2: CharacterValue;
  m2: CharacterValue;
}

const Time: FunctionComponent<ITimeProps> = memo((props) => {
  const [state, setState] = useState<ITimeState>({
    h1: '0' as CharacterValue,
    m1: '0' as CharacterValue,
    h2: '0' as CharacterValue,
    m2: '0' as CharacterValue,
  });

  function calcTime() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();

    setState({
      h1: Math.floor(h / 10).toString() as CharacterValue,
      h2: (h % 10).toString() as CharacterValue,
      m1: Math.floor(m / 10).toString() as CharacterValue,
      m2: (m % 10).toString() as CharacterValue,
    });
  }

  useEffect(() => {
    const timer = setInterval(calcTime, 30000);
    calcTime();

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <div className={cn(styles.time, props.className)}>
      <Character value={state.h1} />
      <Character value={state.h2} />
      <Character value="colon" />
      <Character value={state.m1} />
      <Character value={state.m2} />
    </div>
  );
});

export default Time;
