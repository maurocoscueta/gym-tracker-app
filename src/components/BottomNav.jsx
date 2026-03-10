import React from 'react';

const navItems = [
  {
    id: 'workout',
    label: 'Rutina',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 4v6a6 6 0 0 0 12 0V4"/>
        <line x1="6" y1="4" x2="18" y2="4"/>
        <line x1="12" y1="14" x2="12" y2="20"/>
        <line x1="8" y1="20" x2="16" y2="20"/>
      </svg>
    ),
  },
  {
    id: 'progress',
    label: 'Progreso',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
      </svg>
    ),
  },
  {
    id: 'history',
    label: 'Historial',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
];

const styles = {
  nav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#0f0f0f',
    borderTop: '1px solid #222',
    display: 'flex',
    zIndex: 100,
    boxShadow: '0 -2px 20px rgba(0,0,0,0.5)',
  },
  btn: (active) => ({
    flex: 1,
    border: 'none',
    background: 'transparent',
    color: active ? '#ff6a00' : '#5a5a5a',
    padding: '11px 8px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'color 0.2s',
    borderTop: active ? '2px solid #ff6a00' : '2px solid transparent',
  }),
};

export default function BottomNav({ page, onNavigate }) {
  return (
    <nav style={styles.nav}>
      {navItems.map((item) => (
        <button
          key={item.id}
          style={styles.btn(page === item.id)}
          onClick={() => onNavigate(item.id)}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </nav>
  );
}
