import { useEffect, useMemo, useRef, useState } from 'react';
import heroImage from './assets/hero.jpg';
import aboutImage from './assets/about.jpg';
import lifeImage1 from './assets/life-1.jpg';
import lifeImage2 from './assets/life-2.jpg';
import lifeImage3 from './assets/life-3.jpg';

export default function GermanEditorialHomepage() {
  const content = {
    tagline: 'KAYDEX / 数字洞天 / 个人归档',
    nav: {
      about: '关于',
      study: '学习',
      life: '生活',
      archive: '归档',
      contact: '联系',
    },
    hero: {
      eyebrow: '门',
      title: '君子有九思',
      subtitle: '留一处可栖可观之地',
      lead: '所学、所思、所好，皆可安放于此。',
      text: '此间不大，却可收纳所学、所思与所见。愿以卷帙存阅读，以片羽记生活，使其渐成一方静处。',
      primary: '进入卷帙',
      secondary: '翻看片羽',
      note: '今日记事 / 雨后，光泽可信',
      image: heroImage,
      imageCaption: '片羽 01 / 天光与静物',
    },
    about: {
      eyebrow: '序',
      title: '关于此间',
      quote: '古人有洞府，今人亦可自辟一隅。',
      paragraphs: [
        '我想为自己留下一处能够缓慢积累的地方。它不急于展示结论，而更愿意保存那些仍在生长中的阅读、思考与感受。',
        '这里会收纳读书札记、阶段笔记、生活片羽与年岁归档，让日常中那些并不喧哗的部分，也能被认真安放。',
      ],
      keywords: ['所学', '所思', '所好', '所居'],
      aside: '愿以一页一页的积累，缓缓构成自我。',
      image: aboutImage,
    },
    study: {
      eyebrow: '卷帙',
      title: '学习与阅读',
      intro: '把阅读、课程、兴趣与阶段札记，整理成可持续生长的个人档案。',
      cards: [
        {
          no: '01',
          status: '阅读中',
          title: '正在阅读',
          text: '近期在读的书、文章与片段摘记，会以较短的记录方式存放在这里。',
          tags: ['文本', '历史', '哲学'],
        },
        {
          no: '02',
          status: '整理中',
          title: '阶段笔记',
          text: '课程要点、研究兴趣与主题归纳，将被整理成清晰可回看的阶段笔记。',
          tags: ['关键词', '摘录', '札记'],
        },
        {
          no: '03',
          status: '计划中',
          title: '接下来要做',
          text: '短期计划与未来准备展开的方向，会以轻量但连续的方式逐步补全。',
          tags: ['清单', '计划', '未来'],
        },
      ],
    },
    life: {
      eyebrow: '片羽',
      title: '生活与图像',
      intro: '留住那些不必喧哗、却值得回望的日常光影。',
      images: [lifeImage1, lifeImage2, lifeImage3],
      notes: [
        '雨后散步时，城市表面的光泽会突然变得可信。',
        '有些学习不是为了回答问题，而是为了改变提问的方式。',
        '真正值得保存的日常，往往不是事件，而是气息。',
      ],
      next: '下一则',
    },
    archive: {
      eyebrow: '藏册',
      title: '归档与上传',
      intro: '收纳 PDF、图像与阶段性的个人材料。当前版本支持本地预览，后续可接入云端存储。',
      pdfLabel: '添一卷',
      imageLabel: '存片羽',
      localPreview: '本地预览',
      selected: '已选择',
      noPdf: '尚未选择 PDF',
      noImages: '尚未选择图片',
      clear: '清空',
      samples: [
        {
          title: '读书札记 01',
          date: '2026.03',
          desc: '近期阅读内容与片段摘录。',
        },
        {
          title: '课程整理 02',
          date: '2026.03',
          desc: '阶段性学习问题与索引。',
        },
      ],
    },
    contact: {
      eyebrow: '尾跋',
      title: '写在最后',
      text: '此页既成，往后便可徐徐增补。或记读书，或存片羽，或作年岁归档，使其渐成一方小小洞天。',
      cta: '写信给我',
      signoff: 'KAYDEX / 2026',
    },
    menu: '菜单',
    close: '关闭',
    home: '首页',
    localTime: '本地时间',
  };

  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');
  const [visibleSections, setVisibleSections] = useState({});
  const [noteIndex, setNoteIndex] = useState(0);
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const pdfInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const lifeNotes = useMemo(() => content.life.notes, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTimeString(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ids = ['about', 'study', 'life', 'archive', 'contact'];
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: [0.15, 0.35, 0.6],
        rootMargin: '-15% 0px -35% 0px',
      }
    );

    targets.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNoteIndex((prev) => (prev + 1) % lifeNotes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [lifeNotes.length]);

  useEffect(() => {
    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
      imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [pdfUrl, imagePreviews]);

  const navClass = (id) =>
    `border-b pb-1 transition ${
      activeSection === id
        ? 'border-slate-700 text-slate-900'
        : 'border-transparent text-slate-500 hover:border-slate-500 hover:text-slate-800'
    }`;

  const revealClass = (id) =>
    `transition-all duration-700 ease-out ${
      visibleSections[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;

  const handlePdfChange = (e) => {
    const file = e.target.files?.[0];
    if (!file || file.type !== 'application/pdf') return;

    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setPdfFile(file);
    setPdfUrl(URL.createObjectURL(file));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []).filter((file) => file.type.startsWith('image/'));
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    setImageFiles(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const clearUploads = () => {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    setPdfFile(null);
    setPdfUrl('');
    setImageFiles([]);
    setImagePreviews([]);
    if (pdfInputRef.current) pdfInputRef.current.value = '';
    if (imageInputRef.current) imageInputRef.current.value = '';
  };

  const menuItems = [
    { id: 'about', label: content.nav.about },
    { id: 'study', label: content.nav.study },
    { id: 'life', label: content.nav.life },
    { id: 'archive', label: content.nav.archive },
    { id: 'contact', label: content.nav.contact },
  ];

  return (
    <div
      className="min-h-screen bg-stone-100 text-slate-900"
      style={{
        fontFamily:
          '"Kaiti SC", "STKaiti", "KaiTi", "BiauKai", serif',
      }}
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(180,83,9,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(15,23,42,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.18)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div
        className={`fixed inset-0 z-[90] transition-all duration-300 ${
          menuOpen ? 'pointer-events-auto bg-black/30 opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <aside
          className={`absolute right-0 top-0 h-full w-[86vw] max-w-sm border-l border-slate-300 bg-stone-100/95 p-6 backdrop-blur transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-slate-300 pb-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-slate-500">数字洞天</div>
              <div className="mt-2 text-2xl font-black uppercase">KAYDEX</div>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="border border-slate-400 px-3 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-slate-900 hover:text-stone-100"
            >
              {content.close}
            </button>
          </div>

          <div className="mt-8 space-y-8">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.25em] text-slate-500">Navigation</div>
              <div className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-[0.18em]">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-slate-200 pb-2 transition hover:border-slate-500 hover:text-slate-700"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="border border-slate-300 bg-white/60 p-4">
              <div className="text-xs uppercase tracking-[0.25em] text-slate-500">题记</div>
              <p className="mt-3 text-sm leading-7 text-slate-700">所学、所思、所好，皆可安放于此。</p>
            </div>
          </div>
        </aside>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-300 bg-stone-100/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-10">
          <div className="flex items-center justify-between gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-slate-500">{content.tagline}</div>
              <div className="mt-2 text-2xl font-black uppercase tracking-[0.16em] md:text-3xl">KAYDEX</div>
            </div>

            <div className="flex items-center gap-4">
              <nav className="hidden flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-[0.15em] md:flex">
                <a href="#about" className={navClass('about')}>{content.nav.about}</a>
                <a href="#study" className={navClass('study')}>{content.nav.study}</a>
                <a href="#life" className={navClass('life')}>{content.nav.life}</a>
                <a href="#archive" className={navClass('archive')}>{content.nav.archive}</a>
                <a href="#contact" className={navClass('contact')}>{content.nav.contact}</a>
              </nav>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="border border-slate-400 px-3 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-slate-900 hover:text-stone-100"
              >
                {content.menu}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 md:px-10">
        <section className="relative grid min-h-[calc(100vh-88px)] items-center gap-10 border-b border-slate-300 py-14 md:grid-cols-12 md:py-20">
          <div className="pointer-events-none absolute right-4 top-8 text-7xl font-black text-slate-300/40 md:right-8 md:text-[10rem]">
            01
          </div>

          <div className="md:col-span-6 md:pr-8">
            <div className="text-[11px] uppercase tracking-[0.4em] text-slate-500">{content.hero.eyebrow}</div>
            <h1 className="mt-6 text-5xl font-black leading-[0.92] text-slate-900 md:text-8xl">
              {content.hero.title}
            </h1>
            <div className="mt-4 text-xl leading-8 text-slate-700 md:text-3xl md:leading-10">
              {content.hero.subtitle}
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-800 md:text-xl">
              {content.hero.lead}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {content.hero.text}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#study"
                className="inline-flex items-center border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-stone-100 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                {content.hero.primary}
              </a>
              <a
                href="#life"
                className="inline-flex items-center border border-slate-400 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-700 hover:bg-white/80"
              >
                {content.hero.secondary}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-slate-300 pt-5 text-[11px] uppercase tracking-[0.35em] text-slate-500">
              <span>{content.home}</span>
              <span>{content.localTime} / {timeString || '--:--:--'}</span>
              <span>{content.hero.note}</span>
            </div>
          </div>

          <div className="relative md:col-span-6">
            <div className="absolute -left-4 top-6 z-10 border border-slate-300 bg-stone-100/90 px-3 py-2 text-[11px] uppercase tracking-[0.35em] text-slate-500 backdrop-blur">
              {content.hero.imageCaption}
            </div>
            <div className="overflow-hidden border border-slate-300 bg-white/70 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={content.hero.image}
                alt="hero"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className={`relative grid gap-8 border-b border-slate-300 py-16 md:grid-cols-12 md:gap-10 ${revealClass('about')}`}>
          <div className="pointer-events-none absolute left-0 top-6 text-6xl font-black text-slate-300/30 md:text-8xl">02</div>
          <div className="md:col-span-4 md:pt-10">
            <div className="text-[11px] uppercase tracking-[0.35em] text-slate-500">{content.about.eyebrow}</div>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">{content.about.title}</h2>
            <div className="mt-5 max-w-md text-xl leading-8 text-slate-700">
              {content.about.quote}
            </div>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 md:text-lg">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 md:pt-10">
            <div className="overflow-hidden border border-slate-300 bg-white/70 p-2">
              <img
                src={content.about.image}
                alt="about"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-5 md:pt-10">
            <div className="grid grid-cols-2 gap-3">
              {content.about.keywords.map((item) => (
                <div
                  key={item}
                  className="border border-slate-300 bg-white/50 px-4 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 border-l-2 border-amber-800/50 pl-5 text-lg leading-8 text-slate-700">
              {content.about.aside}
            </div>
          </div>
        </section>

        <section id="study" className={`relative border-b border-slate-300 py-16 ${revealClass('study')}`}>
          <div className="pointer-events-none absolute right-0 top-6 text-6xl font-black text-slate-300/30 md:text-8xl">03</div>
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.35em] text-slate-500">{content.study.eyebrow}</div>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">{content.study.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.study.intro}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-12">
            {content.study.cards.map((card, index) => (
              <article
                key={card.no}
                className={`border border-slate-300 bg-white/65 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.06)] ${
                  index === 0 ? 'md:col-span-5' : 'md:col-span-3.5 md:col-span-3'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">{card.no}</div>
                  <div className="border border-slate-300 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-slate-500">
                    {card.status}
                  </div>
                </div>
                <h3 className="mt-10 text-2xl font-black md:text-3xl">{card.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600">{card.text}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-slate-200 bg-stone-100 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="life" className={`relative border-b border-slate-300 py-16 ${revealClass('life')}`}>
          <div className="pointer-events-none absolute left-0 top-6 text-6xl font-black text-slate-300/30 md:text-8xl">04</div>
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.35em] text-slate-500">{content.life.eyebrow}</div>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">{content.life.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.life.intro}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="overflow-hidden border border-slate-300 bg-white/70 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
                <img
                  src={content.life.images[0]}
                  alt="life-main"
                  className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="space-y-5 md:col-span-6">
              <div className="grid gap-5 sm:grid-cols-2">
                {content.life.images.slice(1).map((src, index) => (
                  <div key={src} className="overflow-hidden border border-slate-300 bg-white/70 p-2">
                    <img
                      src={src}
                      alt={`life-${index + 2}`}
                      className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-[1.02]"
                    />
                  </div>
                ))}
              </div>

              <div className="grid gap-4">
                {lifeNotes.map((note, index) => (
                  <article
                    key={note}
                    className={`border border-slate-300 p-5 transition-all duration-500 ${
                      index === noteIndex
                        ? 'bg-slate-900 text-stone-100'
                        : 'bg-white/60 text-slate-700'
                    }`}
                  >
                    <div className={`text-[11px] uppercase tracking-[0.32em] ${
                      index === noteIndex ? 'text-stone-300' : 'text-slate-400'
                    }`}>
                      片羽 {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="mt-3 text-base leading-8 md:text-lg">{note}</p>
                  </article>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setNoteIndex((prev) => (prev + 1) % lifeNotes.length)}
                className="border border-slate-400 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-slate-900 hover:text-stone-100"
              >
                {content.life.next}
              </button>
            </div>
          </div>
        </section>

        <section id="archive" className={`relative border-b border-slate-300 py-16 ${revealClass('archive')}`}>
          <div className="pointer-events-none absolute right-0 top-6 text-6xl font-black text-slate-300/30 md:text-8xl">05</div>
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.35em] text-slate-500">{content.archive.eyebrow}</div>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">{content.archive.title}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{content.archive.intro}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="border border-slate-300 bg-white/65 p-6">
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-slate-700">PDF 卷帙</div>
                  <button
                    type="button"
                    onClick={clearUploads}
                    className="border border-slate-300 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-600 transition hover:bg-slate-900 hover:text-stone-100"
                  >
                    {content.archive.clear}
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  {content.archive.samples.map((item) => (
                    <article key={item.title} className="border border-slate-200 bg-stone-100/60 p-4">
                      <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400">{item.date}</div>
                      <div className="mt-2 text-xl font-bold text-slate-800">{item.title}</div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-500">{content.archive.pdfLabel}</div>
                  <input
                    ref={pdfInputRef}
                    type="file"
                    accept="application/pdf"
                    onChange={handlePdfChange}
                    className="mt-4 block w-full text-sm file:mr-4 file:border-0 file:border-r file:border-slate-300 file:bg-transparent file:px-4 file:py-3 file:text-xs file:font-bold file:uppercase file:tracking-[0.18em]"
                  />
                  <div className="mt-3 text-sm text-slate-600">
                    {pdfFile ? `${content.archive.selected}：${pdfFile.name}` : content.archive.noPdf}
                  </div>
                  {pdfUrl && (
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex border border-slate-400 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-slate-900 hover:text-stone-100"
                    >
                      {content.archive.localPreview}
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="border border-slate-300 bg-white/65 p-6">
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-slate-700">图像档案</div>
                <div className="mt-5 border-t border-slate-200 pt-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-500">{content.archive.imageLabel}</div>
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="mt-4 block w-full text-sm file:mr-4 file:border-0 file:border-r file:border-slate-300 file:bg-transparent file:px-4 file:py-3 file:text-xs file:font-bold file:uppercase file:tracking-[0.18em]"
                  />
                  <div className="mt-3 text-sm text-slate-600">
                    {imageFiles.length > 0 ? `${content.archive.selected}：${imageFiles.length} 张` : content.archive.noImages}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {(imagePreviews.length > 0 ? imagePreviews : content.life.images).map((src, index) => (
                    <div key={`${src}-${index}`} className="group overflow-hidden border border-slate-200 bg-stone-100 p-2">
                      <img
                        src={src}
                        alt={`archive-${index}`}
                        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={`relative grid gap-8 py-16 md:grid-cols-12 ${revealClass('contact')}`}>
          <div className="pointer-events-none absolute left-0 top-6 text-6xl font-black text-slate-300/30 md:text-8xl">06</div>
          <div className="md:col-span-7 md:pt-8">
            <div className="text-[11px] uppercase tracking-[0.35em] text-slate-500">{content.contact.eyebrow}</div>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">{content.contact.title}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              {content.contact.text}
            </p>
          </div>

          <div className="md:col-span-5 md:pt-8 md:text-right">
            <a
              href="mailto:cooldog@77m.shop"
              className="inline-flex border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] text-stone-100 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              {content.contact.cta}
            </a>
            <div className="mt-6 text-[11px] uppercase tracking-[0.35em] text-slate-500">
              {content.contact.signoff}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}