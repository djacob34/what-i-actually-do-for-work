# NEC style summary

Extracted from `Watts in Grass – Internal Kickoff 6-2-26.pptx` (theme, slide master, layouts 1, 3 and 9, and the media files). Only identity elements were reused; none of that project's content.

## Format
- Slide size 12,192,000 × 6,858,000 EMU = **13.33 × 7.5 in, 16:9**. The web canvas is 1280 × 720 px and scales to fit, with letterboxing.
- 1 pt in PowerPoint ≈ 1.333 px on the canvas.

## Colour
| Token | Value | Source |
| --- | --- | --- |
| `--nec-yellow` | `#FFED00` | Logo and ring artwork fill (also Hy2Market's house yellow) |
| `--nec-yellow-theme` | `#FFF100` | Theme accent1 |
| `--nec-yellow-soft` | `#FFF59B` | Theme accent2 |
| `--nec-ink` | `#000000` | Text (tx1) |
| `--nec-grey-900` | `#262626` | Theme dk2 |
| `--nec-grey-100` | `#EEEEEE` | Theme lt2 |
| `--nec-orange` / `--nec-green` / `--nec-purple` | `#F49A20` / `#1FCC27` / `#362774` | Theme accents 4–6 (purple used for focus rings) |

Chapter accents, used only on kickers and small markers:
- InCUBE: `#006DA2` (InCUBE brand dark blue)
- NESSIE: `#2F5496` (NESSIE brief "Blue Primary")
- Hy2Market: black on NEC yellow

## Type
- The theme names Calibri / Calibri Light, but **every text run in the slides is Arial**, so the web app uses Arial (fallbacks: Helvetica Neue, Helvetica, Liberation Sans, Arimo).
- Titles: 32 pt bold, black, top-left (→ 43 px). Body: 18–20 pt regular (→ 24–27 px; kept at ≥ 21 px on slides except captions). Footer: 9 pt (→ 12 px).
- Personal half of the opening slide follows Danielle's creative-direction slides: Instrument Serif (self-hosted via `@fontsource/instrument-serif`; the slides' headings are a close condensed serif, outlined in the PDFs so the exact face can't be read), `#F7F7F7` ground, pastel chips `#FFCADD` / `#FBE74E` / `#B9B8FF` / `#CEF3A7`, her portrait and two mascots cropped from the slides.

## Recurring artwork (all extracted from the deck)
| File | What it is | Position (from the master/layouts) |
| --- | --- | --- |
| `nec-logo-yellow.png` | Yellow round NEC logo + "Drivers of Change" | Content layout: x 0.8 %, y 2.4 %, w 4.8 % |
| `nec-logo-black.png` | Black round logo (title layout) | Title layout: centred above the title |
| `nec-ring-yellow.svg` | Yellow "+" ring | Bottom-right corner arc (x 82.4 %, y 65.6 %, w 36.6 %); left edge on the black closing layout |
| `nec-ring-white.svg` | White "+" ring | Title layout, bleeding off the left edge |
| `nec-times-equals.svg` | Black × and = mark | Top-right corner (x 95.7 %, w 4.3 %, h 15.3 %) |
| `nec-arrow-grid.svg` | Grid of › arrows | Under the × / = mark |
| `nec-plus-grid.svg` | Grid of + marks | Bottom-left corner |

## Layout
- Title/content inset: 6.9–7.5 % from the left (95 px); title block in the top 25 %.
- Footer row at 92 % height: date (left), `www.`**`newenergycoalition`**`.org` (centre, bold middle word), slide number (right). The old date is replaced by `footerDate` in `src/config/site.js` (empty by default).
- Content stays clear of the bottom-right ring and the top-right mark.

## Substitutions
- Calibri → Arial (matches what the slides actually use).
- Personal identity: everything is editable in `site.personal`; Georgia is the fallback if the font fails to load.
