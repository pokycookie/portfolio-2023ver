import { useEffect, useRef, useState, useCallback } from "react";

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

export function useScroll(ref: React.RefObject<HTMLElement>) {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const scrollHandler = useCallback(() => {
    if (ref.current === null) setScroll({ x: window.scrollX, y: window.scrollY });
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

export function useWindow() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const resizeHandler = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });

  return size;
}
