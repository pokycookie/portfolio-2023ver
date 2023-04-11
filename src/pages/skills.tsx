import "../styles/pages/skills.scss";
import AutoCard from "../components/cards/autoCard";
import srcHTML5 from "../assets/img/icons8-html-5-480.png";
import srcCSS3 from "../assets/img/icons8-css3-480.png";
import srcJS from "../assets/img/icons8-javascript-480.png";
import srcTS from "../assets/img/icons8-typescript-480.png";
import srcREACT from "../assets/img/icons8-react-400.png";
import srcNODE from "../assets/img/icons8-nodejs-480.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

const srcArr = [
  [srcHTML5, srcCSS3, srcJS],
  [srcTS, srcREACT, srcNODE],
];

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

interface IProps {
  pagesRef: React.MutableRefObject<null[] | HTMLDivElement[]>;
}

function SkillPage(props: IProps) {
  const [src, setSrc] = useState(srcArr[0]);
  const [srcIndex, setSrcIndex] = useState(0);

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

  return (
    <div className="skill__page">
      <div className="card__area">
        <motion.button
          onClick={() => srcIndexHandler("dec")}
          initial="off"
          whileInView="on"
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false, amount: 0.2 }}
          variants={btnVariants}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </motion.button>
        {src.map((e, i) => {
          return <AutoCard key={i} src={e} delay={i * 0.2} />;
        })}
        <motion.button
          onClick={() => srcIndexHandler("inc")}
          initial="off"
          whileInView="on"
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: false, amount: 0.2 }}
          variants={btnVariants}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </motion.button>
      </div>
    </div>
  );
}

export default SkillPage;
