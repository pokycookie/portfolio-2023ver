import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { _random, _range } from "../../../lib/basic";
import { useInterval } from "../../../lib/hooks";

interface ICoord {
  x: number;
  y: number;
}

interface ILinePath {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

interface IProps {
  count?: number;
  width?: number;
  height?: number;
  blur?: number;
}

const transition = { duration: 10, ease: "linear" };

function Polygon(props: IProps) {
  const [dotArr, setDotArr] = useState<ICoord[]>([]);
  const [lineArr, setLineArr] = useState<ILinePath[]>([]);
  const count = useRef(props.count ?? _random(15, 5));

  useInterval(() => {
    const tmpArr = _range(count.current).map<ICoord>(() => {
      return { x: _random(100), y: _random(100) };
    });
    setDotArr(tmpArr);
  }, 3000);

  useEffect(() => {
    const tmpArr: ILinePath[] = [];
    dotArr.forEach((e, i, a) => {
      for (let j = i + 1; j < a.length; j++) {
        tmpArr.push({ x1: e.x, y1: e.y, x2: a[j].x, y2: a[j].y });
      }
    });
    setLineArr(tmpArr);
  }, [dotArr]);

  useEffect(() => {
    const tmpArr = _range(count.current).map<ICoord>(() => {
      return { x: _random(100), y: _random(100) };
    });
    setDotArr(tmpArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <svg viewBox="0 0 100 100" width={props.width ?? 0} height={props.height ?? 0}>
      <filter id="gaussianBlur">
        <feGaussianBlur stdDeviation={props.blur ?? 0.15} />
      </filter>
      {dotArr.map((e, i) => {
        return (
          <motion.circle
            key={i}
            fill="white"
            r="0.3"
            animate={{ cx: e.x, cy: e.y }}
            transition={transition}
            filter="url(#gaussianBlur)"
          />
        );
      })}
      {lineArr.map((e, i) => {
        return (
          <motion.line
            key={i}
            stroke="white"
            strokeWidth="0.1"
            animate={{ x1: e.x1, y1: e.y1, x2: e.x2, y2: e.y2 }}
            transition={transition}
            filter="url(#gaussianBlur)"
          />
        );
      })}
    </svg>
  );
}

export default Polygon;
