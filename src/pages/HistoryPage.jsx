import React, { useMemo } from 'react';
import ROUTINE from '../data/routine';
import EmptyState from '../components/EmptyState';
import { loadStorage, getAllStorageKeys } from '../utils/storage';
import { formatWeekLabel } from '../utils/dates';

const s = {
  page: { animation: 'fadeIn 0.25s ease forwards' },
  title: { fontFamily: "'Bebas Neue', cursive", fontSize: 22, letterSpacing: 3, color: '#f0f0f0', marginBottom: 4 },
  subtitle: { fontSize: 13, color: '#5a5a5a', letterSpacing: 1, textTransform: 'uppercase', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: 20 },
  weekBlock: { marginBottom: 24 },
  weekHeader: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 18,
    letterSpacing: 3,
    color: '#5a5a5a',
    marginBottom: 10,
    borderBottom: '1px solid #1e1e1e',
    paddingBottom: 6,
  },
  entry: {
    background: '#141414',
    border: '1px solid #222',
    borderRadius: 6,
    padding: '14px 16px',
    marginBottom: 8,
  },
  dayName: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#ff6a00',
    marginBottom: 8,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  exName: { fontSize: 13, color: '#888', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 0.5 },
  exSets: { fontSize: 12, color: '#444', marginTop: 2 },
  exBlock: { marginBottom: 6 },
};

export default function HistoryPage() {
  const allWeeks = useMemo(() => {
    const weeks = {};
    getAllStorageKeys().forEach((key) => {
      if (!key || !key.startsWith('week_')) return;
      const parts = key.split('_');
      if (parts.length < 6) return;
      const weekKey = parts.slice(0, 4).join('_');
      const dayId = parts[4];
      const exId = parts[5];
      const data = loadStorage(key);
      if (!data.sets || !data.sets.filter((s) => s.kg || s.reps).length) return;
      if (!weeks[weekKey]) weeks[weekKey] = {};
      if (!weeks[weekKey][dayId]) weeks[weekKey][dayId] = {};
      weeks[weekKey][dayId][exId] = data.sets;
    });
    return Object.entries(weeks).sort(([a], [b]) => b.localeCompare(a));
  }, []);

  if (!allWeeks.length) {
    return (
      <div style={s.page}>
        <div style={s.title}>Historial</div>
        <div style={s.subtitle}>Registros anteriores</div>
        <EmptyState
          icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
          title="No hay historial todavía"
          subtitle="Tu progreso irá apareciendo aquí semana a semana"
        />
      </div>
    );
  }

  return (
    <div style={s.page}>
      <div style={s.title}>Historial</div>
      <div style={s.subtitle}>{allWeeks.length} semana{allWeeks.length !== 1 ? 's' : ''} registrada{allWeeks.length !== 1 ? 's' : ''}</div>

      {allWeeks.map(([weekKey, days]) => (
        <div key={weekKey} style={s.weekBlock}>
          <div style={s.weekHeader}>{formatWeekLabel(weekKey)}</div>
          {ROUTINE.map((dayDef) => {
            const dayData = days[dayDef.id];
            if (!dayData) return null;
            const hasAny = dayDef.exercises.some((ex) => {
              const sets = dayData[ex.id];
              return sets && sets.filter((sv) => sv.kg || sv.reps).length > 0;
            });
            if (!hasAny) return null;
            return (
              <div key={dayDef.id} style={s.entry}>
                <div style={s.dayName}>
                  <span className={`muscle-tag ${dayDef.muscleClass}`}>{dayDef.muscle}</span>
                  {dayDef.day}
                </div>
                {dayDef.exercises.map((ex) => {
                  const sets = dayData[ex.id];
                  if (!sets) return null;
                  const validSets = sets.filter((sv) => sv.kg || sv.reps);
                  if (!validSets.length) return null;
                  return (
                    <div key={ex.id} style={s.exBlock}>
                      <div style={s.exName}>{ex.name}</div>
                      <div style={s.exSets}>
                        {validSets.map((sv, i) => `S${i + 1}: ${sv.kg || '—'}kg × ${sv.reps || '—'}`).join('  ·  ')}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
