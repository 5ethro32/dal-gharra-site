'use client'

import ArticleLayout, {
  THEMES,
  Section,
  SectionLabel,
  SectionTitle,
  Divider,
  Highlight,
  AIGrid,
  AICell,
  FeatureList,
  Feature,
  CtaSection,
} from '@/components/ArticleLayout'

const NAV = [
  { id: 'shift', label: 'The Shift' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'technology', label: 'Technology' },
  { id: 'consistency', label: 'Consistency' },
  { id: 'opportunity', label: 'Opportunity' },
]

export default function ConsumerDutyArticle() {
  return (
    <ArticleLayout
      theme={THEMES.teal}
      heroTag="Regulatory Strategy"
      heroTitle={<>Consumer Duty changes <span className="amp">everything.</span></>}
      heroSubtitle="The new regulatory framework doesn't just add compliance requirements. It fundamentally reshapes what a branch is for."
      heroPrepared="Risk & Compliance Perspective &middot; Feb 2026"
      navItems={NAV}
    >
      {/* ═══ The Shift ═══ */}
      <Section id="shift">
        <SectionLabel>The Regulatory Shift</SectionLabel>
        <SectionTitle>A regulatory shift with structural consequences</SectionTitle>
        <p>Consumer Duty is often discussed as a compliance exercise &mdash; new documentation, updated processes, additional oversight. This framing misses the point entirely. What the FCA has introduced is a framework that forces financial institutions to <strong>prove, not just claim,</strong> that they are delivering good outcomes for customers.</p>
        <p>For branch networks, this has profound implications.</p>
      </Section>

      <Divider>&ldquo;Consumer Duty doesn&apos;t ask whether you gave good advice. It asks whether you can prove it.&rdquo;</Divider>

      {/* ═══ The Documentation Problem ═══ */}
      <Section id="documentation">
        <SectionLabel>The Problem</SectionLabel>
        <SectionTitle>The documentation burden</SectionTitle>
        <p>Every advisory conversation in a branch now carries a higher evidential burden. It is not enough to have a well-trained colleague who gives good advice. The firm must be able to demonstrate that the advice was appropriate, that alternatives were considered, and that the customer&apos;s understanding was verified.</p>

        <AIGrid>
          <AICell label="The Requirement">
            <p>Comprehensive, consistent records of <strong>every advisory interaction</strong> &mdash; demonstrating suitability, alternatives considered, and customer understanding.</p>
          </AICell>
          <AICell label="The Reality">
            <p>Colleagues spend significant portions of their day on <strong>post-meeting documentation</strong> rather than engaging with customers.</p>
          </AICell>
          <AICell label="The Irony">
            <p>A regulation designed to improve customer outcomes is <strong>reducing the time available</strong> for the interactions that produce those outcomes.</p>
          </AICell>
          <AICell label="The Risk">
            <p>Inconsistent documentation quality across a large branch network creates <strong>regulatory exposure</strong> regardless of actual advice quality.</p>
          </AICell>
        </AIGrid>

        <p style={{ marginTop: '1.5rem' }}>In the current operating model, this creates an enormous administrative load. The irony is stark: a regulation designed to improve customer outcomes is, in practice, reducing the time available for the customer interactions that produce those outcomes.</p>
      </Section>

      <Divider>&ldquo;The regulation demands comprehensive records. The current model demands colleagues spend their time writing them. Something has to give.&rdquo;</Divider>

      {/* ═══ Where Technology Fits ═══ */}
      <Section id="technology">
        <SectionLabel>The Solution</SectionLabel>
        <SectionTitle>Where technology fits</SectionTitle>
        <p>This is precisely where AI-assisted documentation becomes not a luxury but a necessity. If the regulatory framework demands comprehensive, consistent records of every advisory interaction, then the only sustainable approach is to <strong>automate the capture and structuring of that information.</strong></p>

        <FeatureList>
          <Feature><strong>Real-time interaction capture</strong> &mdash; conversations documented as they happen, not reconstructed from memory hours later. Structured, searchable, and audit-ready.</Feature>
          <Feature><strong>Suitability prompts</strong> &mdash; during conversations, not after. AI surfaces relevant regulatory requirements, product considerations, and disclosure needs in the moment.</Feature>
          <Feature><strong>Outcome verification</strong> &mdash; automated checks that the required elements of an advisory conversation have been covered before the interaction concludes.</Feature>
          <Feature><strong>Consistent formatting</strong> &mdash; every record follows the same structure regardless of which colleague, which branch, which day. The regulatory standard is built into the tool, not dependent on individual diligence.</Feature>
        </FeatureList>

        <p>The alternative &mdash; asking branch colleagues to spend ever more time on paperwork &mdash; is a path that leads to worse customer experiences, higher staff burnout, and ultimately, the very outcomes Consumer Duty was designed to prevent.</p>
      </Section>

      <Divider>&ldquo;The only sustainable way to meet the evidential standard is to build it into the interaction itself &mdash; not bolt it on afterwards.&rdquo;</Divider>

      {/* ═══ Consistency at Scale ═══ */}
      <Section id="consistency">
        <SectionLabel>The Standard</SectionLabel>
        <SectionTitle>Consistency at scale</SectionTitle>
        <p>Consumer Duty also demands consistency. A customer in any branch, on any day, should receive advice that meets the same standard. This is extraordinarily difficult to achieve through training alone, particularly across a large network with natural variation in colleague experience and expertise.</p>
        <p>AI-powered guidance systems can help close this gap &mdash; not by replacing professional judgement, but by ensuring that <strong>every colleague has access to the same up-to-date information, the same regulatory context, and the same decision-support tools</strong> during every conversation.</p>

        <Highlight>
          <p><strong>The key insight:</strong> Consumer Duty doesn&apos;t just raise the compliance bar. It makes the case for technology investment that many institutions have been debating for years. The regulation, properly understood, is not an obstacle to branch transformation. It is the strongest argument for it.</p>
        </Highlight>
      </Section>

      {/* ═══ The Opportunity ═══ */}
      <Section id="opportunity">
        <SectionLabel>The Opportunity</SectionLabel>
        <SectionTitle>Regulation as catalyst</SectionTitle>
        <p>Most institutions will treat Consumer Duty as a cost &mdash; another compliance burden requiring more people, more process, more documentation. That response is understandable but short-sighted.</p>
        <p>The institutions that see Consumer Duty as a <strong>catalyst for genuine transformation</strong> &mdash; investing in the tools, the operating model, and the colleague capability that makes better outcomes sustainable &mdash; will find themselves with a branch network that is not just compliant, but genuinely differentiated.</p>
        <p><strong>The regulation is doing what competitive pressure alone could not: forcing the conversation about what a branch is actually for.</strong></p>
      </Section>

      <CtaSection
        title="The regulation isn't the obstacle."
        subtitle="It's the strongest argument for the transformation the branch network needs."
      />
    </ArticleLayout>
  )
}
