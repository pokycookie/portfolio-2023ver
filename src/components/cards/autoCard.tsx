import { AnimatePresence, Variants, motion } from "framer-motion";
import "./card.css";
import { _random } from "../../lib/basic";

interface IProps {
  src: string;
  delay?: number;
  alt?: string;
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
    hover: {
      scale: 1.1,
    },
    exit: {
      y: -300,
      opacity: 0,
      rotate: _random(45, -45),
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="auto__card vertical__card"
        initial="off"
        whileInView="on"
        viewport={{ once: false, amount: 0.2 }}
        variants={cardVariants}
        whileHover="hover"
        exit="exit"
      >
        <div className="card">
          <img src={props.src} alt={props.alt ?? ""} width={270} draggable={false} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AutoCard;
