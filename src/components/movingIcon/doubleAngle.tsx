import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function DoubleAngle() {
  const size = 25;
  const gap = size / 3;

  return (
    <div className="icon">
      <motion.div
        initial={{ y: gap }}
        animate={{ y: [gap, gap * 2, gap] }}
        transition={{ delay: 0.3, duration: 1, repeat: Infinity }}
      >
        <FontAwesomeIcon icon={faChevronDown} color="white" fontSize={size} />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, gap, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <FontAwesomeIcon icon={faChevronDown} color="white" fontSize={size} />
      </motion.div>
    </div>
  );
}

export default DoubleAngle;
