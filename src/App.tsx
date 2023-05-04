/** @jsxImportSource @emotion/react */

import MainPage from "./pages/main";
import SkillPage from "./pages/skills";
import Background from "./components/backgrounds/background";
import { useModalStore, useScrollStore, useWindowStore } from "./store";
import { useEffect } from "react";
import AboutMePage from "./pages/aboutMe";
import { useScroll, useWindow } from "./lib/hooks";
import { Global, css } from "@emotion/react";

function App() {
  const scrlLock = useScrollStore((state) => state.scrlLock);
  const setScrlLock = useScrollStore((state) => state.setScrlLock);
  const modal = useModalStore((state) => state.modalID);
  const setScroll = useScrollStore((state) => state.setScroll);
  const [setWidth, setHeight] = useWindowStore((state) => [state.setWidth, state.setHeight]);

  const scroll = useScroll();
  const windowSize = useWindow();

  useEffect(() => {
    setScroll(scroll);
  }, [scroll, setScroll]);

  useEffect(() => {
    setWidth(windowSize.width);
    setHeight(windowSize.height);
  }, [setHeight, setWidth, windowSize]);

  // Lock scroll when modal open
  useEffect(() => {
    setScrlLock(modal ? true : false);
  }, [modal, setScrlLock]);

  const globalCSS = css`
    body: {
      overflow: ${scrlLock ? "hidden" : "auto"};
    }
  `;

  return (
    <>
      <MainPage />
      <AboutMePage />
      <SkillPage />
      <Background />
      <Global styles={globalCSS} />
    </>
  );
}

export const appPages = ["main", "aboutMe", "skill"];

export default App;
