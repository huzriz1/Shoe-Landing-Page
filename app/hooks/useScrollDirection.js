import { useEffect, useRef, useState } from "react";

export default function useScrollDirection() {
  const [direction, setDirection] = useState("down");
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current) setDirection("down");
      else if (current < lastScroll.current) setDirection("up");
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return direction;
}