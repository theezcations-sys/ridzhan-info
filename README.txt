RIDZHAN CRM — TANISHTIRUV VA YORDAM SAHIFASI

ISHGA TUSHIRISH
ZIPni oching va index.html faylini Chrome, Safari yoki boshqa zamonaviy brauzerda oching.
Hech qanday npm install yoki qo‘shimcha paket talab qilinmaydi.
HTML, CSS va JavaScript fayllari bir papkada qolsin.

TARKIB
index.html — sahifa matnlari va tuzilishi.
styles.css — binafsha, oq va to‘q sariq dizayn, responsiv ko‘rinish, CSS 3D va animatsiyalar.
app.js — namoyish bo‘limlari, qidiruv, yordam savollari, mobil menyu, so‘rov tayyorlash.
config.js — narx va aloqa sozlamalari.

NARXLARNI KIRITISH
config.js ichidagi prices.single va prices.network qiymatlarini tasdiqlangan narx matni bilan almashtiring.
Masalan, o‘zingiz tasdiqlagan summani "... so‘m / oy" shaklida yozing.
null bo‘lsa “Kelishuv asosida” va “Individual taklif” yozuvlari chiqadi.
Tarif nomlari, xizmat tarkibi va izohlarni index.html ichida tahrirlash mumkin.

ALOQA
config.js ichidagi contactUrl qiymatini rasmiy https aloqa manzili bilan almashtiring.
Masalan, o‘zingizning rasmiy Telegram havolangizni qo‘ying.
Hozir tasdiqlangan aloqa manzili berilmaganligi sababli aloqa tugmasi yashirilgan.
Narx so‘rovi formasi faqat matn tayyorlaydi. Hech qanday ma’lumot serverga yuborilmaydi.
Matnni nusxalab yuborish mumkin. Brauzer nusxalashni cheklasa, matnni Ctrl+C / Cmd+C bilan nusxalang.

NAMOYISH
O‘quvchilar, jadval va moliya tablari interaktiv namunadir.
Ism va raqamlar namuna. Haqiqiy Supabase yoki CRM bazasiga ulanmagan.
3D effekt CSS perspective/transform bilan bajarilgan; tashqi kutubxona yoki WebGL talab qilinmaydi.
Asosiy CRM imkoniyatlari yuborilgan skrinshot asosida tasvirlangan.
Yordam matnlarini CRM’ning aniq tugma nomlari va yakuniy xizmat shartlariga moslab yangilashingiz mumkin.

JOYLANISH
Bu papkadagi index.html, styles.css, config.js va app.js fayllarini statik hostingga birga yuklash mumkin.
Netlify uchun nashr papkasi shu fayllar turgan papka; build talab qilinmaydi.

TEKSHIRUV
JavaScript sintaksisi, ichki havolalar, fayl yo‘llari va ZIP yaxlitligi tekshirildi.
Avtomatlashtirilgan brauzer/visual sinov bajarilmagan.

2-VERSIYA YANGILANISHLARI
- Haqiqiy Ridzhan logosi optimallashtirilgan WebP ko‘rinishida qo‘shildi.
- 320–430px mobil ekranlarda tashqariga chiqishning oldi olindi.
- Jadval tablari va jadvallar mobil ekranda o‘z hududida suriladi.
- iOS uslubidagi shaffof yuzalar, chuqurlik va 3D soyalar qo‘shildi.
- Animatsiyalar faqat transform va opacity bilan ishlaydi.
- 4 GB yoki kam xotira, 4 yoki kam yadro, Save-Data, sekin yangilanish yoki Reduced Motion holatida og‘ir effektlar avtomatik o‘chadi.
- 800px gacha ekranlarda backdrop blur va kursor 3D kuzatuvi ishlatilmaydi.

3-VERSIYA YANGILANISHLARI
- Birinchi tashrifda qurilmaning tun yoki kun mavzusi avtomatik olinadi.
- Mavzuni almashtirish tugmasi qo‘shildi; foydalanuvchi tanlovi brauzerda eslab qolinadi.
- Aqlli jurnal, davomat, baho, testlar, reyting, jonli tahlil, Telegram bot, qurilmalar va rollar bo‘limlari qo‘shildi.
- 4 ta boshqariladigan va barmoq bilan suriladigan interaktiv slayd qo‘shildi.
- Slayd avtomatik almashishi faqat ko‘rinib turganda ishlaydi va kuchsiz qurilmalarda o‘chadi.
- “Daftar va Excel / Ridzhan CRM” taqqoslash bo‘limi qo‘shildi.

4-VERSIYA YANGILANISHLARI
- Mobil navigatsiya tepada qotirilgan yumaloq glass panelga aylantirildi.
- Tun va kun ikonlari aniq SVG ikonlarga almashtirildi.
- Tun rejimidagi oq chegaralar binafsha-ko‘mir rangli yumshoq ajratgichlarga almashtirildi.
- Klaviatura focus holatlari aniqroq va dizaynga mos qilindi.
- “Bitta tizim” qatori bosqichma-bosqich jarayon ko‘rinishiga o‘tkazildi.
- Muammolar va yechimlar alohida yumaloq kartalar sifatida qayta dizayn qilindi.
- Yordam markazi qidiruv, mavzular, statistika va yumaloq FAQ kartalari bilan yangilandi.
- Cmd/Ctrl + K yordam qidiruviga tez o‘tadi.
- Yakuniy chaqiriq va footer professional blok sifatida qayta qurildi.

5-VERSIYA YANGILANISHLARI
- Header ichidagi tun/kun tugmasi barqaror flex tuzilishga o‘tkazildi.
- Quyosh va oy ikonlari doim o‘z joyida qoladi; aktiv doira ular orasida siljiydi.
- Tugma desktop, planshet va mobil uchun alohida o‘lchamga ega.
- 1100px dan kichik ekranda Boshlash tugmasi yashirinib, header siqilib qolishining oldi olindi.
- Dark mode header chegaralari va soyasi tozalandi.

6-VERSIYA YANGILANISHLARI
- Telegram: @tharih
- Email: rozimuhammadtakhirov@gmail.com
- Telefon: +998 88 339 33 39
- Footer va yakuniy blokdagi kontaktlar bosilganda tegishli ilovani ochadi.
- Tarif so‘rovi tayyorlangach Telegram orqali yuborish tugmasi ko‘rinadi.
- Kontaktlarni keyin config.js faylidan bitta joyda almashtirish mumkin.
