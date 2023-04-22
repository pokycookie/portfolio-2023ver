/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { css } from "@emotion/react";

const headerCSS = css({
  width: "100%",
  height: "130px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "0px 20px",
});

const titleCSS = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  color: "white",
  gap: "3px",
});

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
      css={headerCSS}
    >
      <motion.div css={titleCSS}>
        <p css={{ fontSize: "28px", fontWeight: "600" }}>PORTFOLIO</p>
        <p css={{ fontSize: "13px", fontWeight: "300" }}>2023ver</p>
      </motion.div>
    </motion.header>
  );
}

export default Header;
