/** @jsxImportSource @emotion/react */

import { Variants, motion } from "framer-motion";
import { _random } from "../../lib/basic";
import { useState } from "react";
import { cardCSS } from "../../styles/emotion";
import { css } from "@emotion/react";

interface ISkill {
  title: string;
  description: string[];
  src: string;
}

interface IProps {
  data: ISkill;
  delay?: number;
  onClick?: () => void;
}

function SkillCard(props: IProps) {
  const [isHover, setIsHover] = useState(false);

  const cardVariants: Variants = {
    off: {
      y: 300,
      opacity: 0,
      rotate: _random(45, -45),
    },
    on: {
      y: 0,
      opacity: 100,
      rotate: 0,
      transition: {
        delay: props.delay ?? 0,
      },
    },
    hover: {
      scale: 1.1,
    },
  };

  return (
    <motion.div
      css={[
        cardCSS,
        skillCardCSS,
        { justifyContent: isHover ? "flex-start" : "center" },
      ]}
      initial="off"
      whileInView="on"
      viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
      whileHover="hover"
      onClick={props.onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.div css={[titleAreaCSS]} layout>
        <motion.img
          src={props.data.src}
          alt={props.data.title}
          // width="100%"
          width={isHover ? "80px" : "100%"}
          draggable={false}
          layout
        />
        {isHover ? (
          <motion.p
            css={titleCSS}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {props.data.title}
          </motion.p>
        ) : null}
      </motion.div>
      {isHover ? (
        <motion.div
          css={descriptionAreaCSS}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {props.data.description.map((txt, i) => {
            return (
              <p css={descriptionCSS} key={i}>
                {txt}
              </p>
            );
          })}
        </motion.div>
      ) : null}
    </motion.div>
  );
}

const skillCardCSS = css({
  width: "270px",
  height: "400px",
  flexDirection: "column",
  gap: "10px",
});

const titleAreaCSS = css({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
});

const titleCSS = css({
  fontSize: "22px",
  fontWeight: "500",
  padding: "7px",
  borderRadius: "5px",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: "white",
});

const descriptionAreaCSS = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "10px",
});

const descriptionCSS = css({
  fontSize: "14px",
  lineHeight: "18px",
});

export default SkillCard;
