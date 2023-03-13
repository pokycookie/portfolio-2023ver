import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function DoubleAngle() {
  const size = 25;
  const gap = size / 3;

  return (
    <div className="icon" style={{ width: size, height: size * 2 }}>
      <motion.div
        initial={{ y: gap / 2 }}
        animate={{ y: [gap / 2, gap * 1.5, gap / 2] }}
        transition={{ delay: 0.3, duration: 1, repeat: Infinity }}
      >
        <FontAwesomeIcon icon={faChevronDown} color="white" fontSize={size} />
      </motion.div>
      <motion.div
        initial={{ y: -(gap / 2) }}
        animate={{ y: [-(gap / 2), gap * 0.5, -(gap / 2)] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <FontAwesomeIcon icon={faChevronDown} color="white" fontSize={size} />
      </motion.div>
    </div>
  );
}

export default DoubleAngle;
