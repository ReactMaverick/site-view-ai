'use client';
import Image from "next/image";
import { MOUSEDOWN } from "@/values/Constants/ImageConstants";

export default function ScrollDownButton() {
  // Custom slow scroll function
  const slowScrollToBottom = () => {
    const start = window.scrollY;
    const end = document.body.scrollHeight - window.innerHeight;
    const distance = end - start;
    const duration = 20000; // 8 seconds for an even slower scroll
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, start + distance * ease);
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }
    requestAnimationFrame(animation);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "5%",
        left: "50%",
        transform: "translate(-50%, 0%)",
        backgroundColor: "transparent",
        zIndex: 1000,
        cursor: "pointer",
      }}
      onClick={slowScrollToBottom}
    >
      <Image
        src={MOUSEDOWN}
        alt="up"
        className="up"
        width={140}
        height={42}
        style={{
          backgroundColor: "transparent",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}