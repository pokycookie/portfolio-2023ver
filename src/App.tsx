import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { RSetWindows } from "./redux";
import MainPage from "./pages/main";
import SkillPage from "./pages/skills";

function App() {
  const dispatch = useDispatch();
  const EPages = useRef<null[] | HTMLDivElement[]>([]);

  const resizeHandler = (e: UIEvent) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    dispatch(RSetWindows({ width, height }));
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="page" ref={(e) => (EPages.current[0] = e)}>
        <MainPage pagesRef={EPages} />
      </div>
      <div className="page" ref={(e) => (EPages.current[1] = e)}>
        <SkillPage pagesRef={EPages} />
      </div>
    </div>
  );
}

export default App;
