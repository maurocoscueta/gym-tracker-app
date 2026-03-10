import React, { useState, useMemo } from 'react';
import VideoEmbed from './VideoEmbed';
import { useExerciseSets } from '../hooks/useExerciseSets';
import { loadStorage } from '../utils/storage';
import { buildExerciseKey } from '../utils/dates';

const s = {
  card: (expanded) => ({
    background: '#141414',
    border: `1px solid ${expanded ? '#ff6a00' : '#222'}`,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 12,
    transition: 'border-color 0.2s',
    boxShadow: expanded ? '0 0 16px rgba(255,106,0,0.12)' : 'none',
  }),
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '14px 16px',
    cursor: 'pointer',
    userSelect: 'none',
  },
  num: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 28,
    color: '#2e2e2e',
    lineHeight: 1,
    minWidth: 32,
  },
  info: { flex: 1 },
  name: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#f0f0f0',
  },
  meta: { fontSize: 12, color: '#5a5a5a', marginTop: 2 },
  chevron: (expanded) => ({
    color: expanded ? '#ff6a00' : '#5a5a5a',
    transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
    transition: 'transform 0.2s, color 0.2s',
  }),
  prevBadge: {
    fontSize: 11,
    background: 'rgba(192,200,208,0.08)',
    color: '#c0c8d0',
    border: '1px solid rgba(192,200,208,0.18)',
    padding: '2px 8px',
    borderRadius: 20,
    fontFamily: "'Barlow Condensed', sans-serif",
    letterSpacing: 0.5,
    whiteSpace: 'nowrap',
  },
  setsSection: { padding: 16, borderTop: '1px solid #1e1e1e' },
  setsLabel: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#5a5a5a',
    marginBottom: 10,
  },
  gridHeader: {
    display: 'grid',
    gridTemplateColumns: '40px 1fr 1fr 40px',
    gap: 8,
    marginBottom: 8,
  },
  gridHeaderCell: {
    fontSize: 11,
    color: '#5a5a5a',
    fontFamily: "'Barlow Condensed', sans-serif",
    letterSpacing: 1,
    textAlign: 'center',
  },
  gridRow: {
    display: 'grid',
    gridTemplateColumns: '40px 1fr 1fr 40px',
    gap: 8,
    alignItems: 'center',
    marginBottom: 6,
  },
  setNum: {
    fontFamily: "'Bebas Neue', cursive",
    fontSize: 20,
    color: '#5a5a5a',
    textAlign: 'center',
  },
  input: {
    background: '#0f0f0f',
    border: '1px solid #222',
    color: '#f0f0f0',
    borderRadius: 4,
    padding: '8px 10px',
    fontSize: 16,
    fontFamily: "'Barlow', sans-serif",
    textAlign: 'center',
    width: '100%',
  },
  btnDel: {
    background: 'transparent',
    border: '1px solid #222',
    color: '#5a5a5a',
    borderRadius: 4,
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  btnAdd: {
    background: 'transparent',
    border: '1px dashed #222',
    color: '#5a5a5a',
    borderRadius: 4,
    width: '100%',
    padding: 8,
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 13,
    letterSpacing: 1,
    cursor: 'pointer',
    marginTop: 8,
  },
  prevBox: {
    background: 'rgba(192,200,208,0.04)',
    border: '1px solid rgba(192,200,208,0.1)',
    borderRadius: 4,
    padding: '10px 12px',
    marginBottom: 14,
  },
  prevTitle: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 11,
    letterSpacing: 2,
    color: '#c0c8d0',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  prevChips: { display: 'flex', flexWrap: 'wrap', gap: 6 },
  prevChip: {
    fontSize: 12,
    background: 'rgba(192,200,208,0.06)',
    border: '1px solid rgba(192,200,208,0.14)',
    padding: '3px 8px',
    borderRadius: 20,
    color: '#c0c8d0',
    fontFamily: "'Barlow Condensed', sans-serif",
  },
};

export default function ExerciseCard({ exercise, idx, dayId, weekKey, prevWeekKey }) {
  const [expanded, setExpanded] = useState(false);
  const { sets, updateSet, addSet, removeSet, filledCount } = useExerciseSets(weekKey, dayId, exercise);

  const prevData = useMemo(() => {
    const key = buildExerciseKey(prevWeekKey, dayId, exercise.id);
    return loadStorage(key);
  }, [prevWeekKey, dayId, exercise.id]);

  const hasPrev = prevData.sets && prevData.sets.filter(s => s.kg || s.reps).length > 0;

  return (
    <div style={s.card(expanded)}>
      <div style={s.header} onClick={() => setExpanded(!expanded)}>
        <div style={s.num}>{String(idx + 1).padStart(2, '0')}</div>
        <div style={s.info}>
          <div style={s.name}>{exercise.name}</div>
          <div style={s.meta}>
            {exercise.sets} series · {exercise.reps} reps
            {filledCount > 0 && (
              <span style={{ color: '#30d158', marginLeft: 8 }}>
                ✓ {filledCount}/{sets.length} completadas
              </span>
            )}
          </div>
        </div>
        {hasPrev && <span style={s.prevBadge}>Sem. anterior</span>}
        <div style={s.chevron(expanded)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6,9 12,15 18,9"/>
          </svg>
        </div>
      </div>

      {expanded && (
        <>
          <VideoEmbed youtubeId={exercise.youtubeId} name={exercise.name} />
          <div style={s.setsSection}>
            {hasPrev && (
              <div style={s.prevBox}>
                <div style={s.prevTitle}>Semana anterior</div>
                <div style={s.prevChips}>
                  {prevData.sets.filter(sv => sv.kg || sv.reps).map((sv, i) => (
                    <span key={i} style={s.prevChip}>
                      Serie {i + 1}: {sv.kg ? `${sv.kg}kg` : '—'} × {sv.reps || '—'}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={s.setsLabel}>Registrar series de hoy</div>
            <div style={s.gridHeader}>
              {['#', 'KG', 'REPS', ''].map((h, i) => (
                <div key={i} style={s.gridHeaderCell}>{h}</div>
              ))}
            </div>

            {sets.map((set, i) => (
              <div key={i} style={s.gridRow}>
                <div style={s.setNum}>{i + 1}</div>
                <input
                  style={s.input}
                  type="number"
                  placeholder={hasPrev && prevData.sets[i] ? prevData.sets[i].kg || '—' : '0'}
                  value={set.kg}
                  onChange={(e) => updateSet(i, 'kg', e.target.value)}
                  onFocus={(e) => { e.target.style.borderColor = '#ff6a00'; e.target.style.background = '#1a1a1a'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#222'; e.target.style.background = '#0f0f0f'; }}
                />
                <input
                  style={s.input}
                  type="number"
                  placeholder={hasPrev && prevData.sets[i] ? prevData.sets[i].reps || '—' : '0'}
                  value={set.reps}
                  onChange={(e) => updateSet(i, 'reps', e.target.value)}
                  onFocus={(e) => { e.target.style.borderColor = '#ff6a00'; e.target.style.background = '#1a1a1a'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#222'; e.target.style.background = '#0f0f0f'; }}
                />
                <button
                  style={s.btnDel}
                  onClick={() => removeSet(i)}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ff3b30'; e.currentTarget.style.color = '#ff3b30'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#5a5a5a'; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            ))}

            <button
              style={s.btnAdd}
              onClick={addSet}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ff6a00'; e.currentTarget.style.color = '#ff6a00'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#5a5a5a'; }}
            >
              + Agregar serie
            </button>
          </div>
        </>
      )}
    </div>
  );
}
