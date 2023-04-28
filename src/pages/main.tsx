/** @jsxImportSource @emotion/react */

import { useEffect, useRef } from "react";
import AnimateText from "../components/animateText/animateText";
import Header from "../components/header/header";
import DoubleAngle from "../components/movingIcon/doubleAngle";
import { useRefStore } from "../store";
import { css } from "@emotion/react";
import { pageCSS } from "../styles/emotion";

const txt = [
  "안녕하세요!",
  "도전하는 개발자 COOKIE입니다.",
  "저는 프론트엔드 개발을 주로 하고 있습니다.",
  "아래로 스크롤해서 저에 대해 더 알아보세요!",
];

function MainPage() {
  const pageREF = useRef<HTMLDivElement>(null);

  const pages = useRefStore((state) => state.pages);
  const addPage = useRefStore((state) => state.addPage);

  const toNextPage = () => {
    pages["aboutMe"]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    addPage("main", pageREF.current);
  }, [pageREF, addPage]);

  return (
    <div css={[pageCSS, { padding: "20px 40px" }]} ref={pageREF}>
      <Header />
      <AnimateText
        text={txt}
        color="white"
        fontSize={60}
        speed={150}
        interval={2000}
      />
      <div css={btnAreaCSS}>
        <DoubleAngle onClick={toNextPage} />
      </div>
    </div>
  );
}

const btnAreaCSS = css({
  width: "100%",
  padding: "20px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: 0,
  bottom: 0,
  zIndex: 128,
});

export default MainPage;
