/** @jsxImportSource @emotion/react */

import { useEffect, useRef } from "react";
import { useRefStore } from "../store";
import { css } from "@emotion/react";

function ProjectsPage() {
  const pageREF = useRef<HTMLDivElement>(null);

  const addPage = useRefStore((state) => state.addPage);

  useEffect(() => {
    addPage("projects", pageREF.current);
  }, [pageREF, addPage]);

  return <div css={projectsCSS} ref={pageREF}></div>;
}

const projectsCSS = css({
  width: "100%",
  backgroundColor: "white",
  height: "500px",
});

export default ProjectsPage;
