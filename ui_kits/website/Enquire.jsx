const DSe = window.PolishedAmpPinnedDesignSystem_6a1c01;

function Enquire({ go }) {
  const { SectionHead, Field, Input, Select, ChoiceGroup, Button, Block, PullQuote, Eyebrow } = DSe;
  const [sent, setSent] = React.useState(false);
  const [band, setBand] = React.useState("");
  const [form, setForm] = React.useState({ name: "", email: "", date: "", location: "", party: "", notes: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const doneRef = React.useRef(null);
  React.useEffect(() => { if (sent && doneRef.current) doneRef.current.focus(); }, [sent]);

  if (sent) {
    return (
      <window.Page current="enquire" go={go}>
        <window.Section rule={false} style={{ paddingTop: "var(--space-10)", paddingBottom: "var(--space-10)" }}>
          <div role="status" aria-live="polite">
          <Eyebrow style={{ marginBottom: "var(--space-5)" }}>Enquiry received</Eyebrow>
          <h1 className="pp-headline" ref={doneRef} tabIndex={-1} style={{ maxWidth: "16ch", outlineOffset: "4px" }}>Thank you. You&rsquo;ll hear back within one working day.</h1>
          <p style={{ marginTop: "var(--space-6)", maxWidth: "52ch" }}>
            We&rsquo;ll check {form.date ? form.date : "your date"} against the calendar and come back with a real number and the shape of the morning — not a price list.
          </p>
          </div>
          <div style={{ marginTop: "var(--space-7)", display: "flex", gap: "var(--space-3)" }}>
            <Button variant="secondary" onClick={() => go("work")}>See recent work</Button>
            <Button variant="quiet" onClick={() => { setSent(false); }}>Send another</Button>
          </div>
        </window.Section>
      </window.Page>
    );
  }

  return (
    <window.Page current="enquire" go={go}>
      <window.Section>
        <div className="pp-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: "var(--space-9)", alignItems: "start" }}>
          <div>
            <SectionHead eyebrow="Enquire" headline="Tell us about the morning." size="34px" />
            <p style={{ marginTop: "var(--space-6)" }}>There&rsquo;s no price list here on purpose. Every morning is a different length, a different party and a different drive, so a published number would be wrong for most of you.</p>
            <p style={{ marginTop: "var(--space-4)" }}>Fill this in and we&rsquo;ll come back within one working day with a real figure and the shape of your morning.</p>
            <Block padding="24px 26px" style={{ marginTop: "var(--space-7)" }}>
              <PullQuote tone="plain" size="19px">We&rsquo;re set up before your call time.</PullQuote>
            </Block>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}
          >
            <div className="pp-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)" }}>
              <Field label="Your name" htmlFor="f-name" required><Input id="f-name" name="name" autoComplete="name" value={form.name} onChange={set("name")} required /></Field>
              <Field label="Email" htmlFor="f-email" required><Input id="f-email" name="email" type="email" inputMode="email" autoComplete="email" spellCheck={false} placeholder="you@example.com" value={form.email} onChange={set("email")} required /></Field>
              <Field label="Wedding date" htmlFor="f-date" required><Input id="f-date" name="wedding-date" type="date" autoComplete="off" value={form.date} onChange={set("date")} required /></Field>
              <Field label="Party size" htmlFor="f-party">
                <Select id="f-party" name="party-size" placeholder="How many heads?" value={form.party} onChange={set("party")} options={["Just me", "Two to four", "Five to eight", "More than eight"]} />
              </Field>
            </div>
            <Field label="Getting-ready location" htmlFor="f-loc" hint="A suite, a house, or the venue. An address or a neighbourhood is fine.">
              <Input id="f-loc" name="location" autoComplete="street-address" value={form.location} onChange={set("location")} />
            </Field>
            <Field label="Budget band" hint="A range, not a commitment. It tells us which shape of morning to quote.">
              <ChoiceGroup name="budget" columns={4} value={band} onChange={setBand} options={[
                { value: "a", label: "Under $800" },
                { value: "b", label: "$800 – $1,400" },
                { value: "c", label: "$1,400 – $2,200" },
                { value: "d", label: "Still working it out", note: "Perfectly fine" }
              ]} />
            </Field>
            <Field label="Anything else" htmlFor="f-notes" hint="Fine hair, an early start, a venue we should know about, a mother of the bride who&rsquo;d like her hair done too.">
              <Input id="f-notes" name="notes" multiline rows={4} value={form.notes} onChange={set("notes")} />
            </Field>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)" }}>
              <Button type="submit">Send the enquiry</Button>
              <span className="pp-caption">We reply within one working day.</span>
            </div>
          </form>
        </div>
      </window.Section>
    </window.Page>
  );
}

Object.assign(window, { Enquire });
