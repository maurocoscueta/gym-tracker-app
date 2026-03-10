import { useState } from 'react';
import { loadStorage, saveStorage } from '../utils/storage';
import { buildExerciseKey } from '../utils/dates';

export function useExerciseSets(weekKey, dayId, exercise) {
  const storageKey = buildExerciseKey(weekKey, dayId, exercise.id);
  const [sets, setSets] = useState(() => {
    const saved = loadStorage(storageKey);
    if (saved.sets && saved.sets.length > 0) return saved.sets;
    return Array.from({ length: exercise.sets }, () => ({ kg: '', reps: '' }));
  });
  const persist = (newSets) => { setSets(newSets); saveStorage(storageKey, { sets: newSets }); };
  const updateSet = (i, field, val) => persist(sets.map((s, si) => si === i ? { ...s, [field]: val } : s));
  const addSet = () => persist([...sets, { kg: '', reps: '' }]);
  const removeSet = (i) => { if (sets.length > 1) persist(sets.filter((_, si) => si !== i)); };
  const filledCount = sets.filter((s) => s.kg || s.reps).length;
  return { sets, updateSet, addSet, removeSet, filledCount };
}
