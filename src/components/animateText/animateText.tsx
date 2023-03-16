import { useEffect, useState } from "react";
import { useInterval } from "../../lib/hooks";
import { _className } from "../../lib/basic";
import "./animateText.css";

interface IProps {
  text: string | string[];
  speed?: number;
  interval?: number;
  fontSize?: number;
  color?: string;
  className?: string;
}

function AnimateText(props: IProps) {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [arrIndex, setArrIndex] = useState(0);

  const color = props.color ?? "black";
  const fontSize = props.fontSize ?? 20;
  const interval = props.interval ?? 5000;
  const textSpeed = props.speed ?? 200;
  const textLength =
    typeof props.text === "string" ? props.text.length : props.text[arrIndex].length;

  useInterval(
    () => {
      if (textIndex === textLength) {
        setText("");
        setTextIndex(0);
        if (typeof props.text !== "string") {
          if (arrIndex === props.text.length - 1) {
            setArrIndex(0);
          } else {
            setArrIndex((prev) => prev + 1);
          }
        }
      } else {
        const tmpText =
          typeof props.text === "string"
            ? text.concat(props.text[textIndex])
            : text.concat(props.text[arrIndex][textIndex]);
        setText(tmpText);
        setTextIndex(textIndex + 1);
      }
    },
    textIndex >= textLength ? interval : textSpeed
  );

  useEffect(() => {
    setText("");
    setTextIndex(0);
    setArrIndex(0);
  }, [props.text]);

  return (
    <div className={_className("animate__text", props.className)}>
      <p style={{ color, fontSize, height: fontSize }}>{text}</p>
    </div>
  );
}

export default AnimateText;
