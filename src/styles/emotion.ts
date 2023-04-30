import { css } from "@emotion/react";

export const pageCSS = css({
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  boxSizing: "border-box",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

export const cardCSS = css({
  borderRadius: "10px",
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  boxSizing: "border-box",
  padding: "10px",
});

export const flipCardCSS = css({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  backfaceVisibility: "hidden",
});
