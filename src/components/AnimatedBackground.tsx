import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -10,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(150deg, #eef2ff 0%, #f0f9ff 45%, #ecfdf5 80%, #f0f9ff 100%)',
      }} className="dark:hidden" />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(150deg, #060d1f 0%, #080f1c 45%, #06111a 80%, #08101e 100%)',
      }} className="hidden dark:block" />

      <div className="dark:hidden">
        <div style={{
          position: 'absolute', top: '-8%', left: '-6%',
          width: '52vw', height: '52vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,78,216,0.20) 0%, rgba(37,99,235,0.09) 50%, transparent 72%)',
          animation: 'orb-drift-1 15s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-8%',
          width: '58vw', height: '58vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(5,150,105,0.18) 0%, rgba(16,185,129,0.09) 50%, transparent 72%)',
          animation: 'orb-drift-2 19s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '30%', right: '3%',
          width: '36vw', height: '36vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.17) 0%, rgba(56,189,248,0.08) 55%, transparent 72%)',
          animation: 'orb-drift-3 23s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '4%', left: '8%',
          width: '30vw', height: '30vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,78,216,0.15) 0%, rgba(37,99,235,0.10) 55%, transparent 72%)',
          animation: 'orb-drift-4 17s ease-in-out infinite',
        }} />
      </div>

      <div className="hidden dark:block">
        <div style={{
          position: 'absolute', top: '-8%', left: '-6%',
          width: '52vw', height: '52vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,78,216,0.35) 0%, rgba(37,99,235,0.16) 50%, transparent 72%)',
          animation: 'orb-drift-1 15s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-8%',
          width: '58vw', height: '58vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(5,150,105,0.28) 0%, rgba(16,185,129,0.14) 50%, transparent 72%)',
          animation: 'orb-drift-2 19s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '30%', right: '3%',
          width: '38vw', height: '38vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.26) 0%, rgba(56,189,248,0.12) 55%, transparent 72%)',
          animation: 'orb-drift-3 23s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '4%', left: '8%',
          width: '32vw', height: '32vw', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,78,216,0.22) 0%, rgba(37,99,235,0.10) 55%, transparent 72%)',
          animation: 'orb-drift-4 17s ease-in-out infinite',
        }} />
      </div>

      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${(i * 17 + 5) % 100}%`,
            top: `${(i * 23 + 10) % 100}%`,
            width: `${3 + (i % 4)}px`,
            height: `${3 + (i % 4)}px`,
            borderRadius: '50%',
            background: [
              'rgba(29,78,216,0.45)',
              'rgba(5,150,105,0.40)',
              'rgba(14,165,233,0.40)',
              'rgba(23,140,200,0.38)',
              'rgba(16,185,129,0.40)',
            ][i % 5],
            animation: `particle-float ${10 + (i % 6) * 2}s ease-in-out infinite`,
            animationDelay: `${(i * 0.7) % 8}s`,
            willChange: 'transform, opacity',
          }}
        />
      ))}

      <style>{`
        @keyframes orb-drift-1 {
          0%   { transform: translate(0px,  0px)  scale(1);    }
          33%  { transform: translate(45px, 35px) scale(1.06); }
          66%  { transform: translate(-20px,50px) scale(0.97); }
          100% { transform: translate(0px,  0px)  scale(1);    }
        }
        @keyframes orb-drift-2 {
          0%   { transform: translate(0px,   0px)  scale(1);    }
          33%  { transform: translate(-50px,-35px) scale(1.05); }
          66%  { transform: translate(30px, -50px) scale(0.96); }
          100% { transform: translate(0px,   0px)  scale(1);    }
        }
        @keyframes orb-drift-3 {
          0%   { transform: translate(0px,  0px)  scale(1);    }
          50%  { transform: translate(-42px,42px) scale(1.08); }
          100% { transform: translate(0px,  0px)  scale(1);    }
        }
        @keyframes orb-drift-4 {
          0%   { transform: translate(0px, 0px)   scale(1);    }
          40%  { transform: translate(32px,-42px) scale(1.05); }
          80%  { transform: translate(-20px,22px) scale(0.98); }
          100% { transform: translate(0px, 0px)   scale(1);    }
        }
        @keyframes particle-float {
          0%   { transform: translateY(0px)    translateX(0px);  opacity: 0;   }
          15%  { opacity: 0.9; }
          50%  { transform: translateY(-65px)  translateX(18px); opacity: 0.7; }
          85%  { opacity: 0.3; }
          100% { transform: translateY(-130px) translateX(-12px); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
