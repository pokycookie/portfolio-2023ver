/** @jsxImportSource @emotion/react */

import MainPage from "./pages/main";
import SkillPage from "./pages/skills";
import Background from "./components/backgrounds/background";
import { useModalStore, useRefStore, useScrollStore } from "./store";
import { useEffect, useRef } from "react";
import AboutMePage from "./pages/aboutMe";
import { useScroll } from "./lib/hooks";

function App() {
  const scrlLock = useScrollStore((state) => state.scrlLock);
  const setScrlLock = useScrollStore((state) => state.setScrlLock);
  const setScroll = useScrollStore((state) => state.setScroll);
  const modal = useModalStore((state) => state.modalID);
  const setApp = useRefStore((state) => state.setApp);

  const appREF = useRef<HTMLDivElement>(null);
  const scroll = useScroll(appREF);

  useEffect(() => {
    setScroll(scroll);
  }, [scroll, setScroll]);

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
