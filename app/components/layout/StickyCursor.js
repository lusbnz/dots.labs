"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function StickyCursor({ containerRef }) {
  const [isHovering, setIsHovering] = useState(false);
  const cursorSize = isHovering ? 30 : 15;
  const cursorColor = isHovering ? "red" : "white";

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    
    if (containerRef && containerRef.current) {
      const container = containerRef.current;
      container.addEventListener("mouseenter", () => setIsHovering(true));
      container.addEventListener("mouseleave", () => setIsHovering(false));

      return () => {
        window.removeEventListener("mousemove", manageMouseMove);
        container.removeEventListener("mouseenter", () => setIsHovering(true));
        container.removeEventListener("mouseleave", () => setIsHovering(false));
      };
    }

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [containerRef]);

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          position: "fixed",
          width: cursorSize,
          height: cursorSize,
          backgroundColor: cursorColor,
          borderRadius: "100%",
          pointerEvents: "none",
          transition: "width 0.3s, height 0.3s, background-color 0.3s",
          zIndex: 9999,
        }}
      ></motion.div>
    </div>
  );
}
