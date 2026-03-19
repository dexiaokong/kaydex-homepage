import { useEffect, useMemo, useRef, useState } from 'react';
import heroImage from './assets/hero.jpg';
import aboutImage from './assets/about.jpg';
import lifeImage1 from './assets/life-1.jpg';
import lifeImage2 from './assets/life-2.jpg';
import lifeImage3 from './assets/life-3.jpg';

export default function GermanEditorialHomepage() {
  const content = {
    masthead: {
      topLinks: ['ARCHIVE / 归档', 'CONTACT / 联系', 'NOTES / 札记'],
      menu: 'MENU / 菜单',
      brand: 'KAYDEX',
      subbrand: 'Reading / Notes / Life / Archive',
      ctaPrimary: 'ENTER ARCHIVE / 进入归档',
      ctaSecondary: 'WRITE / 写信',
      nav: ['HOME / 主页', 'EDITORIAL / 社论', 'VOLUMES / 卷帙', 'FRAGMENTS / 片羽', 'ARCHIVE / 藏册', 'CONTACT / 联系'],
      ticker: 'NEW',
      tickerText: '本期首页已改版，图像、札记与归档正在持续整理中。',
    },
    manifesto: {
      eyebrow: '刊首题记',
      title: '“所学不尽，所思不止。”',
      subtitle: '“在日常之中，保存阅读、图像与片段。”',
      seal: '构石',
    },
    editorial: {
      label: 'EDITORIAL / 社论',
      issue: 'VOL. 1. ISSUE 1',
      title: '关于阅读、记录与缓慢归档',
      subtitle: '一个个人期刊式首页的开端',
      intro:
        '这并不是一个急于展示结论的地方，而是一处持续整理阅读、图像、札记与日常观察的页内空间。它更接近刊物首页，而不是履历陈列。',
      body1:
        '我想把所见、所学、所思放进一种更有秩序的形式中：既保留杂志与社论的编排感，也保留一点书卷式的停顿与余温。于是这里既有栏目、日期与卷号，也有片羽、尾跋与缓慢增补。',
      body2:
        '以后这里会继续放入阅读札记、阶段笔记、生活图像与 PDF 归档。它不追求一次完成，而更像一期一期累积下来的私人刊物。',
      cta: '进入卷帙 / 阅读本期',
      imageCaption: '本期配图 / Editorial Image',
    },
    latest: {
      label: 'LATEST NEWS / 最新动态',
      items: [
        {
          date: '19 MAR 2026',
          title: '首页版式切换为社论型结构。',
          text: '刊头、栏目导航与左右分栏已完成第一轮重写。',
        },
        {
          date: '18 MAR 2026',
          title: '新增片羽图像与展览摄影。',
          text: '图像系统开始从生活照转向更统一的黑白资料风格。',
        },
        {
          date: '17 MAR 2026',
          title: '归档区支持本地 PDF 与图片预览。',
          text: '当前版本仍为前端预览，下一步将考虑接入云端存储。',
        },
      ],
      more: 'MORE NEWS / 更多条目 ›',
      metricsTitle: 'JOURNAL METRICS / 期刊指标',
      metrics: [
        { label: 'ISSUES', value: '01' },
        { label: 'FRAGMENTS', value: '03' },
        { label: 'UPLOADS', value: '05' },
        { label: 'NOTES', value: '12' },
      ],
    },
    sections: {
      volumes: {
        label: 'VOLUMES / 卷帙',
        title: '阅读、课程与阶段笔记',
        cards: [
          {
            tag: 'READING / 在读',
            title: '正在阅读',
            text: '收纳近期在读的书、文章与片段摘记，让阅读不只停留在目录里。',
          },
          {
            tag: 'NOTES / 札记',
            title: '阶段笔记',
            text: '把课程、想法与研究关键词整理成可回看的段落与索引。',
          },
          {
            tag: 'PLANS / 计划',
            title: '接下来要做',
            text: '记录短期主题、后续整理方向与尚未完成的栏目草案。',
          },
        ],
      },
      fragments: {
        label: 'FRAGMENTS / 片羽',
        title: '图像与日常片段',
        notes: [
          '有些页面需要通过图像来立住气质，而不是靠段落去堆满。',
          '真正值得保存的日常，往往不是事件，而是某种缓慢停留过的气息。',
          '归档并不是封存，相反，它是让零碎之物重新获得秩序。',
        ],
        next: 'NEXT NOTE / 下一则',
      },
      archive: {
        label: 'PREPRINT / 早觑',
        title: '归档入口已开启',
        text: '可在此选择 PDF 与图片进行本地预览。后续版本会将其整理成真正的资料馆与卷册索引。',
        button: 'ENTER ARCHIVE / 进入归档',
        pdfLabel: 'UPLOAD PDF / 添一卷',
        imageLabel: 'UPLOAD IMAGES / 存片羽',
        localPreview: 'LOCAL PREVIEW / 本地预览',
        selected: '已选择',
        noPdf: '尚未选择 PDF',
        noImages: '尚未选择图片',
        clear: 'CLEAR / 清空',
      },
      endnote: {
        label: 'ENDNOTE / 尾跋',
        title: '写在最后',
        text: '此页既成，往后便可徐徐增补：或记读书，或存片羽，或作年岁归档，使它渐渐长成一份属于自己的私人期刊。',
        cta: 'WRITE TO ME / 写信给我',
        signoff: 'KAYDEX / 2026',
      },
    },
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [noteIndex, setNoteIndex] = useState(0);
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const pdfInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const fragmentNotes = useMemo(() => content.sections.fragments.notes, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNoteIndex((prev) => (prev + 1) % fragmentNotes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [fragmentNotes.length]);

  useEffect(() => {
    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
      imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [pdfUrl, imagePreviews]);

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

  const serifDisplay = {
    fontFamily: 'Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", "STSong", serif',
  };

  const sansUi = {
    fontFamily: 'Inter, "Helvetica Neue", Arial, "PingFang SC", "Noto Sans SC", sans-serif',
  };

  const kaitiAccent = {
    fontFamily: '"Kaiti SC", "STKaiti", "KaiTi", serif',
  };

  return (
    <div className="min-h-screen bg-[#f3f1ee] text-[#232323]" style={sansUi}>
      <div
        className={`fixed inset-0 z-[90] transition-all duration-300 ${
          menuOpen ? 'pointer-events-auto bg-black/30 opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <aside
          className={`absolute left-0 top-0 h-full w-[86vw] max-w-xs bg-black px-8 py-10 text-[#f3f1ee] transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-white/55">KAYDEX</div>
              <div className="mt-2 text-lg font-semibold uppercase tracking-[0.22em]">EDITORIAL</div>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="border border-white/20 px-3 py-2 text-[11px] uppercase tracking-[0.25em] text-white/80 transition hover:border-white/60 hover:text-white"
            >
              CLOSE
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-4 text-sm uppercase tracking-[0.2em] text-white/85">
            {content.masthead.nav.map((item) => (
              <a key={item} href="#top" className="border-b border-white/10 pb-3 transition hover:border-white/40 hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </aside>
      </div>

      <div className="border-b border-black/10 px-6 py-2 text-[11px] uppercase tracking-[0.22em] text-black/55 md:px-10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-5">
          {content.masthead.topLinks.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <header id="top" className="border-b border-black bg-black text-[#f3f1ee]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 md:px-10">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/90"
          >
            <span className="text-2xl leading-none">☰</span>
            <span className="hidden md:inline">{content.masthead.menu}</span>
          </button>

          <div className="text-center">
            <div className="text-[46px] font-semibold uppercase leading-none tracking-[-0.04em] md:text-[72px]" style={serifDisplay}>
              {content.masthead.brand}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/65 md:text-[11px]">
              {content.masthead.subbrand}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden border border-white/20 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/85 transition hover:border-white/60 hover:text-white md:inline-flex">
              {content.masthead.ctaSecondary}
            </button>
            <button className="border border-[#d64033] bg-[#d64033] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#bf352a] md:px-5">
              {content.masthead.ctaPrimary}
            </button>
          </div>
        </div>
      </header>

      <nav className="border-b border-black/15 bg-[#f3f1ee]">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-black/65 md:px-10">
          {content.masthead.nav.map((item) => (
            <a key={item} href="#top" className="transition hover:text-black">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div className="border-b border-black/15 bg-black/80 text-white">
        <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-6 py-4 md:px-10">
          <span className="bg-[#d64033] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]">{content.masthead.ticker}</span>
          <span className="text-sm tracking-[0.02em] text-white/85">{content.masthead.tickerText}</span>
        </div>
      </div>

      <main className="mx-auto max-w-[1400px] px-6 pb-20 pt-12 md:px-10 md:pt-16">
        <section className="border-b border-black/10 pb-14 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-4 w-fit text-[12px] font-bold uppercase tracking-[0.28em] text-[#c9a227]">{content.manifesto.eyebrow}</div>
            <div className="mx-auto mb-5 w-fit text-3xl font-bold text-[#c9a227]">{content.manifesto.seal}</div>
            <h1 className="text-4xl leading-tight text-[#2b2b2b] md:text-7xl" style={serifDisplay}>
              {content.manifesto.title}
            </h1>
            <p className="mt-6 text-2xl text-black/70 md:text-3xl" style={kaitiAccent}>
              {content.manifesto.subtitle}
            </p>
          </div>
        </section>

        <section className="grid gap-10 border-b border-black/10 py-14 md:grid-cols-[1.7fr_0.78fr] md:gap-14">
          <div>
            <div className="mb-10 flex items-end justify-between gap-6 border-b-[5px] border-black pb-3">
              <h2 className="text-4xl leading-none text-black md:text-6xl" style={serifDisplay}>
                {content.editorial.label}
              </h2>
              <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-slate-400">{content.editorial.issue}</div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <figure>
                <div className="overflow-hidden bg-black">
                  <img src={heroImage} alt="editorial" className="aspect-[6/4] w-full object-cover grayscale" />
                </div>
                <figcaption className="border-t border-black bg-white/55 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/70">
                  {content.editorial.imageCaption}
                </figcaption>
              </figure>

              <div>
                <h3 className="text-4xl leading-[1.05] text-[#2a2a2a] md:text-6xl" style={serifDisplay}>
                  {content.editorial.title}
                </h3>
                <div className="mt-4 text-2xl text-slate-500 md:text-3xl" style={kaitiAccent}>
                  {content.editorial.subtitle}
                </div>
                <p className="mt-8 text-[17px] leading-9 text-black/68" style={kaitiAccent}>
                  {content.editorial.intro}
                </p>
                <p className="mt-8 text-[18px] leading-9 text-black/72">{content.editorial.body1}</p>
                <p className="mt-7 text-[18px] leading-9 text-black/72">{content.editorial.body2}</p>
                <a
                  href="#volumes"
                  className="mt-10 inline-flex items-center gap-3 text-[15px] font-bold tracking-[0.02em] text-[#c9a227] transition hover:gap-4"
                  style={kaitiAccent}
                >
                  {content.editorial.cta}
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>

          <aside className="border-l border-black/10 pl-0 md:pl-8">
            <div className="border-b-[5px] border-black pb-3 text-3xl leading-none md:text-5xl" style={serifDisplay}>
              {content.latest.label}
            </div>

            <div className="mt-8 space-y-10">
              {content.latest.items.map((item) => (
                <article key={item.date + item.title}>
                  <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#d64033]">{item.date}</div>
                  <h4 className="mt-3 text-2xl leading-snug text-black md:text-[38px] md:leading-[1.05]" style={serifDisplay}>
                    {item.title}
                  </h4>
                  <p className="mt-3 text-[16px] leading-8 text-black/60">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-right text-[12px] font-bold uppercase tracking-[0.24em] text-[#d64033]">
              {content.latest.more}
            </div>

            <div className="mt-16 border-t border-black/10 pt-10">
              <div className="text-[12px] font-bold uppercase tracking-[0.28em] text-slate-400">{content.latest.metricsTitle}</div>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {content.latest.metrics.map((item) => (
                  <div key={item.label} className="border-t border-black/10 pt-4">
                    <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">{item.label}</div>
                    <div className="mt-2 text-4xl text-black md:text-5xl" style={serifDisplay}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section id="volumes" className="grid gap-8 border-b border-black/10 py-14 md:grid-cols-3">
          {content.sections.volumes.cards.map((card) => (
            <article key={card.title} className="border border-black/10 bg-white/40 p-8">
              <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#d64033]">{card.tag}</div>
              <h3 className="mt-5 text-4xl leading-tight text-black md:text-5xl" style={serifDisplay}>
                {card.title}
              </h3>
              <p className="mt-5 text-[17px] leading-8 text-black/65">{card.text}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-10 border-b border-black/10 py-14 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
          <div>
            <div className="mb-8 text-4xl leading-none text-black md:text-6xl" style={serifDisplay}>
              {content.sections.fragments.label}
            </div>
            <h3 className="text-3xl text-black md:text-5xl" style={serifDisplay}>
              {content.sections.fragments.title}
            </h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2 overflow-hidden bg-black">
                <img src={lifeImage1} alt="fragment-1" className="aspect-[16/9] w-full object-cover grayscale" />
              </div>
              <div className="overflow-hidden bg-black">
                <img src={lifeImage2} alt="fragment-2" className="aspect-[4/3] w-full object-cover grayscale" />
              </div>
              <div className="overflow-hidden bg-black">
                <img src={lifeImage3} alt="fragment-3" className="aspect-[4/3] w-full object-cover grayscale" />
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-5">
              {fragmentNotes.map((note, index) => (
                <article
                  key={note}
                  className={`border px-6 py-6 transition ${
                    index === noteIndex ? 'border-black bg-black text-[#f3f1ee]' : 'border-black/10 bg-white/45 text-black'
                  }`}
                >
                  <div className={`text-[11px] font-bold uppercase tracking-[0.28em] ${index === noteIndex ? 'text-white/50' : 'text-slate-400'}`}>
                    NOTE {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="mt-4 text-[18px] leading-9" style={kaitiAccent}>
                    {note}
                  </p>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setNoteIndex((prev) => (prev + 1) % fragmentNotes.length)}
              className="mt-6 border border-black px-5 py-3 text-[12px] font-bold uppercase tracking-[0.24em] transition hover:bg-black hover:text-white"
            >
              {content.sections.fragments.next}
            </button>
          </div>
        </section>

        <section className="grid gap-10 border-b border-black/10 py-14 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="border border-black/10 bg-white/35 p-10 md:p-12">
            <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#d64033]">{content.sections.archive.label}</div>
            <h3 className="mt-5 text-4xl text-black md:text-6xl" style={serifDisplay}>
              {content.sections.archive.title}
            </h3>
            <p className="mt-5 max-w-3xl text-[18px] leading-9 text-black/65">{content.sections.archive.text}</p>
          </div>

          <div className="flex justify-start md:justify-end">
            <a
              href="#archive-tools"
              className="inline-flex items-center border-[3px] border-black px-10 py-6 text-[18px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-black hover:text-white"
            >
              {content.sections.archive.button}
            </a>
          </div>
        </section>

        <section id="archive-tools" className="grid gap-8 border-b border-black/10 py-14 md:grid-cols-2">
          <div className="border border-black/10 bg-white/45 p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#d64033]">{content.sections.archive.pdfLabel}</div>
              <button
                type="button"
                onClick={clearUploads}
                className="border border-black/15 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-black/70 transition hover:border-black hover:text-black"
              >
                {content.sections.archive.clear}
              </button>
            </div>

            <input
              ref={pdfInputRef}
              type="file"
              accept="application/pdf"
              onChange={handlePdfChange}
              className="mt-6 block w-full text-sm file:mr-4 file:border-0 file:border-r file:border-black/15 file:bg-transparent file:px-4 file:py-3 file:text-[11px] file:font-bold file:uppercase file:tracking-[0.22em]"
            />
            <div className="mt-4 text-[15px] text-black/65">
              {pdfFile ? `${content.sections.archive.selected}：${pdfFile.name}` : content.sections.archive.noPdf}
            </div>
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex border border-black px-4 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition hover:bg-black hover:text-white"
              >
                {content.sections.archive.localPreview}
              </a>
            )}
          </div>

          <div className="border border-black/10 bg-white/45 p-8">
            <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#d64033]">{content.sections.archive.imageLabel}</div>
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="mt-6 block w-full text-sm file:mr-4 file:border-0 file:border-r file:border-black/15 file:bg-transparent file:px-4 file:py-3 file:text-[11px] file:font-bold file:uppercase file:tracking-[0.22em]"
            />
            <div className="mt-4 text-[15px] text-black/65">
              {imageFiles.length > 0 ? `${content.sections.archive.selected}：${imageFiles.length} 张` : content.sections.archive.noImages}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {(imagePreviews.length > 0 ? imagePreviews : [aboutImage, lifeImage2, lifeImage3, lifeImage1]).slice(0, 4).map((src, index) => (
                <div key={`${src}-${index}`} className="overflow-hidden bg-black">
                  <img src={src} alt={`archive-${index}`} className="aspect-[4/3] w-full object-cover grayscale" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 text-center">
          <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-slate-400">{content.sections.endnote.label}</div>
          <h3 className="mt-5 text-4xl text-black md:text-6xl" style={serifDisplay}>
            {content.sections.endnote.title}
          </h3>
          <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-9 text-black/65" style={kaitiAccent}>
            {content.sections.endnote.text}
          </p>
          <a
            href="mailto:cooldog@77m.shop"
            className="mt-10 inline-flex border border-black bg-black px-6 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#1d1d1d]"
          >
            {content.sections.endnote.cta}
          </a>
          <div className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
            {content.sections.endnote.signoff}
          </div>
        </section>
      </main>
    </div>
  );
}
