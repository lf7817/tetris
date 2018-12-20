import React, { memo, ReactNode } from 'react';
import intl from 'react-intl-universal';
import style from './style.module.scss';

interface DecorateProps {
  children: ReactNode;
}

const Decorate = ({ children }: DecorateProps) => (
  <div className={style.wrapper}>
    <div className={style.decorate}>
      <h1 className={style.logo}>
        {
          intl.get('gameName')
        }
      </h1>
    </div>
    <div className={style.center}>
      <div className={style.dotsLeft}>
        <span className={style.dot}></span>
        <span className={style.dot}></span>
        <span className={style.dot}></span>
        <span className={style.dot}></span>
        <span className={style.dot}></span>
      </div>
      <div className={style.dotsRight}>
        <span className={style.dot}></span>
        <span className={style.dot}></span>
        <span className={style.dot}></span>
        <span className={style.dot}></span>
        <span className={style.dot}></span>
      </div>
      <div className={style.screen}>
        {
          children
        }
      </div>
    </div>
  </div>
);

export default memo(Decorate);
