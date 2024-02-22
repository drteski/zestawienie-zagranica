"use client";
import useWindowResize from "@/hooks/useWindowResize";
import { useLayoutEffect, useState } from "react";

const useDimensions = (ref, cb = () => {}) => {
  const resize = useWindowResize();
  const [dimensions, setDimensions] = useState({
    window: {
      width: 0,
      height: 0,
    },
    ref: {
      width: 0,
      height: 0,
    },
    document: {
      width: 0,
      height: 0,
    },
  });

  useLayoutEffect(() => {
    const body = document.querySelector("body");
    setDimensions((prevState) => ({
      ...prevState,
      window: {
        width: resize.width,
        height: resize.height,
      },
      ref: {
        width: ref.current.getBoundingClientRect().width,
        height: ref.current.getBoundingClientRect().height,
      },
      document: {
        width: body.offsetWidth,
        height: body.offsetHeight,
      },
    }));
    cb();
  }, [resize, ref]);

  return { ...dimensions };
};

export default useDimensions;
