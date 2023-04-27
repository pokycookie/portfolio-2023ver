/** @jsxImportSource @emotion/react */

import MainPage from "./pages/main";
import SkillPage from "./pages/skills";
import Background from "./components/backgrounds/background";
import { useModalStore, useRefStore, useScrollStore } from "./store";
import { useEffect, useRef } from "react";

function App() {
  const scrollLock = useScrollStore((state) => state.scroll);
  const modal = useModalStore((state) => state.modalID);
  const setScroll = useScrollStore((state) => state.setScroll);
  const setApp = useRefStore((state) => state.setApp);

  const appREF = useRef<HTMLDivElement>(null);

  // Lock scroll when modal open
  useEffect(() => {
    setScroll(modal ? true : false);
  }, [modal, setScroll]);

  // Set app ref
  useEffect(() => {
    setApp(appREF.current);
  }, [appREF, setApp]);

  return (
    <div className="App" ref={appREF} css={{ overflow: scrollLock }}>
      <MainPage />
      <SkillPage />
      <Background />
    </div>
  );
}

export default App;
