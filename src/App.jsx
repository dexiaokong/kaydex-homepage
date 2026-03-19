export default function GermanEditorialHomepage() {
  const sections = [
    {
      no: '01',
      title: '学习 / Study',
      text: '记录阅读、课程、研究兴趣与阶段性笔记，把学习过程做成可持续更新的个人档案。',
    },
    {
      no: '02',
      title: '生活 / Life',
      text: '保留日常观察、照片、散步路线、短想法，让主页不只是简历，而是个人节奏的呈现。',
    },
    {
      no: '03',
      title: '计划 / Agenda',
      text: '展示近期目标、正在做的事和未来方向，形成一种克制但清晰的个人秩序感。',
    },
  ];

  const notes = [
    '严肃设计感 / Serious Design / Ernsthaftigkeit',
    '黑白主调 / Monochrome / Schwarzweiss',
    '栅格布局 / Grid System / Rastersystem',
    '个人档案 / Personal Archive / Archiv',
  ];

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-950">
      <header className="border-b border-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-5 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-neutral-600">
                Kaydex / 生活 · 读书 · 新知
              </div>
              <h1 className="mt-3 text-4xl font-black uppercase leading-none md:text-7xl">
                KAYDEX
              </h1>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-[0.15em]">
              <a href="#about" className="border-b border-transparent pb-1 hover:border-neutral-900">关于 / About / Über</a>
<a href="#study" className="border-b border-transparent pb-1 hover:border-neutral-900">学习 / Study / Studium</a>
<a href="#life" className="border-b border-transparent pb-1 hover:border-neutral-900">生活 / Life / Leben</a>
<a href="#contact" className="border-b border-transparent pb-1 hover:border-neutral-900">联系 / Contact / Kontakt</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 md:px-10">
        <section className="grid gap-8 border-b border-neutral-900 py-10 md:grid-cols-12 md:py-16">
          <div className="md:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.35em] text-neutral-600">
              Index / Home
            </div>
            <h2 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-[0.95] md:text-8xl">
              君子有九思
              <br />
              Junzi Has Nine Reflections
            </h2>
          </div>
          <div className="md:col-span-4 md:pl-8">
            <p className="text-base leading-7 text-neutral-700 md:text-lg">
              子曰：“君子有九思：视思明，听思聪，色思温，貌思恭，言思忠，事思敬，疑思问，忿思难，见得思义。
            </p>
          </div>
        </section>

        <section id="about" className="grid gap-8 border-b border-neutral-900 py-10 md:grid-cols-12 md:py-14">
          <div className="md:col-span-3">
            <div className="text-sm font-bold uppercase tracking-[0.25em]">关于 / About / Über</div>
          </div>
          <div className="md:col-span-6">
            <p className="text-xl leading-9 md:text-2xl md:leading-10 whitespace-pre-line">
  {`古之仙者，往往有洞府一所，世人称之为洞天福地。
今于尘世纷纭之间，AI 之助使人更得自在抒怀，舒展志趣。
故作此站，以寄所思、所学与所好；此间虽小，亦可为我一方洞天。

In ancient tales, immortals always had a grotto of their own, a place people called a blessed realm.
Now, amid the bustle of the modern world, AI tools grant us greater freedom to express what we aspire to and what we love.
So I made this site to hold what I think, what I study, and what I cherish; though small, it is my own little sanctuary.

In alten Erzählungen besaßen die Unsterblichen stets eine eigene Höhle, einen Ort, den die Menschen als gesegnetes Reich bezeichneten.
Heute, im geschäftigen Treiben der Gegenwart, schenken uns KI-Werkzeuge mehr Freiheit, unsere Wünsche und Interessen auszudrücken.
Darum habe ich diese Seite geschaffen, um mein Denken, mein Lernen und meine Vorlieben zu bewahren; klein zwar, doch mein eigener stiller Ort.`}
</p>
          </div>
          <div className="md:col-span-3 space-y-2">
            {notes.map((note) => (
              <div key={note} className="border border-neutral-900 px-3 py-2 text-sm uppercase tracking-[0.08em]">
                {note}
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-neutral-900 py-10 md:py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((section) => (
              <article key={section.no} className="border border-neutral-900 p-6">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                  {section.no}
                </div>
                <h3 className="mt-6 text-3xl font-black uppercase leading-tight">
                  {section.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-neutral-700">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="study" className="grid gap-8 border-b border-neutral-900 py-10 md:grid-cols-12 md:py-14">
          <div className="md:col-span-3">
            <div className="text-sm font-bold uppercase tracking-[0.25em]">学习 / Study / Studium</div>
          <div className="md:col-span-9 grid gap-4 md:grid-cols-2">
            <div className="border border-neutral-900 p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">Reading</div>
              <div className="mt-3 text-2xl font-black uppercase">正在阅读</div>
              <p className="mt-3 leading-7 text-neutral-700">
                在这里放最近阅读的书、论文、课程与摘记。第一版可以先用静态文字，后面再改成可更新列表。
              </p>
            </div>
            <div className="border border-neutral-900 p-6">
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
            <div className="text-sm font-bold uppercase tracking-[0.25em]">Life Notes</div>
          </div>
          <div className="md:col-span-9">
            <div className="grid gap-px bg-neutral-900 md:grid-cols-3">
              {['散步', '观察', '短句'].map((item) => (
                <div key={item} className="bg-neutral-100 p-6">
                  <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">{item}</div>
                  <p className="mt-10 text-lg leading-8">
                    这里可以放一条日常记录，让生活内容也保持同样的秩序感与版面强度。
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-8 py-10 md:grid-cols-12 md:py-16">
          <div className="md:col-span-3">
            <div className="text-sm font-bold uppercase tracking-[0.25em]">Contact</div>
          </div>
          <div className="md:col-span-9 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-3xl font-black uppercase md:text-5xl">君子有九思 / Let the page grow / Die Seite wachst</div>
              <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-700">
                第一版先把首页搭起来，后面再加入文章列表、读书页、相册页或年度归档。
              </p>
            </div>
            <a
              href="mailto:dexiaokong727@gmail.com"
              className="inline-flex border border-neutral-900 px-5 py-3 text-sm font-bold uppercase tracking-[0.15em]"
            >
              Email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}