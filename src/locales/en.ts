import type { LocaleMessages } from "./types";

const privacyContent = `
<div class="chapter">
  <h4>1. General Provisions</h4>
  <p>This Privacy Policy (the "Policy") governs the processing of information in connection with the use of the PayGuru technological platform.</p>
  <p>The PayGuru platform is a technological solution designed to automate and coordinate interactions between authorized participants within agreed partner models. The platform is not intended for public consumer use and does not provide services directly to end users.</p>
</div>
<div class="chapter">
  <h4>2. Jurisdiction and Regulation</h4>
  <p>Information processing is conducted within the operational structure registered under the jurisdiction of Nevis.</p>
  <p>This jurisdiction is selected to ensure operational flexibility and coordination between infrastructure participants. Unless otherwise agreed in writing, applicable law shall be the law of the operating company's jurisdiction.</p>
</div>
<div class="chapter">
  <h4>3. Purpose of Information Processing</h4>
  <p>The platform processes information solely for the following purposes:</p>
  <ul>
    <li>ensuring stable and reliable operation of the platform;</li>
    <li>technical support and diagnostics;</li>
    <li>monitoring system security and preventing abuse;</li>
    <li>automating interactions between authorized participants via platform interfaces;</li>
    <li>maintaining technical logs, records and operational reporting.</li>
  </ul>
  <p>Information processing is limited to the scope necessary to achieve the above purposes.</p>
</div>
<div class="chapter">
  <h4>4. Categories of Processed Information</h4>
  <p>As part of its technical operations, the platform may process and temporarily store the following categories of information:</p>
  <ul>
    <li>technical identifiers (IP address, user-agent, traceID);</li>
    <li>contact information provided by platform participants (email address, Telegram account);</li>
    <li>integration parameters (API keys, callback URLs);</li>
    <li>activity logs, system events, errors and incident records;</li>
    <li>metadata related to transaction routing, processing logic and internal notifications.</li>
  </ul>
  <p>The platform <strong>does not store payment card data, bank account credentials or end-user funds.</strong></p>
  <p>In certain scenarios, including e-commerce or payment orchestration models, the platform may technically receive, transmit or relay data provided by participants <strong>solely for the purpose of routing such data to authorized third-party service providers.</strong> Such processing is automated, transient and limited to technical transmission, without independent use, retention or control of such data by the platform.</p>
</div>
<div class="chapter">
  <h4>5. Technical Security Measures</h4>
  <p>The platform applies technical and organizational measures to protect processed information, including:</p>
  <ul>
    <li>transport-level encryption (SSL/TLS);</li>
    <li>role-based authentication and access control;</li>
    <li>separation of production and testing environments;</li>
    <li>access control via IP restrictions and key management;</li>
    <li>centralized logging, monitoring and alerting.</li>
  </ul>
  <p>The platform's security architecture follows principles aligned with applicable PCI DSS requirements within the technical scope of platform operations.</p>
</div>
<div class="chapter">
  <h4>6. Interaction with Third Parties</h4>
  <p>Information may be transmitted to third parties only to the extent necessary to:</p>
  <ul>
    <li>ensure technical compatibility of integrations;</li>
    <li>fulfill contractual arrangements between authorized participants;</li>
    <li>support infrastructure services such as hosting, storage, monitoring and security.</li>
  </ul>
  <p>All third-party interactions are limited to the minimum scope required for platform functionality.</p>
</div>
<div class="chapter">
  <h4>7. Data Retention</h4>
  <p>Information is retained for the period established by the platform's internal technical and operational policies.</p>
  <p>Data deletion or anonymization is performed automatically upon expiration of the applicable retention period or upon agreement with the relevant platform participant.</p>
</div>
<div class="chapter">
  <h4>8. Final Provisions</h4>
  <p>Use of the PayGuru platform constitutes acceptance of this Privacy Policy.</p>
  <p>The platform operator reserves the right to update this Policy to reflect technical, operational or regulatory changes.</p>
</div>
`;

const termsContent = `
<div class="chapter">
  <h4>1. General Provisions</h4>
  <p>These Terms of Service (hereinafter referred to as the "Terms") govern the access to and use of the PayGuru technological platform, including its web interfaces, APIs, dashboards and related infrastructure.</p>
  <p>PayGuru is a <strong>technology platform providing tools for orchestration, coordination and automation of payment-related processes</strong> between independent participants of an agreed partner model.</p>
  <p>The platform is <strong>not a public service</strong>, does not constitute a public offer and is available exclusively to authorized partners upon prior agreement.</p>
  <p>PayGuru <strong>does not act as a bank, payment institution, money service business, escrow agent or financial intermediary,</strong> unless explicitly agreed otherwise in a separate written agreement.</p>
</div>
<div class="chapter">
  <h4>2. Access and Registration</h4>
  <p>Access to the platform is granted only after:</p>
  <ul>
    <li>verification of the partner;</li>
    <li>confirmation of the intended use case;</li>
    <li>alignment on technical and operational requirements.</li>
  </ul>
  <p>Registration, access provisioning and API credentials issuance are performed manually by authorized administrators or designated representatives. The Company reserves the right to refuse or revoke access at its sole discretion.</p>
</div>
<div class="chapter">
  <h4>3. Platform Functionality</h4>
  <p>The PayGuru platform provides a set of <strong>technical tools for managing and coordinating payment flows,</strong> including but not limited to:</p>
  <ul>
    <li>creation and management of transaction records;</li>
    <li>routing and distribution of transactions between independent third-party providers;</li>
    <li>status tracking, callbacks and notifications;</li>
    <li>dispute handling workflows;</li>
    <li>reporting, analytics and reconciliation tools;</li>
    <li>API-based integrations.</li>
  </ul>
  <p>All functionality is <strong>configured individually per partner and project</strong> and reflects technical coordination logic rather than financial execution.</p>
</div>
<div class="chapter">
  <h4>4. Role of PayGuru and Payment Operations</h4>
  <p>PayGuru acts solely as <strong>a technological intermediary and orchestration layer.</strong></p>
  <p>PayGuru:</p>
  <ul>
    <li>does <strong>not</strong> accept funds from end users;</li>
    <li>does <strong>not</strong> hold, store or custody fiat assets;</li>
    <li>does <strong>not</strong> initiate or execute financial transfers;</li>
    <li>does <strong>not</strong> guarantee completion of transactions by third parties.</li>
  </ul>
  <p>All payment operations, including fund transfers, currency exchange, settlement and liquidity provision, are executed by <strong>independent third-party providers, executors or counterparties,</strong> selected by the partner or determined by agreed routing logic.</p>
  <p>Any transfer of value occurs <strong>outside of PayGuru's control</strong> and responsibility.</p>
</div>
<div class="chapter">
  <h4>5. User Responsibilities</h4>
  <p>The user agrees to:</p>
  <ul>
    <li>comply with all applicable laws and regulations in their jurisdiction;</li>
    <li>ensure that their use of the platform does not violate third-party rights;</li>
    <li>provide accurate and lawful information where required;</li>
    <li>independently assess the risks associated with payment operations and third-party providers.</li>
  </ul>
  <p>The user acknowledges that <strong>all business, financial and regulatory risks remain solely on the user and their counterparties.</strong></p>
</div>
<div class="chapter">
  <h4>6. Security and Confidentiality</h4>
  <p>The user is responsible for safeguarding access credentials, API keys and authentication data.</p>
  <p>The platform employs technical security measures including encryption, access controls, logging and monitoring.</p>
  <p>However, PayGuru <strong>does not guarantee uninterrupted operation or absolute security</strong> and shall not be liable for incidents caused by external systems, providers or user-side failures.</p>
</div>
<div class="chapter">
  <h4>7. Disputes and Adjustments</h4>
  <p>The platform may provide technical mechanisms for dispute handling, transaction adjustments and status corrections.</p>
  <p>Such mechanisms:</p>
  <ul>
    <li>do not constitute acceptance of liability by PayGuru;</li>
    <li>are executed strictly within the agreed technical workflows;</li>
    <li>do not imply financial responsibility for transaction outcomes.</li>
  </ul>
  <p>Final responsibility for dispute resolution lies with the parties involved in the underlying transaction.</p>
</div>
<div class="chapter">
  <h4>8. Limitation of Liability</h4>
  <p>To the maximum extent permitted by applicable law:</p>
  <ul>
    <li>PayGuru shall not be liable for indirect, incidental or consequential damages;</li>
    <li>PayGuru shall not be responsible for losses resulting from actions or omissions of third-party providers;</li>
    <li>PayGuru shall not be liable for failed, delayed or reversed transactions executed outside its infrastructure.</li>
  </ul>
  <p>The platform is provided <strong>"as is" and "as available"</strong> without warranties of any kind.</p>
</div>
<div class="chapter">
  <h4>9. Amendments</h4>
  <p>The Company reserves the right to modify these Terms at any time.</p>
  <p>Updated versions will be published on the website or made available through the platform interface.</p>
  <p>Continued use of the platform constitutes acceptance of the updated Terms.</p>
</div>
<div class="chapter">
  <h4>10. Governing Law and Company Information</h4>
  <p>The platform is operated by:</p>
  <ul>
    <li><strong>IntegraNova Dynamics LLC</strong></li>
    <li>Jurisdiction: Nevis</li>
    <li>Registration No.: L 24105</li>
  </ul>
  <p>These Terms shall be governed by and construed in accordance with the laws applicable to the operating company's jurisdiction, unless otherwise agreed in writing.</p>
</div>
<div class="chapter">
  <h4>11. Final Provisions</h4>
  <p>PayGuru functions exclusively as <strong>a technological coordination platform</strong> between independent participants.</p>
  <p>By using the platform, the user confirms full understanding of PayGuru's role, accepts these Terms and acknowledges that <strong>PayGuru does not act as a financial guarantor or payment processor.</strong></p>
</div>
`;

export const en: LocaleMessages = {
  pages: {
    homeTitle: "Payment orchestration system",
    legalCenter: "Legal Center",
  },
  common: {
    brandName: "PayGuru",
    close: "Close",
    language: "Language",
    copyright: "Copyright © 2026, Integranova Dynamics, LLC.",
  },
  actions: {
    scheduleCall: "Schedule a call",
    requestDemo: "Request demo access",
    download: "Download",
    send: "Send",
    signIn: "Sign in",
    expertConsultation: "Talk to an expert",
  },
  banner: {
    text: "Schedule a demo and see what we're building. Meet us at MAC Affiliate Conference in Armenia, May 26-27.",
    linkText: "See more.",
  },
  nav: {
    about: "About us",
    api: "API documentation",
    terms: "Terms of Service",
    contacts: "Contacts",
  },
  hero: {
    titleHtml: "Full control <br /> over money flows",
    textHtml: "<strong>PayGuru</strong> is a multifunctional payment orchestration system with global coverage.",
  },
  geographyNew: {
    title: "We operate on every continent",
    textHtml: "Years of cooperation with trusted companies around the world let us <br> choose solutions that are truly reliable for your business.",
    coverageTitle: "Global coverage",
    coverageTextHtml: "Support for local methods with flexible cascading <br> routing by GEO, bank, currency, amount and risk.",
    bullets: [
      {
        title: "Anti-fraud filters:",
        textHtml: "by amount, frequency, BIN/<br>ISSUER, time of day, geo and behavioral <br> patterns.",
      },
      {
        title: "Smart rates/FX:",
        textHtml: "external source or fixed rate <br> by route.",
      },
    ],
  },
  geographyLegacy: {
    title: "Geography and coverage",
    cardTitle: "We operate on every continent",
    cardText: "50+ countries",
    items: [
      { textHtml: "Support for local methods, <br /> banks and currencies." },
      {
        textHtml:
          "Routing by GEO, currency, bank <br /> or recipient payment system, amount range <br /> and risk profile.",
      },
      { textHtml: "Flexible cascading logic between executors." },
      { textHtml: "Cross-border scenarios, conversion, <br /> multi-level limits." },
    ],
  },
  technologies: {
    title: "Technologies in action",
    text: "Full control over payments and business processes.",
    items: [
      { title: "Automation", textHtml: "99% of operations without manual intervention." },
      { title: "Performance", textHtml: "Stable operation <br> under peak loads." },
      { title: "Security", textHtml: "PCI DSS alignment, <br> built-in protection measures." },
      { title: "Functionality", textHtml: "Hundreds of parameters in the UI <br> for fine tuning." },
      { title: "Control", textHtml: "Full access to business logic, <br> APIs and parameters." },
      { title: "Reliability", textHtml: "24/7 support for mission-critical <br> operations." },
    ],
  },
  features: {
    items: [
      { title: "24/7 support", textHtml: "An on-call team of specialists <br> for rapid response." },
      { title: "Monitoring", textHtml: "Continuous service monitoring <br> with automatic Telegram alerts." },
      { title: "Complete logging", textHtml: "Detailed logs, operations audit <br> and transparent request tracing." },
    ],
  },
  whiteLabel: {
    title: "White Label PayGuru",
    textHtml: "A ready-made payment infrastructure for processing and managing enterprise-level money flows.",
    items: [
      { title: "Ready-made infrastructure", textHtml: "Client branding: domain and logo." },
      { title: "Continuous updates", textHtml: "New features and payment methods <br> without service downtime." },
      { title: "Fast launch", textHtml: "With room to customize methods and business logic." },
    ],
  },
  fastStart: {
    title: "Fast launch",
    items: [
      {
        title: "Branding",
        textHtml: "A full launch under your brand in up to 7 days: domain, logo and initial configuration.",
      },
      {
        title: "Tailored business processes",
        textHtml: "Ready operational scenarios and regulations for support, alerts and onboarding.",
      },
      {
        title: "Launch support",
        textHtml: "Training documentation, AI White Label Kit, Trello boards, checklists and step-by-step guides.",
      },
    ],
  },
  techSupport: {
    titleHtml: 'Technical support<br/><span class="text-gradient">White Label</span>',
    textHtml: "A team of experienced developers for your integrations, feature customization and any custom tasks.",
    items: [
      {
        title: "Detailed documentation",
        textHtml: "With request and response examples, detailed integration schemes, error descriptions and recommendations for atypical scenarios.",
      },
      {
        title: "Test server",
        textHtml: "A full sandbox to validate the entire call chain: from operation creation to the final callback and status handling.",
      },
      {
        title: "Transparent status codes",
        textHtml: "A clear, logical and predictable status system with understandable behavior in every scenario and documentation for every status.",
      },
      {
        title: "API customization",
        textHtml: "API and business logic adaptation for your processes: additional fields, non-standard callbacks, methods and custom functionality on request.",
      },
    ],
  },
  contactUs: {
    title: "Expert consultation",
    textHtml: "A short call with an expert will help you choose the right solution, launch quickly and avoid mistakes at the start and during operations.",
  },
  contactModal: {
    title: "Contact us",
    fields: {
      name: "Name",
      contact: "Contact (email or Telegram)",
      contactPlaceholder: "example{at}mail.com | {at}example",
      comment: "Comment",
      commentPlaceholder: "Your message...",
    },
    consent: {
      lead: "I agree to the processing of personal data",
      join: "and accept the",
      link: "Privacy Policy",
    },
    validation: {
      nameRequired: "Enter your name",
      nameTooShort: "Name must be at least 2 characters",
      nameTooLong: "Name must be no longer than 100 characters",
      contactRequired: "Enter a contact (email or Telegram)",
      contactInvalid: "Enter a valid email or Telegram ({at}username)",
      commentTooLong: "Comment must be no longer than 2000 characters",
      consentRequired: "Consent to data processing is required",
    },
    status: {
      success: "Thank you, your request has been sent.",
      error: "Failed to send the request.",
    },
  },
  footer: {
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    contact: "Contact us",
    company: "2026 Integranova Dynamics, LLC.",
  },
  legal: {
    center: "Legal Center",
    tabs: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
    },
    downloads: {
      privacy: "Download Privacy Policy",
      terms: "Download Terms of Service",
    },
    privacy: {
      title: "Privacy Policy",
      contentHtml: privacyContent,
    },
    terms: {
      title: "Terms of Service",
      contentHtml: termsContent,
    },
  },
};
