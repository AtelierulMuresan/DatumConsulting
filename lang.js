// Language routing for the two static pages: / (English) and /ro/ (Romanian).
// Runs in <head> so a redirect happens before the page paints.
//  1. ?lang=ro|en in the URL, or the visitor's earlier flag choice, decides.
//  2. Otherwise, a first visit from a device in the Europe/Bucharest time zone goes to /ro/.
//  Search-engine bots are never redirected, so both pages get indexed on their own URLs.
(function () {
  var isRo = document.documentElement.lang === 'ro';
  var q = new URLSearchParams(location.search).get('lang');
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var want = q || saved;
  if (!want && !/bot|crawl|spider|slurp|preview|lighthouse/i.test(navigator.userAgent)) {
    try { if (Intl.DateTimeFormat().resolvedOptions().timeZone === 'Europe/Bucharest') want = 'ro'; } catch (e) {}
  }
  if (q) { try { localStorage.setItem('lang', q); } catch (e) {} }
  if (want === 'ro' && !isRo) location.replace('ro/' + location.hash);
  else if (want === 'en' && isRo) location.replace('../' + location.hash);

  // remember an explicit flag click
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('.lang-switch a');
    if (a) { try { localStorage.setItem('lang', a.dataset.lang); } catch (e) {} }
  });
})();
