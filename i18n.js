// Datum Consulting — English / Romanian language switch
//
// English is written directly in index.html (default, and what search engines index).
// Every translatable element has data-i18n="kNN"; the Romanian text for that key lives in RO below.
// To change a Romanian text: edit its line here. To add a new text: give the element a new
// data-i18n key in index.html and add the same key here.
//
// Language choice, in order:
//   1. ?lang=ro or ?lang=en in the URL (handy for sharing a link in a specific language)
//   2. the visitor's own choice from the flag switch (remembered in this browser)
//   3. auto-detect: device time zone Europe/Bucharest (= in Romania) -> Romanian, otherwise English.
//      No IP lookup / third-party service, so no cookies or GDPR consent are needed.

const RO = {
  k0: "Servicii", // Services
  k1: "Proces", // Process
  k2: "Colaborare", // Engagements
  k3: "Expertiză", // Expertise
  k4: "Video", // Videos
  k5: "Despre", // About
  k6: "Contactați-ne", // Get in touch
  k7: "Flux de lucru CAD · AI și automatizare · Managementul datelor", // CAD workflow · AI & automation · Data management
  k8: "Fluxuri de lucru inginerești, măsurate față de o <span class=\"accent\">referință solidă.</span>", // Engineering workflows, measured from a solid reference.
  k9: "Datum Consulting ajută echipele de proiectare să lucreze mai rapid și mai organizat. Focusul nostru principal este fluxul vostru de lucru CAD: cum modelează, structurează, documentează și lansează echipa voastră proiectele. Pe lângă asta, aducem instrumente AI precum Claude și Copilot, împreună cu automatizări practice, în munca inginerească de zi cu zi și organizăm datele din spatele lor.", // Datum Consulting helps design teams work faster and cleaner.
  k10: "Programați un audit al fluxului de lucru", // Book a workflow audit
  k11: "Vedeți toate serviciile", // See all services
  k12: "12 ani", // 12 years
  k13: "CAD, inginerie și date", // CAD, engineering & data
  k14: "platforme CAD", // CAD platforms
  k15: "Din prima zi", // Day one
  k16: "folosesc AI în inginerie", // using AI in engineering
  k17: "Vă sună cunoscut?", // Sound familiar?
  k18: "Majoritatea echipelor de inginerie pierd ore în fiecare săptămână din cauza acelorași probleme", // Most engineering teams lose hours every week to the same pro
  k19: "Modele care se strică de fiecare dată când cineva modifică o operație de la început", // Models that break every time someone changes an early featur
  k20: "Fișiere numite <em>final_v3_REAL.CATPart</em> și nimeni nu știe ce revizie a fost lansată", // Files named final_v3_REAL.CATPart and nobody knows which rev
  k21: "O migrare la 3DEXPERIENCE amânată mereu pentru că nu are un responsabil", // A 3DEXPERIENCE migration that keeps getting postponed becaus
  k22: "Ingineri noi care au nevoie de luni întregi ca să învețe „cum facem lucrurile aici”", // New engineers who need months to learn "how we do things her
  k23: "Sarcini CAD repetitive făcute manual, pe care un script sau un asistent AI le-ar face în câteva secunde", // Repetitive CAD tasks done by hand that a script or AI assist
  k24: "Desene și template-uri care diferă de la un inginer la altul", // Drawings and templates that differ from one engineer to the 
  k25: "Servicii", // Services
  k26: "Ce oferim", // What we offer
  k27: "Focusul nostru principal este fluxul de lucru CAD, urmat de integrarea AI și automatizare, apoi de managementul datelor de inginerie. Începeți cu un audit sau alegeți ce rezolvă cea mai urgentă problemă.", // Our core focus is the CAD workflow, followed by AI integrati
  k28: "Focus principal", // Core focus
  k29: "Optimizarea fluxului de lucru CAD", // CAD Workflow Optimization
  k30: "Cum modelează, structurează, documentează și lansează echipa voastră proiectele. Analizăm fluxul actual, apoi îl îmbunătățim: metodologia de modelare, piese de start și template-uri, standarde de desen și pași de verificare.", // How your team models, structures, documents and releases des
  k31: "Audit al fluxului de lucru CAD, cu o foaie de parcurs prioritizată", // CAD workflow audit with a prioritized roadmap
  k32: "Metode de modelare robuste și template-uri", // Robust modeling methods and templates
  k33: "Standarde de desen și de lansare", // Drawing and release standards
  k34: "Începeți cu auditul fluxului de lucru →", // Start with the workflow audit →
  k35: "Integrare AI și automatizare", // AI Integration & Automation
  k36: "Utilizarea practică a Claude, Copilot și a scripturilor personalizate în proiectarea de zi cu zi: macro-uri CAD, verificări și exporturi automate, documentație și căutare de informații, configurate în siguranță pentru date confidențiale.", // Practical use of Claude, Copilot and custom scripts in daily
  k37: "Managementul datelor de inginerie", // Engineering Data Management
  k38: "Convenții de denumire, structuri de foldere și PDM/PLM, reguli de revizie și lansare. Date curate, pe care toată lumea le poate găsi, folosi și reutiliza cu încredere.", // Naming conventions, folder and PDM/PLM structures, revision 
  k39: "Disponibile și", // Also available
  k40: "Migrare CATIA V5 → 3DEXPERIENCE", // CATIA V5 → 3DEXPERIENCE Migration
  k41: "Pregătirea datelor, metodologie, template-uri, proiecte pilot și instruirea utilizatorilor pentru trecerea la CATIA V6 / 3DEXPERIENCE.", // Data readiness, methodology, templates, pilot projects and u
  k42: "Instruire și integrarea echipei", // Team Training & Onboarding
  k43: "Instruiri personalizate pentru CATIA, SolidWorks, Fusion 360 și altele, plus programe de onboarding, pentru ca inginerii noi să devină productivi mai repede.", // Tailored training for CATIA, SolidWorks, Fusion 360 and more
  k44: "Design review și DFM", // Design Review & DFM
  k45: "Analiză independentă a pieselor, ansamblurilor și desenelor pentru mase plastice, turnare sub presiune, tablă și compozite, axată pe fabricabilitate.", // Independent review of parts, assemblies and drawings for pla
  k46: "Serviciu recomandat", // Featured service
  k47: "Auditul fluxului de lucru CAD", // The CAD Workflow Audit
  k48: "Orice îmbunătățire are nevoie de un punct de referință. Auditul vi-l oferă: o perspectivă externă și sinceră asupra modului în care lucrează cu adevărat echipa voastră astăzi și a ceea ce trebuie rezolvat mai întâi.", // Every improvement needs a reference point. The audit gives y
  k49: "Discuții cu proiectanții, team leaderii și responsabilii de date", // Interviews with designers, team leads and data managers
  k50: "Analiza unor piese, ansambluri, desene și template-uri reprezentative", // Review of sample parts, assemblies, drawings and templates
  k51: "Analiza practicilor de denumire, stocare, revizie și lansare", // Analysis of naming, storage, revision and release practices
  k52: "Verificarea instrumentelor, licențelor și a oportunităților de automatizare și AI", // Check of tools, licenses, automation and AI opportunities
  k53: "Raport scris cu concluzii și o foaie de parcurs prioritizată", // Written report with findings and a prioritized roadmap
  k54: "Prezentarea rezultatelor pentru management și echipă", // Presentation session with your management and team
  k55: "Scop și preț fixe. Livrat la sediul vostru în Cluj-Napoca sau de la distanță, oriunde în Europa.", // Fixed scope, fixed price. Delivered on-site in Cluj-Napoca o
  k56: "Solicitați un audit", // Request an audit
  k57: "Raport audit flux de lucru", // Workflow Audit Report
  k58: "Rezumat", // Summary
  k59: "Metodologie de modelare", // Modeling methodology
  k61: "Managementul datelor", // Data management
  k63: "Desene și template-uri", // Drawings & templates
  k65: "Automatizare și AI", // Automation & AI
  k67: "Onboarding", // Onboarding
  k69: "Top 3 câștiguri rapide", // Top 3 quick wins
  k70: "<span class=\"dot\"></span>Introducerea unei convenții de denumire comune", // Introduce a shared naming convention
  k71: "<span class=\"dot\"></span>Piese de start și template-uri de desen standard", // Standard start parts & drawing templates
  k72: "<span class=\"dot\"></span>Export automat al BOM printr-un macro", // Automate BOM export with a macro
  k73: "Raport exemplu · valori ilustrative", // Example report · illustrative values
  k74: "Cum lucrăm", // How we work
  k75: "Un proces construit ca un desen bun", // A process built like a good drawing
  k76: "Referințe clare, toleranțe clare, rezultate verificate.", // Clear references, clear tolerances, verified results.
  k77: "Stabilim datum-ul", // Establish the datum
  k78: "Analizăm fluxurile de lucru, instrumentele și problemele actuale. O discuție introductivă gratuită, apoi auditul, dacă se potrivește.", // We map your current workflows, tools and pain points. A free
  k79: "Definim toleranțele", // Define the tolerances
  k80: "Stabilim împreună obiective, priorități și ținte măsurabile: timp economisit, rata erorilor, etape de migrare.", // Together we set goals, priorities and measurable targets: ti
  k81: "Implementăm", // Implement
  k82: "Lucrăm direct cu echipa voastră: metodologie, template-uri, structuri de date, scripturi, instrumente AI și instruire.", // Hands-on work with your team: methodology, templates, data s
  k83: "Verificăm și predăm", // Verify & hand over
  k84: "Verificăm rezultatele față de ținte, documentăm totul și ne asigurăm că echipa voastră preia noul mod de lucru.", // We check results against the targets, document everything an
  k85: "Cum colaborăm", // Ways to work together
  k86: "Fără pachete fixe. Un plan construit în jurul echipei voastre.", // No fixed packages. A plan built around your team.
  k87: "Fiecare echipă de inginerie are alte instrumente, alți oameni și alte probleme, așa că fiecare colaborare începe prin a asculta.", // Every engineering team has different tools, people and probl
  k88: "Discuție inițială", // Discovery call
  k89: "30 de minute – 1 oră · gratuit", // 30 minutes to 1 hour · free
  k90: "Echipa, instrumentele și fluxul vostru de lucru actual", // Your team, tools and current workflow
  k91: "Ce vă încetinește și ce vreți să îmbunătățiți", // What slows you down and what you want to improve
  k92: "O primă părere sinceră despre unde să începem", // An honest first opinion on where to start
  k93: "Plan personalizat, construit împreună", // Custom plan, built together
  k94: "Scop adaptat · ofertă clară", // Tailored scope · clear quote
  k95: "Obiective și priorități bazate pe nevoile voastre", // Goals and priorities based on your needs
  k96: "Combinația potrivită de servicii, și doar aceea", // The right mix of services, and only those
  k97: "Termene, livrabile și costuri stabilite din start", // Timeline, deliverables and cost agreed upfront
  k98: "Programați o discuție inițială", // Book a discovery call
  k99: "Expertiză", // Expertise
  k100: "Instrumente Pe Care Le Stăpânim Și Piese Pe Care Le-Am Proiectat Cu Adevărat", // Tools We Know Deeply, And The Parts We've Actually Built
  k101: "Software Și Platforme", // Software & Platforms
  k102: "Platforme CAD", // CAD Platforms
  k103: "AI Și Automatizare", // AI & Automation
  k104: "Managementul Datelor", // Data Management
  k105: "Sisteme PDM / PLM", // PDM / PLM Systems
  k106: "Reguli De Denumire Și Lansare", // Naming & Release Rules
  k107: "Domenii De Inginerie", // Engineering Domains
  k108: "Injecție Mase Plastice", // Plastic Injection Molding
  k109: "Piese auto de interior și exterior, unghiuri de extracție, nervuri, bosaje, constrângeri de matriță", // Automotive interior & exterior parts, draft, ribs, bosses, t
  k110: "Turnare Sub Presiune", // Die Casting
  k111: "Grosimi de perete, linii de separație, adaosuri de prelucrare", // Wall thickness, parting lines, machining allowances
  k112: "Tablă", // Sheet Metal
  k113: "Flanșe, îndoiri, desfășurate, limite de deformare", // Flanges, bends, flat patterns, forming limits
  k114: "Compozite Și Fabricație Aditivă", // Composites & Additive
  k115: "CFRP, imprimare 3D cu fibră continuă, senzori integrați", // CFRP, continuous-fiber 3D printing, embedded sensing
  k116: "Cu Cine Lucrăm", // Who We Work With
  k118: "Startup-uri", // Startups
  k119: "Configurarea corectă a proceselor CAD, de date și de lansare încă din prima zi.", // Setting up CAD, data and release processes the right way fro
  k121: "Furnizori Și Producători", // Suppliers & Manufacturers
  k122: "Furnizori Tier-1 până la Tier-3 care fac față cerințelor OEM și migrărilor de platformă.", // Tier-1 to tier-3 suppliers facing OEM requirements and platf
  k124: "Echipe De Servicii De Inginerie", // Engineering Service Teams
  k125: "Echipe de proiectare în creștere, care au nevoie de consecvență, viteză și un onboarding mai bun.", // Growing design teams that need consistency, speed and better
  k126: "Tutoriale gratuite", // Free tutorials
  k127: "Învățați cu noi pe YouTube", // Learn with us on YouTube
  k128: "Sfaturi practice despre fluxul de lucru CAD, AI și automatizare și managementul datelor, din proiecte reale.", // Practical CAD workflow, AI & automation and data management 
  k129: "5 obiceiuri din CATIA V5 care vă strică migrarea la 3DEXPERIENCE", // 5 CATIA V5 habits that break your 3DEXPERIENCE migration
  k130: "Rezolvați-le înainte să vă mutați datele.", // Fix these before you move your data.
  k131: "Automatizarea unei sarcini în CATIA cu AI, în 10 minute", // Automating a CATIA task with AI in 10 minutes
  k132: "Folosim Claude pentru a scrie un macro CAD funcțional.", // Using Claude to write a working CAD macro.
  k133: "O convenție de denumire pe care toată echipa chiar o va respecta", // A naming convention your whole team will actually follow
  k134: "Reguli simple pentru date de inginerie curate.", // Simple rules for clean engineering data.
  k135: "Vizitați canalul", // Visit the channel
  k136: "În lucru", // Work in progress
  k137: "Canalul de YouTube vine în curând", // YouTube channel coming soon
  k138: "Tutoriale practice despre fluxul de lucru CAD, AI și automatizare și managementul datelor sunt pe drum.", // Practical CAD workflow, AI & automation and data management 
  k139: "Despre", // About
  k140: "Salut, sunt Andrei.", // Hi, I'm Andrei.
  k141: "Sunt inginer proiectant mecanic și team leader în Cluj-Napoca, cu <strong>12 ani de experiență în CAD, inginerie, managementul datelor și automatizare</strong>. În acest timp am proiectat piese de serie pentru industria auto, de la componente injectate din mase plastice la piese turnate sub presiune, din tablă și din compozite, în CATIA și în multe alte platforme CAD.", // I'm a mechanical design engineer and team lead based in Cluj
  k142: "Conducând o echipă de ingineri, am învățat că majoritatea întârzierilor nu vin din probleme inginerești dificile. Vin din date dezorganizate, metode inconsecvente și muncă manuală repetitivă. Exact asta rezolvă Datum Consulting.", // Leading a team of engineers taught me that most delays aren'
  k143: "Folosesc și integrez AI în munca de inginerie de la apariția primelor instrumente de AI generativ și îmi construiesc propriile instrumente de inginerie în Python și C#. În paralel cu consultanța, urmez un doctorat în fabricație aditivă și compozite, așa că aduc atât perspectiva proiectantului, cât și mentalitatea automatizării.", // I've been using and integrating AI in engineering work since
  k144: "12 ani în CAD, inginerie și managementul datelor", // 12 years in CAD, engineering & data management
  k145: "Folosesc AI în inginerie din prima zi", // Using AI in engineering since day one
  k146: "Proiectare auto, validată în producție", // Automotive design, production-proven
  k147: "Instrumente CAD personalizate și automatizare", // Custom CAD tools & automation
  k148: "Leadership de echipă și integrarea inginerilor noi", // Team leadership & engineer onboarding
  k149: "Engleză și română", // English & Romanian
  k150: "Întrebări", // FAQ
  k151: "Întrebări frecvente", // Common questions
  k152: "Lucrați de la distanță sau la sediul clientului?", // Do you work remotely or on-site?
  k153: "Ambele. La sediul clientului în Cluj-Napoca și în împrejurimi, și de la distanță pentru clienți din toată Europa. Auditurile combină de obicei o scurtă sesiune la fața locului sau video cu o analiză de la distanță.", // Both. On-site in Cluj-Napoca and the surrounding region, and
  k154: "Vindeți licențe software?", // Do you sell software licenses?
  k155: "Nu. Suntem independenți, așa că recomandările se bazează doar pe ce este mai bine pentru echipa voastră. Colaborăm cu plăcere alături de distribuitorul vostru actual de software.", // No. We're independent, so recommendations are based only on 
  k156: "Suntem o echipă mică. Este pentru noi?", // We're a small team. Is this for us?
  k157: "Da. Echipele mici beneficiază adesea cel mai mult, pentru că metodele și template-urile bune stabilite devreme economisesc ani de reorganizare mai târziu. Colaborarea se adaptează dimensiunii voastre.", // Yes. Small teams often benefit the most, because good method
  k158: "Este sigur să folosim AI cu datele noastre CAD confidențiale?", // Is AI safe to use with our confidential CAD data?
  k159: "Poate fi, dacă este configurat corect. Vă ajutăm să alegeți instrumente și configurații care respectă confidențialitatea și cerințele clienților voștri și definim reguli clare despre ce date ajung unde.", // It can be, when it's set up correctly. We help you choose to
  k160: "Cum stabiliți prețurile?", // How are projects priced?
  k161: "Nu există pachete fixe. După discuția inițială construim un plan în jurul nevoilor voastre și stabilim din start scopul, termenele și costurile, fără surprize.", // There are no fixed packages. After the discovery call we bui
  k162: "Contact", // Contact
  k163: "Să vă găsim datum-ul.", // Let's find your datum.
  k164: "Spuneți-ne pe scurt despre echipa voastră, instrumentele pe care le folosiți și ce vă încetinește. Vă răspundem în cel mult o zi lucrătoare pentru a programa o discuție inițială gratuită de 30 de minute – 1 oră.", // Tell us briefly about your team, the tools you use and what'
  k165: "Scrieți-ne pe WhatsApp", // Chat on WhatsApp
  k166: "Consultanță pentru fluxul de lucru CAD, AI și automatizare și managementul datelor · <span style=\"white-space:nowrap\">Cluj-Napoca</span>, România", // CAD workflow, AI & automation and data management consulting
  k167: "Datum Consulting este un brand al <b>FABRICAT IN NOIEMBRIE S.R.L.</b>", // Datum Consulting is a brand of FABRICAT IN NOIEMBRIE S.R.L.
  k168: "Sediu social: Str. Soporului nr. 8, Bl. A1, Sc. 3, Et. 6, Ap. 157, <span style=\"white-space:nowrap\">Cluj-Napoca</span>", // Registered office: Str. Soporului nr. 8, Bl. A1, Sc. 3, Et. 
  k169: "CUI: 40163031 · Nr. Reg. Com.: J12/5111/15.11.2018 · Capital social: 200 RON", // CUI: 40163031 · Reg. Com.: J12/5111/15.11.2018 · Share capit
  k170: "© <span id=\"year\"></span> Toate drepturile rezervate.", // © All rights reserved.
};

const META = {
  en: {
    title: document.title,
    description: document.querySelector('meta[name="description"]').content,
    menu: 'Open menu',
    wa: 'Chat on WhatsApp',
    portrait: 'Andrei, founder of Datum Consulting',
    waText: "Hello Andrei, I'd like to book a discovery call.",
  },
  ro: {
    title: 'Datum Consulting — Flux de lucru CAD, AI și automatizare, managementul datelor',
    description: 'Datum Consulting ajută echipele de inginerie să își îmbunătățească fluxul de lucru CAD, să aducă AI și automatizarea în proiectarea de zi cu zi și să își organizeze datele. 12 ani de experiență în CAD, inginerie și managementul datelor.',
    menu: 'Deschide meniul',
    wa: 'Scrieți-ne pe WhatsApp',
    portrait: 'Andrei, fondatorul Datum Consulting',
    waText: 'Bună ziua, Andrei! Aș dori să programez o discuție inițială.',
  },
};

const i18nEls = [...document.querySelectorAll('[data-i18n]')];
i18nEls.forEach(el => { el.dataset.en = el.innerHTML; }); // keep the English original

function setLang(lang) {
  if (lang !== 'ro') lang = 'en';
  i18nEls.forEach(el => {
    const ro = RO[el.dataset.i18n];
    el.innerHTML = lang === 'ro' && ro ? ro : el.dataset.en;
  });
  const m = META[lang];
  document.documentElement.lang = lang;
  document.title = m.title;
  document.querySelector('meta[name="description"]').content = m.description;
  document.querySelector('.nav-toggle')?.setAttribute('aria-label', m.menu);
  document.querySelector('.wa-float')?.setAttribute('aria-label', m.wa);
  document.querySelector('.portrait img')?.setAttribute('alt', m.portrait);
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a => {
    a.href = 'https://wa.me/40743963758?text=' + encodeURIComponent(m.waText);
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.setAttribute('aria-pressed', b.dataset.lang === lang);
  });
  window.dispatchEvent(new Event('resize')); // let the mind map redraw its lines
}

function detectLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'ro' || q === 'en') return q;
  try { const saved = localStorage.getItem('lang'); if (saved) return saved; } catch (e) {}
  try {
    if (Intl.DateTimeFormat().resolvedOptions().timeZone === 'Europe/Bucharest') return 'ro';
  } catch (e) {}
  return 'en';
}

document.querySelectorAll('.lang-switch button').forEach(b => b.addEventListener('click', () => {
  try { localStorage.setItem('lang', b.dataset.lang); } catch (e) {}
  setLang(b.dataset.lang);
}));

setLang(detectLang());
