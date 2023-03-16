import { Variants, motion } from "framer-motion";
import "./card.css";
import { _random } from "../../lib/basic";

interface IProps {
  delay?: number;
}

function AutoCard(props: IProps) {
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
  };

  return (
    <motion.div
      className="auto__card vertical__card"
      initial="off"
      whileInView="on"
      viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
    >
      <motion.div className="card"></motion.div>
    </motion.div>
  );
}

export default AutoCard;
