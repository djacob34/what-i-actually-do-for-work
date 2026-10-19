# Missing assets checklist

Put files in `public/assets/<folder>/` and set the path in `src/config/site.js`. Tick each item once it's placed and checked on the slide.

## Already placed (from the supplied files)
- [x] NEC logos, rings, × / = mark, dot grids (Watts in Grass deck)
- [x] NESSIE skills-pipeline graphic and Interreg/NESSIE lockup (NESSIE overview deck)
- [x] NESSIE workshop photos: all four regional boards, Journey Logs and evaluation sheets (traineeship summaries)
- [x] Hy2Market header image with logo (EHW overview)
- [x] Hy2Market booth render
- [x] InCUBE demo-site photos: Groningen, Zaragoza, Trento
- [x] InCUBE film: “InCUBE Mid-way project update” (youtu.be/46jReRgEuqE), whole video
- [x] Creative-direction slides (7), in Danielle's order
- [x] Personal identity for the opening slide: portrait, mascots, palette and Instrument Serif (from the creative-direction slides)

## Essential
| # | Slide | What | File / config |
| --- | --- | --- | --- |
| 6 | 3, 6, 9, 12 | Public participant URL | `site.participantUrl` or `VITE_PARTICIPANT_URL` |

## Everyday-work pop-ups (slide 14)
Screenshots or exports in `public/assets/everyday/`, then set each `src` in `media.everyday` (`src/config/site.js`). Any size; websites landscape, LinkedIn posts portrait, documents as a page image.
- [x] `web-case-studies.jpg`: Upper Austria case study
- [x] `web-incube.jpg`: incubeproject.eu
- [x] `web-nessie.jpg`: NESSIE on interregnorthsea.eu
- [x] `li-hy2market.jpg`, `li-incube.jpg`, `li-nessie.jpg`: one LinkedIn post per project
- [x] `news-hy2market.jpg`, `news-incube.jpg`: Hy2Market Q3 and InCUBE July 2026 issues
- [x] `webinar-incube-relife.jpg`: frame from the InCUBE × ReLIFE recording
- [x] `banner.jpg`: NESSIE × FREIIA roll-up banner
- [x] `report-nessie-traineeship.jpg`: page 1 of the Morbihan traineeship summary

## Optional
| # | Slide | What | File / config |
| --- | --- | --- | --- |
| 8 | 13 Hy2Market reveal | Session 2 policy-board mockup (a drawn diagram shows meanwhile) | `assets/hy2market/hy2market-policy-board.png` → `media.hy2market.policyBoard` |
| 9 | 10 NESSIE reveal | Photo of partners playing the game | `assets/nessie/nessie-workshop-in-action.jpg` → `media.nessie.facilitationPhoto` (needs a layout slot) |
| 11 | 7 InCUBE reveal | Optional: a script page, video brief or storyboard frame (shown under the film if set) | `assets/incube/incube-script-feedback.jpg` → `media.incube.workImage` |
| 10 | 23 Freelance | Portraits of Danielle, Ihor, Rich, Bella | not wired; the text diagram works without them |

## Facts to confirm (kept in speaker notes)
- InCUBE: production credits for the Mid-way project update.
- Hy2Market: policy-board headings come from Hans/the policy letter. (Agenda banners + flyer holders and the 5 + 1 map panels are confirmed.)
- Footer date for the presentation day (`site.footerDate`).

## NEC version (`?deck=nec`)
- [x] Wind turbine thesis figures: samara seed diagram (thesis p. 4, Fig. 2.1, from source [30]), turbine in wind tunnel (p. 29, Fig. 4.15), blade set (p. 23, Fig. 4.9)
- [x] Kuttanad research slide: built from the Colloquium presentation (the report wasn't needed)
- [x] `assets/research/kuttanad-map.jpg`: Colloquium slide 3 (Vijayan & Ray, 2015)
- [x] `assets/research/kuttanad-model.jpg`: conceptual model pathway, Colloquium slide 15
