/** @jsxImportSource @emotion/react */

import AnimateText from "../components/animateText/animateText";
import Header from "../components/header/header";
import DoubleAngle from "../components/movingIcon/doubleAngle";
import "../styles/pages/main.scss";

const txt = [
  "안녕하세요!",
  "도전하는 개발자 COOKIE입니다.",
  "저는 프론트엔드 개발을 주로 하고 있습니다.",
  "아래로 스크롤해서 저에 대해 더 알아보세요!",
];

interface IProps {
  pagesRef: React.MutableRefObject<null[] | HTMLDivElement[]>;
}

function MainPage(props: IProps) {
  // const wheelHandler = (e: WheelEvent) => {
  //   if (e.deltaY > 0) {
  //     e.preventDefault();
  //     props.pagesRef.current[1]?.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("wheel", wheelHandler);
  //   return () => {
  //     window.removeEventListener("wheel", wheelHandler);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="main__page">
      <Header />
      <AnimateText
        className="main__page--text"
        text={txt}
        color="white"
        fontSize={60}
        speed={150}
        interval={2000}
      />
      <div className="btn--area">
        <div
          className="down--btn"
          onClick={() =>
            props.pagesRef.current[1]?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        >
          <DoubleAngle />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
