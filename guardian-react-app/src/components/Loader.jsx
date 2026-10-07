import React, { useState, useEffect } from 'react';

const Loader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth, realistic corporate loading progression curve
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly through loading steps
        const step = Math.max(3, Math.floor((100 - prev) * 0.22));
        return Math.min(100, prev + step);
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small pause at 100% for visual polish
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 250);

      // Complete unmount after fade transition finishes
      const doneTimer = setTimeout(() => {
        setIsDone(true);
        if (onLoaded) onLoaded();
      }, 850);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(doneTimer);
      };
    }
  }, [progress, onLoaded]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] grid place-items-center w-full min-h-[100dvh] h-[100dvh] bg-[#FAF8F5] transition-opacity duration-600 ease-out p-4 m-0 overflow-hidden ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="status"
      aria-label="Loading Guardian Reinsurance portal"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-xs text-center px-4 mx-auto select-none">
        {/* Official Brand Emblem */}
        <div className="relative mb-5 flex justify-center w-full">
          <img
            src="/images/guardian-logo-cropped.png"
            alt="Guardian Reinsurance Brokers Uganda"
            className="w-20 sm:w-24 h-auto object-contain mx-auto select-none"
          />
        </div>

        {/* Minimal Hairline Progress Track */}
        <div className="w-36 sm:w-44 h-[1.5px] bg-[#E5E0D8] overflow-hidden mb-3.5 mx-auto">
          <div
            className="h-full bg-brand-navy transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Classy Corporate Institutional Typography */}
        <div className="space-y-0.5 select-none text-center">
          <p className="text-[10px] font-mono font-semibold tracking-[0.25em] uppercase text-charcoal/85">
            GUARDIAN REINSURANCE
          </p>
          <p className="text-[9px] font-mono tracking-[0.2em] uppercase text-charcoal-muted/60">
            IRA LICENSED • UGANDA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
