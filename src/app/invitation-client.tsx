"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const invitation = {
  groom: "И.Батмягмар",
  bride: "З.Уранбилэг",
  title: "Хуримын урилга",
  greeting: "Эрхэм хүндэт зочид оо!",
  intro:
    "Эрхэм хүндэт ................... таныг бидний хуримын ёслолд гэр бүлийн хамт хүрэлцэн ирэхийг урьж байна.",
  dateLabel: "2026.06.17",
  time: "09:00",
  address: "Triple event hall",
  mapUrl: "https://maps.app.goo.gl/5gHXCwvuKTfquWbq5",
  closing:
    "Бидний баярт өдөрт хүрэлцэн ирж, ерөөл өргөнө үү.",
  footerHandle: "@batmyagmar_0213",
  footerLink:
    "https://www.instagram.com/batmyagmar_0213?fbclid=IwY2xjawRD8xZleHRuA2FlbQIxMABicmlkETFmMm1UbGhiblRxQWNMSk9tc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrE2ZKH-U-7WgWz2pV1_tJD8WhvTCk5_ebLnxToVg5rCuq11PnY5_mJy7C5Q_aem_SFNJTWWw43INu0TNOu1VFQ",
  footerPhone: "90002505",
};

const countdownTarget = "2026-06-17T09:00:00+08:00";

const scheduleDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
const calendarDays = Array.from({ length: 30 }, (_, index) => index + 1);
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

function getCountdownParts(targetDate: string) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function InvitationClient({
  initialGuestName,
}: {
  initialGuestName: string;
}) {
  const guestLabel = initialGuestName.trim();
  const [countdown, setCountdown] = useState(() =>
    getCountdownParts(countdownTarget),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownParts(countdownTarget));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="invitation-page">
      <section className="invite-hero">
        <div className="invite-hero-media">
          <Image
            src="/photos/couple-2.jpeg"
            alt="Күзгүнүн жанында турган кыздын кара-ак портрети"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="invite-hero-overlay" />
        <div className="invite-hero-content">
          <button
            type="button"
            className="invite-play-button"
            aria-label="Invitation media"
          >
            <span className="invite-play-icon" />
          </button>
          <p className="invite-script invite-script-soft">{invitation.title}</p>
          <h1 className="invite-title invite-title-names">
            <span>{invitation.groom}</span>
            <span>&amp;</span>
            <span>{invitation.bride}</span>
          </h1>
          <a href="#invitation" className="invite-scroll-indicator">
            <span />
            <span />
          </a>
        </div>
      </section>

      <section id="invitation" className="invite-section invite-paper-section">
        <div className="invite-wave invite-wave-top" />
        <div className="invite-section-inner invite-centered-copy">
          <h2 className="invite-heading">{invitation.greeting}</h2>
          <p className="invite-script invite-name">{invitation.title}</p>
          <p className="invite-body invite-body-wide">{invitation.intro}</p>
          {guestLabel ? (
            <p className="invite-guest-note">Ардактуу конок: {guestLabel}</p>
          ) : null}
        </div>
      </section>

      <section className="invite-section invite-calendar-section">
        <div className="invite-section-inner">
          <p className="invite-date-label">{invitation.dateLabel}</p>
          <div className="invite-calendar">
            {scheduleDays.map((day) => (
              <span key={day} className="invite-calendar-weekday">
                {day}
              </span>
            ))}
            {calendarDays.map((day) => (
              <span
                key={day}
                className={day === 17 ? "invite-calendar-day is-selected" : "invite-calendar-day"}
              >
                {day}
              </span>
            ))}
          </div>
          <div className="invite-time-block">
            <span>Эхлэх цаг</span>
            <strong>{invitation.time}</strong>
          </div>
        </div>
      </section>

      <section className="invite-section invite-countdown-section">
        <div className="invite-countdown-media">
          <Image
            src="/photos/couple-4.jpeg"
            alt="Сырткы орчинд авхуулсан ёслолын зураг"
            fill
            sizes="100vw"
          />
        </div>
        <div className="invite-countdown-overlay" />
        <div className="invite-countdown-content">
          <p className="invite-script invite-script-light">Хуримын өдөр хүртэл:</p>
          <div className="invite-countdown-grid">
            <div>
              <strong>{String(countdown.days).padStart(2, "0")}</strong>
              <span>хоног</span>
            </div>
            <div>
              <strong>{String(countdown.hours).padStart(2, "0")}</strong>
              <span>цаг</span>
            </div>
            <div>
              <strong>{String(countdown.minutes).padStart(2, "0")}</strong>
              <span>минут</span>
            </div>
            <div>
              <strong>{String(countdown.seconds).padStart(2, "0")}</strong>
              <span>секунд</span>
            </div>
          </div>
        </div>
      </section>

      <section className="invite-section invite-paper-section">
        <div className="invite-section-inner invite-centered-copy">
          <p className="invite-overline">Ерөөл</p>
          <div className="invite-poem">
            {poemLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="invite-section invite-paper-section">
        <div className="invite-section-inner invite-centered-copy">
          <p className="invite-overline">Хаяг</p>
          <p className="invite-body">{invitation.address}</p>
          <p className="invite-body invite-body-wide">
            Байршлыг харахын тулд доорх map icon дээр дарна уу.
          </p>
          <a
            href={invitation.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="invite-map-link"
            aria-label="Map app"
          >
            <span className="invite-map-icon">
              <span className="invite-map-blue" />
              <span className="invite-map-green" />
              <span className="invite-map-yellow" />
            </span>
          </a>
        </div>
      </section>

      <section className="invite-section invite-paper-section">
        <div className="invite-wave invite-wave-line" />
        <div className="invite-section-inner invite-rsvp-wrap">
          <h2 className="invite-heading invite-heading-sm">
            Хүрэлцэн ирэхээ мэдэгдэнэ үү
          </h2>
          <p className="invite-body invite-rsvp-copy">
            Нэрээ оруулж, доорх сонголтуудаас нэгийг сонгоно уу.
          </p>
          <form className="invite-rsvp-form">
            <input
              type="text"
              name="guest"
              defaultValue={guestLabel}
              placeholder="Таны нэр"
              aria-label="Таны нэр"
            />
            <label>
              <input type="radio" name="attendance" defaultChecked />
              <span>Заавал очно</span>
            </label>
            <label>
              <input type="radio" name="attendance" />
              <span>Хамт очно</span>
            </label>
            <label>
              <input type="radio" name="attendance" />
              <span>Очиж амжихгүй</span>
            </label>
            <button type="submit">Илгээх</button>
          </form>
        </div>
      </section>

      <footer className="invite-footer">
        <div className="invite-section-inner invite-centered-copy">
          <div className="invite-footer-divider" />
          <p className="invite-script invite-footer-message">{invitation.closing}</p>
          <div className="invite-footer-meta">
            <a href={invitation.footerLink} target="_blank" rel="noreferrer">
              {invitation.footerHandle}
            </a>
            <span>{invitation.footerPhone}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
