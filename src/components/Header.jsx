import React from 'react';
import logo from '../assets/repforge_logo.png';
import ROUTINE from '../data/routine';
import { getTodayDayIndex } from '../utils/dates';

const styles = {
  header: {
    background: '#0f0f0f',
    borderBottom: '1px solid #222',
    padding: '0 20px',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 20px rgba(255,106,0,0.08)',
  },
  logoImg: {
    height: 100,
    width: 'auto',
    display: 'block',
    objectFit: 'contain',
    filter:
      'drop-shadow(0 0 6px rgba(255,106,0,0.7)) ' +
      'drop-shadow(0 0 14px rgba(255,150,0,0.5)) ' +
      'drop-shadow(0 0 24px rgba(255,183,0,0.3))',
    animation: 'flamePulse 3s ease-in-out infinite',
  },
  badge: {
    position: 'absolute',
    right: 20,
    background: 'linear-gradient(135deg, #ff6a00, #e63000)',
    color: '#fff',
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: 2,
    padding: '5px 13px',
    borderRadius: 3,
    textTransform: 'uppercase',
    boxShadow: '0 2px 10px rgba(255,106,0,0.35)',
  },
};

export default function Header() {
  const todayName = ROUTINE[getTodayDayIndex()].muscle;
  return (
    <header style={styles.header}>
      <img src={logo} alt="RepForge" style={styles.logoImg} />
      <div style={styles.badge}>{todayName} — HOY</div>
    </header>
  );
}