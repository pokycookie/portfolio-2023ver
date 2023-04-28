/** @jsxImportSource @emotion/react */

import { useRefStore, useScrollStore } from "../store";
import { useRef, useEffect, useState } from "react";
import { pageCSS } from "../styles/emotion";
import { css } from "@emotion/react";
import TalkBubble from "../components/animateText/talkBubble";
import { AnimatePresence, motion } from "framer-motion";

function AboutMePage() {
  const [offsetY, setOffsetY] = useState(0);

  const pageREF = useRef<HTMLDivElement>(null);
  const stikyREF = useRef<HTMLDivElement>(null);

  const addPage = useRefStore((state) => state.addPage);
  const scroll = useScrollStore((state) => state.scroll);

  useEffect(() => {
    const element = pageREF.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const offset = Math.min(Math.max(-rect.top, 0), 4000);
    if (stikyREF.current && offset > 0) stikyREF.current.scrollBy(0, 100);
    setOffsetY(offset);
  }, [scroll]);

  useEffect(() => {
    addPage("aboutMe", pageREF.current);
  }, [pageREF, addPage]);

  return (
    <div css={containerCSS} ref={pageREF}>
      <motion.div
        css={[pageCSS, aboutMeCSS]}
        ref={stikyREF}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.7 }}
      >
        <AnimatePresence>
          {txt
            .slice(0, Math.floor(offsetY / (3000 / txt.length)))
            .map((e, i) => {
              return <TalkBubble key={i} text={e.text} opposite={e.opposite} />;
            })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

const containerCSS = css({
  height: "4000px",
  boxSizing: "border-box",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
});

const aboutMeCSS = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  position: "sticky",
  top: 20,
  borderRadius: "10px",
  maxWidth: "800px",
  height: "calc(100vh - 40px)",
  background: "rgba(155, 187, 212, 0.8)",
  backdropFilter: "blur(15px)",
});

const txt = [
  { text: "안녕하세요! 도전하는 개발자 COOKIE입니다.", opposite: true },
  { text: "반갑습니다🖐", opposite: false },
  { text: "도전하는 개발자라는 건 어떤 의미인가요?", opposite: false },
  {
    text: "제가 스스로를 도전하는 개발자라고 부르는 것은 도전이 성장으로 직결된다는 것을 잘 알고 있기 때문입니다.",
    opposite: true,
  },
  {
    text: "지금까지 살아오면서 도전해온 여러 경험들이 저를 성장 시켜왔기도 하고, 앞으로도 이러한 도전을 멈추고 싶지 않기 때문에 도전하는 개발자라는 말이 좋습니다.",
    opposite: true,
  },
  { text: "좋습니다.", opposite: false },
  { text: "간단한 자기소개를 들을 수 있을까요?", opposite: false },
  {
    text: "저는 현재 HTML, CSS, JavaScript를 기본으로 하여, TypeScript, React, Node JS까지 다양한 분야에서 개발 경험을 쌓고 있는 주니어 프론트엔드 개발자입니다.",
    opposite: true,
  },
  {
    text: "간단한 웹사이트부터 복잡한 웹 애플리케이션까지 다양하게 경험해보았으며, 특히 웹 애플리케이션 제작에 관심이 많습니다.",
    opposite: true,
  },
  {
    text: "그럼 보통 프론트엔드 부분을 맡아서 개발을 진행할 때 어떤 부분을 중점으로 하고 있나요?",
    opposite: false,
  },
  {
    text: "사용자가 직접적으로 맞닥뜨리는 부분이 해당 사용자의 첫 인상을 결정하는 가장 큰 요인이라고 생각하기 때문에, 분위기에 맞는 UI와 사소한 부분까지도 신경 쓰는 UX를 항상 고민하고 있습니다.",
    opposite: true,
  },
  {
    text: "또한 React를 사용하면서 컴포넌트 재사용의 중요성에 대해 알아가고 있습니다. 다양한 환경에서 복합적으로 사용할 수 있도록 컴포넌트를 만드는 것이 이후에 개발 속도를 높일 수 있고, 프로젝트의 일관성을 유지할 수 있게 해주며, 코드의 유지 보수에도 효과적일 수 있다는 것을 느끼고 있습니다.",
    opposite: true,
  },
];

export default AboutMePage;
