import { useEffect, useState } from "react";
import Background from "./components/backgrounds/background";

interface IWindow {
  width: number;
  height: number;
}

function App() {
  const [windows, setWindows] = useState<IWindow>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resizeHandler = (e: UIEvent) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWindows({ width, height });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="App">
      <Background size={windows} />
    </div>
  );
}

export default App;
