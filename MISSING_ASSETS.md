# Missing assets checklist

Put files in `public/assets/<folder>/` and set the path in `src/config/site.js`. Tick each item once it's placed and checked on the slide.

## Already placed (from the supplied files)
- [x] NEC logos, rings, × / = mark, dot grids (Watts in Grass deck)
- [x] NESSIE skills-pipeline graphic and Interreg/NESSIE lockup (NESSIE overview deck)
- [x] NESSIE workshop photos: all four regional boards, Journey Logs and evaluation sheets (traineeship summaries)
- [x] Hy2Market header image with logo (EHW overview)
- [x] Creative-direction slides (8), in Danielle's order
- [x] Personal identity for the opening slide: portrait, mascots, palette and Instrument Serif (from the creative-direction slides)

## Essential
| # | Slide | What | File / config |
| --- | --- | --- | --- |
| 1 | 5 InCUBE intro | Demo-site / renovation photo, landscape (before/after welcome) | `assets/incube/incube-demo-site.jpg` → `media.incube.demoImage` |
| 2 | 7 InCUBE reveal | ~~Film link~~ (set: youtu.be/46jReRgEuqE). Still needed: title and excerpt start/end | `media.incube.film` |
| 3 | 7 InCUBE reveal | One production-work example: script, storyboard or edit feedback | `assets/incube/incube-script-feedback.jpg` → `media.incube.workImage` |
| 4 | 13 Hy2Market reveal | Preferred booth render (one variation) | `assets/hy2market/hy2market-booth-render.jpg` → `media.hy2market.boothRender` |
| 6 | 3, 6, 9, 12 | Public participant URL | `site.participantUrl` or `VITE_PARTICIPANT_URL` |

## Optional
| # | Slide | What | File / config |
| --- | --- | --- | --- |
| 8 | 13 Hy2Market reveal | Session 2 policy-board mockup (a drawn diagram shows meanwhile) | `assets/hy2market/hy2market-policy-board.png` → `media.hy2market.policyBoard` |
| 9 | 10 NESSIE reveal | Photo of partners playing the game | `assets/nessie/nessie-workshop-in-action.jpg` → `media.nessie.facilitationPhoto` (needs a layout slot) |
| 10 | 23 Freelance | Portraits of Danielle, Ihor, Rich, Bella | not wired; the text diagram works without them |

## Facts to confirm (kept in speaker notes)
- InCUBE: which film is shown, its publication status and production credits; which of the three film concepts are published.
- Hy2Market: policy-board headings come from Hans/the policy letter. (Agenda banners + flyer holders and the 5 + 1 map panels are confirmed.)
- Footer date for the presentation day (`site.footerDate`).
