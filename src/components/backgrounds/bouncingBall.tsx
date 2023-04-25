/** @jsxImportSource @emotion/react */

import { useRef } from "react";
import { _random } from "../../lib/basic";
import { motion } from "framer-motion";

function BouncingBall() {
  const size = useRef(_random(400, 100));
  const pos = useRef({ x: _random(100), y: _random(100) });

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      animate={{
        x: [0, _random(200, -200), 0],
        y: [0, _random(200, -200), 0],
      }}
      transition={{ duration: _random(40, 20), repeat: Infinity }}
      css={{
        width: size.current,
        height: size.current,
        borderRadius: "50%",
        position: "absolute",
        left: `${pos.current.x}%`,
        top: `${pos.current.y}%`,
        backgroundColor: `hsla(${_random(360)}, 85%, 80%, 0.6)`,
      }}
    ></motion.div>
  );
}

export default BouncingBall;
