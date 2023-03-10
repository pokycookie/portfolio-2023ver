import Polygon from "./svg/polygon";
import Zodiac from "./svg/zodiac";

interface IProps {
  size: { width: number; height: number };
}

function Background(props: IProps) {
  return (
    <svg className="background" width={props.size.width} height={props.size.height}>
      <rect x="0" y="0" width="100%" height="100%" fill="black" />
      {/* <Polygon width={props.size.width / 2} height={props.size.height / 2} /> */}
      <Zodiac width={props.size.width / 2} height={props.size.height / 2} blur={0.2} />
    </svg>
  );
}

export default Background;
