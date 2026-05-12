import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const ASTROLOGER_IMG = "https://cdn.poehali.dev/projects/4c6da0ea-04d5-4165-99ba-ce4421159d12/files/32bc0056-457e-4529-b9d1-167f525f5334.jpg";
const TAROT_IMG = "https://cdn.poehali.dev/projects/4c6da0ea-04d5-4165-99ba-ce4421159d12/files/588ee307-238e-44ba-bc69-46e32c412ae1.jpg";
const CHART_IMG = "https://cdn.poehali.dev/projects/4c6da0ea-04d5-4165-99ba-ce4421159d12/files/d752cee4-4db4-43f8-8f27-232bb4c6a12a.jpg";

const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 2,
}));

const CONSTELLATIONS = [
  { points: [[10, 15], [14, 10], [20, 12], [18, 18], [13, 20]] },
  { points: [[75, 25], [80, 20], [85, 23], [82, 30], [77, 28]] },
  { points: [[60, 70], [65, 65], [72, 68], [70, 75], [63, 73]] },
  { points: [[30, 60], [35, 55], [40, 58], [38, 65]] },
];

function StarField() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {CONSTELLATIONS.map((c, ci) => (
          <g key={ci}>
            {c.points.map((p, pi) =>
              pi < c.points.length - 1 ? (
                <line
                  key={pi}
                  x1={`${c.points[pi][0]}%`}
                  y1={`${c.points[pi][1]}%`}
                  x2={`${c.points[pi + 1][0]}%`}
                  y2={`${c.points[pi + 1][1]}%`}
                  stroke="#C9A84C"
                  strokeWidth="0.5"
                  strokeOpacity="0.4"
                />
              ) : null
            )}
            {c.points.map((p, pi) => (
              <circle key={`d-${pi}`} cx={`${p[0]}%`} cy={`${p[1]}%`} r="2" fill="#C9A84C" opacity="0.6" />
            ))}
          </g>
        ))}
      </svg>
      {STARS.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

const SERVICES = [
  {
    icon: "Star",
    title: "Натальная карта",
    desc: "Глубокий анализ вашей астрологической карты рождения. Раскройте таланты, кармические задачи и жизненный путь.",
    price: "от 5 000 ₽",
    duration: "90 мин",
  },
  {
    icon: "Moon",
    title: "Расклад Таро",
    desc: "Ответы на волнующие вопросы через древние символы таро. Прошлое, настоящее и возможности будущего.",
    price: "от 3 000 ₽",
    duration: "60 мин",
  },
  {
    icon: "Sun",
    title: "Совместимость",
    desc: "Астрологический анализ союза двух людей. Сильные стороны и зоны роста в отношениях.",
    price: "от 6 000 ₽",
    duration: "90 мин",
  },
  {
    icon: "Compass",
    title: "Прогноз на год",
    desc: "Детальный разбор транзитов и прогрессий. Знайте, какие периоды благоприятны для важных решений.",
    price: "от 7 000 ₽",
    duration: "120 мин",
  },
  {
    icon: "Sparkles",
    title: "Нумерология",
    desc: "Матрица судьбы и число жизненного пути. Узнайте скрытые смыслы вашего имени и даты рождения.",
    price: "от 2 500 ₽",
    duration: "45 мин",
  },
  {
    icon: "Eye",
    title: "Детская карта",
    desc: "Помогите ребёнку раскрыть природный потенциал. Рекомендации по воспитанию и образованию.",
    price: "от 4 500 ₽",
    duration: "75 мин",
  },
];

const REVIEWS = [
  {
    name: "Анна М.",
    sign: "♎ Весы",
    text: "Невероятно точный анализ! После консультации наконец поняла, почему в определённые периоды всё шло наперекосяк. Теперь знаю, когда действовать, а когда — ждать.",
    stars: 5,
  },
  {
    name: "Дмитрий К.",
    sign: "♏ Скорпион",
    text: "Сначала был скептиком, но разбор натальной карты поразил точностью. Многое встало на свои места. Спасибо за профессионализм и деликатность.",
    stars: 5,
  },
  {
    name: "Елена В.",
    sign: "♊ Близнецы",
    text: "Таро-сессия помогла принять важное решение о работе. Карты показали именно то, что я боялась признать себе. Огромная благодарность!",
    stars: 5,
  },
  {
    name: "Светлана Р.",
    sign: "♓ Рыбы",
    text: "Прогноз на год оказался удивительно точным. Уже прошло 6 месяцев — всё, что было предсказано, реализовалось. Буду возвращаться снова.",
    stars: 5,
  },
];

const BLOG_POSTS = [
  {
    date: "8 мая 2026",
    tag: "Ретроград",
    title: "Меркурий ретроградный: как использовать это время с пользой",
    excerpt: "Многие боятся ретроградного Меркурия, но это период переосмысления, а не хаоса. Рассказываю, как работать с этой энергией.",
    img: CHART_IMG,
  },
  {
    date: "1 мая 2026",
    tag: "Лунный цикл",
    title: "Полнолуние в Скорпионе: время отпустить старое",
    excerpt: "Полнолуние в Скорпионе — один из самых трансформационных лунных циклов года. Что важно сделать в эти дни?",
    img: TAROT_IMG,
  },
  {
    date: "22 апреля 2026",
    tag: "Знаки",
    title: "Стихии в астрологии: огонь, земля, воздух, вода",
    excerpt: "Понимание стихий — это ключ к пониманию характеров и взаимодействий между людьми в вашей жизни.",
    img: ASTROLOGER_IMG,
  },
];

const GALLERY_IMGS = [
  { src: CHART_IMG, label: "Натальная карта" },
  { src: ASTROLOGER_IMG, label: "Консультация" },
  { src: TAROT_IMG, label: "Таро-расклад" },
  { src: CHART_IMG, label: "Прогноз" },
  { src: TAROT_IMG, label: "Совместимость" },
  { src: ASTROLOGER_IMG, label: "Ретрит" },
];

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "about", label: "Обо мне" },
  { id: "services", label: "Услуги" },
  { id: "publications", label: "Публикации" },
  { id: "gallery", label: "Галерея" },
  { id: "reviews", label: "Отзывы" },
  { id: "blog", label: "Блог" },
  { id: "contacts", label: "Контакты" },
];

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 100;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollY) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids]);
  return active;
}

function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", message: "" });
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg card-astro rounded-2xl p-8 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-gold transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        {sent ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="font-display text-2xl text-gold mb-3">Заявка отправлена!</h3>
            <p className="text-muted-foreground text-sm">Я свяжусь с вами в течение 24 часов для подтверждения записи.</p>
            <button onClick={onClose} className="mt-6 btn-gold px-8 py-3 rounded-full">
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="text-3xl mb-2">☽</div>
              <h3 className="font-display text-2xl text-gold">Записаться на консультацию</h3>
              <p className="text-muted-foreground text-xs mt-1">Заполните форму — я отвечу в течение суток</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-gold/70 mb-1 uppercase tracking-wider">Ваше имя *</label>
                <input
                  required
                  className="w-full bg-deep/50 border border-gold/20 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/60 transition-colors"
                  placeholder="Как к вам обращаться?"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs text-gold/70 mb-1 uppercase tracking-wider">Телефон или Telegram *</label>
                <input
                  required
                  className="w-full bg-deep/50 border border-gold/20 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/60 transition-colors"
                  placeholder="+7 999 000 00 00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs text-gold/70 mb-1 uppercase tracking-wider">Услуга</label>
                <select
                  className="w-full bg-deep/50 border border-gold/20 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-gold/60 transition-colors"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Выберите услугу</option>
                  <option>Натальная карта</option>
                  <option>Расклад Таро</option>
                  <option>Совместимость</option>
                  <option>Прогноз на год</option>
                  <option>Нумерология</option>
                  <option>Детская карта</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gold/70 mb-1 uppercase tracking-wider">Пожелания по дате</label>
                <input
                  type="date"
                  className="w-full bg-deep/50 border border-gold/20 rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-gold/60 transition-colors"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs text-gold/70 mb-1 uppercase tracking-wider">Сообщение</label>
                <textarea
                  rows={3}
                  className="w-full bg-deep/50 border border-gold/20 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/60 transition-colors resize-none"
                  placeholder="Что вас беспокоит? Какой вопрос хотите разобрать?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="w-full btn-gold py-3 rounded-full text-sm font-semibold">
                Отправить заявку
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen" style={{ background: "var(--deep)" }}>
      <StarField />

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "py-3 backdrop-blur-md bg-deep/80 border-b border-gold/10" : "py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-display text-xl tracking-widest text-gold hover:text-gold-light transition-colors"
          >
            ✦ Небесные Откровения
          </button>

          <ul className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`text-xs uppercase tracking-widest transition-colors font-body ${
                    activeSection === item.id
                      ? "text-gold"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setBookingOpen(true)}
              className="hidden lg:block btn-gold px-5 py-2 rounded-full text-xs"
            >
              Записаться
            </button>
            <button
              className="lg:hidden text-gold p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-deep/95 backdrop-blur-md border-b border-gold/10 py-4 animate-fade-in">
            <ul className="container space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="w-full text-left text-sm py-2 border-b border-gold/10 text-foreground/70 hover:text-gold transition-colors uppercase tracking-widest"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { setBookingOpen(true); setMenuOpen(false); }}
                  className="w-full btn-gold py-3 rounded-full text-xs mt-2"
                >
                  Записаться на консультацию
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: "80px" }}>
        <div
          className="absolute inset-0 opacity-15"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.3) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 container text-center">
          <div className="animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <p className="text-xs uppercase tracking-[0.4em] text-gold/60 mb-6 font-body">
              Астрология · Таро · Нумерология
            </p>
          </div>
          <div className="animate-fade-in-up opacity-0 delay-200" style={{ animationFillMode: "forwards" }}>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6" style={{ color: "#E8C97A" }}>
              Небесные
              <br />
              <span className="italic" style={{ color: "#C9A84C" }}>Откровения</span>
            </h1>
          </div>
          <div className="animate-fade-in-up opacity-0 delay-400" style={{ animationFillMode: "forwards" }}>
            <p className="font-body text-lg text-foreground/60 max-w-lg mx-auto mb-10 leading-relaxed">
              Звёзды хранят ответы на ваши вопросы.
              <br />Я помогу вам их услышать.
            </p>
          </div>
          <div className="animate-fade-in-up opacity-0 delay-600 flex flex-col sm:flex-row gap-4 justify-center" style={{ animationFillMode: "forwards" }}>
            <button onClick={() => setBookingOpen(true)} className="btn-gold px-10 py-4 rounded-full text-sm animate-pulse-gold">
              Записаться на консультацию
            </button>
            <button onClick={() => scrollTo("services")} className="btn-outline-gold px-10 py-4 rounded-full text-sm">
              Узнать об услугах
            </button>
          </div>
          <div className="animate-fade-in-up opacity-0 delay-800 mt-16 flex justify-center gap-12 text-center" style={{ animationFillMode: "forwards" }}>
            {[["10+", "лет практики"], ["500+", "консультаций"], ["98%", "довольных клиентов"]].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-3xl text-gold">{num}</div>
                <div className="text-xs text-foreground/40 uppercase tracking-wider mt-1 font-body">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/40 hover:text-gold transition-colors animate-float"
        >
          <Icon name="ChevronDown" size={28} />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5"
          style={{ background: "radial-gradient(ellipse at right, rgba(201,168,76,0.5), transparent 60%)" }} />
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img src={ASTROLOGER_IMG} alt="Астролог" className="w-full aspect-[3/4] object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,11,20,0.6) 0%, transparent 50%)" }} />
              </div>
              <div className="absolute -bottom-6 -right-6 card-astro rounded-2xl p-5 w-48" style={{ border: "1px solid rgba(201,168,76,0.3)" }}>
                <div className="font-display text-3xl text-gold">10+</div>
                <div className="text-xs text-foreground/50 mt-1 font-body uppercase tracking-wider">лет в астрологии</div>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold/60 mb-4 font-body">Обо мне</p>
              <h2 className="font-display text-5xl md:text-6xl text-gold-light mb-6 leading-tight">
                Анастасия<br />
                <span className="italic text-gold">Светлова</span>
              </h2>
              <div className="w-16 h-px bg-gold mb-8" />
              <p className="text-foreground/70 leading-relaxed mb-6 font-body">
                Я занимаюсь астрологией более десяти лет, сочетая классические западные техники с ведической традицией. Каждая консультация — это не предсказание судьбы, а инструмент для осознанных решений.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-8 font-body text-sm">
                Закончила Московскую школу астрологии, прошла обучение у ведущих европейских мастеров таро. Провела более 500 персональных консультаций для клиентов из 15 стран мира.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "GraduationCap", text: "МША — диплом астролога" },
                  { icon: "Globe", text: "Клиенты из 15+ стран" },
                  { icon: "BookOpen", text: "Автор 3 курсов по астро" },
                  { icon: "Award", text: "Сертификат таролога" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} fallback="Star" size={14} className="text-gold" />
                    </div>
                    <span className="text-xs text-foreground/60 font-body">{item.text}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setBookingOpen(true)} className="btn-gold px-8 py-3 rounded-full text-xs">
                Записаться к Анастасии
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-32">
        <div className="absolute inset-0 opacity-5"
          style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.4), transparent 70%)" }} />
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/60 mb-4 font-body">Что я предлагаю</p>
            <h2 className="font-display text-5xl md:text-6xl text-gold-light">Услуги</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="card-astro rounded-2xl p-7 group hover:border-gold/40 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-5 group-hover:border-gold/60 transition-colors">
                  <Icon name={s.icon} fallback="Star" size={20} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl text-gold-light mb-3">{s.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-5 font-body">{s.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                  <div>
                    <div className="text-gold font-semibold text-sm font-body">{s.price}</div>
                    <div className="text-foreground/40 text-xs font-body">{s.duration}</div>
                  </div>
                  <button onClick={() => setBookingOpen(true)} className="btn-outline-gold px-4 py-2 rounded-full text-xs">
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="relative py-32">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/60 mb-4 font-body">СМИ и медиа</p>
            <h2 className="font-display text-5xl md:text-6xl text-gold-light">Публикации</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { outlet: "Vogue Russia", title: "Астрология в жизни современной женщины", year: "2025" },
              { outlet: "РБК Стиль", title: "Как звёзды влияют на бизнес-решения", year: "2025" },
              { outlet: "Tatler", title: "Натальная карта как инструмент самопознания", year: "2024" },
              { outlet: "Forbes Woman", title: "Астрологический прогноз для предпринимателей", year: "2024" },
            ].map((p, i) => (
              <div key={i} className="card-astro rounded-2xl p-6 flex items-center gap-6 hover:border-gold/30 transition-all">
                <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="BookOpen" size={22} className="text-gold/60" />
                </div>
                <div>
                  <div className="text-xs text-gold/60 uppercase tracking-wider mb-1 font-body">{p.outlet} · {p.year}</div>
                  <div className="font-display text-lg text-foreground/90">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="relative py-32">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/60 mb-4 font-body">Атмосфера работы</p>
            <h2 className="font-display text-5xl md:text-6xl text-gold-light">Галерея</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMGS.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl group cursor-pointer ${i === 0 ? "md:row-span-2" : ""}`}>
                <img
                  src={img.src}
                  alt={img.label}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i === 0 ? "h-full min-h-[300px]" : "aspect-square"}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.label}
                  </span>
                </div>
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-2xl transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative py-32">
        <div className="absolute inset-0 opacity-5"
          style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.3), transparent 70%)" }} />
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/60 mb-4 font-body">Говорят клиенты</p>
            <h2 className="font-display text-5xl md:text-6xl text-gold-light">Отзывы</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {REVIEWS.map((r, i) => (
              <div key={i} className="card-astro rounded-2xl p-7 hover:border-gold/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, si) => (
                    <span key={si} className="text-gold text-sm">★</span>
                  ))}
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed mb-5 italic font-body">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
                  <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-display text-sm">{r.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground/80 font-medium font-body">{r.name}</div>
                    <div className="text-xs text-gold/50 font-body">{r.sign}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="relative py-32">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/60 mb-4 font-body">Астрологический дневник</p>
            <h2 className="font-display text-5xl md:text-6xl text-gold-light">Блог</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <article key={i} className="card-astro rounded-2xl overflow-hidden hover:border-gold/30 transition-all group cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-gold/10 text-gold border border-gold/20 px-2.5 py-1 rounded-full font-body">{post.tag}</span>
                    <span className="text-xs text-foreground/40 font-body">{post.date}</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground/90 mb-3 leading-snug group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-foreground/50 text-xs leading-relaxed font-body">{post.excerpt}</p>
                  <button className="mt-4 text-xs text-gold/60 hover:text-gold transition-colors flex items-center gap-1 font-body uppercase tracking-wider">
                    Читать далее <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="relative py-32">
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at bottom, rgba(201,168,76,0.4), transparent 60%)" }} />
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-gold/60 mb-4 font-body">Свяжитесь со мной</p>
            <h2 className="font-display text-5xl md:text-6xl text-gold-light">Контакты</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="font-display text-3xl text-gold-light mb-8">Начните свой путь к звёздам</h3>
              {[
                { icon: "MessageCircle", label: "Telegram", value: "@astro_nastya", href: "#" },
                { icon: "Instagram", label: "Instagram", value: "@nebesnye_otkroveniya", href: "#" },
                { icon: "Mail", label: "Email", value: "hello@nebesnye.ru", href: "mailto:hello@nebesnye.ru" },
                { icon: "Phone", label: "WhatsApp", value: "+7 999 000 00 00", href: "#" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                    <Icon name={c.icon} fallback="Star" size={16} className="text-gold/60 group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/40 uppercase tracking-wider font-body">{c.label}</div>
                    <div className="text-sm text-foreground/80 group-hover:text-gold transition-colors font-body">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="card-astro rounded-2xl p-8">
              <h3 className="font-display text-2xl text-gold mb-6">Задать вопрос</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="w-full bg-deep/50 border border-gold/20 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/60 transition-colors"
                  placeholder="Ваше имя"
                />
                <input
                  className="w-full bg-deep/50 border border-gold/20 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/60 transition-colors"
                  placeholder="Email или Telegram"
                />
                <textarea
                  rows={4}
                  className="w-full bg-deep/50 border border-gold/20 rounded-lg px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/60 transition-colors resize-none"
                  placeholder="Ваш вопрос..."
                />
                <button type="submit" className="w-full btn-gold py-3 rounded-full text-xs">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-10 border-t border-gold/10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg text-gold/70">✦ Небесные Откровения</div>
          <div className="text-xs text-foreground/30 font-body text-center">
            © 2026 Анастасия Светлова · Все права защищены
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {NAV_ITEMS.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs text-foreground/30 hover:text-gold/60 transition-colors font-body uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setBookingOpen(true)}
          className="btn-gold w-14 h-14 rounded-full shadow-lg flex items-center justify-center animate-pulse-gold"
          title="Записаться"
        >
          <Icon name="Calendar" size={20} />
        </button>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}