import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./header.css";

function Header() {
  const [isHidden, setIsHidden] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 20) {
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
    <motion.header
      animate={isHidden ? "off" : "on"}
      variants={{ on: { y: 0 }, off: { y: -130 } }}
      transition={{ ease: "easeInOut" }}
    >
      <motion.div className="titleArea">
        <p>PORTFOLIO</p>
        <p>2023ver</p>
      </motion.div>
    </motion.header>
  );
}

export default Header;
