import { shallowEqual, useSelector } from "react-redux";
import AnimateText from "../components/animateText/animateText";
import Background from "../components/backgrounds/background";
import Header from "../components/header/header";
import DoubleAngle from "../components/movingIcon/doubleAngle";
import { IReduxStore, IWindows } from "../redux";

function MainPage() {
  const windows = useSelector<IReduxStore, IWindows>((state) => {
    return state.windows;
  }, shallowEqual);

  return (
    <div className="main__page">
      <Header />
      <AnimateText text="My Name Is Sewoong" color="white" fontSize={60} />
      <DoubleAngle />
      <Background size={windows} divide={7} />
    </div>
  );
}

export default MainPage;
