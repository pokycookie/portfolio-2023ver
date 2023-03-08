import "./background.css";
import Zodiac from "./zodiac/zodiac";

interface IProps {
  size: { width: number; height: number };
}

function Background(props: IProps) {
  return (
    <svg className="background" width={props.size.width} height={props.size.height}>
      <rect x="0" y="0" width="100%" height="100%" fill="#2c3333" />
      <Zodiac x={0} y={0} width={props.size.width / 2} height={props.size.height / 2} />
    </svg>
  );
}

export default Background;
