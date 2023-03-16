import { Transition, motion } from "framer-motion";
import "./card.css";
import { useState } from "react";
import { _range } from "../../lib/basic";

interface IProps {
  count?: number;
}

const deckTransition: Transition = {
  duration: 0.3,
};

function Deck(props: IProps) {
  const [hover, setHover] = useState(false);

  const count = props.count ?? 5;

  return (
    <motion.div
      className="deck"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {_range(count).map((e) => {
        return (
          <motion.div
            className="card"
            initial={hover ? "on" : "off"}
            animate={hover ? "on" : "off"}
            variants={{
              on: { x: e * (100 / count) * 2, scale: 1.05 },
              off: { x: e * (100 / count), scale: 1 },
            }}
            transition={deckTransition}
          ></motion.div>
        );
      })}
    </motion.div>
  );
}

export default Deck;
