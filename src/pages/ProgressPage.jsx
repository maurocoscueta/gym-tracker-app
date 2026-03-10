import React, { useState, useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import ROUTINE from '../data/routine';
import EmptyState from '../components/EmptyState';
import { loadStorage, getAllStorageKeys } from '../utils/storage';

const allExercises = ROUTINE.flatMap((d) =>
  d.exercises.map((e) => ({ ...e, dayId: d.id, dayName: d.day, muscle: d.muscle }))
);

const s = {
  page: { animation: 'fadeIn 0.25s ease forwards' },
  title: { fontFamily: "'Bebas Neue', cursive", fontSize: 22, letterSpacing: 3, color: '#f0f0f0', marginBottom: 4 },
  subtitle: { fontSize: 13, color: '#5a5a5a', letterSpacing: 1, textTransform: 'uppercase', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: 20 },
  exSelector: { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 },
  exBtn: (active) => ({
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 13,
    letterSpacing: 1,
    textTransform: 'uppercase',
    padding: '6px 14px',
    borderRadius: 3,
    border: `1px solid ${active ? '#ff6a00' : '#222'}`,
    background: active ? 'linear-gradient(135deg, #ff6a00, #e63000)' : '#141414',
    color: active ? '#fff' : '#888',
    cursor: 'pointer',
    transition: 'all 0.15s',
    boxShadow: active ? '0 2px 10px rgba(255,106,0,0.3)' : 'none',
  }),
  chartCard: {
    background: '#141414',
    border: '1px solid #222',
    borderRadius: 6,
    padding: '20px 12px',
    marginBottom: 16,
  },
  chartTitle: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#5a5a5a',
    marginBottom: 16,
  },
  statsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 },
  statCard: {
    background: '#141414',
    border: '1px solid #222',
    borderRadius: 6,
    padding: '14px 12px',
    textAlign: 'center',
  },
  statValue: (color) => ({
    fontSize: 22,
    fontFamily: "'Bebas Neue', cursive",
    letterSpacing: 2,
    color,
  }),
  statLabel: {
    fontSize: 11,
    color: '#5a5a5a',
    fontFamily: "'Barlow Condensed', sans-serif",
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginTop: 2,
  },
};

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div style={{ background: '#1a1a1a', border: '1px solid #2e2e2e', padding: '10px 14px', borderRadius: 4 }}>
      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, color: '#5a5a5a', marginBottom: 6, letterSpacing: 1 }}>
        SEM. {label}
      </p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color, fontSize: 14, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}>
          {p.name}: {p.value}{p.name === 'Volumen' ? '' : ' kg'}
        </p>
      ))}
    </div>
  );
}

export default function ProgressPage() {
  const [selectedEx, setSelectedEx] = useState(allExercises[0].id);

  const chartData = useMemo(() => {
    const ex = allExercises.find((e) => e.id === selectedEx);
    if (!ex) return [];
    const points = [];
    getAllStorageKeys().forEach((key) => {
      if (!key || !key.startsWith('week_')) return;
      if (!key.includes(ex.dayId) || !key.includes(ex.id)) return;
      const data = loadStorage(key);
      if (!data.sets) return;
      const validSets = data.sets.filter((s) => s.kg && parseFloat(s.kg) > 0);
      if (!validSets.length) return;
      const maxKg = Math.max(...validSets.map((s) => parseFloat(s.kg) || 0));
      const avgKg = validSets.reduce((a, s) => a + (parseFloat(s.kg) || 0), 0) / validSets.length;
      const volumen = validSets.reduce((a, s) => a + (parseFloat(s.kg) || 0) * (parseInt(s.reps) || 0), 0);
      const wkKey = key.split('_').slice(0, 4).join('_');
      const parts = wkKey.replace('week_', '').split('_');
      points.push({
        week: `${parts[2]}/${parts[1]}`,
        fullKey: wkKey,
        maxKg: Math.round(maxKg * 10) / 10,
        avgKg: Math.round(avgKg * 10) / 10,
        volumen,
      });
    });
    return points.sort((a, b) => a.fullKey.localeCompare(b.fullKey));
  }, [selectedEx]);

  const ex = allExercises.find((e) => e.id === selectedEx);

  return (
    <div style={s.page}>
      <div style={s.title}>Progreso</div>
      <div style={s.subtitle}>Evolución por ejercicio</div>

      <div style={s.exSelector}>
        {allExercises.map((e) => (
          <button key={e.id} style={s.exBtn(selectedEx === e.id)} onClick={() => setSelectedEx(e.id)}>
            {e.name.split(' ').slice(0, 3).join(' ')}
          </button>
        ))}
      </div>

      {chartData.length === 0 ? (
        <EmptyState
          icon={<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>}
          title={`Sin datos aún para ${ex?.name}`}
          subtitle="Registrá tus entrenamientos para ver el progreso"
        />
      ) : (
        <>
          <div style={s.chartCard}>
            <div style={s.chartTitle}>Peso Máximo por Semana (kg)</div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e1e1e" />
                <XAxis dataKey="week" tick={{ fill: '#5a5a5a', fontSize: 11, fontFamily: 'Barlow Condensed' }} axisLine={{ stroke: '#2e2e2e' }} tickLine={false} />
                <YAxis tick={{ fill: '#5a5a5a', fontSize: 11 }} axisLine={{ stroke: '#2e2e2e' }} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="maxKg" name="Máx" stroke="#ff6a00" strokeWidth={2.5} dot={{ r: 4, fill: '#ff6a00', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="avgKg" name="Prom" stroke="#ffb700" strokeWidth={2} strokeDasharray="5 3" dot={{ r: 3, fill: '#ffb700', strokeWidth: 0 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={s.chartCard}>
            <div style={s.chartTitle}>Volumen Total por Semana (kg × reps)</div>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e1e1e" />
                <XAxis dataKey="week" tick={{ fill: '#5a5a5a', fontSize: 11, fontFamily: 'Barlow Condensed' }} axisLine={{ stroke: '#2e2e2e' }} tickLine={false} />
                <YAxis tick={{ fill: '#5a5a5a', fontSize: 11 }} axisLine={{ stroke: '#2e2e2e' }} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="volumen" name="Volumen" stroke="#c0c8d0" strokeWidth={2.5} dot={{ r: 4, fill: '#c0c8d0', strokeWidth: 0 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={s.statsGrid}>
            {[
              { label: 'Max Peso', value: `${Math.max(...chartData.map((d) => d.maxKg))} kg`, color: '#ff6a00' },
              { label: 'Semanas', value: chartData.length, color: '#c0c8d0' },
              { label: 'Max Vol.', value: Math.max(...chartData.map((d) => d.volumen)), color: '#ffb700' },
            ].map((stat, i) => (
              <div key={i} style={s.statCard}>
                <div style={s.statValue(stat.color)}>{stat.value}</div>
                <div style={s.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
