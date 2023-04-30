/** @jsxImportSource @emotion/react */

import SkillCard from "../components/cards/skillCard";
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
import { motion } from "framer-motion";
import { useState } from "react";
import { useRefStore } from "../store";
import { css } from "@emotion/react";
import { pageCSS } from "../styles/emotion";

interface ISkill {
  title: string;
  description: string[];
  src: string;
}

const srcArr: ISkill[][] = [
  [
    {
      title: "HTML",
      description: [
        "HTML은 웹개발을 함에 있어 가장 기초가 되는 기술입니다.",
        "각 태그의 의미와 관련된 속성에 대해 이해하고 있으며, 상황에 맞는 태그를 이용하여 문서의 기본 뼈대를 잡는 것의 중요성을 알고 있습니다.",
      ],
      src: srcHTML5,
    },
    {
      title: "CSS",
      description: [
        "HTML을 이용해 구조를 갖춘 문서에 CSS를 접목하여 사용자가 보기 좋게 꾸미는 것은 필수입니다.",
        "CSS의 기본적인 속성들에 대해 이해하고 있으며, 특히 flex와 grid를 이용하여 레이아웃을 구성하는 것에 자신 있습니다.",
      ],
      src: srcCSS3,
    },
    {
      title: "JavaScript",
      description: [
        "JavaScript는 제가 가장 자신 있는 분야입니다. HTML과 CSS만을 이용해도 충분히 매력적인 웹페이지를 만들 수 있지만, 동적인 웹페이지 또는 웹 애플리케이션을 제작하기 위해서는 JavaScript가 필수라고 할 수 있습니다.",
        "기본적인 JavaScript의 동작에 대해 이해하고 있으며, 데이터 불변성, 실행 컨텍스트, 스코프, 호이스팅, this, 클로저, 프로토타입과 같은 JavaScript의 핵심적인 이론 또한 숙지하고 있습니다. 또한 ES6를 포함하여 최신의 ECMAScript 내용을 공부하고 있습니다.",
      ],
      src: srcJS,
    },
  ],
  [
    {
      title: "TypeScript",
      description: [
        "TypeScript는 JavaScript를 이용해 여러 프로젝트를 진행하면서 느낀 문제점들을 보완하기 위해 선택하였습니다.",
        "현재는 대부분의 프로젝트를 TypeScript를 이용해 진행하고 있으며, 올바른 타입을 지정하고 이에 맞게 코드를 작성하는 것에 익숙해졌습니다.",
      ],
      src: srcTS,
    },
    {
      title: "React",
      description: [
        "React는 JavaScript를 완전히 익숙해질 때까지 공부한 다음에 선택한 프레임워크입니다. JavaScript를 원하는 정도로 사용할 수 있는 상태였기 때문에 React의 기초적인 부분들을 배워나가는 것에 있어서는 큰 어려움이 없었습니다.",
        "현재는 React 컴포넌트의 Life cycle과 렌더링 과정, react hook등에 대해 심도 깊게 공부하고 있으며, 대부분의 프로젝트는 React를 이용해 만들고 있습니다.",
      ],
      src: srcREACT,
    },
    {
      title: "Node JS",
      description: [
        "Node JS는 직접 웹 서버를 만들기 위해 사용해봤습니다.",
        "Express와 MongoDB를 함께 사용하여 웹 서버와 데이터베이스를 만들고, 이를 이용해 간단한 프로젝트를 진행해본 경험이 있습니다.",
      ],
      src: srcNODE,
    },
  ],
];

function SkillPage() {
  const [src, setSrc] = useState(srcArr[0]);
  const [srcIndex, setSrcIndex] = useState(0);

  const pageREF = useRef<HTMLDivElement>(null);
  const addPage = useRefStore((state) => state.addPage);

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
    <div css={pageCSS} ref={pageREF}>
      <div css={cardAreaCSS}>
        <CardAreaBtn
          onClick={() => srcIndexHandler("dec")}
          icon={faAngleLeft}
        />
        {src.map((data, i) => {
          return <SkillCard key={i} data={data} delay={i * 0.2} />;
        })}
        <CardAreaBtn
          onClick={() => srcIndexHandler("inc")}
          icon={faAngleRight}
        />
      </div>
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 1.1 }}
      viewport={{ once: false, amount: 0.2 }}
      css={btnCSS}
    >
      <FontAwesomeIcon icon={icon} />
    </motion.button>
  );
}

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

export default SkillPage;
