import { useEffect, useState } from "react";
import { useInterval } from "../../lib/hooks";

interface IProps {
  text: string;
  speed?: number;
  fontSize?: number;
  color?: string;
}

function AnimateText(props: IProps) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const color = props.color ?? "black";
  const fontSize = props.fontSize ?? 20;

  useInterval(
    () => {
      if (index >= props.text.length) {
        setText("");
        setIndex(0);
      } else {
        const tmpText = text.concat(props.text[index]);
        setText(tmpText);
        setIndex(index + 1);
      }
    },
    index >= props.text.length ? 5000 : props.speed ?? 200
  );

  useEffect(() => {
    setText("");
    setIndex(0);
  }, [props.text]);

  return (
    <div className="animate__text">
      <p style={{ color, fontSize }}>{text}</p>
    </div>
  );
}

export default AnimateText;
