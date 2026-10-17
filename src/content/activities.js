// The three phone activities: "You get the brief I got". Each shows the brief
// Danielle was given and asks how the participant would approach it. Shared by
// the projected activity slides and participant mode, so wording lives here.

export const chapters = ['incube', 'nessie', 'hy2market'];

export const activities = {
  incube: {
    chapter: 'InCUBE',
    label: 'The film brief',
    brief: 'Make a short film about a renovation project happening in three countries, for people who’ve never heard of it.',
    fields: [{ id: 'first', label: 'What’s the first thing you’d do?', maxLength: 300 }],
    button: 'Save my plan',
  },
  nessie: {
    chapter: 'NESSIE',
    label: 'The workshop brief',
    brief: 'You have 75 minutes with 24 partners from four regions. They must deliver traineeships, but nobody has a concrete plan yet. They need to leave with one.',
    fields: [{ id: 'plan', label: 'How would you use those 75 minutes?', maxLength: 400 }],
    button: 'Save my plan',
  },
  hy2market: {
    chapter: 'Hy2Market',
    label: 'The booth brief',
    brief: 'One day on a shared stand at a busy hydrogen conference. You need to explain ten regions and get strangers talking to each other.',
    fields: [
      { id: 'stop', label: 'How would you get people to stop?', maxLength: 250 },
      { id: 'talk', label: 'How would you get them to talk?', maxLength: 250 },
    ],
    button: 'Save my plan',
  },
};

// An answer counts as done when at least one field has text.
export function isDone(id, answer) {
  return Boolean(answer && activities[id].fields.some((f) => answer[f.id]?.trim()));
}
