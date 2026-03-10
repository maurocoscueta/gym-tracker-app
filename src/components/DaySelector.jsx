import React from 'react';
import ROUTINE from '../data/routine';

const s = {
  strip: {
    display: 'flex',
    gap: 8,
    overflowX: 'auto',
    paddingBottom: 4,
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  chip: (active, isToday) => ({
    flexShrink: 0,
    border: `1px solid ${active ? '#ff6a00' : isToday ? '#ff6a00' : '#222'}`,
    background: active
      ? 'linear-gradient(135deg, #ff6a00, #e63000)'
      : '#141414',
    color: active ? '#fff' : isToday ? '#ff6a00' : '#888',
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: active ? 700 : 400,
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
    padding: '8px 14px',
    borderRadius: 3,
    cursor: 'pointer',
    transition: 'all 0.15s',
    whiteSpace: 'nowrap',
    lineHeight: 1.3,
    textAlign: 'center',
    boxShadow: active ? '0 2px 10px rgba(255,106,0,0.3)' : 'none',
  }),
};

export default function DaySelector({ selected, todayIdx, onChange }) {
  return (
    <div style={s.strip}>
      {ROUTINE.map((d, i) => (
        <button
          key={d.id}
          style={s.chip(selected === i, i === todayIdx && selected !== i)}
          onClick={() => onChange(i)}
        >
          {d.day}
          <br/>
          <span style={{ fontSize: 10 }}>{d.muscle}</span>
        </button>
      ))}
    </div>
  );
}
