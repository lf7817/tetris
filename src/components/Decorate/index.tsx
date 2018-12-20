import React, { memo, ReactNode } from 'react';
import style from './style.module.scss';

interface DecorateProps {
  children: ReactNode;
}

const Decorate = ({ children }: DecorateProps) => (
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

export default memo(Decorate);
