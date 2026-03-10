import React, { useEffect } from 'react';

export default function Toast({ message, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div style={{ position: 'fixed', top: 76, right: 16, zIndex: 200 }}>
      <div style={{
        background: 'linear-gradient(135deg, #ff6a00, #e63000)',
        color: '#fff',
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: 1,
        padding: '10px 18px',
        borderRadius: 4,
        boxShadow: '0 4px 20px rgba(255,106,0,0.4)',
        animation: 'slideInRight 0.3s ease, fadeOut 0.4s ease 2.6s forwards',
      }}>
        ✓ {message}
      </div>
    </div>
  );
}
