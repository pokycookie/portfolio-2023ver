import React, { useEffect, useRef, useState } from "react";
import { _random, _range } from "../../../lib/basic";
import { useInterval } from "../../../lib/hooks";
import { Transition, motion } from "framer-motion";

interface ICoord {
  x: number;
  y: number;
}

interface IProps {
  count?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

const transition: Transition = { duration: 3, ease: "linear" };

function Zodiac(props: IProps) {
  const [posArr, setPosArr] = useState<ICoord[]>([]);
  const count = useRef(props.count ?? _random(15, 5));

  useInterval(() => {
    const tmpArr = _range(count.current).map<ICoord>(() => {
      return { x: _random(100), y: _random(100) };
    });
    setPosArr(tmpArr);
  }, 3000);

  useEffect(() => {
    const tmpArr = _range(count.current).map<ICoord>(() => {
      return { x: _random(100), y: _random(100) };
    });
    setPosArr(tmpArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      x={props.x ?? 0}
      y={props.y ?? 0}
      width={props.width ?? 0}
      height={props.height ?? 0}
    >
      <filter id="gaussianBlur">
        <feGaussianBlur stdDeviation="0.3" />
      </filter>
      {posArr.map((e, i, a) => {
        if (i === 0) {
          return (
            <motion.circle
              key={i}
              r={1}
              fill="white"
              animate={{ cx: e.x, cy: e.y }}
              transition={transition}
              filter="url(#gaussianBlur)"
            />
          );
        } else {
          return (
            <React.Fragment key={i}>
              <motion.circle
                key={i}
                r={1}
                fill="white"
                animate={{ cx: e.x, cy: e.y }}
                transition={transition}
                filter="url(#gaussianBlur)"
              />
              <motion.line
                stroke="white"
                strokeWidth="0.3"
                animate={{ x1: e.x, y1: e.y, x2: a[i - 1].x, y2: a[i - 1].y }}
                transition={transition}
                filter="url(#gaussianBlur)"
              />
            </React.Fragment>
          );
        }
      })}
    </svg>
  );
}

export default Zodiac;
