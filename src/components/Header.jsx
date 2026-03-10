import React from 'react';
import logo from '../assets/repforge_logo.png';
import ROUTINE from '../data/routine';
import { getTodayDayIndex } from '../utils/dates';

export default function Header() {
  const todayName = ROUTINE[getTodayDayIndex()].muscle;

  return (
    <>
      <style>{`
        .rf-header {
          background: #0f0f0f;
          border-bottom: 1px solid #222;
          padding: 0 16px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 20px rgba(255,106,0,0.08);
        }
        .rf-logo {
          height: 75px;
          width: auto;
          display: block;
          object-fit: contain;
          filter:
            drop-shadow(0 0 6px rgba(255,106,0,0.7))
            drop-shadow(0 0 14px rgba(255,150,0,0.5))
            drop-shadow(0 0 24px rgba(255,183,0,0.3));
          animation: flamePulse 3s ease-in-out infinite;
        }
        .rf-badge {
          position: absolute;
          right: 16px;
          background: linear-gradient(135deg, #ff6a00, #e63000);
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 2px;
          padding: 5px 13px;
          border-radius: 3px;
          text-transform: uppercase;
          box-shadow: 0 2px 10px rgba(255,106,0,0.35);
          white-space: nowrap;
        }

        /* En mobile: logo a la izquierda, badge a la derecha */
        @media (max-width: 600px) {
          .rf-header {
            justify-content: flex-start;
          }
          .rf-badge {
            position: static;
            margin-left: auto;
          }
        }
      `}</style>

      <header className="rf-header">
        <img src={logo} alt="RepForge" className="rf-logo" />
        <div className="rf-badge">{todayName} — HOY</div>
      </header>
    </>
  );
}