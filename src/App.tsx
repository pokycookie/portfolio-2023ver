/** @jsxImportSource @emotion/react */

import MainPage from "./pages/main";
import SkillPage from "./pages/skills";
import Background from "./components/backgrounds/background";
import { useModalStore, useRefStore, useScrollStore, useWindowStore } from "./store";
import { useEffect, useRef } from "react";
import AboutMePage from "./pages/aboutMe";
import { useScroll, useWindow } from "./lib/hooks";

function App() {
  const scrlLock = useScrollStore((state) => state.scrlLock);
  const setScrlLock = useScrollStore((state) => state.setScrlLock);
  const modal = useModalStore((state) => state.modalID);
  const setApp = useRefStore((state) => state.setApp);
  const setScroll = useScrollStore((state) => state.setScroll);
  const [setWidth, setHeight] = useWindowStore((state) => [state.setWidth, state.setHeight]);

  const appREF = useRef<HTMLDivElement>(null);
  const scroll = useScroll(appREF);
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

  // Set app ref
  useEffect(() => {
    setApp(appREF.current);
  }, [appREF, setApp]);

  return (
    <div className="App" ref={appREF} css={{ overflow: scrlLock }}>
      <MainPage />
      <AboutMePage />
      <SkillPage />
      <Background />
    </div>
  );
}

export const appPages = ["main", "aboutMe", "skill"];

export default App;
