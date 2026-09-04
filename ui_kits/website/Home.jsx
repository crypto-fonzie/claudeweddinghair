const DSh = window.PolishedAmpPinnedDesignSystem_6a1c01;

function Home({ go }) {
  const { Button, Eyebrow, SectionHead, PhotoFrame, StepRow, PullQuote, Rule } = DSh;
  return (
    <window.Page current="home" go={go}>
      <div style={{ position: "relative", background: "var(--surface-block)", minHeight: "460px", display: "flex", alignItems: "center", padding: "var(--space-9) var(--page-gutter)" }}>
        <div className="pp-stack" style={{ maxWidth: "var(--content-max)", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 0.8fr", gap: "var(--space-9)", alignItems: "center" }}>
          <div>
          <h1 className="pp-hero pp-rise" style={{ margin: 0, maxWidth: "18ch", textWrap: "balance" }}>We&rsquo;re there before anyone else is.</h1>
          <p className="pp-lede pp-rise" style={{ marginTop: "var(--space-6)", maxWidth: "44ch", textWrap: "pretty", animationDelay: "80ms" }}>
            Mobile bridal hair across the GTA. Hair only, on location, one wedding a day.
          </p>
          <div className="pp-rise pp-cta-group" style={{ marginTop: "var(--space-7)", display: "flex", flexWrap: "wrap", gap: "var(--space-3)", animationDelay: "160ms" }}>
            <Button onClick={() => go("enquire")}>Start an enquiry</Button>
            <Button variant="secondary" onClick={() => go("work")}>See recent work</Button>
          </div>
          </div>
          <img src="../../assets/photos/walking-out-back.jpg" alt="Bride walking away across grass with the flower girl, braided low updo pinned at the nape" width="750" height="938" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
        </div>
      </div>

      <window.Section>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "flex-end", gap: "var(--space-7)", marginBottom: "var(--space-6)" }}>
          <a href="#work" onClick={(e) => { e.preventDefault(); go("work"); }} style={{ fontSize: "12px" }}>All of it</a>
        </div>
        <div className="pp-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--stack-gap)" }}>
          <PhotoFrame src="../../assets/photos/chignon-low-back.jpg" alt="Low chignon pinned at the nape, seen from behind" ratio="4 / 5" caption="Low chignon, pinned at the nape · Kortright, June" />
          <PhotoFrame src="../../assets/photos/hands-working-bw.jpg" alt="Noelle sectioning a bride’s hair mid-set" ratio="4 / 5" caption="Trial, natural light · Leslieville" />
          <PhotoFrame src="../../assets/photos/party-done-waiting.jpg" alt="Bride and her party finished and waiting in the getting-ready room" ratio="4 / 5" caption="The party, done and waiting · Niagara" />
        </div>
      </window.Section>

      <window.Section>
        <div className="pp-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "var(--space-9)", alignItems: "start" }}>
          <SectionHead eyebrow="What the morning includes" headline="A morning that runs on time." size="34px" />
          <window.PinBullets items={[
            "A trial, treated as a proper appointment rather than an audition",
            "A written hair timeline, shared with you and your planner",
            "Hair for you and your party, on that schedule",
            "Veil and accessory fitting, pinned and tested before we leave",
            "A touch-up kit left behind — pins, spray, a spare comb",
            "Care and prep instructions in the week before"
          ]} />
        </div>
      </window.Section>

      <window.Section tone="tulle" rule={false}>
        <SectionHead eyebrow="How it goes" headline="Three steps, and you know the timing after the first one." size="34px" style={{ marginBottom: "var(--space-7)" }} />
        <StepRow when="First" title="The consultation">A call or a coffee. We check the date, the location and the party size, and you get a real number before anything is booked.</StepRow>
        <StepRow when="Then" title="The trial">Two hours, booked as its own appointment. We find the version of your reference photo that works on your hair, and photograph it from the back.</StepRow>
        <StepRow when="The day" title="The morning" divider={false}>We arrive ahead of call time with the running order already written. Party first, you second to last, finished before the photographer needs you.</StepRow>
      </window.Section>

      <window.Section>
        <div className="pp-stack" style={{ display: "grid", gridTemplateColumns: ".75fr 1fr", gap: "var(--space-9)", alignItems: "end" }}>
          <PhotoFrame src="../../assets/photos/rollers-in-the-room.jpg" alt="Setting rollers through long dark hair before the pin-up" ratio="4 / 5" />
          <div>
            <SectionHead headline="I&rsquo;m Noelle." size="44px" style={{ marginBottom: "var(--space-6)" }} />
            <p className="pp-lede" style={{ margin: "0 0 var(--space-5)", maxWidth: "56ch", textWrap: "pretty" }}>
              I do the hair, and I do it myself. One wedding a day, hair only, in your room.
            </p>
            <p style={{ margin: "0 0 var(--space-7)", maxWidth: "56ch", textWrap: "pretty" }}>
              You&rsquo;ll have the running order six weeks out and I&rsquo;ll be set up before your call time. If something won&rsquo;t hold on your hair, you&rsquo;ll hear it at the trial rather than on the morning.
            </p>
            <a href="#morning" onClick={(e) => { e.preventDefault(); go("morning"); }} style={{ fontSize: "12px" }}>How the morning works</a>
          </div>
        </div>
      </window.Section>

      <window.Section>
        <SectionHead headline="Across the GTA." size="34px" style={{ marginBottom: "var(--space-6)" }} />
        <p style={{ margin: 0, maxWidth: "50ch", fontFamily: "var(--font-display)", fontSize: "23px", lineHeight: 1.5, textWrap: "pretty", color: "var(--text-secondary)" }}>
          Toronto and the inner suburbs: North York, Etobicoke, Scarborough, East York. West through Mississauga, Oakville, Burlington and Brampton. North to Vaughan, Markham, Richmond Hill, Aurora and Newmarket. East to Pickering, Ajax, Whitby and Oshawa. Niagara, Muskoka and Prince Edward County by arrangement.
        </p>
        <p style={{ margin: "var(--space-7) 0 0", maxWidth: "56ch", fontSize: "var(--size-body-sm)", lineHeight: "var(--leading-body-sm)", textWrap: "pretty" }}>
          Travel is quoted per wedding. Beyond ninety minutes we stay the night before, so the arrival time holds whatever the traffic does.
        </p>
      </window.Section>

      <window.Section rule={false} style={{ paddingBottom: "var(--space-10)" }}>
        <div className="pp-stack" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "var(--space-9)", alignItems: "center" }}>
          <PullQuote attribution="Noelle">The timeline goes out six weeks ahead. You&rsquo;ll know the shape of the morning before we do.</PullQuote>
          <div>
            <p style={{ marginBottom: "var(--space-6)" }}>There is no price list. Every morning is a different length, a different party and a different drive, so we talk first and give you a real number on the call.</p>
            <Button onClick={() => go("enquire")}>Start an enquiry</Button>
          </div>
        </div>
      </window.Section>
    </window.Page>
  );
}

Object.assign(window, { Home });
