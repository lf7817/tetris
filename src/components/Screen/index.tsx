/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2018-12-19 23:04:09
 */
import React, { memo, ReactNode } from 'react';
import style from './sttyle.module.scss';

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className={style.wrapper}>
    <div className={style.center}>
      <div className={style.screen}>
        {
          children
        }
      </div>
    </div>
  </div>
);

const Screen = () => (
  <Wrapper>
    hello
  </Wrapper>
);

export default memo(Screen);
