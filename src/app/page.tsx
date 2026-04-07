export default function Home() {
  return (
    <main className="entry-page">
      <div className="background-wash" />
      <div className="background-grain" />

      <section className="entry-shell">
        <div className="entry-backdrop" />
        <div className="entry-card">
          <p className="eyebrow">Wedding invitation</p>
          <h1>И.Батмягмар &amp; З.Уранбилэг</h1>
          <p className="entry-copy">
            Урилгын дараагийн хуудсанд зочны нэр автоматаар нөхөгдөж харагдана.
          </p>

          <form action="/invite" method="get" className="entry-form">
            <label htmlFor="guest">Зочны нэрээ оруулна уу</label>
            <input
              id="guest"
              name="guest"
              type="text"
              placeholder="Жишээ: Б.Мөнхзул"
              required
            />
            <button type="submit">Урилгаа нээх</button>
          </form>

          <p className="entry-meta">2026.06.17 | Лхагва гараг | Triple Event Hall</p>
        </div>
      </section>
    </main>
  );
}
