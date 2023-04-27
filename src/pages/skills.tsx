/** @jsxImportSource @emotion/react */

import AutoCard from "../components/cards/autoCard";
import srcHTML5 from "../assets/img/icons8-html-5-480.png";
import srcCSS3 from "../assets/img/icons8-css3-480.png";
import srcJS from "../assets/img/icons8-javascript-480.png";
import srcTS from "../assets/img/icons8-typescript-480.png";
import srcREACT from "../assets/img/icons8-react-400.png";
import srcNODE from "../assets/img/icons8-nodejs-480.png";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { useModalStore, useRefStore } from "../store";
import { css } from "@emotion/react";
import Modal from "../components/modal/modal";

interface ISkill {
  src: string;
  skill: string;
}

const srcArr = [
  [srcHTML5, srcCSS3, srcJS],
  [srcTS, srcREACT, srcNODE],
];

function SkillPage() {
  const [src, setSrc] = useState(srcArr[0]);
  const [srcIndex, setSrcIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const pageREF = useRef<HTMLDivElement>(null);

  const addPage = useRefStore((state) => state.addPage);
  const openModal = useModalStore((state) => state.openModal);

  const cardHandler = (e: string) => {
    setSelected(e);
    openModal("skill");
  };

  const srcIndexHandler = (type: "inc" | "dec") => {
    const maxIndex = srcArr.length - 1;
    let tmpIndex = srcIndex + (type === "inc" ? 1 : -1);
    if (tmpIndex > maxIndex) {
      tmpIndex = 0;
    } else if (tmpIndex < 0) {
      tmpIndex = maxIndex;
    }
    setSrc([]);
    setTimeout(() => {
      setSrc(srcArr[tmpIndex]);
    }, 10);
    setSrcIndex(tmpIndex);
  };

  useEffect(() => {
    addPage("skill", pageREF.current);
  }, [pageREF, addPage]);

  return (
    <div css={skillCSS} ref={pageREF}>
      <div css={cardAreaCSS}>
        <CardAreaBtn
          onClick={() => srcIndexHandler("dec")}
          icon={faAngleLeft}
        />
        {src.map((e, i) => {
          return (
            <AutoCard
              key={i}
              src={e}
              delay={i * 0.2}
              onClick={() => cardHandler(e)}
            />
          );
        })}
        <CardAreaBtn
          onClick={() => srcIndexHandler("inc")}
          icon={faAngleRight}
        />
      </div>
      <Modal modalID="skill" width="85%" height="80%" autoClose>
        <div css={modalCSS}></div>
      </Modal>
    </div>
  );
}

interface ICardAreaBtn {
  icon: IconDefinition;
  onClick?: () => void;
}
function CardAreaBtn({ icon, onClick }: ICardAreaBtn) {
  return (
    <motion.button
      onClick={onClick}
      initial="off"
      whileInView="on"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: false, amount: 0.2 }}
      variants={btnVariants}
      css={btnCSS}
    >
      <FontAwesomeIcon icon={icon} />
    </motion.button>
  );
}

const btnVariants: Variants = {
  off: {
    opacity: 0,
  },
  on: {
    opacity: 1,
  },
  hover: {
    scale: 1.3,
  },
  tap: {
    scale: 1.1,
  },
};

const skillCSS = css({
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  boxSizing: "border-box",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const cardAreaCSS = css({
  display: "grid",
  gridTemplateColumns: "30px 1fr 1fr 1fr 30px",
  gridTemplateRows: "repeat(1, 1fr)",
  gap: "20px",
});

const btnCSS = css({
  border: "none",
  backgroundColor: "transparent",
  color: "white",
  fontSize: "40px",
  cursor: "pointer",
});

const modalCSS = css({
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  borderRadius: "10px",
});

export default SkillPage;
