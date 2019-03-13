/*
 * @Author: lifan
 * @Date: 2018-12-19 21:05:34
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-16 14:07:09
 */
import React, { Fragment, FunctionComponent, memo, useEffect, useRef, useState } from "react";
import intl from "react-intl-universal";
import { BlockShap } from "../../constants/block";
import Character from "../Character";
import Decorate from "../Decorate";
import Matrix from "../Matrix";
import Next from "../Next";
import Number from "../Number";
import Time from "../Time";
import styles from "./style.module.scss";

interface IScreenProps {
  matrix: number[][];
  score: number;
  max: number;
  speed: number;
  startLines: number;
  clearLines: number;
  playing: boolean;
  pause: boolean;
  sound: boolean;
  next: BlockShap;
}

const Screen: FunctionComponent<IScreenProps> = memo(props => {
  const [w, setW] = useState<number>(0);
  const [scoreFlashflag, toggleScoreFlashflag] = useState<boolean>(false);
  const $refPanl: React.RefObject<HTMLDivElement> = useRef(null);
  const { matrix, max, score, startLines, clearLines, pause, playing, speed, sound, next } = props;
  const pixelWidth = w / matrix[0].length;

  function calcWidth() {
    if ($refPanl.current) {
      setW($refPanl.current.clientWidth);
    }
  }

  useEffect(() => {
    calcWidth();
    window.addEventListener("resize", calcWidth);

    return () => {
      window.removeEventListener("resize", calcWidth);
    };
  }, []);

  useEffect(() => {
    if (playing) {
      return;
    }

    setTimeout(() => {
      // tslint:disable-next-line: no-unused-expression
      score !== 0 && toggleScoreFlashflag(!scoreFlashflag);
    }, 3000);
  }, [scoreFlashflag, playing, score]);

  return (
    <div className={styles.wrapper}>
      <Decorate />
      <div className={styles.center}>
        <div className={styles.screenWrapper}>
          <div className={styles.screen}>
            <div className={styles.mainPanel}>
              <div ref={$refPanl}>
                <Matrix matrix={matrix} width={w} />
              </div>
            </div>
            <div className={styles.statusPanel}>
              {playing ? (
                <Fragment>
                  <Number title={intl.get("score")} length={6} value={score} />
                  <Number title={intl.get("cleans")} length={6} value={clearLines} />
                  <Number title={intl.get("speed")} length={1} value={speed} />
                </Fragment>
              ) : (
                <Fragment>
                  {!scoreFlashflag ? (
                    <Number title={intl.get("max")} length={6} value={max} />
                  ) : (
                    <Number title={intl.get("lastRound")} length={6} value={score} />
                  )}
                  <Number title={intl.get("startLines")} length={6} value={startLines} />
                  <Number title={intl.get("speed")} length={1} value={speed} />
                </Fragment>
              )}
              <Next shap={next} width={pixelWidth * 4} />
              <Character value={sound ? "sound_on" : "sound_off"} className={styles.sound} />
              <Character value={pause ? "pause_on" : "pause_off"} className={styles.pause} />
              <Time className={styles.time} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Screen;
