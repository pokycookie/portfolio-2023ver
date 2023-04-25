/** @jsxImportSource @emotion/react */

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { _className } from "../../lib/basic";
import { useEffect, useState } from "react";

interface IProps {
  className?: string;
}

function DoubleAngle(props: IProps) {
  const size = 25;
  const gap = size / 3;

  const [isHidden, setIsHidden] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className={_className("icon", props.className)}
      css={{ width: size, height: size * 2 }}
      animate={isHidden ? { opacity: 0 } : { opacity: 1 }}
    >
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
    </motion.div>
  );
}

export default DoubleAngle;
