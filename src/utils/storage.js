export function loadStorage(key) {
  try { return JSON.parse(localStorage.getItem(key)) || {}; } catch { return {}; }
}
export function saveStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { console.error(e); }
}
export function removeStorage(key) {
  try { localStorage.removeItem(key); } catch {}
}
export function getAllStorageKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) keys.push(localStorage.key(i));
  return keys;
}
