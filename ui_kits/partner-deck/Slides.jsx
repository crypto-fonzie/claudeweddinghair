/* Partner deck slide types, recreated 1:1 from partner-deck.pptx (12192000×6858000 EMU → 1280×720 px). */
const DSS = window.PolishedAmpPinnedDesignSystem_6a1c01;
const M = 82; /* 777240 EMU left/top margin */

function Frame({ tone = "light", page, footer = true, children }) {
  const ink = tone === "ink";
  return (
    <div style={{ position: "relative", width: "1280px", height: "720px", overflow: "hidden", background: ink ? "var(--surface-inverse)" : "var(--surface-page)", color: ink ? "var(--text-on-inverse)" : "var(--text-body)", fontFamily: "var(--font-body)", fontWeight: "var(--weight-light)" }}>
      {children}
      {footer ? (
        <React.Fragment>
          <span style={{ position: "absolute", left: M, top: 660, fontSize: "12px", letterSpacing: "0.22em", color: "var(--tortoise)", fontWeight: "var(--weight-regular)" }}>Polished &amp; Pinned</span>
          <span style={{ position: "absolute", right: M, top: 656, fontFamily: "var(--font-display)", fontSize: "15px", color: "var(--brass)" }}>{page}</span>
        </React.Fragment>
      ) : null}
    </div>
  );
}

function SlideEyebrow({ tone = "light", children }) {
  return <p style={{ position: "absolute", left: M, top: M, margin: 0, fontSize: "13px", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: "var(--weight-medium)", color: tone === "ink" ? "var(--brass)" : "var(--tortoise)" }}>{children}</p>;
}

function SlideHeadline({ tone = "light", size = 51, width = 810, children }) {
  return <h1 style={{ position: "absolute", left: M, top: 125, margin: 0, width, fontFamily: "var(--font-display)", fontWeight: "var(--weight-regular)", fontSize: `${size}px`, lineHeight: 1.1, letterSpacing: "-0.012em", color: tone === "ink" ? "var(--text-on-inverse)" : "var(--text-display)" }}>{children}</h1>;
}

/* 01 — Cover. Ink, pin above a left-aligned stacked wordmark. */
function CoverSlide() {
  return (
    <Frame tone="ink" footer={false}>
      <img src="../../assets/pin-brass.svg" alt="" height="182" style={{ position: "absolute", left: M, top: 144 }} />
      <span style={{ position: "absolute", left: M, top: 328, fontFamily: "var(--font-display)", fontSize: "72px", lineHeight: 1, letterSpacing: "0.222em", color: "var(--morning)", textTransform: "uppercase" }}>Polished</span>
      <span style={{ position: "absolute", left: M, top: 420, fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "53px", lineHeight: 1, color: "var(--brass)" }}>&amp;</span>
      <span style={{ position: "absolute", left: M, top: 490, fontFamily: "var(--font-display)", fontSize: "72px", lineHeight: 1, letterSpacing: "0.444em", color: "var(--morning)", textTransform: "uppercase" }}>Pinned</span>
      <span style={{ position: "absolute", left: M, top: 588, fontSize: "14.5px", letterSpacing: "0.28em", color: "var(--tulle)", fontWeight: "var(--weight-regular)" }}>BRIDAL HAIR&nbsp; ·&nbsp; BY NOELLE</span>
      <span style={{ position: "absolute", right: M, top: 585, fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "20px", color: "var(--brass)" }}>Partnership · Venues &amp; Planners</span>
    </Frame>
  );
}

/* 02 — Statement with a Tulle side panel. */
function StatementSlide() {
  return (
    <Frame page="2">
      <div style={{ position: "absolute", left: 797, top: 130, width: 398, height: 422, background: "var(--surface-block)" }} />
      <SlideEyebrow>Why we&rsquo;re writing</SlideEyebrow>
      <SlideHeadline size={48} width={790}>You don&rsquo;t have a hair problem.<br />You have a timeline problem.</SlideHeadline>
      <p style={{ position: "absolute", left: M, top: 322, width: 624, margin: 0, fontSize: "18px", lineHeight: 1.6 }}>
        Every planner and venue coordinator in the GTA has had the same morning. The hair runs long. Photographs get pushed. The ceremony starts late. And the person who has to manage the room, the client and the schedule is you — not the stylist who created it.
      </p>
      <p style={{ position: "absolute", left: M, top: 494, width: 624, margin: 0, fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "29px", lineHeight: 1.3, color: "var(--tortoise)" }}>
        We built this business around that one problem.
      </p>
      <img src="../../assets/pin-brass.svg" alt="" height="96" style={{ position: "absolute", left: 840, top: 178 }} />
      <p style={{ position: "absolute", left: 840, top: 298, width: 317, margin: 0, fontFamily: "var(--font-display)", fontSize: "27px", lineHeight: 1.25, color: "var(--ink)" }}>
        The morning is the only part of a wedding day that has no slack in it.
      </p>
      <p style={{ position: "absolute", left: 840, top: 456, width: 317, margin: 0, fontSize: "16px", lineHeight: 1.5, color: "var(--tortoise)" }}>
        Everything after it inherits the delay.
      </p>
    </Frame>
  );
}

/* 04 — Three pillars, raised panels on Ink. */
function PillarsSlide() {
  const { Pillar } = DSS;
  const items = [
    ["Early", "Arrival ahead of call time, every wedding. The hair timeline is written and shared with you weeks in advance — not decided in the room."],
    ["Yours", "The bride still looks like herself. No surprises in the mirror, no renegotiation at 8am while you&rsquo;re waiting."],
    ["Holds", "Pinned properly, checked before we leave, and a touch-up kit left with the bride for the rest of the day."]
  ];
  return (
    <Frame tone="ink" page="4">
      <SlideEyebrow tone="ink">What we promise</SlideEyebrow>
      <SlideHeadline tone="ink">Three things, in this order.</SlideHeadline>
      {items.map(([word, body], i) => (
        <div key={word} style={{ position: "absolute", left: M + i * 371.5, top: 264, width: 336, height: 293, background: "var(--surface-inverse-raised)", padding: "29px 38px" }}>
          <p style={{ margin: "0 0 18px", fontFamily: "var(--font-display)", fontSize: "45px", lineHeight: 1, color: "var(--brass)" }}>{word}</p>
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.55, color: "var(--tulle)" }} dangerouslySetInnerHTML={{ __html: body }} />
        </div>
      ))}
      <p style={{ position: "absolute", left: M, top: 595, width: 1000, margin: 0, fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "23px", color: "var(--morning)" }}>
        Early is the one that matters to you. The other two are why the bride booked us.
      </p>
    </Frame>
  );
}

/* 05 — The timeline, brass-ruled rows. */
function TimelineSlide() {
  const rows = [
    ["6 weeks out", "Timeline built", "Hair running order written from your day-sheet and sent to you and the bride. Any conflict with photography or transport gets found here, not on the day."],
    ["The week of", "Confirmed", "Final party numbers, room access, parking and load-in confirmed in writing."],
    ["Morning, −30 min", "On site", "We arrive ahead of the agreed start. Set up is quiet and takes one corner of the room."],
    ["Morning", "Working", "Party first, bride second to last, so she&rsquo;s finished close to the photographs with time in hand. Veil fitted and tested before we leave."],
    ["Hand off", "Clear", "Room tidied, touch-up kit left with the bride, and we tell you we&rsquo;re done."]
  ];
  return (
    <Frame page="5">
      <SlideEyebrow>How a morning runs</SlideEyebrow>
      <SlideHeadline width={870}>You get the schedule before we do.</SlideHeadline>
      {rows.map(([when, title, body], i) => (
        <React.Fragment key={when}>
          <span style={{ position: "absolute", left: M, top: 253 + i * 83.5, fontSize: "12.5px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: "var(--weight-medium)", color: "var(--brass)" }}>{when}</span>
          <span style={{ position: "absolute", left: 273, top: 245 + i * 83.5, width: 220, fontFamily: "var(--font-display)", fontSize: "25px", lineHeight: 1.1, color: "var(--tortoise)" }}>{title}</span>
          <span style={{ position: "absolute", left: 499, top: 249 + i * 83.5, width: 672, fontSize: "15.5px", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: body }} />
          <span style={{ position: "absolute", left: M, top: 324 + i * 83.5, width: 1090, borderTop: "1px solid var(--brass)" }} />
        </React.Fragment>
      ))}
    </Frame>
  );
}

/* 06 — What you get / what we ask. */
function TwoColumnSlide() {
  const left = ["A named contact — Noelle, directly, not a booking inbox", "A reply to any enquiry within one working day", "A written commitment never to overrun the allotted slot"];
  const right = ["A recommendation when a bride asks about hair — a name, not a list", "An introduction to the couple, or a word to the planner beside you", "The day-sheet six weeks out, so the timeline is real", "And nothing else. No commission, no exclusivity, no fee"];
  const List = ({ items }) => (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "13px" }}>
      {items.map((t) => (
        <li key={t} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: "12px", alignItems: "start", fontSize: "16px", lineHeight: 1.45 }}>
          <img src="../../assets/pin-brass.svg" alt="" height="16" style={{ marginTop: "4px" }} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
  return (
    <Frame page="6">
      <div style={{ position: "absolute", left: M, top: 245, width: 538, height: 341, background: "var(--surface-block)" }} />
      <SlideEyebrow>Working together</SlideEyebrow>
      <SlideHeadline>What you get. What we ask.</SlideHeadline>
      <div style={{ position: "absolute", left: 125, top: 278, width: 456 }}>
        <p style={{ margin: "0 0 24px", fontFamily: "var(--font-display)", fontSize: "31px" }}>What you get</p>
        <List items={left} />
      </div>
      <div style={{ position: "absolute", left: 710, top: 278, width: 446 }}>
        <p style={{ margin: "0 0 24px", fontFamily: "var(--font-display)", fontSize: "31px" }}>What we ask</p>
        <List items={right} />
      </div>
      <p style={{ position: "absolute", left: M, top: 609, width: 1095, margin: 0, fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "23px", color: "var(--tortoise)" }}>
        We don&rsquo;t pay for referrals. A recommendation that was bought isn&rsquo;t worth having — yours or ours.
      </p>
    </Frame>
  );
}

/* 08 — The work, three photo slots. */
function PhotoGridSlide() {
  const shots = ["back-of-head, sharp, plain background", "hands working, mid-pin", "the party — bridesmaids and family, done and waiting"];
  return (
    <Frame page="8">
      <SlideEyebrow>The work</SlideEyebrow>
      <SlideHeadline size={46} width={912}>Photographed from behind, in the room, as we go.</SlideHeadline>
      {shots.map((s, i) => (
        <div key={i} style={{ position: "absolute", left: M + i * 369.6, top: 259, width: 346, height: 302, background: "var(--surface-block)", padding: "24px", display: "flex", alignItems: "flex-end" }}>
          <span style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--tortoise)", fontWeight: "var(--weight-regular)" }}>PHOTO: {s}</span>
        </div>
      ))}
      <p style={{ position: "absolute", left: M, top: 590, width: 1095, margin: 0, fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "24px", color: "var(--tortoise)" }}>
        The back of the head is the product. That is what we photograph, in the light of the room we worked in.
      </p>
    </Frame>
  );
}

/* 09 — Three testimonials. */
function TestimonialsSlide() {
  const { Testimonial } = DSS;
  return (
    <Frame page="9">
      <SlideEyebrow>What brides say</SlideEyebrow>
      <SlideHeadline>The word we&rsquo;re aiming for is calm.</SlideHeadline>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ position: "absolute", left: 115 + i * 371.5, top: 293, width: 269 }}>
          <Testimonial size="20px" credit="Bride, venue, year">
            &ldquo; Testimonial — pull a quote that mentions timing, calm, or feeling like herself. &rdquo;
          </Testimonial>
        </div>
      ))}
      <p style={{ position: "absolute", left: M, top: 561, width: 1095, margin: 0, fontSize: "16px", color: "var(--tortoise)" }}>
        Choose reviews that praise the morning, not the hairstyle. A planner is listening for reliability.
      </p>
    </Frame>
  );
}

/* 10 — Closing. */
function ClosingSlide() {
  return (
    <Frame tone="ink" footer={false}>
      <img src="../../assets/pin-brass.svg" alt="" height="144" style={{ position: "absolute", left: M, top: 110 }} />
      <h1 style={{ position: "absolute", left: M, top: 272, width: 816, margin: 0, fontFamily: "var(--font-display)", fontWeight: "var(--weight-regular)", fontSize: "61px", lineHeight: 1.05, letterSpacing: "-0.015em", color: "var(--morning)" }}>
        We&rsquo;re set up before<br />your call time.
      </h1>
      <span style={{ position: "absolute", left: M, top: 480, width: 403, borderTop: "1px solid var(--brass)" }} />
      <p style={{ position: "absolute", left: M, top: 504, margin: 0, fontFamily: "var(--font-display)", fontSize: "27px", color: "var(--brass)" }}>Noelle · Polished &amp; Pinned</p>
      <p style={{ position: "absolute", left: M, top: 557, margin: 0, fontSize: "15.5px", letterSpacing: "0.02em", color: "var(--tulle)" }}>
        hello@polishedandpinned.ca&nbsp;&nbsp; ·&nbsp;&nbsp; @polishedandpinnedbridal&nbsp;&nbsp; ·&nbsp;&nbsp; polishedandpinned.ca
      </p>
      <p style={{ position: "absolute", left: M, top: 610, margin: 0, fontSize: "15.5px", color: "var(--sage)" }}>
        Happy to walk a venue, meet the team, or be on standby for a date you&rsquo;re holding.
      </p>
    </Frame>
  );
}

Object.assign(window, { Frame, CoverSlide, StatementSlide, PillarsSlide, TimelineSlide, TwoColumnSlide, PhotoGridSlide, TestimonialsSlide, ClosingSlide });
