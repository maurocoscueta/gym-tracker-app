import React from 'react';

export default function EmptyState({ icon, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', padding: '48px 24px', color: '#5a5a5a' }}>
      <div style={{ opacity: 0.2, marginBottom: 12 }}>{icon}</div>
      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: 1, fontSize: 14 }}>{title}</p>
      {subtitle && <p style={{ marginTop: 8, fontSize: 11, color: '#333' }}>{subtitle}</p>}
    </div>
  );
}
