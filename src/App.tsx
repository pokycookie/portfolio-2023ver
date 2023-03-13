import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RSetWindows } from "./redux";
import MainPage from "./pages/main";

function App() {
  const dispatch = useDispatch();

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
      <MainPage />
    </div>
  );
}

export default App;
