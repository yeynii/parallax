import { useState, useEffect } from "react";

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  const listener = e => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY
  };
}