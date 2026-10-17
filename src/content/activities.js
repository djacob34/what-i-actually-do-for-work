// The three phone activities. Shared by the projected activity slides and by
// participant mode, so wording only needs to change here.

export const chapters = ['incube', 'nessie', 'hy2market'];

export const activities = {
  incube: {
    kind: 'choice',
    chapter: 'InCUBE',
    label: 'Choose the story',
    intro: 'Building renovation in Groningen, Zaragoza and Trento.',
    prompt: 'You’re making a short video about a building renovation. What would you put at the centre of the story?',
    button: 'Show my angle',
    resultHeading: 'Your angle',
    resultLead: 'One thing to keep in mind',
    options: [
      {
        id: 'people',
        label: 'People’s everyday experience',
        result: 'Connect the experience to what changed in the building.',
      },
      {
        id: 'technology',
        label: 'Technology and process',
        result: 'Explain why the technical detail matters, in language anyone can follow.',
      },
      {
        id: 'transformation',
        label: 'Transformation, before and after',
        result: 'Explain what caused the change, beyond how it looks.',
      },
    ],
    footnote: 'There’s no right answer. Each is a real editorial choice.',
  },
  nessie: {
    kind: 'choice',
    chapter: 'NESSIE',
    label: 'Structure the session',
    intro: 'Training people for energy-transition jobs.',
    prompt: 'Partners must deliver traineeships, but their programmes aren’t concrete yet. How would you structure the next partner session?',
    button: 'Show my approach',
    resultHeading: 'Your approach',
    resultLead: 'What it gives you',
    options: [
      {
        id: 'present',
        letter: 'A',
        label: 'Each region presents its current plans',
        result: 'A comparison of current plans: everyone sees where each region stands today.',
      },
      {
        id: 'journey',
        letter: 'B',
        label: 'Each region builds a trainee journey with hosts, activities and assessment',
        result: 'A worked learner pathway: one concrete example of who goes where, does what, and how it’s assessed.',
      },
      {
        id: 'template',
        letter: 'C',
        label: 'Everyone completes a shared programme template',
        result: 'Consistent documentation: every region describes its programme in the same format.',
      },
    ],
    footnote: 'Several approaches can help.',
  },
  hy2market: {
    kind: 'text',
    chapter: 'Hy2Market',
    label: 'An open question',
    intro: 'Getting a hydrogen project noticed at a busy conference.',
    prompt: 'What makes a conference booth good at communicating a project and getting people to interact?',
    fieldLabel: 'One or two ideas',
    maxLength: 300,
    button: 'Save my ideas',
    resultHeading: 'Your ideas',
  },
};
