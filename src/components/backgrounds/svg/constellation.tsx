import { useEffect, useRef, useState } from "react";
import { _random, _range } from "../../../lib/basic";
import { motion } from "framer-motion";
import Star from "./star";

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

function Constellation(props: IProps) {
  const [dotArr, setDotArr] = useState<ICoord[]>([]);
  const [lineArr, setLineArr] = useState<ILinePath[]>([]);
  const [graph, setGraph] = useState<number[][]>([]);

  const count = useRef(props.count ?? _random(10, 3));

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
    const tmpArr: ICoord[] = [];
    _range(count.current).forEach((i) => {
      tmpArr.push({ x: _random(100), y: _random(100) });
    });
    const tmpGraph: number[][] = [];
    _range(count.current).forEach((i) => {
      const tmp = [];
      for (let j = i + 1; j < count.current; j++) {
        if (j === i + 1) {
          tmp.push(j);
        } else if (Math.random() > 0.95) {
          //   tmp.push(j);
        }
      }
      tmpGraph.push(tmp);
      setGraph(tmpGraph);
    });
    tmpArr.sort((a, b) => a.y - b.y);
    setDotArr(tmpArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <svg
      x={props.x ?? 0}
      y={props.y ?? 0}
      width={props.width ?? 0}
      height={props.height ?? 0}
      viewBox="0 0 100 100"
      style={{ padding: 5 }}
    >
      <filter id="constellation--blur">
        <feGaussianBlur stdDeviation={props.blur ?? 0.15} />
      </filter>
      {dotArr.map((e, i) => {
        return <Star key={i} x={e.x} y={e.y} size={5} blur={0.5} r={[0.4, 0.15, 0.4]} />;
      })}
      {/* {lineArr.map((e, i) => {
        return (
          <motion.line
            key={i}
            stroke="white"
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            initial={{ strokeWidth: 0.005 }}
            animate={{ strokeWidth: [0.005, 0.05, 0.005] }}
            transition={{ duration: _random(15, 3), repeat: Infinity }}
            filter="url(#constellation--blur)"
          />
        );
      })} */}
    </svg>
  );
}

export default Constellation;
