import { useEffect, useRef, useState } from "react";
import { _random, _range } from "../../../lib/basic";
import { useInterval } from "../../../lib/hooks";
import { Transition, motion } from "framer-motion";

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
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  blur?: number;
}

const transition: Transition = { duration: 10, ease: "linear" };

function Zodiac(props: IProps) {
  const [dotArr, setDotArr] = useState<ICoord[]>([]);
  const [lineArr, setLineArr] = useState<ILinePath[]>([]);
  const [graph, setGraph] = useState<number[][]>([]);
  const [dotInit, setDotInit] = useState<ICoord[]>([]);
  const [lineInit, setLineInit] = useState<ILinePath[]>([]);

  const count = useRef(props.count ?? _random(10, 3));

  useInterval(() => {
    const tmpArr = _range(count.current).map<ICoord>(() => {
      return { x: _random(100), y: _random(100) };
    });
    setDotArr(tmpArr);
  }, 10000);

  useEffect(() => {
    const tmpArr: ILinePath[] = [];
    dotArr.forEach((e, i, a) => {
      graph[i].forEach((g) => {
        tmpArr.push({ x1: e.x, y1: e.y, x2: a[g].x, y2: a[g].y });
      });
    });
    setLineArr(tmpArr);
  }, [dotArr, graph]);

  useEffect(() => {
    const tmpDotArr = _range(count.current).map<ICoord>(() => {
      return { x: _random(100), y: _random(100) };
    });

    const tmpDotInit = _range(count.current).map<ICoord>(() => {
      return { x: _random(100), y: _random(100) };
    });

    const tmpGraph: number[][] = [];
    _range(count.current).forEach((i) => {
      const tmp = [];
      for (let j = i + 1; j < count.current; j++) {
        if (j === i + 1) {
          tmp.push(j);
        } else if (Math.random() > 0.9) {
          tmp.push(j);
        }
      }
      tmpGraph.push(tmp);
    });

    const tmpLineInit: ILinePath[] = [];
    tmpDotInit.forEach((e, i, a) => {
      tmpGraph[i].forEach((g) => {
        tmpLineInit.push({ x1: e.x, y1: e.y, x2: a[g].x, y2: a[g].y });
      });
    });

    setDotArr(tmpDotArr);
    setGraph(tmpGraph);
    setDotInit(tmpDotInit);
    setLineInit(tmpLineInit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={props.width ?? 0}
      height={props.height ?? 0}
      animate={{ x: props.x ?? 0, y: props.y ?? 0 }}
      transition={{ duration: 10, ease: "linear" }}
    >
      <filter id="zodiac--blur">
        <feGaussianBlur stdDeviation={props.blur ?? 0.15} />
      </filter>
      {dotArr.map((e, i) => {
        const init = dotInit[i];
        return (
          <motion.circle
            key={i}
            fill="white"
            r="0.4"
            initial={{ cx: init.x, cy: init.y }}
            animate={{ cx: e.x, cy: e.y }}
            transition={transition}
            filter="url(#zodiac--blur)"
          />
        );
      })}
      {lineArr.map((e, i) => {
        const init = lineInit[i];
        return (
          <motion.line
            key={i}
            stroke="white"
            strokeWidth="0.1"
            initial={{ x1: init.x1, y1: init.y1, x2: init.x2, y2: init.y2 }}
            animate={{ x1: e.x1, y1: e.y1, x2: e.x2, y2: e.y2 }}
            transition={transition}
            filter="url(#zodiac--blur)"
          />
        );
      })}
    </motion.svg>
  );
}

export default Zodiac;
