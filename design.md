# EHA — design

## Direction
Three candidates:
1. **The label band** (Label & packaging, from EHA's own jar and brochure bands) — **chosen**.
2. Soft studio light (calm spa, linen, one hue) — lost: every spa and beauty school looks like this; fails the competitor test.
3. Protocol sheet (index card & ledger: numbered treatment steps) — lost: the brochure gives no real step-by-step protocols, so it would mean inventing them, and it reads clinical.

**Idea**: on this site, every course and treatment wears the olive label band that EHA prints on its own Vitamin Boost jar and brochure posters: the band names it, the brochure's material photo shows it.

- **Moment** (rich): the treatments section — big material photos (seaweed, citrus, vanilla, herbal compress, warm stones + the EHA jar) with their bands. Second, smaller: the chooser's WhatsApp preview.
- **Quiet chrome**: linen-sage paper, olive-ink text, plain buttons, no shadows except the sheet-like cover panel.
- **Signature**: the band — a short olive strip, slightly darker at its start edge, with white text, used only for names (course track name, treatment name on photos, the "27" fact). Never as a decoration line.
- **Live thing**: "איזה מסלול מתאים לך?" — 3 questions → the matching courses → the exact WhatsApp text → open WhatsApp.

## Tokens
| Token | Value | Role |
|---|---|---|
| --paper | oklch(96.4% .013 112) | page |
| --surface | oklch(98.6% .006 110) | course and treatment cards |
| --ink | oklch(25% .03 125) | text, ≥ 12:1 |
| --muted | oklch(45% .03 122) | secondary text, ≥ 5:1 on paper |
| --line | oklch(86% .022 115) | hairlines that carry structure only |
| --accent | oklch(45% .11 127) | the olive of the logo leaf: primary action, band, selection |
| --accent-deep | oklch(37% .09 127) | band start, pressed |
| --on-accent | oklch(98.5% .01 110) | text on olive (≥ 6:1) |

Type: **Frank Ruhl Libre** (display, Hebrew + the Latin track names; echoes the logo's Roman serif) + **Assistant** (body). Scale: 14 / 17 / 20 / 26 / clamp(32→48) / clamp(38→64). Hebrew: no italics, no tracking, no uppercase.
Space: 4 8 12 16 24 32 48 72 120. Section gap 72 phone / 120 desktop.
Radius: control 12, card 20, media 14 (inside cards: 20 − 6 padding), pill 999. Band: 4 on the end corners only.
Elevation: 0 everywhere; 1 = the cover panel over the photo; 2 = none (no sheets).
Motion: one load moment — the band under the headline grows from its start edge (450ms, ease-morph). Reveals: short, once, content visible without JS. Press: scale .97.

## Components
- **Band** `.band`: inline-flex, olive, white text 15-17px semibold, padding 6/14.
- **Course card** `.course`: surface, radius 20, band with the Latin track name, h3 Hebrew title, text, "מה לומדים" list, WhatsApp button (outline) "לשאול על המסלול". Body Therapy Pro spans the full row on desktop (the big one).
- **Treatment** `.treat`: photo (slot, 4:3, focal point set) + name + text + the brochure's small note.
- **Signature** `.sig`: two photos (materials + the treatment strip), band name in Latin, Hebrew band, text.
- **Chooser** `.chooser`: fieldsets of chips (radio/checkbox styled), result list, the WhatsApp message preview as a speech-bubble-shaped block in WhatsApp's own conventions (no green fill; the olive band names it).
- **Contact row**: 3 equal 48px buttons: וואטסאפ · חיוג · ניווט בוויז.

States: chooser nothing chosen (button disabled + sentence why), no interest chosen, result. Photo slot empty → the band on a paper swatch in the same box.

## Do / don't
- Do: her words, her photos, her logo. One accent. Prices/dates always "בוואטסאפ".
- Don't: numbered 1-6 tiles (the brochure's "why" list becomes plain lines), lavender alternating cards (dropped: one accent), stars, counts, testimonials, "הכי טובים", tracked caps eyebrows, a floating WhatsApp bubble.
