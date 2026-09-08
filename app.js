'use strict';
const $ = (selector) => document.querySelector(selector);
const menu = $('.menu');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Menyuni yopish' : 'Menyuni ochish');
  $('#navigation').classList.toggle('open', open);
  menu.textContent = open ? '×' : '☰';
});
$('#navigation').addEventListener('click', (event) => {
  if (event.target.closest('a') && menu.getAttribute('aria-expanded') === 'true') menu.click();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { menu.click(); menu.focus(); }
});
const demos = {
  students: { title: 'O‘quvchilar', description: 'Har bir o‘quvchi haqida kerakli ma’lumotlar.', badge: 'O‘QUVCHILAR BAZASI', headers: ['O‘quvchi', 'Guruh', 'O‘qituvchi', 'Holat'], rows: [['<span class="row-avatar">MA</span>Madina Aliyeva', 'English · B1', 'Dilnoza Karimova', '<span class="status">Faol</span>'], ['<span class="row-avatar">AK</span>Aziz Komilov', 'Matematika · 02', 'Javohir Akbarov', '<span class="status">Faol</span>'], ['<span class="row-avatar">SN</span>Sabina Nazarova', 'Koreys tili · A1', 'Malika Tursunova', '<span class="status">Faol</span>'], ['<span class="row-avatar">JO</span>Jasur Olimov', 'English · A2', 'Dilnoza Karimova', '<span class="status warn">Muzlatilgan</span>']] },
  schedule: { title: 'Dars jadvali', description: 'Darslar, guruhlar va xonalar bir qarashda.', badge: 'KUNLIK KO‘RINISH', headers: ['Vaqt', 'Guruh', 'Xona', 'O‘qituvchi'], rows: [['09:00 — 10:30', 'English · B1', '101-xona', 'Dilnoza Karimova'], ['10:30 — 12:00', 'Matematika · 02', '102-xona', 'Javohir Akbarov'], ['14:00 — 15:30', 'Koreys tili · A1', '103-xona', 'Malika Tursunova'], ['16:00 — 17:30', 'English · A2', '101-xona', 'Dilnoza Karimova']] },
  finance: { title: 'Moliya', description: 'To‘lov holatini tekshiring, qarzdorlikni kuzating.', badge: 'TO‘LOVLAR NAZORATI', headers: ['O‘quvchi', 'Hisoblangan', 'To‘langan', 'Holat'], rows: [['Madina Aliyeva', '450 000 so‘m', '450 000 so‘m', '<span class="status">To‘langan</span>'], ['Aziz Komilov', '350 000 so‘m', '350 000 so‘m', '<span class="status">To‘langan</span>'], ['Sabina Nazarova', '450 000 so‘m', '200 000 so‘m', '<span class="status warn">250 000 so‘m qarz</span>'], ['Jasur Olimov', '400 000 so‘m', '400 000 so‘m', '<span class="status">To‘langan</span>']] }
};
function showDemo(key) {
  const d = demos[key];
  if (!d) return;
  document.querySelectorAll('[data-demo]').forEach(button => {
    const active = button.dataset.demo === key;
    button.setAttribute('aria-selected', String(active)); button.tabIndex = active ? 0 : -1;
  });
  const panel = $('#demo-panel');
  panel.setAttribute('aria-labelledby', 'tab-' + key);
  panel.innerHTML = `<div class="demo-title"><div><h3>${d.title}</h3><p>${d.description}</p></div><span class="pill">${d.badge}</span></div><div class="table-scroll"><table><caption class="skip">${d.title} — namunaviy ma’lumotlar</caption><thead><tr>${d.headers.map(x => `<th scope="col">${x}</th>`).join('')}</tr></thead><tbody>${d.rows.map(row => `<tr>${row.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
const tabs = [...document.querySelectorAll('[data-demo]')];
tabs.forEach((button, index) => {
  button.addEventListener('click', () => showDemo(button.dataset.demo));
  button.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); tabs[next].focus(); tabs[next].click(); }
  });
});
showDemo('students');
const faqs = [
  { category: 'start', q: 'Ridzhan CRM kimlar uchun?', a: 'O‘quv markazlari rahbarlari, administratorlari va jamoalari uchun. Lidlar, o‘quvchilar, guruhlar, dars jadvali, xodimlar, moliya va hisobotlarni bir tizimda boshqarishga yordam beradi.' },
  { category: 'start', q: 'Birinchi marta qanday kiraman?', a: 'Markazingiz administratoridan tizim manzili va kirish ma’lumotlarini oling. O‘z markazingizga tegishli manzilni ochib, berilgan hisob bilan kiring. Kirish ma’lumotlaringiz bo‘lmasa, administrator bilan bog‘laning.' },
  { category: 'start', q: 'Yangi o‘quvchini nimadan boshlab qo‘shaman?', a: 'O‘quvchilar bo‘limini oching va yangi o‘quvchi qo‘shish amalini tanlang. Ism, telefon va kerakli ma’lumotlarni kiriting. Guruh, o‘qish boshlanish sanasi va balans ma’lumotlarini saqlashdan oldin tekshiring. Tugma ko‘rinmasa, hisobingiz huquqlarini administrator bilan tekshiring.' },
  { category: 'start', q: 'Eski ma’lumotlarimni ko‘chirish mumkinmi?', a: 'Ko‘chirish imkoniyati va tartibini joriy etishdan oldin Ridzhan vakili bilan kelishing. O‘quvchilar, guruhlar va balanslarni tartibli jadvalga tayyorlang. Import mavjudligini aniqlamasdan fayllarni tizimga yuklamang; ko‘chirilgan ma’lumotlarni asl yozuvlar bilan solishtiring.' },
  { category: 'finance', q: 'Obuna narxi qancha?', a: 'Yakuniy narx, to‘lov davri va xizmat tarkibi individual kelishuvda belgilanadi. Tariflar bo‘limidan markazingiz nomi, o‘quvchilar va markazlar soni bilan so‘rov matnini tayyorlashingiz mumkin. Ushbu sahifada tasdiqlanmagan raqamlar narx sifatida berilmagan.' },
  { category: 'finance', q: 'O‘quvchi to‘lov qildi, lekin qarz ko‘rinyapti. Nima qilaman?', a: 'Avval to‘lov aynan shu o‘quvchiga, to‘g‘ri miqdor va sana bilan kiritilganini tekshiring. Hisoblangan summa va to‘lovlar tarixini solishtiring. To‘lovni qayta kiritishdan oldin mavjud yozuvni toping — aks holda dublikat paydo bo‘lishi mumkin. Farq saqlansa, administratorga yozuv tafsilotlarini yuboring.' },
  { category: 'finance', q: 'Obuna tugashi haqidagi xabar chiqsa-chi?', a: 'Markaz rahbari yoki obuna uchun mas’ul administratorga xabar bering. To‘lov muddati va uzaytirish tartibini kelishuv bo‘yicha tekshiring. To‘lov qilingan bo‘lsa, tasdiqni mas’ul shaxsga yuboring. Kirish va ma’lumotlarga ta’siri obuna shartlariga bog‘liq.' },
  { category: 'technical', q: 'Hisobimga kira olmayapman. Nima qilay?', a: 'Markazingiz manzili to‘g‘riligini, telefon yoki login yozilishi va klaviatura tilini tekshiring. Sahifani yangilab qayta urinib ko‘ring. Parolni unutgan bo‘lsangiz, markaz administratoriga murojaat qiling. Parolingizni yordam so‘roviga yozmang.' },
  { category: 'technical', q: 'Guruh yoki o‘quvchi ro‘yxatda ko‘rinmayapti.', a: 'Qidiruv matni va tanlangan filtrlarni tozalang. Faol, muzlatilgan yoki arxiv holatini tekshiring. To‘g‘ri markazda ishlayotganingizga ishonch hosil qiling. Yozuv baribir topilmasa, hisobingizdagi ko‘rish huquqlarini administrator bilan tekshiring.' },
  { category: 'technical', q: 'Ma’lumot saqlanmayapti yoki sahifa ochilmayapti.', a: 'Internet aloqasini va majburiy maydonlar to‘ldirilganini tekshiring. Xato matnini yozib oling. Saqlanmagan kiritmalaringizni nusxalab qo‘ygach, sahifani yangilang. Muammo takrorlansa, vaqt, bo‘lim nomi va shaxsiy ma’lumotsiz skrinshotni texnik yordamga yuboring.' },
  { category: 'technical', q: 'Telefon orqali foydalanish mumkinmi?', a: 'Ridzhan moslashuvchan interfeys orqali telefon, planshet va kompyuterda ishlaydi. Ekran o‘lchamiga qarab bo‘limlar qulay ko‘rinishga o‘tadi.' },
  { category: 'technical', q: 'Ma’lumotlarim xavfsizmi?', a: 'Rollar orqali har bir xodim faqat o‘z vazifasiga kerakli bo‘limlarni ko‘radi. Hisob ma’lumotlarini boshqalarga bermang va xodim vazifasi o‘zgarganda uning ruxsatlarini administrator orqali yangilang.' },
  { category: 'start', q: 'Reyting qanday hisoblanadi?', a: 'Reyting o‘quvchining tizimdagi test, baho va faoliyat natijalariga tayangan holda shakllanadi. Markazingizda qo‘llanadigan aniq mezonlarni administrator bilan tekshiring.' },
  { category: 'start', q: 'Boshqarishni o‘rganish qiyinmi?', a: 'Asosiy amallar tanish va izchil joylashtirilgan: avval markaz, jamoa va guruhlar sozlanadi, keyin o‘quvchilar qo‘shilib kundalik jurnal va to‘lovlar yuritiladi. Yordam markazidagi qidiruv kerakli ko‘rsatmani tez topadi.' },
  { category: 'technical', q: 'Texnik yordamga qanday murojaat qilaman?', a: 'CRM ichidagi “Texnik yordam” bo‘limidan yoki markaz administratoringiz orqali murojaat qiling. Muammo qaysi bo‘limda, qachon va qaysi amaldan keyin chiqqanini yozing. Parol va boshqa odamlarning maxfiy ma’lumotlarini yubormang.' }
];
let category = 'all';
const normalize = (text) => text.toLowerCase().replace(/[‘’ʻʼ`']/g, '').trim();
function renderFaq() {
  const query = normalize($('#faq-search').value);
  const results = faqs.filter(faq => (category === 'all' || faq.category === category) && normalize(faq.q + ' ' + faq.a).includes(query));
  const list = $('#faq-list'); list.replaceChildren();
  results.forEach((faq, index) => {
    const details = document.createElement('details');
    const summary = document.createElement('summary'); summary.textContent = faq.q;
    const p = document.createElement('p'); p.textContent = faq.a;
    details.append(summary, p); if (index === 0) details.open = true;
    list.append(details);
  });
  if (!results.length) { const p = document.createElement('p'); p.className = 'no-results'; p.textContent = 'Javob topilmadi. Boshqa so‘z bilan qidiring yoki “Barchasi”ni tanlang.'; list.append(p); }
  $('#result-count').textContent = `${results.length} ta javob topildi`;
}
$('#faq-search').addEventListener('input', renderFaq);
document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
  category = button.dataset.category;
  document.querySelectorAll('[data-category]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
  renderFaq();
}));
renderFaq();
const config = window.RIDZHAN_CONFIG || {};
const allowedContactProtocols = ['https:', 'http:', 'mailto:', 'tel:'];
document.querySelectorAll('[data-contact]').forEach(link => {
  const value = config.contacts && config.contacts[link.dataset.contact];
  if (!value) return;
  try {
    const parsed = new URL(value);
    if (allowedContactProtocols.includes(parsed.protocol)) link.href = parsed.href;
  } catch {}
});
for (const [key, value] of Object.entries(config.prices || {})) {
  const target = document.querySelector(`[data-price="${key}"]`);
  if (target && typeof value === 'string' && value.trim()) target.textContent = value;
}
let contactUrl;
try { const url = new URL(config.contactUrl); if (['https:', 'http:'].includes(url.protocol)) contactUrl = url.href; } catch {}
if (contactUrl) { $('#contact-link').href = contactUrl; $('#contact-link').hidden = false; $('#contact-note').textContent = 'Matnni nusxalab, aloqa sahifasi orqali yuboring. So‘rov avtomatik yuborilmaydi.'; }
const dialog = $('#quote-dialog');
document.querySelectorAll('.quote').forEach(button => button.addEventListener('click', () => {
  $('#quote-form').reset(); $('#selected-plan').value = button.dataset.plan;
  $('#quote-result').hidden = true; $('#copy-status').textContent = ''; dialog.showModal();
}));
dialog.addEventListener('click', event => { const rect = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close(); });
$('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const center = $('#center-name').value.trim();
  if (!center) { $('#center-name').setCustomValidity('Markaz nomini kiriting.'); $('#center-name').reportValidity(); return; }
  $('#request-text').value = `Assalomu alaykum! Ridzhan CRM bo‘yicha taklif olmoqchiman.\nYo‘nalish: ${$('#selected-plan').value}\nMarkaz: ${center}\nO‘quvchilar soni: ${$('#student-count').value}\nMarkazlar soni: ${$('#branch-count').value}\nIltimos, narx, xizmat tarkibi va ulash shartlarini yuboring.`;
  $('#quote-result').hidden = false; $('#copy-status').textContent = 'So‘rov matni tayyor. Hali yuborilmadi.'; $('#request-text').focus();
});
$('#center-name').addEventListener('input', () => $('#center-name').setCustomValidity(''));
$('#copy-request').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText($('#request-text').value); $('#copy-status').textContent = 'Nusxalandi. Endi Ridzhan vakilingizga yuborishingiz mumkin.'; }
  catch { $('#request-text').focus(); $('#request-text').select(); $('#copy-status').textContent = 'Matn belgilandi. Ctrl+C yoki Mac’da ⌘C tugmalarini bosing.'; }
});
$('#year').textContent = new Date().getFullYear();
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const lowPower = Boolean((navigator.deviceMemory && navigator.deviceMemory <= 4) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || (connection && connection.saveData));
const stage = $('#stage');
let tiltFrame = 0;
stage.addEventListener('pointermove', event => {
  if (motion.matches || lowPower || innerWidth <= 800 || event.pointerType !== 'mouse' || tiltFrame) return;
  const clientX = event.clientX, clientY = event.clientY;
  tiltFrame = requestAnimationFrame(() => {
    const r = stage.getBoundingClientRect();
    const x = (clientX - r.left) / r.width - .5;
    const y = (clientY - r.top) / r.height - .5;
    $('#hero-dashboard').style.transform = `rotateY(${-10 + x * 8}deg) rotateX(${6 - y * 6}deg) rotateZ(-1.5deg)`;
    tiltFrame = 0;
  });
}, { passive: true });
stage.addEventListener('pointerleave', () => {
  if (tiltFrame) { cancelAnimationFrame(tiltFrame); tiltFrame = 0; }
  $('#hero-dashboard').style.transform = '';
});

// Lightweight motion: reveal once, and automatically simplify effects on modest devices.
if (lowPower) document.documentElement.classList.add('lite');
if (!lowPower && !motion.matches && 'IntersectionObserver' in window) {
  const revealItems = document.querySelectorAll('.feature,.solution-grid article,.steps li,.price-card,details,.closing>*');
  revealItems.forEach(item => item.classList.add('reveal'));
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  revealItems.forEach(item => revealObserver.observe(item));
}

// Theme follows the device on first visit, then remembers an explicit choice.
const themeButton = $('#theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
function storedTheme() {
  try { return localStorage.getItem('ridzhan-theme'); } catch { return null; }
}
function setTheme(theme, remember = false) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  const darkMode = theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(darkMode));
  themeButton.setAttribute('aria-label', darkMode ? 'Kun rejimiga o‘tish' : 'Tun rejimiga o‘tish');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = darkMode ? '#0a0710' : '#7636ed';
  if (remember) { try { localStorage.setItem('ridzhan-theme', theme); } catch {} }
}
setTheme(document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light'));
themeButton.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark', true));
const followSystemTheme = event => { if (!storedTheme()) setTheme(event.matches ? 'dark' : 'light'); };
if (systemTheme.addEventListener) systemTheme.addEventListener('change', followSystemTheme);
else if (systemTheme.addListener) systemTheme.addListener(followSystemTheme);

// Accessible, touch-friendly showcase slider. Autoplay only runs while visible.
const slider = $('.experience-slider');
const slideTrack = $('#slide-track');
const slides = [...document.querySelectorAll('[data-slide]')];
const slideDots = [...document.querySelectorAll('[data-slide-dot]')];
let activeSlide = 0;
let slideTimer = 0;
let sliderVisible = false;
let pointerStartX = null;
function showSlide(index, userInitiated = false) {
  activeSlide = (index + slides.length) % slides.length;
  slideTrack.style.transform = `translate3d(${-activeSlide * 100}%,0,0)`;
  slides.forEach((slide, i) => slide.setAttribute('aria-hidden', String(i !== activeSlide)));
  slideDots.forEach((dot, i) => {
    const active = i === activeSlide;
    dot.classList.toggle('active', active);
    dot.setAttribute('aria-selected', String(active));
    dot.tabIndex = active ? 0 : -1;
  });
  $('#slide-current').textContent = String(activeSlide + 1).padStart(2, '0');
  if (userInitiated) restartSlides();
}
function stopSlides() { if (slideTimer) { clearInterval(slideTimer); slideTimer = 0; } }
function startSlides() {
  if (!sliderVisible || lowPower || motion.matches || document.hidden || slideTimer) return;
  slideTimer = setInterval(() => showSlide(activeSlide + 1), 6500);
}
function restartSlides() { stopSlides(); startSlides(); }
$('#slide-prev').addEventListener('click', () => showSlide(activeSlide - 1, true));
$('#slide-next').addEventListener('click', () => showSlide(activeSlide + 1, true));
slideDots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index, true)));
slider.tabIndex = 0;
slider.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showSlide(activeSlide - 1, true); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showSlide(activeSlide + 1, true); }
});
slider.addEventListener('pointerdown', event => { if (event.isPrimary) pointerStartX = event.clientX; }, { passive: true });
slider.addEventListener('pointerup', event => {
  if (pointerStartX === null) return;
  const distance = event.clientX - pointerStartX; pointerStartX = null;
  if (Math.abs(distance) > 45) showSlide(activeSlide + (distance < 0 ? 1 : -1), true);
}, { passive: true });
slider.addEventListener('pointercancel', () => { pointerStartX = null; });
slider.addEventListener('mouseenter', stopSlides);
slider.addEventListener('mouseleave', startSlides);
slider.addEventListener('focusin', stopSlides);
slider.addEventListener('focusout', startSlides);
document.addEventListener('visibilitychange', () => document.hidden ? stopSlides() : startSlides());
if ('IntersectionObserver' in window) {
  const sliderObserver = new IntersectionObserver(entries => {
    sliderVisible = entries[0].isIntersecting;
    sliderVisible ? startSlides() : stopSlides();
  }, { threshold: .2 });
  sliderObserver.observe(slider);
} else { sliderVisible = true; startSlides(); }
showSlide(0);

// Quick access to help search without interfering with browser shortcuts.
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    const searchInput = $('#faq-search');
    searchInput.focus();
    searchInput.scrollIntoView({ behavior: motion.matches ? 'auto' : 'smooth', block: 'center' });
  }
});
