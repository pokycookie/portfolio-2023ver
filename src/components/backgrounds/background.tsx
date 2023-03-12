import { useEffect, useState } from "react";
import Constellation from "./svg/constellation";
import { _range } from "../../lib/basic";
import "./background.css";

interface ICoord {
  x: number;
  y: number;
}

interface IProps {
  size: { width: number; height: number };
  divide?: number;
}

function Background(props: IProps) {
  const [area, setArea] = useState<ICoord[][]>([]);

  useEffect(() => {
    const width = 200;
    const height = 200;
    const countX = props.size.width / width;
    const countY = props.size.height / height;
    const tmpArea = _range(countY).map<ICoord[]>((y) => {
      return _range(countX).map<ICoord>((x) => {
        return { x: width * x, y: height * y };
      });
    });
    setArea(tmpArea);
  }, [props.size.height, props.size.width]);

  return (
    <svg className="background" width={props.size.width} height={props.size.height}>
      <rect x="0" y="0" width="100%" height="100%" fill="#1B1D20" />
      {area.map((sub, i) => {
        return sub.map((e, j) => {
          return (
            <Constellation
              key={`${e}${j}`}
              x={e.x}
              y={e.y}
              width={props.size.width / (props.divide ?? 1)}
              height={props.size.height / (props.divide ?? 1)}
            />
          );
        });
      })}
    </svg>
  );
}

export default Background;
