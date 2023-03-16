import { useState } from "react";
import Polygon from "../backgrounds/svg/polygon";
import "./card.css";
import { Transition, Variants, motion } from "framer-motion";
import img from "../../assets/img/icons8-javascript-480.png";

const cardVariants: Variants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

const cardTransition: Transition = {
  duration: 0.3,
};

function FlipCard() {
  const [isFront, setIsFront] = useState(false);

  return (
    <motion.div
      className="flip__card vertical__card"
      whileHover={{ scale: 1.1 }}
      onClick={() => setIsFront(!isFront)}
    >
      <motion.div
        className="card card--front"
        initial={isFront ? "front" : "back"}
        animate={isFront ? "front" : "back"}
        variants={cardVariants}
        transition={cardTransition}
      >
        <img src={img} alt="js" width={270} draggable={false} />
      </motion.div>
      <motion.div
        className="card card--back"
        initial={isFront ? "back" : "front"}
        animate={isFront ? "back" : "front"}
        variants={cardVariants}
        transition={cardTransition}
      >
        <Polygon width={270} height={270} color="black" />
      </motion.div>
    </motion.div>
  );
}

export default FlipCard;
