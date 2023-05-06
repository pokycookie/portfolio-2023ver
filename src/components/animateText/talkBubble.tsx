/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";

interface IProps {
  text: string;
  opposite?: boolean;
  isSeperator?: boolean;
}

function TalkBubble(props: IProps) {
  return (
    <motion.div
      layout
      initial={{ x: props.opposite ? -200 : 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: props.opposite ? -200 : 200, opacity: 0 }}
      css={[
        bubbleCSS,
        {
          justifyContent: props.opposite ? "flex-start" : "flex-end",
          marginTop: props.isSeperator ? "15px" : "5px",
        },
      ]}
    >
      <p css={[textCSS, props.opposite ? youCSS : meCSS]}>{props.text}</p>
    </motion.div>
  );
}

const bubbleCSS = css({
  lineHeight: "30px",
  fontSize: "18px",
  margin: "5px 0px",
  width: "100%",
  display: "flex",
  alignItems: "center",
});

const meCSS = css({
  backgroundColor: "#fef01b",
  color: "black",
  textAlign: "left",
});

const youCSS = css({
  backgroundColor: "white",
  color: "black",
  textAlign: "left",
});

const textCSS = css({
  boxSizing: "border-box",
  padding: "10px",
  borderRadius: "10px",
  maxWidth: "70%",
  boxShadow:
    "0px 6px 10px 0px rgba(0, 0, 0, 0.15), 0px 0px 15px 0px rgba(0, 0, 0, 0.1), 0px 3px 5px -1px rgba(0, 0, 0, 0.25)",
});

export default TalkBubble;
