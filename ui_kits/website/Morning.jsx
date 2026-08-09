const DSm = window.PolishedAmpPinnedDesignSystem_6a1c01;

function Morning({ go }) {
  const { SectionHead, Pillar, Block, PullQuote, Button, PhotoFrame, Eyebrow } = DSm;
  return (
    <window.Page current="morning" go={go}>
      <window.Section>
        <SectionHead headline="We take over the getting-ready room." size="40px" lede="Not the ceremony — the four unhurried hours before it. The timeline, the running order, the veil, and the room handed back tidy." />
      </window.Section>

      <window.Section tone="ink" rule={false}>
        <SectionHead tone="inverse" headline="Three things, in this order." size="34px" style={{ marginBottom: "var(--space-7)" }} />
        <div className="pp-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", background: "rgba(239,237,231,.14)", border: "1px solid rgba(239,237,231,.14)" }}>
          <Pillar tone="inverse" word="Early" fear="Will she actually show up?">Arrival ahead of call time, every wedding. The timeline is written and shared weeks in advance — not decided in the room.</Pillar>
          <Pillar tone="inverse" word="Yours" fear="Will I look like myself?">The reference photo is a starting point, not a target. The trial exists to find the version that works on your hair.</Pillar>
          <Pillar tone="inverse" word="Holds" fear="Will it fall out by dinner?">Pinned properly, checked before we leave, and a touch-up kit left with you for the rest of the day.</Pillar>
        </div>
      </window.Section>

      <window.Section>
        <div className="pp-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--stack-gap)" }}>
          <Block padding="34px 36px">
            <Eyebrow style={{ marginBottom: "var(--space-5)" }}>Inside the morning</Eyebrow>
            <window.PinBullets items={[
              "A trial, booked as its own appointment",
              "A written hair timeline for the day",
              "Hair for you and your party, on that schedule",
              "Veil and accessory fitting, tested before we leave",
              "A touch-up kit left behind",
              "Care and prep instructions the week before"
            ]} />
          </Block>
          <Block surface="outline" padding="34px 36px">
            <Eyebrow style={{ marginBottom: "var(--space-5)" }}>Deliberately outside it</Eyebrow>
            <p>No makeup, no planning, no photography. The lane is narrow on purpose — a specialist who does one thing properly is easier to trust and easier to recommend.</p>
            <p style={{ marginTop: "var(--space-4)" }}>Where you need makeup, you get a name from a list we&rsquo;d use ourselves.</p>
            <p style={{ marginTop: "var(--space-4)", color: "var(--text-secondary)" }}>Never two weddings in a day. The promise to arrive early doesn&rsquo;t survive a double booking.</p>
          </Block>
        </div>
      </window.Section>

      <window.Section tone="tulle" rule={false}>
        <div className="pp-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-9)", alignItems: "center" }}>
          <PullQuote tone="plain" size="27px">The morning is the only part of a wedding day that has no slack in it. Everything after it inherits the delay.</PullQuote>
          <PhotoFrame src="../../assets/photos/braided-updo-path.jpg" alt="Bride walking a field path, braided low updo seen from behind" ratio="4 / 5" />
        </div>
      </window.Section>

      <window.Section rule={false} style={{ paddingBottom: "var(--space-10)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)", flexWrap: "wrap" }}>
          <h2 className="pp-subhead" style={{ maxWidth: "22ch" }}>Tell us the date and where you&rsquo;re getting ready.</h2>
          <Button onClick={() => go("enquire")}>Start an enquiry</Button>
        </div>
      </window.Section>
    </window.Page>
  );
}

Object.assign(window, { Morning });
