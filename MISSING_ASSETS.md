# Missing assets checklist

Put files in `public/assets/<folder>/` and set the path in `src/config/site.js`. Tick each item once it's placed and checked on the slide.

## Already placed (from the supplied files)
- [x] NEC logos, rings, × / = mark, dot grids (Watts in Grass deck)
- [x] NESSIE skills-pipeline graphic and Interreg/NESSIE lockup (NESSIE overview deck)
- [x] NESSIE workshop photos: all four regional boards, Journey Logs and evaluation sheets (traineeship summaries)
- [x] Hy2Market header image with logo (EHW overview)

## Essential
| # | Slide | What | File / config |
| --- | --- | --- | --- |
| 1 | 4 InCUBE intro | Demo-site / renovation photo, landscape (before/after welcome) | `assets/incube/incube-demo-site.jpg` → `media.incube.demoImage` |
| 2 | 6 InCUBE reveal | The film: YouTube link or video file, plus excerpt start/end and title | `media.incube.film` |
| 3 | 6 InCUBE reveal | One production-work example: script, storyboard or edit feedback | `assets/incube/incube-script-feedback.jpg` → `media.incube.workImage` |
| 4 | 12 Hy2Market reveal | Preferred booth render (one variation) | `assets/hy2market/hy2market-booth-render.jpg` → `media.hy2market.boothRender` |
| 5 | After 13 | Creative-direction slides as images, in order | `assets/portfolio/01.jpg …` → `portfolio` |
| 6 | 2, 5, 8, 11 | Public participant URL | `site.participantUrl` or `VITE_PARTICIPANT_URL` |

## Optional
| # | Slide | What | File / config |
| --- | --- | --- | --- |
| 7 | 1 Opening | Personal brand reference: logo, palette or a creative-work image | `assets/personal/brand-reference.jpg` → `site.personal` |
| 8 | 12 Hy2Market reveal | Session 2 policy-board mockup (a drawn diagram shows meanwhile) | `assets/hy2market/hy2market-policy-board.png` → `media.hy2market.policyBoard` |
| 9 | 9 NESSIE reveal | Photo of partners playing the game | `assets/nessie/nessie-workshop-in-action.jpg` → `media.nessie.facilitationPhoto` (needs a layout slot) |
| 10 | 14 Freelance | Portraits of Danielle, Ihor, Rich, Bella | not wired; the text diagram works without them |

## Facts to confirm (kept in speaker notes)
- InCUBE: which film is shown, its publication status and production credits; which of the three film concepts are published.
- Hy2Market: whether the right-wall agenda banners and flyer holders are still in the plan (the 17 Oct EHW overview doesn't mention them); policy-board headings come from Hans/the policy letter.
- Footer date for the presentation day (`site.footerDate`).
