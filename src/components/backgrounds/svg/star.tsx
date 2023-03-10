import { motion } from "framer-motion";
import { useRef } from "react";
import { _random } from "../../../lib/basic";

interface IProps {
  x: number;
  y: number;
  r?: number[];
  filter?: string;
}

function Star(props: IProps) {
  const duration = useRef(_random(15, 3));

  return (
    <motion.circle
      fill="white"
      animate={{ cx: props.x, cy: props.y, r: props.r }}
      transition={{ duration: duration.current }}
      filter={props.filter}
    />
  );
}

export default Star;
