/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { useScrollStore } from "../../store";

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const scroll = useScrollStore((state) => state.scroll);

  useEffect(() => {
    if (scroll.y > 20) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [scroll]);

  return (
    <motion.header
      animate={isHidden ? "off" : "on"}
      variants={{ on: { y: 0 }, off: { y: -130 } }}
      transition={{ ease: "easeInOut", delay: 0.3 }}
      css={headerCSS}
    >
      <motion.div css={titleCSS}>
        <p css={{ fontSize: "28px", fontWeight: "600" }}>PORTFOLIO</p>
        <p css={{ fontSize: "13px", fontWeight: "300" }}>2023ver</p>
      </motion.div>
    </motion.header>
  );
}

const headerCSS = css({
  width: "100%",
  height: "130px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "0px 20px",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 255,
  backdropFilter: "blur(3px)",
});

const titleCSS = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  color: "white",
  gap: "3px",
});

export default Header;
