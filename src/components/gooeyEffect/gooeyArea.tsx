/** @jsxImportSource @emotion/react */

import { Interpolation, Theme, css } from "@emotion/react";
import { Fragment, ReactNode } from "react";

const areaCSS = css({
  width: "100%",
  height: "100%",
  position: "absolute",
  left: 0,
  top: 0,
  filter: "url(#gooey)",
  overflow: "hidden",
  // pointerEvents: "none",
});

interface IProps {
  children?: ReactNode;
  blur?: number;
  css?: Interpolation<Theme>;
}

function GooeyArea(props: IProps) {
  return (
    <Fragment>
      <svg width="0px" height="0px">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={props.blur ?? 15} />
            <feColorMatrix
              in="blur"
              result="gooey"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>
      <div css={[areaCSS, props.css]}>{props.children}</div>
    </Fragment>
  );
}

export default GooeyArea;
