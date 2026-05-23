"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number; // duration in seconds
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function Counter({
  value,
  duration = 1.5,
  prefix = "",
  suffix = "",
  decimals = 0,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    
    // Calculate total frames based on 60fps target
    const totalFrames = Math.max(30, Math.floor(60 * duration));
    let frame = 0;

    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * (end - start) + start;

      setCount(currentVal);

      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const formattedValue = count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{formattedValue}{suffix}
    </span>
  );
}
