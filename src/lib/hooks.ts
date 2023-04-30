import { useEffect, useRef, useState, useCallback } from "react";
import { useRefStore } from "../store";
import { appPages } from "../App";

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (delay !== null) {
      const id = window.setTimeout(tick, delay);
      return () => window.clearTimeout(id);
    }
  }, [delay]);
}

export function useScroll(ref: React.RefObject<HTMLElement>) {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const scrollHandler = useCallback(() => {
    if (ref.current === null)
      setScroll({ x: window.scrollX, y: window.scrollY });
    else setScroll({ x: ref.current.scrollLeft, y: ref.current.scrollTop });
  }, [ref]);

  useEffect(() => {
    if (ref.current === null) {
      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    } else {
      const savedREF = ref.current;
      savedREF.addEventListener("scroll", scrollHandler);
      return () => savedREF.removeEventListener("scroll", scrollHandler);
    }
  }, [ref, scrollHandler]);

  return scroll;
}

export function usePageScroll() {
  const [vh, setVh] = useState(window.innerHeight);
  const [pause, setPause] = useState(false);

  const pages = useRefStore((state) => state.pages);

  const resizeHandler = () => {
    setVh(window.innerHeight);
  };

  const wheelHandler = useCallback(
    (e: WheelEvent) => {
      if (!pause) {
        const pageIndex = Math.max(
          Math.min(
            Math.floor(window.scrollY / vh) + (e.deltaY > 0 ? 1 : -1),
            appPages.length - 1
          ),
          0
        );
        console.log(Math.floor(window.scrollY / vh), pageIndex);
        console.log(`move to ${appPages[pageIndex]}`);
        pages[appPages[pageIndex]]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setPause(true);
        setTimeout(() => {
          setPause(false);
        }, 500);
      }
    },
    [pages, pause, vh]
  );

  useEffect(() => {
    window.addEventListener("wheel", wheelHandler);
    return () => window.removeEventListener("wheel", wheelHandler);
  }, [wheelHandler]);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);
}
