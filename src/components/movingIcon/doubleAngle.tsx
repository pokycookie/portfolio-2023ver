/** @jsxImportSource @emotion/react */

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRefStore } from "../../store";

interface IProps {
  onClick?: () => void;
}

function DoubleAngle(props: IProps) {
  const size = 25;
  const gap = size / 3;

  const [isHidden, setIsHidden] = useState(false);

  const app = useRefStore((state) => state.app);

  const scrollHandler = () => {
    if ((app?.scrollTop ?? 0) > 20) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    if (!app) return;
    app.addEventListener("scroll", scrollHandler);
    return () => {
      app.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app]);

  return (
    <motion.div
      onClick={props.onClick}
      css={{ width: size, height: size * 2, cursor: "pointer" }}
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
