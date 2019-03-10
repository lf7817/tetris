/*
 * @Author: lifan
 * @Date: 2019-01-09 14:30:08
 * @Last Modified by: lifan
 * @Last Modified time: 2019-03-10 17:24:18
 */
import React, { FunctionComponent, memo, useEffect, useRef, useState } from 'react';
import intl from 'react-intl-universal';
import { BLOCK_DECORATE, BLOCK_DECORATE_REVERSE } from '../../constants/block';
import Matrix from '../Matrix';
import styles from './style.module.scss';

const Decorate: FunctionComponent<{}> = memo(() => {
  const [width, setWidth] = useState<number>(0);
  const $refLeft: React.RefObject<HTMLDivElement> = useRef(null);
  const calcWidth = () => {
    if ($refLeft != null && $refLeft.current != null) {
      setWidth($refLeft.current.clientWidth);
    }
  };

  useEffect(() => {
    calcWidth();
    window.addEventListener('resize', calcWidth);

    return () => {
      window.removeEventListener('resize', calcWidth);
    };
  }, []);

  return (
    <div className={styles.decorate}>
      <h1 className={styles.logo}>
        {
          intl.get('gameName')
        }
      </h1>
      <div className={styles.left} ref={$refLeft}>
        <Matrix matrix={BLOCK_DECORATE} width={width} hideBlankPixel={true} />
      </div>
      <div className={styles.right}>
        <Matrix matrix={BLOCK_DECORATE_REVERSE} width={width} hideBlankPixel={true} />
      </div>
      <div className={styles.dotWrapper}>
        <div className={styles.dotsLeft}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <div className={styles.dotsRight}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>
    </div>
  );
});

export default Decorate;
