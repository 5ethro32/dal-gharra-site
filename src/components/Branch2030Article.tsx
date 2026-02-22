'use client'

import ArticleLayout, {
  THEMES,
  Section,
  SectionLabel,
  SectionTitle,
  Divider,
  Highlight,
  StatsRow,
  Stat,
  AIGrid,
  AICell,
  FeatureList,
  Feature,
  PhaseTimeline,
  PhaseItem,
  CtaSection,
} from '@/components/ArticleLayout'

const NAV = [
  { id: 'pressure', label: 'Pressure' },
  { id: 'shift', label: 'The Shift' },
  { id: 'genai', label: 'GenAI' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'vision', label: '2030 Vision' },
]

export default function Branch2030Article() {
  return (
    <ArticleLayout
      theme={THEMES.green}
      heroTag="BCB Channel Development"
      heroTitle={<>The branch doesn&apos;t disappear. It <span className="amp">evolves.</span></>}
      heroSubtitle="How GenAI transforms branches from service locations into advisory platforms by 2030."
      heroPrepared="Associate Director — Branch Transformation &middot; Feb 2026"
      navItems={NAV}
    >
      {/* ═══ The Pressure ═══ */}
      <Section id="pressure">
        <SectionLabel>The Pressure</SectionLabel>
        <SectionTitle>Three forces are converging on the branch</SectionTitle>
        <p>For decades, the branch existed as a service location &mdash; somewhere customers went to do things. That model is under pressure from three directions simultaneously, and they&apos;re compounding.</p>
        <p>The question isn&apos;t whether branches need to change. It&apos;s whether the change is <strong>strategic and intentional, or whether it happens to us.</strong></p>
      </Section>

      <Divider>&ldquo;82% of businesses expect the same experience banking for their company as when they bank personally.&rdquo;</Divider>

      {/* ═══ The Shift ═══ */}
      <Section id="shift">
        <SectionLabel>The Shift</SectionLabel>
        <SectionTitle>What&apos;s actually changing</SectionTitle>

        <AIGrid>
          <AICell label="Customer Expectations">
            <p>Consumer-grade digital is baseline. Seamless channel movement is assumed. <strong>SME clients expect proactive, insight-led engagement</strong> &mdash; not a queue and a form.</p>
          </AICell>
          <AICell label="Service Mix">
            <p>Routine transactions are migrating to digital. What remains in-branch is complex and high-value &mdash; <strong>but more expensive to deliver per interaction.</strong></p>
          </AICell>
          <AICell label="Trust & Compliance">
            <p>Fraud is more sophisticated. Consumer Duty means <strong>every interaction needs to be higher quality and better documented.</strong> The bar is rising.</p>
          </AICell>
          <AICell label="Economic Pressure">
            <p>Branches carry significant property and people cost. <strong>If the value stays at service-level, the economics don&apos;t hold.</strong> Advisory-level changes the equation.</p>
          </AICell>
        </AIGrid>

        <p style={{ marginTop: '1.5rem' }}>None of these pressures are temporary. They&apos;re structural shifts in how customers behave, what regulators expect, and what the branch costs to run. <strong>The branch must move up the value chain &mdash; or contract.</strong></p>
      </Section>

      <Divider>&ldquo;The branch can&apos;t justify its economics on service alone. It either becomes advisory &mdash; or it becomes a cost line we&apos;re managing down.&rdquo;</Divider>

      {/* ═══ GenAI ═══ */}
      <Section id="genai">
        <SectionLabel>The Opportunity</SectionLabel>
        <SectionTitle>GenAI makes the shift possible</SectionTitle>
        <p>Until recently, the kind of real-time intelligence, personalised insight, and automated compliance that an advisory model requires would have demanded huge investment in bespoke systems.</p>
        <p>That&apos;s changed. <strong>GenAI collapses the gap between what a relationship manager knows and what they need to know</strong> &mdash; surfacing insight, prompting compliance, and documenting interactions in real time.</p>
        <p>This isn&apos;t about replacing people. It&apos;s about elevating the human interaction &mdash; making the branch conversation richer, faster, and more valuable than anything a digital channel can replicate.</p>
      </Section>

      {/* ═══ Four Capabilities ═══ */}
      <Section id="capabilities">
        <SectionLabel>The Capabilities</SectionLabel>
        <SectionTitle>Four ways GenAI transforms the 2030 branch</SectionTitle>

        <FeatureList>
          <Feature><strong>AI-Augmented Relationship Management</strong> &mdash; real-time customer and sector insight surfaced during conversations. Embedded compliance and suitability prompts. Credit documentation that practically writes itself.</Feature>
          <Feature><strong>In-Branch SME Intelligence</strong> &mdash; cashflow forecasting, scenario modelling, growth diagnostics and benchmarking. The RM becomes a strategic advisor, not a form-filler.</Feature>
          <Feature><strong>Trust &amp; Fraud Intervention</strong> &mdash; behavioural anomaly alerts at point of interaction. Intelligent scam coaching when vulnerable customers are at risk. A genuine differentiator in how people experience the branch.</Feature>
          <Feature><strong>Re-engineered Branch Operations</strong> &mdash; predictive demand forecasting, intelligent triage and appointment orchestration, automated KYC and administrative resolution. The back-office becomes invisible.</Feature>
        </FeatureList>

        <Highlight>
          <p><strong>The common thread:</strong> GenAI doesn&apos;t replace the human interaction. It makes the human interaction the highest-value part of the customer journey &mdash; supported by intelligence that no individual could assemble manually.</p>
        </Highlight>
      </Section>

      <Divider>&ldquo;Imagine a relationship manager with real-time sector benchmarks, cashflow patterns, and compliance prompts &mdash; surfaced in the moment. The RM isn&apos;t replaced. They&apos;re elevated.&rdquo;</Divider>

      {/* ═══ 2030 Vision ═══ */}
      <Section id="vision">
        <SectionLabel>The 2030 Branch</SectionLabel>
        <SectionTitle>From service location to intelligence hub</SectionTitle>
        <p>By 2030, the branch that has embraced GenAI looks fundamentally different &mdash; not in its physical form, but in what happens inside it.</p>

        <StatsRow>
          <Stat number="Advisory" label="Not transactional" />
          <Stat number="Scalable" label="Economically sustainable" />
          <Stat number="Trusted" label="Differentiated by trust" />
        </StatsRow>

        <p>Every in-branch conversation is informed by data the customer can&apos;t access elsewhere. Every compliance requirement is met without slowing the interaction down. Every colleague has tools that make them better at the parts of their job that matter most.</p>
        <p><strong>The branch becomes the place you go when the decision is important enough to want a human &mdash; and that human has everything they need to help you well.</strong></p>
      </Section>

      {/* ═══ The Strategic Choice ═══ */}
      <Section>
        <SectionLabel>The Strategic Choice</SectionLabel>
        <SectionTitle>This is a decision, not a technology project</SectionTitle>

        <PhaseTimeline>
          <PhaseItem label="Path A" title="Elevate" description="Use GenAI to transform the branch into a high-value, advisory-led platform. Invest in the RM role, the data infrastructure, and the operating model that makes it work. The branch becomes a competitive advantage." />
          <PhaseItem label="Path B" title="Contract" description="Allow the branch to remain a service channel as transactions continue migrating to digital. Manage the cost base down. The branch becomes a legacy obligation rather than a strategic asset." hollow last />
        </PhaseTimeline>

        <Highlight>
          <p>The technology to enable Path A exists today. <strong>What&apos;s needed is the strategic commitment to redesign the branch around advisory value &mdash; not just add AI tools to the existing model.</strong></p>
        </Highlight>
      </Section>

      <CtaSection
        title="The question isn't whether the technology can do it."
        subtitle="It's whether we choose to invest in that direction."
        footerMark="branch 2030"
      />
    </ArticleLayout>
  )
}
