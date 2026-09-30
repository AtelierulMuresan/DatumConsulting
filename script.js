// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mind map connectors
const mm = document.getElementById('mindmap');
if (mm) {
  const svg = mm.querySelector('.mm-lines');
  const hub = mm.querySelector('.mm-hub');
  const nodes = [...mm.querySelectorAll('.mm-node')];
  const draw = () => {
    if (getComputedStyle(svg).display === 'none') return;
    const box = mm.getBoundingClientRect(), h = hub.getBoundingClientRect();
    const cx = h.left + h.width / 2 - box.left, cy = h.top + h.height / 2 - box.top, r = h.width / 2;
    svg.innerHTML = nodes.map((n, i) => {
      const b = n.getBoundingClientRect(), left = b.right < h.left;
      const x = (left ? b.right : b.left) - box.left, y = b.top + b.height / 2 - box.top;
      const sx = cx + (left ? -r : r), mx = (sx + x) / 2;
      return `<path data-i="${i}" d="M${sx},${cy} C${mx},${cy} ${mx},${y} ${x},${y}"/><circle cx="${x}" cy="${y}" r="4"/>`;
    }).join('');
    svg.querySelectorAll('path').forEach(p => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = len; p.style.setProperty('--len', len);
    });
  };
  new ResizeObserver(draw).observe(mm);
  nodes.forEach((n, i) => {
    n.addEventListener('mouseenter', () => svg.querySelector(`path[data-i="${i}"]`)?.classList.add('on'));
    n.addEventListener('mouseleave', () => svg.querySelector(`path[data-i="${i}"]`)?.classList.remove('on'));
  });
  hub.addEventListener('mouseenter', () => { svg.querySelectorAll('path').forEach(p => p.classList.add('on')); nodes.forEach(n => n.classList.add('on')); });
  hub.addEventListener('mouseleave', () => { svg.querySelectorAll('path').forEach(p => p.classList.remove('on')); nodes.forEach(n => n.classList.remove('on')); });
}
