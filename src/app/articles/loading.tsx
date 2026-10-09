export default function ArticlesLoading() {
  return (
    <section aria-busy="true" aria-label="Загрузка статей">
      <div className="page-heading"><p className="eyebrow">Каталог / Материалы для чтения</p><h1>Загрузка<span className="title-dot">.</span></h1><p role="status" className="lead">Загружаем статьи…</p></div>
      <div className="article-grid" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => <div key={index} className="skeleton-card"><span /><span /><span /></div>)}
      </div>
    </section>
  );
}
