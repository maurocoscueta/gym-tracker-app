import React, { useState } from 'react';
import ROUTINE from '../data/routine';
import DaySelector from '../components/DaySelector';
import ExerciseCard from '../components/ExerciseCard';
import Toast from '../components/Toast';
import { getTodayDayIndex } from '../utils/dates';

const s = {
  page: { animation: 'fadeIn 0.25s ease forwards' },
  titleRow: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4, flexWrap: 'wrap' },
  sectionTitle: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 22,
    letterSpacing: 3,
    color: '#f0f0f0',
  },
  todayPill: {
    fontSize: 11,
    background: 'linear-gradient(135deg, #ff6a00, #e63000)',
    color: '#fff',
    padding: '2px 10px',
    borderRadius: 2,
    fontFamily: "'Barlow Condensed', sans-serif",
    letterSpacing: 1,
    fontWeight: 700,
    boxShadow: '0 2px 8px rgba(255,106,0,0.35)',
  },
  subtitle: {
    fontSize: 13,
    color: '#5a5a5a',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontFamily: "'Barlow Condensed', sans-serif",
  },
  saveBtn: {
    width: '100%',
    background: 'linear-gradient(135deg, #ff6a00, #e63000)',
    color: '#fff',
    border: 'none',
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 20,
    letterSpacing: 4,
    padding: 14,
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'all 0.15s',
    marginTop: 16,
    boxShadow: '0 4px 16px rgba(255,106,0,0.35)',
  },
};

export default function WorkoutPage({ weekKey, prevWeekKey }) {
  const todayIdx = getTodayDayIndex();
  const [selectedDay, setSelectedDay] = useState(todayIdx);
  const [toast, setToast] = useState(null);
  const day = ROUTINE[selectedDay];

  return (
    <div style={s.page}>
      {toast && <Toast message={toast} onDone={() => setToast(null)} />}

      <div style={{ marginBottom: 20 }}>
        <DaySelector selected={selectedDay} todayIdx={todayIdx} onChange={setSelectedDay} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={s.titleRow}>
          <div style={s.sectionTitle}>{day.muscle}</div>
          <span className={`muscle-tag ${day.muscleClass}`}>{day.day}</span>
          {selectedDay === todayIdx && <span style={s.todayPill}>HOY</span>}
        </div>
        <div style={s.subtitle}>
          {day.exercises.length} ejercicios · Día {selectedDay + 1} de 5
        </div>
      </div>

      {day.exercises.map((ex, i) => (
        <ExerciseCard
          key={ex.id}
          exercise={ex}
          idx={i}
          dayId={day.id}
          weekKey={weekKey}
          prevWeekKey={prevWeekKey}
        />
      ))}

      <button
        style={s.saveBtn}
        onClick={() => setToast(`¡Entrenamiento de ${day.muscle} guardado!`)}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        ✓ Guardar entrenamiento de {day.muscle}
      </button>
    </div>
  );
}
