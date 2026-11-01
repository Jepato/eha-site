# EHA Therapy College — brief

Source: the 6-page professional brochure (Hebrew) shared as an Acrobat link. Every fact on the site comes from it.
Its pages are flattened 300-dpi images; the photos and the logo were cropped out of them (the user asked to use the brochure's images and logos).

## 1. The business in 3 lines
- A college for body therapy and aesthetics (טיפולי גוף ואסתטיקה) at דוד סחרוב 3, ראשון לציון. Phone 054-5579996.
- Teaches six courses: from a short focused course (three basic body treatments) to a comprehensive body-therapy programme, plus holistic massage, back & neck, head spa and spa pedicure.
- Why choose it: 27 years in cosmetics and care (brochure), a wide range of treatment methods "also unusual ones", and two combined treatments under its own name (Herbal Relax, Vitamin Boost, with its own body massage cream).

## 2. Model, arrival question, one action
- **Model**: Trust / expertise (primary) with a course enquiry. Not "Classes" because there is no timetable, dates, capacity or price to show.
- **Arrival question**: "Which course is for me, what will I learn, and how do I sign up?"
- **One action**: ask about a course on WhatsApp, with the course already named in the message.
- **Audience**: women, two kinds (the brochure says so): starting out, or owners of a clinic/spa who want to widen their treatment menu. Feminine address throughout (`Biz.g('f')`).

## 3. Needs matrix
| Feature | Mark | Why |
|---|---|---|
| The six courses, each with what's in it | essential | the core answer; text from the brochure |
| WhatsApp per course (course named) + call + Waze | essential | the action; no backend needed |
| "Which course fits me?" chooser (3 questions → courses → WhatsApp preview) | recommended (the live thing) | answers the arrival question; ends in something real |
| The treatments taught, with the brochure photos | recommended | proof by material; the rich moment |
| Herbal Relax + Vitamin Boost | recommended | only EHA has these |
| 27 years + how they teach (incl. safety, contraindications) | recommended | trust; true per brochure |
| Address + Waze | essential | |
| Prices, dates, course length | leave out | not in the brochure; "ask on WhatsApp" instead, never guessed |
| Hours / "open now" | leave out | no hours given |
| Online registration / payment form | leave out | no backend; WhatsApp does it |
| Testimonials, ratings, student counts, certificates | leave out | none given; never invented |
| Owner side / photo screen | leave out | content changes rarely; it's a site, not an app. Photos are still kept as data (slots) so swapping them is a data change |
| Installable app | leave out | people come once or twice; share image + icons still made |
| Instagram / Facebook | leave out | no links given (add when she sends them) |
| Accessibility statement | essential (IL) | a template page, marked "to be completed" |

**Build: a one-page site.** Photo slots: `logo`, `cover`, `items` (4 treatments + 2 signature treatments), `place` (empty → address + Waze).

## 4. Honesty list
- Prices, dates, durations, certificates: not shown; the WhatsApp message asks for them.
- The chooser only suggests; the message is typed into WhatsApp and nothing is sent until she taps send (said on the page).
- Brochure line "להפגת כאבי שרירים" (Herbal Relax) conflicts with the brochure's own note "אין להציג... כהבטחה להפחתת כאבים". The site says "שחרור מתחים" instead; flagged in the report.
- The brochure photos look like generated/stock imagery of models. Used as the brochure uses them (illustrating treatments), never captioned as students, graduates or the college's rooms.
- The closing slogan "בואו לגלות אותו איתנו" becomes "בואי" to keep one gender form on the page (flagged).

## 5. Inventory (only EHA has these)
1. The name EHA in a classical Roman serif with a leaf rising from the A; "Therapy College · Body therapy & aesthetics".
2. The olive green of that leaf, and the olive **label band** the brochure prints its taglines on ("טיפול גוף משולב ומקצועי", "בוסט וויטמינים לגוף").
3. Its own jar: EHA Vitamin Boost body massage cream (קרם-ג'ל עיסוי עשיר בויטמינים ותמציות צמחים).
4. Materials named in its treatments: seaweed, citrus peel (lemon, orange), vanilla, herbal compresses, glass cups, red algae powder, warm stones.
5. 27 years in cosmetics and care.
6. Six course tracks with English names: Body Essentials, Body Therapy Pro, Holistic Touch, Back & Neck Care, Head Spa, Spa Pedicure.
7. A careful, professional voice: notes like "בחירת המוצר בהתאם להוראות היצרן", contraindications, referral to a medical professional.
8. Two audiences: "בתחילת דרכך" and "בעלת קליניקה או ספא שרוצה להרחיב את סל הטיפולים".
9. Lines of its own: "עולם שמחבר בין גוף לנפש", "הגוף הוא עולם שלם", "ידע מקצועי • התמחות • חוויית טיפול".
10. Place: דוד סחרוב 3, ראשון לציון.

## 6. Reference rules
None sent. The brochure itself gives: card per treatment with the photo beside it, olive band labels, a quiet stone/linen page.

## Report (2026-11-01)
- **Model**: trust + course enquiry. One page. Left out on purpose: prices, dates, course length, hours, online registration, testimonials, owner side, installable app, Instagram (none of these were in the brochure; add later if she sends them).
- **Direction**: EHA's own olive label band (from the Vitamin Boost jar and the brochure). Moment: the treatments with the brochure's material photos. Live thing: the course chooser → WhatsApp.
- **QA**: inspector PASS at 360/390/768/1440, reduced motion and text ×1.3; 0 failures; slop band MILD (2): "card-soup" = the six courses, each a separate object with its own action (kept), "emoji" = the © sign (false positive). Driven by hand (headless Chrome): chooser through 5 states, WhatsApp text and links checked, no console errors.
- **Rubric** (round 2): belongs 4 · first screen 4 · hierarchy 4 · type 4 · colour 4 · rhythm 4 · imagery 3 (brochure photos are only 600-630 px wide) · copy 4 · motion 3 · craft 4 · phone 4 · honesty 5.
- **Real**: all text, phone, address, the logo, the photos (cropped from the brochure). **To replace / confirm**: photos look generated or stock (better: real photos of the classroom and of students working, with consent); higher-resolution logo file (PNG/SVG); prices/dates if she wants them public; the accessibility statement contact; Instagram/Facebook links.
- **Flagged wording**: "להפגת כאבי שרירים" (Herbal Relax) → "שחרור מתחים"; slogan "בואו" → "בואי".
- **Not checked**: real iPhone/Android, VoiceOver/TalkBack.
