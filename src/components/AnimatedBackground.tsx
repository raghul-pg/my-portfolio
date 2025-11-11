import React from 'react';

const dots = [
  { cx: 8, cy: 12, r: 6, opacity: 0.06 },
  { cx: 80, cy: 40, r: 10, opacity: 0.04 },
  { cx: 200, cy: 20, r: 5, opacity: 0.05 },
  { cx: 320, cy: 60, r: 8, opacity: 0.03 },
  { cx: 480, cy: 30, r: 6, opacity: 0.04 },
  { cx: 640, cy: 80, r: 12, opacity: 0.03 },
  { cx: 920, cy: 18, r: 7, opacity: 0.05 },
  { cx: 1100, cy: 50, r: 6, opacity: 0.04 },
  { cx: 300, cy: 140, r: 9, opacity: 0.03 },
  { cx: 780, cy: 160, r: 5, opacity: 0.04 },
  { cx: 980, cy: 120, r: 7, opacity: 0.03 },
  { cx: 1300, cy: 90, r: 10, opacity: 0.02 },
  // Additional dots for more visual interest
  { cx: 150, cy: 80, r: 5, opacity: 0.04 },
  { cx: 450, cy: 100, r: 7, opacity: 0.03 },
  { cx: 700, cy: 40, r: 6, opacity: 0.04 },
  { cx: 950, cy: 150, r: 8, opacity: 0.03 },
  { cx: 1200, cy: 110, r: 5, opacity: 0.04 },
  { cx: 100, cy: 150, r: 9, opacity: 0.02 },
  { cx: 550, cy: 20, r: 6, opacity: 0.04 },
  { cx: 1350, cy: 140, r: 7, opacity: 0.03 },
  { cx: 400, cy: 140, r: 5, opacity: 0.03 },
  { cx: 850, cy: 70, r: 8, opacity: 0.02 },
  { cx: 1050, cy: 170, r: 6, opacity: 0.04 },
  { cx: 250, cy: 170, r: 7, opacity: 0.03 },
  { cx: 600, cy: 130, r: 5, opacity: 0.03 },
  { cx: 1150, cy: 30, r: 6, opacity: 0.02 },
];

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-bg fixed inset-0 -z-10 pointer-events-none">
      <div className="gradient-layer" aria-hidden />

      <svg
        className="dots-layer"
        width="100%"
        height="100%"
        viewBox="0 0 1400 200"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {dots.map((d, i) => (
          <circle
            key={i}
            className="bg-dot"
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            fill="currentColor"
            style={{
              color: '#1e356cff',
              opacity: d.opacity,
              transformBox: 'fill-box',
              willChange: 'transform, opacity',
              animationDelay: `${(i % 5) * 0.8}s`,
              animationDuration: `${8 + (i % 4) * 2}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
