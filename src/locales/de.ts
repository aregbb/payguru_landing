import type { LocaleMessages } from "./types";

const privacyContent = `
<div class="chapter">
  <h4>1. Allgemeine Bestimmungen</h4>
  <p>Diese Datenschutzrichtlinie (die "Richtlinie") regelt die Verarbeitung von Informationen im Zusammenhang mit der Nutzung der technologischen Plattform PayGuru.</p>
  <p>Die PayGuru-Plattform ist eine technologische Lösung, die darauf ausgelegt ist, Interaktionen zwischen autorisierten Teilnehmern innerhalb vereinbarter Partnermodelle zu automatisieren und zu koordinieren. Die Plattform ist nicht für die öffentliche Nutzung durch Verbraucher bestimmt und erbringt keine Leistungen direkt gegenüber Endnutzern.</p>
</div>
<div class="chapter">
  <h4>2. Gerichtsbarkeit und Regulierung</h4>
  <p>Die Informationsverarbeitung erfolgt innerhalb der operativen Struktur, die unter der Gerichtsbarkeit von Nevis registriert ist.</p>
  <p>Diese Gerichtsbarkeit wurde gewählt, um operative Flexibilität und Koordination zwischen den Infrastrukturteilnehmern sicherzustellen. Sofern nicht schriftlich etwas anderes vereinbart wurde, gilt das Recht der Gerichtsbarkeit der Betreibergesellschaft.</p>
</div>
<div class="chapter">
  <h4>3. Zweck der Informationsverarbeitung</h4>
  <p>Die Plattform verarbeitet Informationen ausschließlich zu folgenden Zwecken:</p>
  <ul>
    <li>Sicherstellung eines stabilen und zuverlässigen Betriebs der Plattform;</li>
    <li>technischer Support und Diagnose;</li>
    <li>Überwachung der Systemsicherheit und Verhinderung von Missbrauch;</li>
    <li>Automatisierung der Interaktionen zwischen autorisierten Teilnehmern über Plattformschnittstellen;</li>
    <li>Führung technischer Protokolle, Aufzeichnungen und operativer Berichte.</li>
  </ul>
  <p>Die Informationsverarbeitung ist auf den Umfang begrenzt, der zur Erreichung der genannten Zwecke erforderlich ist.</p>
</div>
<div class="chapter">
  <h4>4. Kategorien der verarbeiteten Informationen</h4>
  <p>Im Rahmen ihres technischen Betriebs kann die Plattform folgende Kategorien von Informationen verarbeiten und vorübergehend speichern:</p>
  <ul>
    <li>technische Kennungen (IP-Adresse, User-Agent, traceID);</li>
    <li>von Plattformteilnehmern bereitgestellte Kontaktdaten (E-Mail-Adresse, Telegram-Konto);</li>
    <li>Integrationsparameter (API-Schlüssel, Callback-URLs);</li>
    <li>Aktivitätsprotokolle, Systemereignisse, Fehler und Vorfallsaufzeichnungen;</li>
    <li>Metadaten im Zusammenhang mit Transaktionsrouting, Verarbeitungslogik und internen Benachrichtigungen.</li>
  </ul>
  <p>Die Plattform <strong>speichert keine Zahlungskartendaten, Bankzugangsdaten oder Gelder von Endnutzern.</strong></p>
  <p>In bestimmten Szenarien, einschließlich E-Commerce- oder Payment-Orchestration-Modellen, kann die Plattform von Teilnehmern bereitgestellte Daten technisch empfangen, übertragen oder weiterleiten, <strong>ausschließlich zum Zweck der Weiterleitung solcher Daten an autorisierte Drittanbieter.</strong> Eine solche Verarbeitung erfolgt automatisiert, vorübergehend und ist auf die technische Übertragung beschränkt, ohne eigenständige Nutzung, Speicherung oder Kontrolle dieser Daten durch die Plattform.</p>
</div>
<div class="chapter">
  <h4>5. Technische Sicherheitsmaßnahmen</h4>
  <p>Die Plattform wendet technische und organisatorische Maßnahmen zum Schutz der verarbeiteten Informationen an, darunter:</p>
  <ul>
    <li>Transportverschlüsselung (SSL/TLS);</li>
    <li>rollenbasierte Authentifizierung und Zugriffskontrolle;</li>
    <li>Trennung von Produktions- und Testumgebungen;</li>
    <li>Zugriffskontrolle durch IP-Beschränkungen und Schlüsselverwaltung;</li>
    <li>zentrale Protokollierung, Monitoring und Alarmierung.</li>
  </ul>
  <p>Die Sicherheitsarchitektur der Plattform folgt Grundsätzen, die im technischen Umfang des Plattformbetriebs an den anwendbaren PCI-DSS-Anforderungen ausgerichtet sind.</p>
</div>
<div class="chapter">
  <h4>6. Interaktion mit Dritten</h4>
  <p>Informationen dürfen nur in dem Umfang an Dritte übermittelt werden, der erforderlich ist, um:</p>
  <ul>
    <li>die technische Kompatibilität von Integrationen sicherzustellen;</li>
    <li>vertragliche Vereinbarungen zwischen autorisierten Teilnehmern zu erfüllen;</li>
    <li>Infrastrukturdienste wie Hosting, Speicherung, Monitoring und Sicherheit zu unterstützen.</li>
  </ul>
  <p>Alle Interaktionen mit Dritten sind auf den Mindestumfang beschränkt, der für die Funktionalität der Plattform erforderlich ist.</p>
</div>
<div class="chapter">
  <h4>7. Datenspeicherung</h4>
  <p>Informationen werden für den Zeitraum gespeichert, der durch die internen technischen und operativen Richtlinien der Plattform festgelegt ist.</p>
  <p>Die Löschung oder Anonymisierung von Daten erfolgt automatisch nach Ablauf der jeweiligen Aufbewahrungsfrist oder nach Vereinbarung mit dem betreffenden Plattformteilnehmer.</p>
</div>
<div class="chapter">
  <h4>8. Schlussbestimmungen</h4>
  <p>Die Nutzung der PayGuru-Plattform gilt als Zustimmung zu dieser Datenschutzrichtlinie.</p>
  <p>Der Plattformbetreiber behält sich das Recht vor, diese Richtlinie zu aktualisieren, um technische, operative oder regulatorische Änderungen zu berücksichtigen.</p>
</div>
`;

const termsContent = `
<div class="chapter">
  <h4>1. Allgemeine Bestimmungen</h4>
  <p>Diese Nutzungsbedingungen (nachfolgend die "Bedingungen") regeln den Zugang zu und die Nutzung der technologischen Plattform PayGuru, einschließlich ihrer Webschnittstellen, APIs, Dashboards und der zugehörigen Infrastruktur.</p>
  <p>PayGuru ist eine <strong>technologische Plattform, die Werkzeuge zur Orchestrierung, Koordination und Automatisierung zahlungsbezogener Prozesse</strong> zwischen unabhängigen Teilnehmern eines vereinbarten Partnermodells bereitstellt.</p>
  <p>Die Plattform ist <strong>kein öffentlicher Dienst</strong>, stellt kein öffentliches Angebot dar und ist ausschließlich autorisierten Partnern nach vorheriger Abstimmung zugänglich.</p>
  <p>PayGuru <strong>handelt nicht als Bank, Zahlungsinstitut, Money Service Business, Escrow-Agent oder Finanzintermediär,</strong> sofern nicht ausdrücklich etwas anderes in einer gesonderten schriftlichen Vereinbarung festgelegt wurde.</p>
</div>
<div class="chapter">
  <h4>2. Zugang und Registrierung</h4>
  <p>Der Zugang zur Plattform wird nur gewährt nach:</p>
  <ul>
    <li>Überprüfung des Partners;</li>
    <li>Bestätigung des vorgesehenen Anwendungsfalls;</li>
    <li>Abstimmung der technischen und operativen Anforderungen.</li>
  </ul>
  <p>Registrierung, Zugangsbereitstellung und die Ausgabe von API-Zugangsdaten erfolgen manuell durch autorisierte Administratoren oder benannte Vertreter. Das Unternehmen behält sich das Recht vor, den Zugang nach eigenem Ermessen zu verweigern oder zu widerrufen.</p>
</div>
<div class="chapter">
  <h4>3. Funktionalität der Plattform</h4>
  <p>Die PayGuru-Plattform stellt eine Reihe von <strong>technischen Werkzeugen zur Verwaltung und Koordination von Zahlungsströmen</strong> bereit, darunter insbesondere:</p>
  <ul>
    <li>Erstellung und Verwaltung von Transaktionsdatensätzen;</li>
    <li>Routing und Verteilung von Transaktionen zwischen unabhängigen Drittanbietern;</li>
    <li>Statusverfolgung, Callbacks und Benachrichtigungen;</li>
    <li>Workflows zur Streitfallbearbeitung;</li>
    <li>Reporting-, Analyse- und Abstimmungswerkzeuge;</li>
    <li>API-basierte Integrationen.</li>
  </ul>
  <p>Alle Funktionen werden <strong>individuell pro Partner und Projekt konfiguriert</strong> und bilden technische Koordinationslogik statt finanzieller Ausführung ab.</p>
</div>
<div class="chapter">
  <h4>4. Rolle von PayGuru und Zahlungsvorgänge</h4>
  <p>PayGuru agiert ausschließlich als <strong>technologischer Vermittler und Orchestrierungsschicht.</strong></p>
  <p>PayGuru:</p>
  <ul>
    <li>nimmt <strong>keine</strong> Gelder von Endnutzern entgegen;</li>
    <li>hält, speichert oder verwahrt <strong>keine</strong> Fiat-Vermögenswerte;</li>
    <li>initiiert oder führt <strong>keine</strong> Finanztransfers aus;</li>
    <li>garantiert <strong>nicht</strong> die Durchführung von Transaktionen durch Dritte.</li>
  </ul>
  <p>Alle Zahlungsvorgänge, einschließlich Geldtransfers, Währungsumtausch, Settlement und Liquiditätsbereitstellung, werden von <strong>unabhängigen Drittanbietern, Ausführenden oder Gegenparteien</strong> ausgeführt, die vom Partner ausgewählt oder durch die vereinbarte Routing-Logik bestimmt werden.</p>
  <p>Jede Wertübertragung erfolgt <strong>außerhalb der Kontrolle</strong> und Verantwortung von PayGuru.</p>
</div>
<div class="chapter">
  <h4>5. Pflichten des Nutzers</h4>
  <p>Der Nutzer verpflichtet sich:</p>
  <ul>
    <li>alle in seiner Gerichtsbarkeit geltenden Gesetze und Vorschriften einzuhalten;</li>
    <li>sicherzustellen, dass seine Nutzung der Plattform keine Rechte Dritter verletzt;</li>
    <li>sofern erforderlich richtige und rechtmäßige Informationen bereitzustellen;</li>
    <li>die mit Zahlungsvorgängen und Drittanbietern verbundenen Risiken eigenständig zu bewerten.</li>
  </ul>
  <p>Der Nutzer erkennt an, dass <strong>sämtliche geschäftlichen, finanziellen und regulatorischen Risiken ausschließlich beim Nutzer und seinen Gegenparteien verbleiben.</strong></p>
</div>
<div class="chapter">
  <h4>6. Sicherheit und Vertraulichkeit</h4>
  <p>Der Nutzer ist für den Schutz von Zugangsdaten, API-Schlüsseln und Authentifizierungsdaten verantwortlich.</p>
  <p>Die Plattform setzt technische Sicherheitsmaßnahmen ein, darunter Verschlüsselung, Zugriffskontrollen, Protokollierung und Monitoring.</p>
  <p>PayGuru <strong>garantiert jedoch weder einen unterbrechungsfreien Betrieb noch absolute Sicherheit</strong> und haftet nicht für Vorfälle, die durch externe Systeme, Anbieter oder Ausfälle auf Nutzerseite verursacht werden.</p>
</div>
<div class="chapter">
  <h4>7. Streitfälle und Anpassungen</h4>
  <p>Die Plattform kann technische Mechanismen für die Bearbeitung von Streitfällen, Transaktionsanpassungen und Statuskorrekturen bereitstellen.</p>
  <p>Solche Mechanismen:</p>
  <ul>
    <li>stellen keine Übernahme von Haftung durch PayGuru dar;</li>
    <li>werden strikt innerhalb der vereinbarten technischen Workflows ausgeführt;</li>
    <li>implizieren keine finanzielle Verantwortung für Transaktionsergebnisse.</li>
  </ul>
  <p>Die endgültige Verantwortung für die Beilegung von Streitigkeiten liegt bei den an der zugrunde liegenden Transaktion beteiligten Parteien.</p>
</div>
<div class="chapter">
  <h4>8. Haftungsbeschränkung</h4>
  <p>Soweit nach anwendbarem Recht maximal zulässig:</p>
  <ul>
    <li>haftet PayGuru nicht für indirekte, zufällige oder Folgeschäden;</li>
    <li>ist PayGuru nicht verantwortlich für Verluste infolge von Handlungen oder Unterlassungen Dritter;</li>
    <li>haftet PayGuru nicht für fehlgeschlagene, verzögerte oder rückabgewickelte Transaktionen, die außerhalb seiner Infrastruktur ausgeführt wurden.</li>
  </ul>
  <p>Die Plattform wird <strong>"wie besehen" und "wie verfügbar"</strong> ohne jegliche Gewährleistungen bereitgestellt.</p>
</div>
<div class="chapter">
  <h4>9. Änderungen</h4>
  <p>Das Unternehmen behält sich das Recht vor, diese Bedingungen jederzeit zu ändern.</p>
  <p>Aktualisierte Versionen werden auf der Website veröffentlicht oder über die Plattformoberfläche zur Verfügung gestellt.</p>
  <p>Die fortgesetzte Nutzung der Plattform gilt als Zustimmung zu den aktualisierten Bedingungen.</p>
</div>
<div class="chapter">
  <h4>10. Anwendbares Recht und Unternehmensinformationen</h4>
  <p>Die Plattform wird betrieben von:</p>
  <ul>
    <li><strong>IntegraNova Dynamics LLC</strong></li>
    <li>Gerichtsbarkeit: Nevis</li>
    <li>Registrierungsnummer: L 24105</li>
  </ul>
  <p>Diese Bedingungen unterliegen dem Recht der Gerichtsbarkeit der Betreibergesellschaft und werden entsprechend ausgelegt, sofern nicht schriftlich etwas anderes vereinbart wurde.</p>
</div>
<div class="chapter">
  <h4>11. Schlussbestimmungen</h4>
  <p>PayGuru fungiert ausschließlich als <strong>technologische Koordinationsplattform</strong> zwischen unabhängigen Teilnehmern.</p>
  <p>Durch die Nutzung der Plattform bestätigt der Nutzer, die Rolle von PayGuru vollständig zu verstehen, diese Bedingungen zu akzeptieren und anzuerkennen, dass <strong>PayGuru nicht als finanzieller Garant oder Zahlungsabwickler handelt.</strong></p>
</div>
`;

export const de: LocaleMessages = {
  pages: {
    homeTitle: "Payment-Orchestration-System",
    legalCenter: "Rechtszentrum",
  },
  common: {
    brandName: "PayGuru",
    close: "Schließen",
    language: "Sprache",
    copyright: "Copyright © 2026, Integranova Dynamics, LLC.",
  },
  actions: {
    scheduleCall: "Anruf vereinbaren",
    requestDemo: "Demo-Zugang anfordern",
    download: "Herunterladen",
    send: "Senden",
    signIn: "Anmelden",
    expertConsultation: "Mit einem Experten sprechen",
  },
  banner: {
    text: "Vereinbaren Sie eine Demo und sehen Sie, woran wir arbeiten. Treffen Sie uns auf der MAC Affiliate Conference in Armenien am 26. und 27. Mai.",
    linkText: "Mehr erfahren.",
  },
  nav: {
    about: "Über uns",
    api: "API-Dokumentation",
    terms: "Nutzungsbedingungen",
    contacts: "Kontakte",
  },
  hero: {
    titleHtml: "Volle Kontrolle <br /> über Geldflüsse",
    textHtml: "<strong>PayGuru</strong> ist ein multifunktionales Payment-Orchestration-System mit globaler Abdeckung.",
  },
  geographyNew: {
    title: "Wir arbeiten auf allen Kontinenten",
    textHtml: "Langjährige Zusammenarbeit mit vertrauenswürdigen Unternehmen weltweit ermöglicht es uns, wirklich zuverlässige Lösungen für Ihr Geschäft auszuwählen.",
    coverageTitle: "Globale Abdeckung",
    coverageTextHtml: "Unterstützung lokaler Methoden mit flexiblem kaskadierendem Routing nach GEO, Bank, Währung, Betrag und Risiko.",
    bullets: [
      {
        title: "Anti-Fraud-Filter:",
        textHtml: "nach Betrag, Frequenz, BIN/<br>ISSUER, Tageszeit, Geo und Verhaltensmustern.",
      },
      {
        title: "Intelligente Kurse / FX:",
        textHtml: "externe Quelle oder fixer Kurs je Route.",
      },
    ],
  },
  geographyLegacy: {
    title: "Geografie und Abdeckung",
    cardTitle: "Wir arbeiten auf allen Kontinenten",
    cardText: "50+ Länder",
    items: [
      { textHtml: "Unterstützung lokaler Methoden, <br /> Banken und Währungen." },
      {
        textHtml: "Routing nach GEO, Währung, Bank <br /> oder Zahlungssystem des Empfängers, Betragsbereich <br /> und Risikoprofil.",
      },
      { textHtml: "Flexible kaskadierende Logik zwischen Ausführenden." },
      { textHtml: "Grenzüberschreitende Szenarien, Konvertierung <br /> und mehrstufige Limits." },
    ],
  },
  technologies: {
    title: "Technologien im Einsatz",
    text: "Volle Kontrolle über Zahlungen und Geschäftsprozesse.",
    items: [
      { title: "Automatisierung", textHtml: "99 % der Vorgänge ohne manuelle Eingriffe." },
      { title: "Leistung", textHtml: "Stabiler Betrieb <br> unter Spitzenlast." },
      { title: "Sicherheit", textHtml: "PCI-DSS-Ausrichtung, <br> integrierte Schutzmaßnahmen." },
      { title: "Funktionalität", textHtml: "Hunderte Parameter in der UI <br> für Feineinstellungen." },
      { title: "Kontrolle", textHtml: "Voller Zugriff auf Geschäftslogik, <br> APIs und Parameter." },
      { title: "Zuverlässigkeit", textHtml: "24/7-Support für geschäftskritische <br> Abläufe." },
    ],
  },
  features: {
    items: [
      { title: "24/7-Support", textHtml: "Ein Bereitschaftsteam von Spezialisten <br> für schnelle Reaktionen." },
      { title: "Monitoring", textHtml: "Kontinuierliche Serviceüberwachung <br> mit automatischen Telegram-Benachrichtigungen." },
      { title: "Vollständige Protokollierung", textHtml: "Detaillierte Logs, Audit von Vorgängen <br> und transparente Request-Nachverfolgung." },
    ],
  },
  whiteLabel: {
    title: "White Label PayGuru",
    textHtml: "Eine sofort einsetzbare Zahlungsinfrastruktur zur Verarbeitung und Steuerung von Geldflüssen auf Enterprise-Niveau.",
    items: [
      { title: "Fertige Infrastruktur", textHtml: "Branding für den Kunden: Domain und Logo." },
      { title: "Laufende Updates", textHtml: "Neue Funktionen und Zahlungsmethoden <br> ohne Ausfall der Services." },
      { title: "Schneller Start", textHtml: "Mit Möglichkeiten zur Anpassung von Methoden und Geschäftslogik." },
    ],
  },
  fastStart: {
    title: "Schneller Start",
    items: [
      {
        title: "Branding",
        textHtml: "Vollständiger Launch unter Ihrer Marke in bis zu 7 Tagen: Domain, Logo und Erstkonfiguration.",
      },
      {
        title: "Vorkonfigurierte Geschäftsprozesse",
        textHtml: "Fertige operative Szenarien und Richtlinien für Support, Alerts und Onboarding.",
      },
      {
        title: "Launch-Support",
        textHtml: "Trainingsdokumentation, AI White Label Kit, Trello-Boards, Checklisten und Schritt-für-Schritt-Anleitungen.",
      },
    ],
  },
  techSupport: {
    titleHtml: 'Technischer Support<br/><span class="text-gradient">White Label</span>',
    textHtml: "Ein Team erfahrener Entwickler für Ihre Integrationen, Feature-Anpassungen und individuelle Aufgaben.",
    items: [
      {
        title: "Detaillierte Dokumentation",
        textHtml: "Mit Request- und Response-Beispielen, detaillierten Integrationsschemata, Fehlerbeschreibungen und Empfehlungen für atypische Szenarien.",
      },
      {
        title: "Testserver",
        textHtml: "Eine vollständige Sandbox, um die gesamte Aufrufkette zu validieren: von der Erstellung einer Operation bis zum finalen Callback und der Statusverarbeitung.",
      },
      {
        title: "Transparente Statuscodes",
        textHtml: "Ein klares, logisches und vorhersehbares Statussystem mit verständlichem Verhalten in jedem Szenario und Dokumentation zu jedem Status.",
      },
      {
        title: "API-Anpassung",
        textHtml: "Anpassung von API und Geschäftslogik an Ihre Prozesse: zusätzliche Felder, nicht standardmäßige Callbacks, Methoden und individuelle Funktionalität auf Anfrage.",
      },
    ],
  },
  contactUs: {
    title: "Expertenberatung",
    textHtml: "Ein kurzes Gespräch mit einem Experten hilft Ihnen, die richtige Lösung zu wählen, schnell zu starten und Fehler beim Start und im Betrieb zu vermeiden.",
  },
  contactModal: {
    title: "Kontakt aufnehmen",
    fields: {
      name: "Name",
      contact: "Kontakt (E-Mail oder Telegram)",
      contactPlaceholder: "example@mail.com | @example",
      comment: "Kommentar",
      commentPlaceholder: "Ihre Nachricht...",
    },
    consent: {
      lead: "Ich stimme der Verarbeitung personenbezogener Daten zu",
      join: "und akzeptiere die",
      link: "Datenschutzrichtlinie",
    },
    validation: {
      nameRequired: "Geben Sie Ihren Namen ein",
      nameTooShort: "Der Name muss mindestens 2 Zeichen lang sein",
      nameTooLong: "Der Name darf nicht länger als 100 Zeichen sein",
      contactRequired: "Geben Sie einen Kontakt an (E-Mail oder Telegram)",
      contactInvalid: "Geben Sie eine gültige E-Mail oder Telegram (@username) an",
      commentTooLong: "Der Kommentar darf nicht länger als 2000 Zeichen sein",
      consentRequired: "Eine Einwilligung zur Datenverarbeitung ist erforderlich",
    },
    status: {
      success: "Danke, Ihre Anfrage wurde gesendet.",
      error: "Fehler beim Senden der Anfrage.",
    },
  },
  footer: {
    terms: "Nutzungsbedingungen",
    privacy: "Datenschutzrichtlinie",
    contact: "Kontakt aufnehmen",
    company: "2026 Integranova Dynamics, LLC.",
  },
  legal: {
    center: "Rechtszentrum",
    tabs: {
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutzrichtlinie",
    },
    downloads: {
      privacy: "Datenschutzrichtlinie herunterladen",
      terms: "Nutzungsbedingungen herunterladen",
    },
    privacy: {
      title: "Datenschutzrichtlinie",
      contentHtml: privacyContent,
    },
    terms: {
      title: "Nutzungsbedingungen",
      contentHtml: termsContent,
    },
  },
};
