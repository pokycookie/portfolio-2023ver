/** @jsxImportSource @emotion/react */

import { useRef } from "react";
import { _random } from "../../lib/basic";
import { motion } from "framer-motion";

function BouncingBall() {
  const posREF = useRef({ x: _random(100), y: _random(100) });
  const sizeREF = useRef(_random(400, 100));
  const colorREF = useRef(_random(360));
  const animateREF = useRef({ x: _random(200, -200), y: _random(200, -200) });

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      animate={{
        x: [0, animateREF.current.x, 0],
        y: [0, animateREF.current.y, 0],
      }}
      transition={{ duration: _random(40, 20), repeat: Infinity }}
      css={{
        width: sizeREF.current,
        height: sizeREF.current,
        borderRadius: "50%",
        position: "absolute",
        left: `${posREF.current.x}%`,
        top: `${posREF.current.y}%`,
        backgroundColor: `hsla(${colorREF.current}, 85%, 80%, 0.6)`,
      }}
    ></motion.div>
  );
}

export default BouncingBall;
