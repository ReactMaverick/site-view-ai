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

  const slowScrollByAmount = (amount = 1500, duration = 1600) => {
    const start = window.scrollY;
    const end = start + amount;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const target = Math.min(end, maxScroll);
    const distance = target - start;
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

  const scrollToNextSection = () => {
    const sections = Array.from(document.querySelectorAll('.container-op'));
    console.log("sections found:", sections);
    if (sections.length === 0) {
      console.log("No sections found!");
      return;
    }
    
    // Find the first section that's below the current scroll position
    const currentScroll = window.scrollY + 50; // Add small offset
    
    let nextSection = null;
    
    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].offsetTop;
      console.log(`Section ${i} top: ${sectionTop}, current scroll: ${currentScroll}`);
      
      if (sectionTop > currentScroll) {
        nextSection = sections[i];
        console.log(`Found next section: ${i}`);
        break;
      }
    }
    
    if (nextSection) {
      // Calculate dynamic duration based on scroll distance
      const scrollDistance = Math.abs(nextSection.offsetTop - window.scrollY);
      const baseDuration = 800;
      const durationPerPixel = 1.2; // Increase this for slower scroll
      const calculatedDuration = Math.min(
        baseDuration + (scrollDistance * durationPerPixel),
        4000 // Maximum 4 seconds
      );
      
      console.log(`Scroll distance: ${scrollDistance}px, Duration: ${calculatedDuration}ms`);
      
      // Use custom smooth scroll with calculated duration
      smoothScrollToElement(nextSection, calculatedDuration);
    } else {
      // Go back to first section
      console.log("Going back to first section");
      smoothScrollToElement(sections[0], 800);
    }
  };

  const smoothScrollToElement = (element, duration) => {
    const start = window.scrollY;
    const targetPosition = element.offsetTop;
    const distance = targetPosition - start;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for smooth animation
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
      onClick={scrollToNextSection}
    >
      <Image
        src={MOUSEDOWN}
        alt="scroll down"
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