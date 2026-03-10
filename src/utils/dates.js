export function getTodayDayIndex() {
  const day = new Date().getDay();
  const map = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 };
  return map[day] ?? 0;
}
export function getWeekKey(date = new Date()) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `week_${y}_${m}_${dd}`;
}
export function getPrevWeekKey() {
  const d = new Date();
  d.setDate(d.getDate() - 7);
  return getWeekKey(d);
}
export function formatWeekLabel(weekKey) {
  const parts = weekKey.replace('week_', '').split('_');
  return `Semana del ${parts[2]}/${parts[1]}/${parts[0]}`;
}
export function buildExerciseKey(weekKey, dayId, exerciseId) {
  return `${weekKey}_${dayId}_${exerciseId}`;
}
