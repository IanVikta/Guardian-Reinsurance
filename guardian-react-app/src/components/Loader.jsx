import React, { useState, useEffect } from 'react';

const Loader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock background scrolling on both html and body while loader is active
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.max(3, Math.floor((100 - prev) * 0.22));
        return Math.min(100, prev + step);
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 250);

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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100dvh',
        backgroundColor: '#FAF8F5',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: '16px',
        boxSizing: 'border-box'
      }}
      className={`transition-opacity duration-500 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="status"
      aria-label="Loading Guardian Reinsurance portal"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          maxWidth: '280px',
          margin: '0 auto',
          transform: 'translateY(-24px)'
        }}
        className="sm:!transform-none"
      >
        {/* Official Brand Emblem */}
        <div className="flex justify-center mb-4 w-full">
          <img
            src="/images/guardian-logo-cropped.png"
            alt="Guardian Reinsurance Brokers Uganda"
            className="w-24 sm:w-28 h-auto object-contain mx-auto select-none"
          />
        </div>

        {/* Minimal Hairline Progress Track */}
        <div className="w-32 sm:w-40 h-[2px] bg-[#E5E0D8] overflow-hidden mb-3 mx-auto">
          <div
            className="h-full bg-brand-navy transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Classy Corporate Institutional Typography */}
        <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-charcoal-muted/75 select-none text-center">
          IRA LICENSED • UGANDA
        </p>
      </div>
    </div>
  );
};

export default Loader;
