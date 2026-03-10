import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import WorkoutPage from './pages/WorkoutPage';
import ProgressPage from './pages/ProgressPage';
import HistoryPage from './pages/HistoryPage';
import { getWeekKey, getPrevWeekKey } from './utils/dates';

const mainStyle = {
  padding: '20px 16px 90px',
  maxWidth: 800,
  margin: '0 auto',
};

export default function App() {
  const [page, setPage] = useState('workout');
  const weekKey = getWeekKey();
  const prevWeekKey = getPrevWeekKey();

  return (
    <>
      <Header />
      <main style={mainStyle}>
        {page === 'workout'  && <WorkoutPage weekKey={weekKey} prevWeekKey={prevWeekKey} />}
        {page === 'progress' && <ProgressPage weekKey={weekKey} />}
        {page === 'history'  && <HistoryPage />}
      </main>
      <BottomNav page={page} onNavigate={setPage} />
    </>
  );
}
