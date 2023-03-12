import { motion } from "framer-motion";
import { useRef } from "react";
import { _random } from "../../../lib/basic";

interface IProps {
  size: number;
  x: number;
  y: number;
  r?: number[];
  blur?: number;
}

function Star(props: IProps) {
  const duration = useRef(_random(15, 5));

  return (
    <svg>
      <filter id="star--blur">
        <feGaussianBlur stdDeviation={props.blur ?? 0.15} />
      </filter>
      <motion.circle
        fill="white"
        cx={props.x}
        cy={props.y}
        animate={{ r: props.r }}
        transition={{ duration: duration.current, repeat: Infinity, ease: "easeInOut" }}
        filter="url(#star--blur)"
      />
    </svg>
  );
}

export default Star;
