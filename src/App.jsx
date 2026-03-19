import { useEffect, useMemo, useState } from 'react';

export default function GermanEditorialHomepage() {
const sections = useMemo(
() => [
{
no: '01',
key: 'study',
title: '学习 / Study',
text: '记录阅读、课程、研究兴趣与阶段性笔记，把学习过程做成可持续更新的个人档案。',
detail:
'可继续扩展为读书清单、课程进度、研究关键词与阶段笔记。',
},
{
no: '02',
key: 'life',
title: '生活 / Life',
text: '保留日常观察、照片、散步路线、短想法，让主页不只是简历，而是个人节奏的呈现。',
detail:
'可继续扩展为相册、散步地图、日常片语与年度回顾。',
},
{
no: '03',
key: 'agenda',
title: '计划 / Agenda',
text: '展示近期目标、正在做的事和未来方向，形成一种克制但清晰的个人秩序感。',
detail:
'可继续扩展为月度目标、正在推进的项目与未来计划。',
},
],
[]
);

const notes = [
'严肃设计感 / Serious Design / Ernsthaftigkeit',
'黑白主调 / Monochrome / Schwarzweiss',
'栅格布局 / Grid System / Rastersystem',
'个人档案 / Personal Archive / Archiv',
];

const lifeNotes = [
'雨后散步时，城市表面的光泽会突然变得可信。',
'有些学习不是为了回答问题，而是为了改变提问的方式。',
'真正值得保存的日常，往往不是事件，而是气息。',
];

const [activeSection, setActiveSection] = useState('about');
const [expandedCard, setExpandedCard] = useState('01');
const [noteIndex, setNoteIndex] = useState(0);
const [timeString, setTimeString] = useState('');

useEffect(() => {
const ids = ['about', 'study', 'life', 'contact'];
const observers = ids
.map((id) => document.getElementById(id))
.filter(Boolean);

```
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

observers.forEach((item) => observer.observe(item));

return () => observer.disconnect();
```

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

```
updateTime();
const timer = setInterval(updateTime, 1000);
return () => clearInterval(timer);
```

}, []);

const navClass = (id) =>
`border-b pb-1 transition ${
      activeSection === id
        ? 'border-neutral-900 text-neutral-950'
        : 'border-transparent text-neutral-500 hover:border-neutral-900 hover:text-neutral-950'
    }`;

return ( <div className="min-h-screen bg-neutral-100 text-neutral-950"> <header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-100/90 backdrop-blur"> <div className="mx-auto max-w-7xl px-6 py-5 md:px-10"> <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"> <div> <div className="text-[11px] uppercase tracking-[0.35em] text-neutral-600">
Kaydex / 学习 · 生活 · 反思 </div> <h1 className="mt-3 text-4xl font-black uppercase leading-none md:text-7xl">
KAYDEX </h1> </div> <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-[0.15em]">
<a href="#about" className={navClass('about')}>关于 / About / Über</a>
<a href="#study" className={navClass('study')}>学习 / Study / Studium</a>
<a href="#life" className={navClass('life')}>生活 / Life / Leben</a>
<a href="#contact" className={navClass('contact')}>联系 / Contact / Kontakt</a> </nav> </div> </div> </header>

```
  <main className="mx-auto max-w-7xl px-6 md:px-10">
    <section className="grid gap-8 border-b border-neutral-900 py-10 md:grid-cols-12 md:py-16">
      <div className="md:col-span-8">
        <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-neutral-600">
          <span>Index / Home</span>
          <span>{timeString ? `Local Time / ${timeString}` : 'Local Time / --:--:--'}</span>
        </div>
        <h2 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-[0.95] md:text-8xl">
          君子有九思
          <br />
          Junzi Has Nine Reflections
        </h2>
      </div>
      <div className="md:col-span-4 md:pl-8">
        <p className="text-base leading-7 text-neutral-700 md:text-lg whitespace-pre-line">
          {`此间不大，却可安放心神。
```

我愿以它收纳所学、所思与所好，在纷繁日常之中，留一处可栖可观的小小洞天。`} </p> </div> </section>

```
    <section id="about" className="grid gap-8 border-b border-neutral-900 py-10 md:grid-cols-12 md:py-14">
      <div className="md:col-span-3">
        <div className="text-sm font-bold uppercase tracking-[0.25em]">关于 / About / Über</div>
      </div>
      <div className="md:col-span-6">
        <p className="text-xl leading-9 md:text-2xl md:leading-10 whitespace-pre-line">
          {`古之仙者，往往有洞府一所，世人称之为洞天福地。
```

今于尘世纷纭之间，AI 之助使人更得自在抒怀，舒展志趣。
故作此站，以寄所思、所学与所好；此间虽小，亦可为我一方洞天。

In ancient tales, immortals always had a grotto of their own, a place people called a blessed realm.
Now, amid the bustle of the modern world, AI tools grant us greater freedom to express what we aspire to and what we love.
So I made this site to hold what I think, what I study, and what I cherish; though small, it is my own little sanctuary.

In alten Erzählungen besaßen die Unsterblichen stets eine eigene Höhle, einen Ort, den die Menschen als gesegnetes Reich bezeichneten.
Heute, im geschäftigen Treiben der Gegenwart, schenken uns KI-Werkzeuge mehr Freiheit, unsere Wünsche und Interessen auszudrücken.
Darum habe ich diese Seite geschaffen, um mein Denken, mein Lernen und meine Vorlieben zu bewahren; klein zwar, doch mein eigener stiller Ort.`} </p> </div> <div className="md:col-span-3 space-y-2">
{notes.map((note) => ( <div key={note} className="border border-neutral-900 px-3 py-2 text-sm uppercase tracking-[0.08em] transition hover:bg-neutral-950 hover:text-neutral-100">
{note} </div>
))} </div> </section>

```
    <section className="border-b border-neutral-900 py-10 md:py-14">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="text-sm font-bold uppercase tracking-[0.25em]">Archive / Preview / Click to Expand</div>
        <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">Open one card at a time</div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {sections.map((section) => {
          const isOpen = expandedCard === section.no;
          return (
            <button
              key={section.no}
              type="button"
              onClick={() => setExpandedCard(isOpen ? '' : section.no)}
              className="border border-neutral-900 p-6 text-left transition hover:-translate-y-1 hover:bg-white"
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
                {isOpen ? 'Collapse / 收起' : 'Expand / 展开'}
              </div>
              {isOpen && (
                <div className="mt-5 border-t border-neutral-900 pt-5 text-sm leading-7 text-neutral-800">
                  {section.detail}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>

    <section id="study" className="grid gap-8 border-b border-neutral-900 py-10 md:grid-cols-12 md:py-14">
      <div className="md:col-span-3">
        <div className="text-sm font-bold uppercase tracking-[0.25em]">学习 / Study / Studium</div>
      </div>
      <div className="md:col-span-9 grid gap-4 md:grid-cols-2">
        <div className="border border-neutral-900 p-6 transition hover:bg-white">
          <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">Reading</div>
          <div className="mt-3 text-2xl font-black uppercase">正在阅读</div>
          <p className="mt-3 leading-7 text-neutral-700">
            在这里放最近阅读的书、论文、课程与摘记。第一版可以先用静态文字，后面再改成可更新列表。
          </p>
        </div>
        <div className="border border-neutral-900 p-6 transition hover:bg-white">
          <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">Projects</div>
          <div className="mt-3 text-2xl font-black uppercase">正在做的事</div>
          <p className="mt-3 leading-7 text-neutral-700">
            这里可以写近期的学习项目、个人练习、博客计划或阶段目标，让首页有持续生长的感觉。
          </p>
        </div>
      </div>
    </section>

    <section id="life" className="grid gap-8 border-b border-neutral-900 py-10 md:grid-cols-12 md:py-14">
      <div className="md:col-span-3">
        <div className="text-sm font-bold uppercase tracking-[0.25em]">生活 / Life / Leben</div>
      </div>
      <div className="md:col-span-9">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border border-neutral-900 px-4 py-3">
          <div className="text-sm uppercase tracking-[0.2em]">Life Notes / 日常片语</div>
          <button
            type="button"
            onClick={() => setNoteIndex((prev) => (prev + 1) % lifeNotes.length)}
            className="border border-neutral-900 px-3 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-neutral-950 hover:text-neutral-100"
          >
            Next Note
          </button>
        </div>
        <div className="grid gap-px bg-neutral-900 md:grid-cols-3">
          {['散步', '观察', '短句'].map((item, index) => (
            <div key={item} className="bg-neutral-100 p-6 transition hover:bg-white">
              <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">{item}</div>
              <p className="mt-10 text-lg leading-8">
                {lifeNotes[(noteIndex + index) % lifeNotes.length]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="contact" className="grid gap-8 py-10 md:grid-cols-12 md:py-16">
      <div className="md:col-span-3">
        <div className="text-sm font-bold uppercase tracking-[0.25em]">联系 / Contact / Kontakt</div>
      </div>
      <div className="md:col-span-9 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-3xl font-black uppercase md:text-5xl">君子有九思 / Reflection and Dwelling / Denken und Verweilen</div>
          <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-700">
            此页既成，往后便可徐徐增补：或记读书，或存片羽，或作年岁归档，使其渐成我自己的小小洞天。
          </p>
        </div>
        <a
          href="mailto:cooldog@77m.shop"
          className="inline-flex border border-neutral-900 px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] transition hover:bg-neutral-950 hover:text-neutral-100"
        >
          写信 / Email
        </a>
      </div>
    </section>
  </main>
</div>
```

);
}