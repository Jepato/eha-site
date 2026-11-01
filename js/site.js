/* EHA page: WhatsApp links with the message typed in, empty photo slots, the course chooser. */
(() => {
  const K = window.BRAND, B = window.Biz;
  const HI = 'היי, הגעתי מהאתר של EHA.';
  const wa = text => B.wa(K.phone, text);

  /* every WhatsApp link opens with its own message; without JS they still open the chat */
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = wa(a.dataset.wa); });
  document.querySelectorAll('[data-course]').forEach(a => {
    a.href = wa(`${HI}\nאשמח לשמוע על ${a.dataset.course}: מועדים, משך ומחיר.`);
  });

  /* a slot set to null in the Brand Kit shows its designed empty state: the band on a paper swatch, same box */
  document.querySelectorAll('[data-slot^="items."]').forEach(fig => {
    if (K.photos.items[fig.dataset.slot.slice(6)]) return;
    fig.querySelector('img')?.remove(); fig.classList.add('slot-empty');
  });

  /* chooser */
  const form = document.getElementById('chooser-form');
  if (!form) return;
  const $ = id => document.getElementById(id);
  const depth = $('depth'), empty = $('result-empty'), full = $('result-full'), picks = $('picks'), preview = $('preview'), send = $('send');
  const WHY = {
    essentials: 'שלושה טיפולי גוף בסיסיים, קצר ומעשי',
    pro: 'כל עולם טיפולי הגוף, כולל פרוטוקולים ובטיחות',
    holistic: 'מגע הוליסטי וטכניקות עיסוי בסיסיות',
    backneck: 'גב, כתפיים וצוואר, בעבודה בטוחה',
    headspa: 'קרקפת ושיער, ניקוי, עיסוי והרפיה',
    pedicure: 'כף הרגל בחוויית ספא'
  };

  function update() {
    const fd = new FormData(form);
    const stage = fd.get('stage'), topics = fd.getAll('topic'), deep = fd.get('depth');
    depth.hidden = !topics.includes('body');
    const ids = topics.flatMap(t => t === 'body' ? [deep === 'full' ? 'pro' : deep === 'short' ? 'essentials' : null].filter(Boolean)
      .concat(deep ? [] : ['essentials', 'pro']) : [t]);
    const list = [...new Set(ids)];
    empty.hidden = list.length > 0; full.hidden = list.length === 0;

    picks.replaceChildren(...list.map(id => {
      const c = K.courses[id], li = document.createElement('li'), a = document.createElement('a');
      a.href = c.anchor; a.textContent = c.name;
      const s = document.createElement('small'); s.textContent = WHY[id]; a.append(s); li.append(a); return li;
    }));

    const who = stage === 'start' ? 'אני בתחילת הדרך המקצועית' : stage === 'clinic' ? 'יש לי קליניקה או ספא ואני רוצה להרחיב את סל הטיפולים' : '';
    const lines = [HI];
    if (who) lines.push(who + '.');
    if (list.length) lines.push('מעניין אותי: ' + list.map(id => K.courses[id].name).join(', ') + '.');
    lines.push(list.length ? 'אשמח לשמוע על מועדים, משך ומחיר.' : 'אשמח לשמוע על הקורסים.');
    const text = lines.join('\n');
    preview.textContent = text;
    send.href = wa(text);
  }
  form.addEventListener('change', update);
  form.addEventListener('submit', e => e.preventDefault());
  update();
})();
