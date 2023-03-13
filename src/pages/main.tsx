import { shallowEqual, useSelector } from "react-redux";
import { IReduxStore, IWindows } from "../redux";

function MainPage() {
  const windows = useSelector<IReduxStore, IWindows>((state) => {
    return state.windows;
  }, shallowEqual);

  return <div className="main__page"></div>;
}

export default MainPage;
