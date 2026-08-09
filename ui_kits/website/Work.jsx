const DSw = window.PolishedAmpPinnedDesignSystem_6a1c01;

function Work({ go }) {
  const { SectionHead, PhotoFrame, Testimonial, Eyebrow, Button } = DSw;
  const shots = [
    ["chignon-low-back.jpg", "Low chignon pinned at the nape, seen from behind", "Low chignon, pinned at the nape · Kortright Centre"],
    ["rollers-in-the-room.jpg", "Setting rollers through long dark hair before the pin-up", "Setting rollers, 7.40am · Distillery District"],
    ["hands-working-bw.jpg", "Noelle sectioning a bride’s hair mid-set", "Mid-set, before the pin-up · Oakville"],
    ["party-done-waiting.jpg", "Bride and her party finished and waiting in the getting-ready room", "The party, done and waiting · Niagara"],
    ["updo-high-profile.jpg", "High textured updo with a soft face-framing piece", "High textured updo · Prince Edward County"],
    ["half-up-comb.jpg", "Half-up waves with a crystal comb set at the crown", "Half-up waves, crystal comb · Muskoka"]
  ];
  return (
    <window.Page current="work" go={go}>
      <window.Section>
        <SectionHead eyebrow="The work" headline="Photographed from behind, in the room, as we go." size="40px" lede="The back of the head is the product. That is what we photograph, in the light of the room we worked in." style={{ marginBottom: "var(--space-8)" }} />
        <div className="pp-stack-2" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--stack-gap)" }}>
          {shots.map(([file, alt, caption], i) => <PhotoFrame key={i} src={"../../assets/photos/" + file} alt={alt} ratio="4 / 5" caption={caption} />)}
        </div>
      </window.Section>

      <window.Section tone="tulle" rule={false}>
        <Eyebrow style={{ marginBottom: "var(--space-7)" }}>What brides say</Eyebrow>
        <div className="pp-stack" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-8)" }}>
          <Testimonial credit="Bride, Kortright Centre, 2025">She was set up before I&rsquo;d finished my coffee, and nothing that morning ran late.</Testimonial>
          <Testimonial credit="Bride, Distillery District, 2025">I looked like me. That was the whole thing I was worried about and she just&hellip; knew.</Testimonial>
          <Testimonial credit="Planner, Oakville, 2024">She sent me the running order six weeks out. I have never had that from a hair supplier.</Testimonial>
        </div>
      </window.Section>

      <window.Section rule={false} style={{ paddingBottom: "var(--space-10)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)", flexWrap: "wrap" }}>
          <h2 className="pp-subhead" style={{ maxWidth: "20ch" }}>If your date is still open, tell us where you&rsquo;re getting ready.</h2>
          <Button onClick={() => go("enquire")}>Start an enquiry</Button>
        </div>
      </window.Section>
    </window.Page>
  );
}

Object.assign(window, { Work });
