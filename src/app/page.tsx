import ScrollReveal from '@/components/ScrollReveal'
import HeroParallax from '@/components/HeroParallax'
import PostCard from '@/components/PostCard'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <HeroParallax>
          <p className="hero-tag">Risk &middot; Culture &middot; Transformation</p>
          <h1>Dall <span className="amp">Gharra</span></h1>
          <p className="hero-subtitle">
            Twenty years helping people navigate risk, change, and the systems around them.
          </p>
          <p className="hero-prepared">Glasgow</p>
        </HeroParallax>
        <span className="scroll-hint">scroll<span className="arrow"></span></span>
      </section>

      {/* Inline Quote */}
      <div className="inline-quote">
        <div className="inline-quote-rule" />
        <p className="inline-quote-text">
          The best risk work starts with people &mdash; understanding them, supporting them, backing them.
        </p>
      </div>

      {/* Journey */}
      <div className="section" id="about">
        <ScrollReveal>
          <p className="section-label">Journey</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="section-title">
            The person behind the process.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <div className="journey-timeline">
            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-dot" />
                <div className="journey-line" />
              </div>
              <div>
                <p className="journey-period">2005</p>
                <p className="journey-role">Joined Lloyds Banking Group</p>
                <p className="journey-desc">
                  Eight roles across digital banking, credit risk, global sanctions,
                  commercial finance, and business banking.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-dot" />
                <div className="journey-line" />
              </div>
              <div>
                <p className="journey-period">Sanctions &amp; Credit Risk</p>
                <p className="journey-role">Global Sanctions &amp; Credit Risk</p>
                <p className="journey-desc">
                  Deep expertise in financial crime, credit risk frameworks,
                  and regulatory compliance across the Group.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-dot" />
                <div className="journey-line" />
              </div>
              <div>
                <p className="journey-period">DE&amp;I Strategy</p>
                <p className="journey-role">Group Diversity, Equity &amp; Inclusion</p>
                <p className="journey-desc">
                  Led the Group&apos;s Race strategy &mdash; budget, communications, and delivery.
                  Built DE&amp;I e-learning. Delivered heritage month programmes for South Asian
                  and East and Southeast Asian communities.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-dot" />
                <div className="journey-line" />
              </div>
              <div>
                <p className="journey-period">Risk Culture</p>
                <p className="journey-role">Lloyds Living &amp; Local Support Risk</p>
                <p className="journey-desc">
                  Embedded risk culture and control frameworks. Coordinated CIFD activity
                  across Business &amp; Commercial Banking as Local Support Risk Manager.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-marker">
                <div className="journey-dot journey-dot--active" />
              </div>
              <div>
                <p className="journey-period">Present</p>
                <p className="journey-role">Risk Manager, Chief Operating Office</p>
                <p className="journey-desc">
                  Business &amp; Commercial Banking. Leading CIFD process improvement,
                  governance reviews, and risk coaching for Relationship Managers.
                </p>
              </div>
            </div>
          </div>

          {/* Credential Pills */}
          <div className="journey-credentials">
            <span className="credential-pill">BBC Radio Scotland</span>
            <span className="credential-pill">Chartered Banking Diploma</span>
            <span className="credential-pill">BSc Fire Risk Engineering</span>
            <span className="credential-pill">Glasgow Caledonian University</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Inline Quote */}
      <div className="inline-quote">
        <div className="inline-quote-rule" />
        <p className="inline-quote-text">
          The people closest to the risk are the ones who should be shaping the response.
        </p>
      </div>

      {/* Recent Writing */}
      <div className="section">
        <ScrollReveal>
          <p className="section-label">Writing</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="section-title">Recent</h2>
        </ScrollReveal>
        <ScrollReveal className="reveal-stagger-children">
          <div>
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Inline Quote */}
      <div className="inline-quote">
        <div className="inline-quote-rule" />
        <p className="inline-quote-text">
          Interested in how people, culture, and technology are reshaping banking?
        </p>
      </div>

      {/* Connect */}
      <div className="section" id="connect" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <p className="section-label" style={{ justifyContent: 'center' }}>Connect</p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 className="section-title">Let&apos;s talk.</h2>
        </ScrollReveal>
        <ScrollReveal>
          <p style={{ maxWidth: '420px', margin: '0 auto 2rem' }}>
            Open to conversations on risk, governance, DE&amp;I, and the changing
            shape of financial services.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="connect-links">
            <a href="mailto:dgharra@hotmail.co.uk" className="connect-btn" aria-label="Send email to Dall Gharra">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
            <a href="https://www.linkedin.com/in/dall-gharra" target="_blank" rel="noopener noreferrer" className="connect-btn" aria-label="Dall Gharra on LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </ScrollReveal>
      </div>
    </>
  )
}
