/*
 * @Author: lifan
 * @Date: 2019-01-10 13:48:44
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 12:45:48
 */
import cn from 'classnames';
import React, { FunctionComponent, memo } from 'react';
import styles from './style.module.scss';

interface ICharacterProps {
  value?: CharacterValue;
  className?: string;
}

const Character: FunctionComponent<ICharacterProps> = memo((props) => {
  const { value = '', className = '' } = props;
  return (
    <span className={cn(styles.character, className, styles[`character_${value}`])} />
  );
});

export default Character;
