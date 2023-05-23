/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import GooeyArea from "../gooeyEffect/gooeyArea";
import BouncingBall from "./bouncingBall";
import { _range } from "../../lib/basic";

function Background() {
  return (
    <div css={backgroundCSS}>
      <GooeyArea>
        {_range(15).map((_, i) => {
          return <BouncingBall key={i} />;
        })}
      </GooeyArea>
    </div>
  );
}

const backgroundCSS = css({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -255,
  width: "100%",
  height: "100vh",
  backgroundImage:
    "linear-gradient(109.6deg, rgba(61, 245, 167, 1) 11.2%, rgba(9, 111, 224, 1) 91.1%)",
  overflow: "hidden",
});

export default Background;
