import Image from "next/image";

const invitation = {
  groom: "И.Батмягмар",
  bride: "З.Уранбилэг",
  subtitle:
    "Бидний шинэ амьдралын хамгийн нандин мөчийг та бүхэнтэй хамт хуваалцахыг хүсэж байна",
  date: "2026.06.17",
  day: "Лхагва гараг",
  time: "16:00",
  venue: "Triple Event Hall",
  location: "Triple Event Hall, Улаанбаатар хот",
  mapUrl: "https://maps.app.goo.gl/PNpknUYmWqkrZxr78",
  dinner: "18:00",
  ceremony: "16:30",
  dressCode: "Цагаан, шампань, nude өнгийн зөөлөн dress code",
  rsvp: "2026.06.10-ны дотор хүрэлцэн ирэхээ баталгаажуулна уу",
};

const moments = [
  {
    label: "Зочид хүлээн авах",
    value: "16:00",
    note: "Welcome drink, фото булан, амьд хөгжмийн зөөлөн угталт",
  },
  {
    label: "Хүндэтгэлийн ёслол",
    value: "16:30",
    note: "Тангараг өргөх, бөгж солилцох, хайртай хүмүүсийн ерөөл",
  },
  {
    label: "Оройн зоог",
    value: "18:00",
    note: "Хуримын зоог, анхны бүжиг, баярын хөтөлбөр",
  },
];

const highlights = [
  "Номын хуудас нээгдэн урилга ил гарч ирэх кинематик эхлэл",
  "Цагаан, алтан туяатай романтик зохиомж",
  "Хосын өдрийн мэдээллийг нэг дэлгэцэнд тансаг байршуулсан бүтэц",
];

const photos = [
  {
    src: "/photos/couple-1.jpeg",
    alt: "Цэцгэн backdrop-ийн өмнө хамтдаа зогсож буй хос",
    caption: "Цагаан цэцэг, цайвар гэрлийн дунд",
  },
  {
    src: "/photos/couple-2.jpeg",
    alt: "Сандал дээр сууж pose авсан хос",
    caption: "Студийн нам гүм, тансаг агшин",
  },
  {
    src: "/photos/couple-3.jpeg",
    alt: "Бие бие рүүгээ инээмсэглэн харж буй хос",
    caption: "Харах төдийд мэдрэгдэх дулаан холбоо",
  },
  {
    src: "/photos/couple-4.jpeg",
    alt: "Баганан танхимд pose авсан хос",
    caption: "Ёслолын оройн сонгодог өнгө төрх",
  },
];

const poemLines = [
  "Ерөөл учрал бүрдсэн",
  "Ертөнцийн энэ сайхан өдөр",
  "Хаан бугуйвчаар жаргал нэгтгэж",
  "Хатан сүйхээр заяа зангидаж байна",
  "Өвгөдөөс уламжлагдсан ган тулганд",
  "Өөдөө бадарсан галаан асааж",
  "Өрхөн дээр цугласан долоон бурханд",
  "Өлгийтэй үрийнхээ дууг сонсгохоор",
  "Айл боллоо бид хоёр",
  "Золгон учирсан энэ өдрөөс",
  "Зочин таны сайхан ерөөлөөр",
  "Ургийн холбоо батжих болтугай",
  "Удмын өлзий дэлгэрэх болтугай",
];

function Butterfly({ className }: { className: string }) {
  return (
    <div aria-hidden="true" className={`butterfly ${className}`}>
      <span className="butterfly-wing butterfly-wing-left" />
      <span className="butterfly-body" />
      <span className="butterfly-wing butterfly-wing-right" />
    </div>
  );
}

export default function InvitationClient({
  initialGuestName,
}: {
  initialGuestName: string;
}) {
  const guestLabel = initialGuestName.trim() || "...................";

  return (
    <main className="page-shell">
      <div className="background-wash" />
      <div className="background-grain" />

      <section className="hero">
        <div className="scene">
          <div aria-hidden="true" className="cinema-stage">
            {photos.map((photo, index) => (
              <div
                key={`slide-${photo.src}`}
                className={`cinema-slide cinema-slide-${index + 1}`}
                style={{ backgroundImage: `url("${photo.src}")` }}
              />
            ))}
            <div className="cinema-vignette" />
            <div className="cinema-light cinema-light-left" />
            <div className="cinema-light cinema-light-right" />
          </div>
          <div
            className="photo-haze photo-haze-main"
            style={{ backgroundImage: `url("${photos[2].src}")` }}
          />
          <div
            className="photo-haze photo-haze-secondary"
            style={{ backgroundImage: `url("${photos[3].src}")` }}
          />
          <div className="floating-photo floating-photo-left">
            <div className="floating-photo-inner">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                priority
                sizes="(max-width: 980px) 40vw, 260px"
              />
            </div>
          </div>
          <div className="floating-photo floating-photo-right">
            <div className="floating-photo-inner">
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                priority
                sizes="(max-width: 980px) 34vw, 240px"
              />
            </div>
          </div>

          <Butterfly className="butterfly-a" />
          <Butterfly className="butterfly-b" />
          <Butterfly className="butterfly-c" />

          <div className="hero-copy">
            <p className="eyebrow">Wedding invitation</p>
            <p className="hero-note">
              2026 оны 6 сарын 17-ны Лхагва гарагт болох хуримын урилга
            </p>
          </div>

          <div className="book-stage">
            <div className="book-shadow" />
            <div className="book">
              <div className="book-spine" />
              <div className="book-cover book-cover-left">
                <div className="cover-ornament">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="book-cover book-cover-right">
                <div className="cover-script">Forever</div>
              </div>
              <div className="book-page book-page-left" />
              <div className="book-page book-page-right" />

              <article className="invitation-card">
                <p className="card-kicker">Бидний онцгой өдөр</p>
                <h1 className="couple-title">
                  <span className="couple-name">{invitation.groom}</span>
                  <span className="couple-ampersand">&amp;</span>
                  <span className="couple-name">{invitation.bride}</span>
                </h1>
                <p className="card-subtitle">{invitation.subtitle}</p>

                <div className="hero-meta">
                  <div>
                    <span>Хэзээ</span>
                    <strong>
                      {invitation.date}, {invitation.day}
                    </strong>
                  </div>
                  <div>
                    <span>Цаг</span>
                    <strong>{invitation.time}</strong>
                  </div>
                  <div>
                    <span>Хаана</span>
                    <strong>{invitation.venue}</strong>
                  </div>
                </div>

                <a href="#details" className="card-link">
                  Урилгын дэлгэрэнгүйг үзэх
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="details-grid">
        <article className="panel panel-story">
          <p className="panel-kicker">Хайрын захидал</p>
          <h2>Та бүхнийг бидний амьдралын хамгийн нандин мөчид урьж байна.</h2>

          <div className="formal-invitation">
            <p className="guest-line">Эрхэм хүндэт {guestLabel} таныг</p>
            <p>
              Бидний хуримын ёслолд гэр бүлийн хамт хүрэлцэн ирэхийг урьж
              байна.
            </p>
          </div>
          <div className="poem-block">
            {poemLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </article>

        <article className="panel panel-details">
          <p className="panel-kicker">Хэзээ, хаана</p>
          <h2>{invitation.venue}</h2>
          <div className="info-list">
            <div>
              <span>Огноо</span>
              <strong>{invitation.date}</strong>
            </div>
            <div>
              <span>Өдөр</span>
              <strong>{invitation.day}</strong>
            </div>
            <div>
              <span>Эхлэх цаг</span>
              <strong>{invitation.time}</strong>
            </div>
            <div>
              <span>Байршил</span>
              <strong>{invitation.location}</strong>
            </div>
          </div>
          <a
            href={invitation.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="map-link"
          >
            Google Maps дээр нээх
          </a>
        </article>

        <article className="panel panel-moments">
          <p className="panel-kicker">Өдрийн хөтөлбөр</p>
          <h2>Хуримын үдшийн хэмнэл</h2>
          <div className="timeline">
            {moments.map((moment) => (
              <div key={moment.label} className="timeline-item">
                <span className="timeline-time">{moment.value}</span>
                <div>
                  <h3>{moment.label}</h3>
                  <p>{moment.note}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel panel-extra">
          <p className="panel-kicker">Нэмэлт мэдээлэл</p>
          <h2>Зочдод зориулсан жижиг тэмдэглэл</h2>
          <div className="info-stack">
            <div>
              <span>Dress code</span>
              <strong>{invitation.dressCode}</strong>
            </div>
            <div>
              <span>RSVP</span>
              <strong>{invitation.rsvp}</strong>
            </div>
            <div>
              <span>Оройн зоог</span>
              <strong>{invitation.dinner} цагаас эхэлнэ</strong>
            </div>
            <div>
              <span>Ёслол</span>
              <strong>{invitation.ceremony} цагаас</strong>
            </div>
          </div>
        </article>
      </section>

      <section className="gallery-section">
        <div className="gallery-copy">
          <p className="panel-kicker">Our moments</p>
          <h2>Зургуудаар нь урилгыг амьд болгосон хэсэг</h2>
          <p>
            Таны явуулсан бодит зургуудыг цагаан, шампань өнгийн уусгалттайгаар
            оруулж, invitation page-ийг илүү хувийн, илүү дурсамжтай болголоо.
          </p>
        </div>

        <div className="gallery-collage">
          {photos.map((photo, index) => (
            <figure key={photo.src} className={`gallery-card gallery-card-${index + 1}`}>
              <div className="gallery-media">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 980px) 100vw, 33vw"
                />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-copy">
          <p className="panel-kicker">Design direction</p>
          <h2>Тансаг, цэвэр, зөөлөн мэдрэмжтэй урилга</h2>
          <ul className="highlight-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="closing-quote">
          <p>“Бидний шинэ хуудсыг та бүхэнтэй хамт нээхийг хүсэж байна.”</p>
        </div>
      </section>
    </main>
  );
}
