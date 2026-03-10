const ROUTINE = [
  // ── LUNES: Pecho, Bíceps y Hombro ──────────────────────────────────────
  {
    id: 'pecho-biceps-hombro',
    day: 'Lunes',
    muscle: 'Pecho · Bíceps · Hombro',
    muscleClass: 'muscle-pecho',
    exercises: [
      { id: 'press-banca-olimpica',        name: 'Press Banca con Barra Olímpica',                   sets: 3, reps: '4-6',  youtubeId: 'b9wuiEn5dbA' },
      { id: 'press-inclinado-mancuernas',  name: 'Press Inclinado con Mancuernas',                   sets: 3, reps: '8-10',  youtubeId: 'n_Ef2wayxrA' },
      { id: 'curl-biceps-barra-w',         name: 'Curl de Biceps con Barra W',                       sets: 4, reps: '10-12',    youtubeId: 'H_CdNj9cezw' },
      { id: 'elev-lat-1brazo-parado',      name: 'Elevaciones Laterales a 1 Brazo con Mancuernas Parado', sets: 4, reps: '8-10', youtubeId: 'lWvfJON4rcA' },
      { id: 'elev-lat-sentado',            name: 'Elevaciones Laterales con Mancuernas Sentado',          sets: 4, reps: '8-10', youtubeId: 'DAMw-xGYNck' },
      { id: 'curl-biceps-alternado',       name: 'Curl de Bíceps con Mancuernas Alternado',          sets: 4, reps: '8-10', youtubeId: 'Ags5lTk3whg' },
      { id: 'cruces-en-polea',             name: 'Cruces en Polea',                                  sets: 3, reps: '10-12', youtubeId: 'TUUmOc9_oZ8' },
      { id: 'crunch-peso-lunes',           name: 'Crunch en Banco Inclinado con Peso',               sets: 4, reps: '12-15',    youtubeId: 'L53ZyUzCELM' },
      { id: 'elevaciones-paralelas-lunes', name: 'Elevaciones de Piernas en Paralelas',              sets: 4, reps: '12-15',    youtubeId: '2ypB_CmVILM' },
    ],
  },

  // ── MARTES: Espalda y Tríceps ───────────────────────────────────────────
  {
    id: 'espalda-triceps',
    day: 'Martes',
    muscle: 'Espalda · Tríceps',
    muscleClass: 'muscle-espalda',
    exercises: [
      { id: 'remo-con-barra',            name: 'Remo con Barra',                          sets: 3, reps: '6-8',    youtubeId: 'XfBxF3QX0dM' },
      { id: 'dominadas-martes',          name: 'Dominadas',                               sets: 3, reps: '8-10', youtubeId: 'R58lWVDCPHk' },
      { id: 'press-frances-barra-w',     name: 'Press Francés con Barra W',              sets: 4, reps: '8-10',   youtubeId: 'LlsndR5stM0' },
      { id: 'extension-tricep-polea',    name: 'Extensión de Tríceps en Polea con Soga', sets: 4, reps: '10-12',   youtubeId: 'e2X7sXmjMAc' },
      { id: 'remo-mancuerna-unilateral', name: 'Remo con Mancuerna Unilateral',          sets: 3, reps: '10-12',   youtubeId: 'fgA4bGIKsn8' },
      { id: 'remo-gironda',              name: 'Remo Gironda',                            sets: 3, reps: '15-20',   youtubeId: 'BStM4uD_Zmo' },
      { id: 'crunch-bicicleta',          name: 'Crunch Bicicleta',                        sets: 4, reps: '12-15',      youtubeId: 'J6QFJ-lHDQs' },
      { id: 'rotaciones-disco',          name: 'Rotaciones con Disco',                    sets: 4, reps: '12-15',      youtubeId: 'VlK9obN2yM4' },
    ],
  },

  // ── MIÉRCOLES: Cuádriceps, Isquios y Hombro ────────────────────────────
  {
    id: 'cuadriceps-isquios-hombro',
    day: 'Miércoles',
    muscle: 'Cuáds · Isquios · Hombro',
    muscleClass: 'muscle-piernas',
    exercises: [
      { id: 'sentadilla-olimpica',     name: 'Sentadilla con Barra Olímpica',                     sets: 3, reps: '6-8',  youtubeId: 'dsCuiccYNGs' },
      { id: 'prensa-45-mie',          name: 'Prensa 45°',                           sets: 3, reps: '8-10', youtubeId: 'OVyl5Pa-z8s' },
      { id: 'curl-femoral-acostado',   name: 'Curl Femoral Acostado',                             sets: 4, reps: '10-12', youtubeId: 'VEAv16_YIF0' },
      { id: 'extension-cuad-mie',      name: 'Extensión de Cuádriceps',                          sets: 4, reps: '10-12', youtubeId: 'rHEwEEavDCU' },
      { id: 'elev-lat-parado',         name: 'Elevaciones Laterales con Mancuernas de Pie',          sets: 4, reps: '8-10', youtubeId: 'ItBASjwB_Wo' },
      { id: 'elev-lat-sentado-mie',    name: 'Elevaciones Laterales con Mancuernas Sentado',     sets: 4, reps: '8-10', youtubeId: 'DAMw-xGYNck' },
      { id: 'crunch-90',               name: 'Crunch 90°',                                        sets: 4, reps: '12-15',    youtubeId: 'iG5pTvqoJ4k' },
      { id: 'crunch-lateral',          name: 'Crunch Lateral',                                    sets: 4, reps: '12-15',    youtubeId: '4sk9Z1Jbxkc' },
    ],
  },

  // ── JUEVES: Tren Superior ───────────────────────────────────────────────
  {
    id: 'tren-superior',
    day: 'Jueves',
    muscle: 'Tren Superior',
    muscleClass: 'muscle-hombros',
    exercises: [
      { id: 'press-inclinado-barra',       name: 'Press Inclinado con Barra',          sets: 3, reps: '6-8',  youtubeId: 'wi89qodn2KQ' },
      { id: 'remo-t',                      name: 'Remo T',                             sets: 3, reps: '8-10',  youtubeId: 'hWtudZSwLaI' },
      { id: 'press-banca-manc-jue',        name: 'Press Banca con Mancuernas',         sets: 4, reps: '10-12', youtubeId: 'pBe-wYcVDXg' },
      { id: 'jalon-agarre-prono',          name: 'Jalón al Pecho con Agarre Prono',    sets: 3, reps: '12-15', youtubeId: 'cwN6QVwXTgQ' },
      { id: 'curl-biceps-barra',           name: 'Curl de Biceps con Barra',           sets: 4, reps: '8-10',  youtubeId: '1V-o8pDiutU' },
      { id: 'extension-tricep-unilateral', name: 'Extensión de Tríceps Unilateral',    sets: 4, reps: '8-10', youtubeId: '4blMJVAcnlM' },
      { id: 'crunch-peso-jue',             name: 'Crunch en Banco Inclinado con Peso', sets: 4, reps: '12-15',    youtubeId: 'L53ZyUzCELM' },
      { id: 'elevaciones-paralelas-jue',   name: 'Elevaciones de Piernas en Paralelas',sets: 4, reps: '12-15',    youtubeId: '2ypB_CmVILM' },
    ],
  },

  // ── VIERNES: Isquios, Cuádriceps y Hombro ──────────────────────────────
  {
    id: 'isquios-cuadriceps-hombro',
    day: 'Viernes',
    muscle: 'Isquios · Cuáds · Hombro',
    muscleClass: 'muscle-brazos',
    exercises: [
      { id: 'peso-muerto-rumano',    name: 'Peso Muerto Rumano',                                sets: 3, reps: '6-8',  youtubeId: 'UU6AS_iHPyI' },
      { id: 'prensa-45-vie',     name: 'Prensa 45°',                              sets: 3, reps: '8-10', youtubeId: 'OVyl5Pa-z8s' },
      { id: 'curl-femoral-acostado-vie',  name: 'Curl Femoral Acostado',                              sets: 4, reps: '10-12', youtubeId: 'VEAv16_YIF0' },
      { id: 'extension-cuad-vie',    name: 'Extensión de Cuádriceps',                          sets: 4, reps: '10-12', youtubeId: 'rHEwEEavDCU' },
      { id: 'elev-lat-1brazo-vie',   name: 'Elevaciones Laterales a 1 Brazo con Mancuernas Parado', sets: 4, reps: '8-10', youtubeId: 'lWvfJON4rcA' },
      { id: 'elev-lat-sentado-vie',  name: 'Elevaciones Laterales con Mancuernas Sentado',     sets: 4, reps: '8-10', youtubeId: 'DAMw-xGYNck' },
      { id: 'plancha-corredora',     name: 'Plancha Corredora',                                  sets: 4, reps: '12-15',    youtubeId: 'GJUxxp_BqSU' },
      { id: 'encogimientos',         name: 'Encogimientos',                                     sets: 4, reps: '12-15', youtubeId: '70oOG4Pw0Ws' },
    ],
  },
];

export default ROUTINE;