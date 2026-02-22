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
  { id: 'signal', label: 'Signal' },
  { id: 'reasoning', label: 'Reasoning' },
  { id: 'voice', label: 'Voice AI' },
  { id: 'documents', label: 'Documents' },
  { id: 'ignoring', label: 'Ignoring' },
]

export default function AIToolsArticle() {
  return (
    <ArticleLayout
      theme={THEMES.indigo}
      heroTag="AI in Financial Services"
      heroTitle={<>The tools worth <span className="amp">watching.</span></>}
      heroSubtitle="Most AI announcements are noise. A few developments genuinely matter for financial services professionals."
      heroPrepared="Technology Perspective &middot; Feb 2026"
      navItems={NAV}
    >
      {/* ═══ Cutting Through ═══ */}
      <Section id="signal">
        <SectionLabel>Signal vs Noise</SectionLabel>
        <SectionTitle>Cutting through the noise</SectionTitle>
        <p>The volume of AI-related announcements is relentless. New models, new products, new capabilities &mdash; every week brings another wave. For anyone working in financial services, the challenge is not awareness. It is discernment.</p>
        <p><strong>What actually matters? What will change how we work?</strong> And what is marketing wrapped in a press release?</p>
        <p>After spending considerable time separating signal from noise, here is where I am focusing my attention.</p>
      </Section>

      <Divider>&ldquo;The valuable AI applications in financial services aren&apos;t creative. They&apos;re precise, high-stakes, and auditable.&rdquo;</Divider>

      {/* ═══ Structured Reasoning ═══ */}
      <Section id="reasoning">
        <SectionLabel>Development 01</SectionLabel>
        <SectionTitle>Structured reasoning in large language models</SectionTitle>
        <p>The most significant development in the past twelve months has not been any single product launch. It has been the steady improvement in LLMs&apos; ability to follow complex instructions, maintain context over long conversations, and produce structured, reliable outputs.</p>

        <AIGrid>
          <AICell label="Why It Matters">
            <p>The valuable applications are not creative writing. They are <strong>precise, high-stakes tasks</strong>: summarising regulatory documents, extracting key terms, generating compliant communications.</p>
          </AICell>
          <AICell label="The Threshold">
            <p>The better models get at <strong>structured reasoning</strong>, the closer they get to being genuinely useful in a professional context where accuracy is non-negotiable.</p>
          </AICell>
        </AIGrid>

        <p style={{ marginTop: '1.5rem' }}>This matters for financial services because the bar for reliability is exceptionally high. A model that hallucinates occasionally is a novelty. A model that follows complex regulatory logic consistently is a transformation.</p>
      </Section>

      <Divider>&ldquo;A tool that correctly extracts information from a mortgage application 95% of the time is a curiosity. At 99.5%, it&apos;s a transformation.&rdquo;</Divider>

      {/* ═══ Voice AI ═══ */}
      <Section id="voice">
        <SectionLabel>Development 02</SectionLabel>
        <SectionTitle>Real-time voice and conversation AI</SectionTitle>
        <p>The ability for AI to participate in real-time conversations &mdash; not just transcribe them, but actively support them &mdash; is maturing faster than most people in banking realise. The implications for branch environments are significant.</p>

        <FeatureList>
          <Feature><strong>Real-time prompts during conversations</strong> &mdash; a reminder to discuss a specific product feature, a flag that the customer&apos;s circumstances suggest an alternative product.</Feature>
          <Feature><strong>Regulatory disclosure surfacing</strong> &mdash; a note that a particular disclosure needs to be made, triggered by the conversation context rather than a colleague&apos;s memory.</Feature>
          <Feature><strong>Automatic interaction documentation</strong> &mdash; the conversation is captured, structured, and made audit-ready without the colleague writing a single note.</Feature>
        </FeatureList>

        <Highlight>
          <p>This is not science fiction. The underlying technology exists today. <strong>The question is deployment readiness in regulated environments</strong> &mdash; privacy, data governance, and colleague acceptance.</p>
        </Highlight>
      </Section>

      {/* ═══ Document Understanding ═══ */}
      <Section id="documents">
        <SectionLabel>Development 03</SectionLabel>
        <SectionTitle>Document understanding and extraction</SectionTitle>
        <p>Financial services runs on documents &mdash; applications, contracts, regulatory filings, compliance reports. The ability of AI to read, understand, and extract structured information from these documents is improving dramatically.</p>
        <p>What interests me is not the headline capability but the <strong>reliability.</strong> We are approaching the threshold where automated document processing moves from experimental to production-grade.</p>

        <AIGrid>
          <AICell label="Applications">
            <p><strong>Mortgage applications, credit assessments, KYC documentation</strong> &mdash; structured extraction that previously required manual review.</p>
          </AICell>
          <AICell label="Regulatory">
            <p><strong>Policy documents, compliance filings, regulatory updates</strong> &mdash; summarisation and impact analysis at a speed no human team can match.</p>
          </AICell>
        </AIGrid>
      </Section>

      <Divider>&ldquo;The tools worth watching are the ones that make existing professionals more effective &mdash; not the ones that promise to make them redundant.&rdquo;</Divider>

      {/* ═══ What I'm Ignoring ═══ */}
      <Section id="ignoring">
        <SectionLabel>The Noise</SectionLabel>
        <SectionTitle>What I am ignoring</SectionTitle>
        <p>AI-generated images. Chatbots that try to be your friend. Autonomous agents that promise to replace entire job functions. These may have applications somewhere, but they are not where the near-term value lies for financial services professionals who need tools that are <strong>reliable, auditable, and compliant.</strong></p>

        <Highlight>
          <p><strong>The filter is simple:</strong> does this technology make an experienced professional measurably better at a high-stakes task? If the answer is yes, it&apos;s worth paying attention to. If the answer is &ldquo;it&apos;s impressive but I&apos;m not sure what I&apos;d use it for,&rdquo; it&apos;s noise.</p>
        </Highlight>

        <p>The tools worth watching are the ones that make existing professionals more effective &mdash; not the ones that promise to make them redundant.</p>
      </Section>

      <CtaSection
        title="The question isn't which AI tool to buy."
        subtitle="It's which capabilities will make your people genuinely better at the work that matters."
      />
    </ArticleLayout>
  )
}
