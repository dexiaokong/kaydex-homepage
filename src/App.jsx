import { useEffect, useMemo, useState } from 'react';

export default function GermanEditorialHomepage() {
  const content = {
    zh: {
      tagline: 'Kaydex / 生活 · 读书 · 新知',
      nav: {
        about: '关于',
        study: '学习',
        life: '生活',
        contact: '联系',
      },
      homeLabel: '首页',
      localTime: '本地时间',
      heroTitle: '君子有九思',
      heroSubtitle: 'Junzi Has Nine Reflections',
      heroText:
        '此间不大，却可安放心神。\n我愿以它收纳所学、所思与所好，在纷繁日常之中，留一处可栖可观的小小洞天。',
      aboutLabel: '关于',
      aboutText:
        '古之仙者，往往有洞府一所，世人称之为洞天福地。\n今于尘世纷纭之间，器灵之助使人更得自在抒怀，舒展志趣。\n故作此站，以寄所思、所学与所好；此间虽小，亦可为我一方洞天。',
      archiveTitle: '卷帙 / 预览 / 点击展开',
      archiveHint: '一次只展开一张',
      expand: '展开',
      collapse: '收起',
      sections: [
        {
          no: '01',
          key: 'study',
          title: '学习',
          text: '记录阅读、课程、研究兴趣与阶段性笔记，把学习过程做成可持续更新的个人档案。',
          detail: '可继续扩展为读书清单、课程进度、研究关键词与阶段笔记。',
        },
        {
          no: '02',
          key: 'life',
          title: '生活',
          text: '保留日常观察、照片、散步路线、短想法，让主页不只是简历，而是个人节奏的呈现。',
          detail: '可继续扩展为相册、散步地图、日常片语与年度回顾。',
        },
        {
          no: '03',
          key: 'agenda',
          title: '计划',
          text: '展示近期目标、正在做的事和未来方向，形成一种克制但清晰的个人秩序感。',
          detail: '可继续扩展为月度目标、正在推进的项目与未来计划。',
        },
      ],
      notes: ['道法', '佛缘', '儒事', '阴阳'],
      studyLabel: '学习',
      studyCards: {
        reading: {
          label: 'Reading',
          title: '正在阅读',
          text: '在这里放最近阅读的书、论文、课程与摘记。第一版可以先用静态文字，后面再改成可更新列表。',
        },
        projects: {
          label: 'Projects',
          title: '正在做的事',
          text: '这里可以写近期的学习项目、个人练习、博客计划或阶段目标，让首页有持续生长的感觉。',
        },
      },
      lifeLabel: '生活',
      lifeNotesLabel: '日常片语',
      nextNote: '下一则',
      lifeCategories: ['散步', '观察', '短句'],
      lifeNotes: [
        '雨后散步时，城市表面的光泽会突然变得可信。',
        '有些学习不是为了回答问题，而是为了改变提问的方式。',
        '真正值得保存的日常，往往不是事件，而是气息。',
      ],
      contactLabel: '联系',
      contactTitle: '君子有九思 / Reflection and Dwelling / Denken und Verweilen',
      contactText:
        '此页既成，往后便可徐徐增补：或记读书，或存片羽，或作年岁归档，使其渐成我自己的小小洞天。',
      email: '写信 / Email',
    },
    en: {
      tagline: 'Kaydex / Life · Reading · Discovery',
      nav: {
        about: 'About',
        study: 'Study',
        life: 'Life',
        contact: 'Contact',
      },
      homeLabel: 'Home',
      localTime: 'Local Time',
      heroTitle: 'Junzi Has Nine Reflections',
      heroSubtitle: 'A Personal Sanctuary',
      heroText:
        'This place is small, yet enough to settle the mind.\nI use it to gather what I study, what I think, and what I cherish, leaving myself a quiet sanctuary amid the noise of daily life.',
      aboutLabel: 'About',
      aboutText:
        'In ancient tales, immortals always had a grotto of their own, a place people called a blessed realm.\nNow, amid the bustle of the modern world, AI tools grant us greater freedom to express what we aspire to and what we love.\nSo I made this site to hold what I think, what I study, and what I cherish; though small, it is my own little sanctuary.',
      archiveTitle: 'Archive / Preview / Click to Expand',
      archiveHint: 'Open one card at a time',
      expand: 'Expand',
      collapse: 'Collapse',
      sections: [
        {
          no: '01',
          key: 'study',
          title: 'Study',
          text: 'A place for readings, courses, research interests, and evolving notes.',
          detail: 'This section can later grow into reading lists, course logs, research keywords, and notebook fragments.',
        },
        {
          no: '02',
          key: 'life',
          title: 'Life',
          text: 'A place for observations, photos, walks, and passing thoughts.',
          detail: 'This section can later expand into albums, walking routes, fragments, and yearly reviews.',
        },
        {
          no: '03',
          key: 'agenda',
          title: 'Agenda',
          text: 'A place for recent goals, ongoing work, and future directions.',
          detail: 'This section can later hold monthly goals, current projects, and future plans.',
        },
      ],
      notes: ['Dao', 'Buddha', 'Confucian', 'Yin–Yang'],
      studyLabel: 'Study',
      studyCards: {
        reading: {
          label: 'Reading',
          title: 'Currently Reading',
          text: 'Here I can place recent books, papers, courses, and notes. The first version may stay static and become updateable later.',
        },
        projects: {
          label: 'Projects',
          title: 'What I Am Working On',
          text: 'This can hold learning projects, personal exercises, writing plans, or near-term goals.',
        },
      },
      lifeLabel: 'Life',
      lifeNotesLabel: 'Life Notes',
      nextNote: 'Next Note',
      lifeCategories: ['Walks', 'Observations', 'Fragments'],
      lifeNotes: [
        'After rain, the surface of a city suddenly feels believable.',
        'Some learning is not for answering questions, but for changing the way they are asked.',
        'What is worth keeping is often not the event itself, but its atmosphere.',
      ],
      contactLabel: 'Contact',
      contactTitle: 'Reflection and Dwelling',
      contactText:
        'Now that this page exists, it can slowly grow: reading notes, fragments, and yearly archives may gather here until it becomes a small sanctuary of my own.',
      email: 'Write / Email',
    },
    de: {
      tagline: 'Kaydex / Leben · Lesen · Neues',
      nav: {
        about: 'Über',
        study: 'Studium',
        life: 'Leben',
        contact: 'Kontakt',
      },
      homeLabel: 'Start',
      localTime: 'Ortszeit',
      heroTitle: 'Neunfache Besinnung des Edlen',
      heroSubtitle: 'Ein kleiner Zufluchtsort',
      heroText:
        'Dieser Ort ist klein, doch er vermag den Geist zu sammeln.\nHier bewahre ich, was ich lerne, bedenke und liebe — ein stilles eigenes Refugium mitten im Lärm des Alltags.',
      aboutLabel: 'Über',
      aboutText:
        'In alten Erzählungen besaßen die Unsterblichen stets eine eigene Höhle, einen Ort, den die Menschen als gesegnetes Reich bezeichneten.\nHeute, im geschäftigen Treiben der Gegenwart, schenken uns KI-Werkzeuge mehr Freiheit, unsere Wünsche und Interessen auszudrücken.\nDarum habe ich diese Seite geschaffen, um mein Denken, mein Lernen und meine Vorlieben zu bewahren; klein zwar, doch mein eigener stiller Ort.',
      archiveTitle: 'Archiv / Vorschau / Zum Öffnen klicken',
      archiveHint: 'Jeweils nur eine Karte öffnen',
      expand: 'Öffnen',
      collapse: 'Schließen',
      sections: [
        {
          no: '01',
          key: 'study',
          title: 'Studium',
          text: 'Ein Ort für Lektüren, Kurse, Forschungsinteressen und fortlaufende Notizen.',
          detail: 'Dieser Bereich kann später Leselisten, Kursprotokolle, Forschungsschlüsselwörter und Notizfragmente aufnehmen.',
        },
        {
          no: '02',
          key: 'life',
          title: 'Leben',
          text: 'Ein Ort für Beobachtungen, Fotos, Spaziergänge und lose Gedanken.',
          detail: 'Dieser Bereich kann später Alben, Spazierwege, Fragmente und Jahresrückblicke aufnehmen.',
        },
        {
          no: '03',
          key: 'agenda',
          title: 'Vorhaben',
          text: 'Ein Ort für aktuelle Ziele, laufende Arbeiten und künftige Richtungen.',
          detail: 'Dieser Bereich kann später Monatsziele, aktuelle Projekte und Zukunftspläne sammeln.',
        },
      ],
      notes: ['Dao', 'Buddhismus', 'Konfuzianisch', 'Yin und Yang'],
      studyLabel: 'Studium',
      studyCards: {
        reading: {
          label: 'Reading',
          title: 'Was ich lese',
          text: 'Hier können aktuelle Bücher, Aufsätze, Kurse und Notizen stehen. Die erste Fassung darf statisch bleiben und später erweitert werden.',
        },
        projects: {
          label: 'Projects',
          title: 'Woran ich arbeite',
          text: 'Hier können Lernprojekte, persönliche Übungen, Schreibpläne oder kurzfristige Ziele stehen.',
        },
      },
      lifeLabel: 'Leben',
      lifeNotesLabel: 'Alltagsnotizen',
      nextNote: 'Nächste',
      lifeCategories: ['Spaziergang', 'Beobachtung', 'Fragment'],
      lifeNotes: [
        'Nach dem Regen wirkt die Oberfläche einer Stadt plötzlich glaubwürdig.',
        'Manches Lernen dient nicht der Antwort, sondern der Veränderung der Frage.',
        'Bewahrenswert ist oft nicht das Ereignis, sondern seine Atmosphäre.',
      ],
      contactLabel: 'Kontakt',
      contactTitle: 'Denken und Verweilen',
      contactText:
        'Nun, da diese Seite besteht, kann sie langsam wachsen: mit Lektüren, Fragmenten und Jahresarchiven, bis sie zu meinem eigenen kleinen Zufluchtsort wird.',
      email: 'Schreiben / E-Mail',
    },
  };

  const [language, setLanguage] = useState('zh');
  const [activeSection, setActiveSection] = useState('about');
  const [expandedCard, setExpandedCard] = useState('01');
  const [noteIndex, setNoteIndex] = useState(0);
  const [timeString, setTimeString] = useState('');

  const current = content[language];

  const sections = useMemo(() => current.sections, [current]);
  const notes = useMemo(() => current.notes, [current]);
  const lifeNotes = useMemo(() => current.lifeNotes, [current]);

  useEffect(() => {
    const ids = ['about', 'study', 'life', 'contact'];
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-20% 0px -45% 0px',
      }
    );

    targets.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat(
        language === 'de' ? 'de-DE' : language === 'en' ? 'en-GB' : 'zh-CN',
        {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }
      );
      setTimeString(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [language]);

  useEffect(() => {
    const timer = setInterval(() => {
      setNoteIndex((prev) => (prev + 1) % lifeNotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [lifeNotes.length]);

  useEffect(() => {
    setNoteIndex(0);
  }, [language]);

  const navClass = (id) =>
    `border-b pb-1 transition ${
      activeSection === id
        ? 'border-neutral-900 text-neutral-950'
        : 'border-transparent text-neutral-500 hover:border-neutral-900 hover:text-neutral-950'
    }`;

  const languageButtonClass = (id) =>
    `border border-neutral-900 px-3 py-2 text-xs uppercase tracking-[0.2em] transition ${
      language === id ? 'bg-neutral-950 text-neutral-100' : 'hover:bg-white'
    }`;

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-100/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-5 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-neutral-600">
                {current.tagline}
              </div>
              <h1 className="mt-3 text-4xl font-black uppercase leading-none md:text-7xl">
                KAYDEX
              </h1>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <div className="flex gap-2">
                <button type="button" onClick={() => setLanguage('zh')} className={languageButtonClass('zh')}>
                  中文
                </button>
                <button type="button" onClick={() => setLanguage('en')} className={languageButtonClass('en')}>
                  EN
                </button>
                <button type="button" onClick={() => setLanguage('de')} className={languageButtonClass('de')}>
                  DE
                </button>
              </div>
              <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-[0.15em]">
                <a href="#about" className={navClass('about')}>{current.nav.about}</a>
                <a href="#study" className={navClass('study')}>{current.nav.study}</a>
                <a href="#life" className={navClass('life')}>{current.nav.life}</a>
                <a href="#contact" className={navClass('contact')}>{current.nav.contact}</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 md:px-10">
        <section className="grid gap-8 border-b border-neutral-900 py-10 md:grid-cols-12 md:py-16">
          <div className="md:col-span-8">
            <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-neutral-600">
              <span>{current.homeLabel}</span>
              <span>{timeString ? `${current.localTime} / ${timeString}` : `${current.localTime} / --:--:--`}</span>
            </div>
            <h2 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-[0.95] md:text-8xl">
              {current.heroTitle}
              <br />
              {current.heroSubtitle}
            </h2>
          </div>
          <div className="md:col-span-4 md:pl-8">
            <p className="text-base leading-7 text-neutral-700 md:text-lg whitespace-pre-line">
              {current.heroText}
            </p>
          </div>
        </section>

        <section id="about" className="grid gap-8 border-b border-neutral-900 py-10 md:grid-cols-12 md:py-14">
          <div className="md:col-span-3">
            <div className="text-sm font-bold uppercase tracking-[0.25em]">{current.aboutLabel}</div>
          </div>
          <div className="md:col-span-6">
            <p className="text-xl leading-9 md:text-2xl md:leading-10 whitespace-pre-line">
              {current.aboutText}
            </p>
          </div>
          <div className="md:col-span-3 space-y-2">
            {notes.map((note) => (
              <div
                key={note}
                className="border border-neutral-900 px-3 py-2 text-sm uppercase tracking-[0.08em] transition hover:bg-neutral-950 hover:text-neutral-100"
              >
                {note}
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-neutral-900 py-10 md:py-14">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="text-sm font-bold uppercase tracking-[0.25em]">{current.archiveTitle}</div>
            <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">{current.archiveHint}</div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((section) => {
              const isOpen = expandedCard === section.no;
              return (
                <button
                  key={section.no}
                  type="button"
                  onClick={() => setExpandedCard(isOpen ? '' : section.no)}
                  className="border border-neutral-900 bg-neutral-100 p-6 text-left transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                    {section.no}
                  </div>
                  <h3 className="mt-6 text-3xl font-black uppercase leading-tight">
                    {section.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-neutral-700">
                    {section.text}
                  </p>
                  <div className="mt-6 text-xs uppercase tracking-[0.25em] text-neutral-500">
                    {isOpen ? current.collapse : current.expand}
                  </div>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'mt-5 grid-rows-[1fr] border-t border-neutral-900 pt-5' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="min-h-0 text-sm leading-7 text-neutral-800">
                      {section.detail}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section id="study" className="grid gap-8 border-b border-neutral-900 py-10 md:grid-cols-12 md:py-14">
          <div className="md:col-span-3">
            <div className="text-sm font-bold uppercase tracking-[0.25em]">{current.studyLabel}</div>
          </div>
          <div className="md:col-span-9 grid gap-4 md:grid-cols-2">
            <div className="border border-neutral-900 p-6 transition hover:bg-white">
              <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">{current.studyCards.reading.label}</div>
              <div className="mt-3 text-2xl font-black uppercase">{current.studyCards.reading.title}</div>
              <p className="mt-3 leading-7 text-neutral-700">
                {current.studyCards.reading.text}
              </p>
            </div>
            <div className="border border-neutral-900 p-6 transition hover:bg-white">
              <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">{current.studyCards.projects.label}</div>
              <div className="mt-3 text-2xl font-black uppercase">{current.studyCards.projects.title}</div>
              <p className="mt-3 leading-7 text-neutral-700">
                {current.studyCards.projects.text}
              </p>
            </div>
          </div>
        </section>

        <section id="life" className="grid gap-8 border-b border-neutral-900 py-10 md:grid-cols-12 md:py-14">
          <div className="md:col-span-3">
            <div className="text-sm font-bold uppercase tracking-[0.25em]">{current.lifeLabel}</div>
          </div>
          <div className="md:col-span-9">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border border-neutral-900 px-4 py-3">
              <div className="text-sm uppercase tracking-[0.2em]">{current.lifeNotesLabel}</div>
              <button
                type="button"
                onClick={() => setNoteIndex((prev) => (prev + 1) % lifeNotes.length)}
                className="border border-neutral-900 px-3 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-neutral-950 hover:text-neutral-100"
              >
                {current.nextNote}
              </button>
            </div>
            <div className="grid gap-px bg-neutral-900 md:grid-cols-3">
              {current.lifeCategories.map((item, index) => (
                <div key={item} className="bg-neutral-100 p-6 transition hover:bg-white">
                  <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">{item}</div>
                  <p className="mt-10 text-lg leading-8 transition-opacity duration-500">
                    {lifeNotes[(noteIndex + index) % lifeNotes.length]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-8 py-10 md:grid-cols-12 md:py-16">
          <div className="md:col-span-3">
            <div className="text-sm font-bold uppercase tracking-[0.25em]">{current.contactLabel}</div>
          </div>
          <div className="md:col-span-9 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-3xl font-black uppercase md:text-5xl">{current.contactTitle}</div>
              <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-700">
                {current.contactText}
              </p>
            </div>
            <a
              href="mailto:cooldog@77m.shop"
              className="inline-flex border border-neutral-900 px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] transition hover:bg-neutral-950 hover:text-neutral-100"
            >
              {current.email}
            </a>
          </div>
        </section>
      </main>
    </div>
    );
}