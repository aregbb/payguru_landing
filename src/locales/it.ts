import type { LocaleMessages } from "./types";

const privacyContent = `
<div class="chapter">
  <h4>1. Disposizioni Generali</h4>
  <p>La presente Informativa sulla Privacy (la "Politica") disciplina il trattamento delle informazioni in relazione all'uso della piattaforma tecnologica PayGuru.</p>
  <p>La piattaforma PayGuru è una soluzione tecnologica progettata per automatizzare e coordinare le interazioni tra partecipanti autorizzati nell'ambito di modelli di partnership concordati. La piattaforma non è destinata all'uso pubblico da parte dei consumatori e non fornisce servizi direttamente agli utenti finali.</p>
</div>
<div class="chapter">
  <h4>2. Giurisdizione e Regolamentazione</h4>
  <p>Il trattamento delle informazioni viene effettuato all'interno della struttura operativa registrata sotto la giurisdizione di Nevis.</p>
  <p>Tale giurisdizione è stata scelta per garantire flessibilità operativa e coordinamento tra i partecipanti dell'infrastruttura. Salvo diverso accordo scritto, la legge applicabile sarà quella della giurisdizione della società operativa.</p>
</div>
<div class="chapter">
  <h4>3. Finalità del Trattamento delle Informazioni</h4>
  <p>La piattaforma tratta le informazioni esclusivamente per le seguenti finalità:</p>
  <ul>
    <li>garantire il funzionamento stabile e affidabile della piattaforma;</li>
    <li>supporto tecnico e diagnostica;</li>
    <li>monitoraggio della sicurezza del sistema e prevenzione degli abusi;</li>
    <li>automazione delle interazioni tra partecipanti autorizzati tramite le interfacce della piattaforma;</li>
    <li>mantenimento di log tecnici, registrazioni e report operativi.</li>
  </ul>
  <p>Il trattamento delle informazioni è limitato all'ambito necessario per conseguire le finalità sopra indicate.</p>
</div>
<div class="chapter">
  <h4>4. Categorie di Informazioni Trattate</h4>
  <p>Nell'ambito delle sue operazioni tecniche, la piattaforma può trattare e conservare temporaneamente le seguenti categorie di informazioni:</p>
  <ul>
    <li>identificatori tecnici (indirizzo IP, user-agent, traceID);</li>
    <li>informazioni di contatto fornite dai partecipanti alla piattaforma (indirizzo e-mail, account Telegram);</li>
    <li>parametri di integrazione (chiavi API, callback URL);</li>
    <li>log di attività, eventi di sistema, errori e registri di incidenti;</li>
    <li>metadati relativi al routing delle transazioni, alla logica di elaborazione e alle notifiche interne.</li>
  </ul>
  <p>La piattaforma <strong>non conserva dati delle carte di pagamento, credenziali di conti bancari o fondi degli utenti finali.</strong></p>
  <p>In determinati scenari, inclusi modelli di e-commerce o di payment orchestration, la piattaforma può ricevere, trasmettere o inoltrare tecnicamente dati forniti dai partecipanti <strong>esclusivamente allo scopo di instradare tali dati verso fornitori di servizi terzi autorizzati.</strong> Tale trattamento è automatizzato, transitorio e limitato alla sola trasmissione tecnica, senza utilizzo indipendente, conservazione o controllo di tali dati da parte della piattaforma.</p>
</div>
<div class="chapter">
  <h4>5. Misure Tecniche di Sicurezza</h4>
  <p>La piattaforma applica misure tecniche e organizzative per proteggere le informazioni trattate, tra cui:</p>
  <ul>
    <li>cifratura a livello di trasporto (SSL/TLS);</li>
    <li>autenticazione basata sui ruoli e controllo degli accessi;</li>
    <li>separazione tra ambienti di produzione e test;</li>
    <li>controllo degli accessi tramite restrizioni IP e gestione delle chiavi;</li>
    <li>logging centralizzato, monitoraggio e alerting.</li>
  </ul>
  <p>L'architettura di sicurezza della piattaforma segue principi allineati ai requisiti PCI DSS applicabili nell'ambito tecnico delle operazioni della piattaforma.</p>
</div>
<div class="chapter">
  <h4>6. Interazione con Terze Parti</h4>
  <p>Le informazioni possono essere trasmesse a terzi solo nella misura necessaria a:</p>
  <ul>
    <li>garantire la compatibilità tecnica delle integrazioni;</li>
    <li>adempiere agli accordi contrattuali tra partecipanti autorizzati;</li>
    <li>supportare servizi infrastrutturali quali hosting, archiviazione, monitoraggio e sicurezza.</li>
  </ul>
  <p>Tutte le interazioni con terze parti sono limitate al minimo indispensabile per la funzionalità della piattaforma.</p>
</div>
<div class="chapter">
  <h4>7. Conservazione dei Dati</h4>
  <p>Le informazioni vengono conservate per il periodo stabilito dalle politiche tecniche e operative interne della piattaforma.</p>
  <p>La cancellazione o l'anonimizzazione dei dati viene eseguita automaticamente alla scadenza del relativo periodo di conservazione oppure previo accordo con il partecipante interessato alla piattaforma.</p>
</div>
<div class="chapter">
  <h4>8. Disposizioni Finali</h4>
  <p>L'utilizzo della piattaforma PayGuru costituisce accettazione della presente Informativa sulla Privacy.</p>
  <p>L'operatore della piattaforma si riserva il diritto di aggiornare la presente Politica per riflettere cambiamenti tecnici, operativi o normativi.</p>
</div>
`;

const termsContent = `
<div class="chapter">
  <h4>1. Disposizioni Generali</h4>
  <p>I presenti Termini di Servizio (di seguito i "Termini") disciplinano l'accesso e l'utilizzo della piattaforma tecnologica PayGuru, comprese le relative interfacce web, API, dashboard e infrastrutture collegate.</p>
  <p>PayGuru è una <strong>piattaforma tecnologica che fornisce strumenti per l'orchestrazione, il coordinamento e l'automazione dei processi relativi ai pagamenti</strong> tra partecipanti indipendenti di un modello di partnership concordato.</p>
  <p>La piattaforma <strong>non è un servizio pubblico</strong>, non costituisce un'offerta al pubblico ed è disponibile esclusivamente per partner autorizzati previo accordo.</p>
  <p>PayGuru <strong>non opera come banca, istituto di pagamento, money service business, escrow agent o intermediario finanziario,</strong> salvo diverso accordo espresso in forma scritta.</p>
</div>
<div class="chapter">
  <h4>2. Accesso e Registrazione</h4>
  <p>L'accesso alla piattaforma viene concesso solo dopo:</p>
  <ul>
    <li>la verifica del partner;</li>
    <li>la conferma del caso d'uso previsto;</li>
    <li>l'allineamento sui requisiti tecnici e operativi.</li>
  </ul>
  <p>La registrazione, la concessione dell'accesso e l'emissione delle credenziali API sono effettuate manualmente da amministratori autorizzati o rappresentanti designati. La Società si riserva il diritto di rifiutare o revocare l'accesso a sua esclusiva discrezione.</p>
</div>
<div class="chapter">
  <h4>3. Funzionalità della Piattaforma</h4>
  <p>La piattaforma PayGuru fornisce un insieme di <strong>strumenti tecnici per la gestione e il coordinamento dei flussi di pagamento,</strong> inclusi, a titolo esemplificativo ma non esaustivo:</p>
  <ul>
    <li>creazione e gestione dei record di transazione;</li>
    <li>instradamento e distribuzione delle transazioni tra fornitori terzi indipendenti;</li>
    <li>tracciamento degli stati, callback e notifiche;</li>
    <li>workflow per la gestione delle dispute;</li>
    <li>strumenti di reporting, analytics e riconciliazione;</li>
    <li>integrazioni basate su API.</li>
  </ul>
  <p>Tutte le funzionalità sono <strong>configurate singolarmente per ciascun partner e progetto</strong> e riflettono una logica di coordinamento tecnico, non di esecuzione finanziaria.</p>
</div>
<div class="chapter">
  <h4>4. Ruolo di PayGuru e Operazioni di Pagamento</h4>
  <p>PayGuru agisce esclusivamente come <strong>intermediario tecnologico e livello di orchestrazione.</strong></p>
  <p>PayGuru:</p>
  <ul>
    <li><strong>non</strong> accetta fondi dagli utenti finali;</li>
    <li><strong>non</strong> detiene, conserva o custodisce asset fiat;</li>
    <li><strong>non</strong> avvia né esegue trasferimenti finanziari;</li>
    <li><strong>non</strong> garantisce il completamento delle transazioni da parte di terzi.</li>
  </ul>
  <p>Tutte le operazioni di pagamento, inclusi trasferimenti di fondi, cambio valuta, settlement e fornitura di liquidità, sono eseguite da <strong>fornitori terzi indipendenti, esecutori o controparti,</strong> selezionati dal partner o determinati dalla logica di routing concordata.</p>
  <p>Qualsiasi trasferimento di valore avviene <strong>al di fuori del controllo</strong> e della responsabilità di PayGuru.</p>
</div>
<div class="chapter">
  <h4>5. Responsabilità dell'Utente</h4>
  <p>L'utente accetta di:</p>
  <ul>
    <li>rispettare tutte le leggi e i regolamenti applicabili nella propria giurisdizione;</li>
    <li>assicurare che l'utilizzo della piattaforma non violi diritti di terzi;</li>
    <li>fornire informazioni accurate e lecite ove richiesto;</li>
    <li>valutare autonomamente i rischi associati alle operazioni di pagamento e ai fornitori terzi.</li>
  </ul>
  <p>L'utente riconosce che <strong>tutti i rischi commerciali, finanziari e normativi restano esclusivamente a carico dell'utente e delle sue controparti.</strong></p>
</div>
<div class="chapter">
  <h4>6. Sicurezza e Riservatezza</h4>
  <p>L'utente è responsabile della protezione delle credenziali di accesso, delle chiavi API e dei dati di autenticazione.</p>
  <p>La piattaforma impiega misure tecniche di sicurezza, tra cui cifratura, controlli di accesso, logging e monitoraggio.</p>
  <p>Tuttavia, PayGuru <strong>non garantisce un funzionamento ininterrotto né una sicurezza assoluta</strong> e non sarà responsabile per incidenti causati da sistemi esterni, fornitori o guasti lato utente.</p>
</div>
<div class="chapter">
  <h4>7. Controversie e Rettifiche</h4>
  <p>La piattaforma può fornire meccanismi tecnici per la gestione delle controversie, gli aggiustamenti delle transazioni e le correzioni di stato.</p>
  <p>Tali meccanismi:</p>
  <ul>
    <li>non costituiscono accettazione di responsabilità da parte di PayGuru;</li>
    <li>sono eseguiti rigorosamente all'interno dei workflow tecnici concordati;</li>
    <li>non implicano responsabilità finanziaria per gli esiti delle transazioni.</li>
  </ul>
  <p>La responsabilità finale per la risoluzione delle controversie spetta alle parti coinvolte nella transazione sottostante.</p>
</div>
<div class="chapter">
  <h4>8. Limitazione di Responsabilità</h4>
  <p>Nella misura massima consentita dalla legge applicabile:</p>
  <ul>
    <li>PayGuru non sarà responsabile per danni indiretti, incidentali o consequenziali;</li>
    <li>PayGuru non sarà responsabile per perdite derivanti da azioni o omissioni di fornitori terzi;</li>
    <li>PayGuru non sarà responsabile per transazioni non riuscite, ritardate o stornate eseguite al di fuori della propria infrastruttura.</li>
  </ul>
  <p>La piattaforma è fornita <strong>"così com'è" e "come disponibile"</strong> senza garanzie di alcun tipo.</p>
</div>
<div class="chapter">
  <h4>9. Modifiche</h4>
  <p>La Società si riserva il diritto di modificare i presenti Termini in qualsiasi momento.</p>
  <p>Le versioni aggiornate saranno pubblicate sul sito web o rese disponibili tramite l'interfaccia della piattaforma.</p>
  <p>L'uso continuato della piattaforma costituisce accettazione dei Termini aggiornati.</p>
</div>
<div class="chapter">
  <h4>10. Legge Applicabile e Informazioni sulla Società</h4>
  <p>La piattaforma è gestita da:</p>
  <ul>
    <li><strong>IntegraNova Dynamics LLC</strong></li>
    <li>Giurisdizione: Nevis</li>
    <li>N. di registrazione: L 24105</li>
  </ul>
  <p>I presenti Termini saranno disciplinati e interpretati in conformità alle leggi applicabili alla giurisdizione della società operativa, salvo diverso accordo scritto.</p>
</div>
<div class="chapter">
  <h4>11. Disposizioni Finali</h4>
  <p>PayGuru opera esclusivamente come <strong>piattaforma tecnologica di coordinamento</strong> tra partecipanti indipendenti.</p>
  <p>Utilizzando la piattaforma, l'utente conferma di comprendere pienamente il ruolo di PayGuru, accetta i presenti Termini e riconosce che <strong>PayGuru non agisce come garante finanziario né come payment processor.</strong></p>
</div>
`;

export const it: LocaleMessages = {
  pages: {
    homeTitle: "sistema di orchestrazione dei pagamenti",
    legalCenter: "Centro Legale",
  },
  common: {
    brandName: "PayGuru",
    close: "Chiudi",
    language: "Lingua",
    copyright: "Copyright © 2026, Integranova Dynamics, LLC.",
  },
  actions: {
    scheduleCall: "Pianifica una call",
    requestDemo: "Richiedi accesso alla demo",
    download: "Scarica",
    send: "Invia",
    signIn: "Accedi",
    expertConsultation: "Parla con un esperto",
  },
  banner: {
    text: "Pianifica una demo e scopri cosa stiamo costruendo. Vieni a trovarci alla MAC Affiliate Conference in Armenia il 26-27 maggio.",
    linkText: "Scopri di più.",
  },
  nav: {
    about: "Chi siamo",
    api: "Documentazione API",
    terms: "Termini di servizio",
    contacts: "Contatti",
  },
  hero: {
    titleHtml: "Controllo totale <br /> sui flussi di denaro",
    textHtml: "<strong>PayGuru</strong> è un sistema multifunzionale di orchestrazione dei pagamenti con copertura globale.",
  },
  geographyNew: {
    title: "Operiamo in tutti i continenti",
    textHtml: "Anni di collaborazione con aziende affidabili in tutto il mondo ci consentono di scegliere soluzioni realmente solide per il vostro business.",
    coverageTitle: "Copertura globale",
    coverageTextHtml: "Supporto per metodi locali con routing a cascata flessibile per GEO, banca, valuta, importo e rischio.",
    bullets: [
      {
        title: "Filtri antifrode:",
        textHtml: "per importo, frequenza, BIN/<br>ISSUER, ora del giorno, geo e pattern comportamentali.",
      },
      {
        title: "Tassi intelligenti / FX:",
        textHtml: "fonte esterna o tasso fisso per rotta.",
      },
    ],
  },
  geographyLegacy: {
    title: "Geografia e copertura",
    cardTitle: "Operiamo in tutti i continenti",
    cardText: "50+ paesi",
    items: [
      { textHtml: "Supporto per metodi locali, <br /> banche e valute." },
      {
        textHtml: "Routing per GEO, valuta, banca <br /> o sistema di pagamento del destinatario, fascia <br /> di importo e profilo di rischio.",
      },
      { textHtml: "Logica a cascata flessibile tra esecutori." },
      { textHtml: "Scenari cross-border, conversione <br /> e limiti multilivello." },
    ],
  },
  technologies: {
    title: "Tecnologie in azione",
    text: "Controllo totale su pagamenti e processi di business.",
    items: [
      { title: "Automazione", textHtml: "Il 99% delle operazioni senza intervento manuale." },
      { title: "Prestazioni", textHtml: "Funzionamento stabile <br> anche sotto picchi di carico." },
      { title: "Sicurezza", textHtml: "Allineamento PCI DSS, <br> misure di protezione integrate." },
      { title: "Funzionalità", textHtml: "Centinaia di parametri nella UI <br> per una regolazione fine." },
      { title: "Controllo", textHtml: "Accesso completo alla logica di business, <br> alle API e ai parametri." },
      { title: "Affidabilità", textHtml: "Supporto 24/7 per operazioni <br> mission critical." },
    ],
  },
  features: {
    items: [
      { title: "Supporto 24/7", textHtml: "Un team di specialisti reperibili <br> per una risposta rapida." },
      { title: "Monitoraggio", textHtml: "Controllo continuo dei servizi <br> con alert automatici su Telegram." },
      { title: "Logging completo", textHtml: "Log dettagliati, audit delle operazioni <br> e tracciamento trasparente delle richieste." },
    ],
  },
  whiteLabel: {
    title: "White Label PayGuru",
    textHtml: "Un'infrastruttura di pagamento pronta all'uso per elaborare e gestire flussi finanziari di livello enterprise.",
    items: [
      { title: "Infrastruttura pronta", textHtml: "Branding per il cliente: dominio e logo." },
      { title: "Aggiornamenti continui", textHtml: "Nuove funzionalità e metodi di pagamento <br> senza fermare i servizi." },
      { title: "Avvio rapido", textHtml: "Con possibilità di personalizzare metodi e logica di business." },
    ],
  },
  fastStart: {
    title: "Avvio rapido",
    items: [
      {
        title: "Branding",
        textHtml: "Lancio completo con il vostro brand in fino a 7 giorni: dominio, logo e configurazione iniziale.",
      },
      {
        title: "Processi di business pronti",
        textHtml: "Scenari operativi pronti e regole per supporto, alert e onboarding.",
      },
      {
        title: "Supporto al lancio",
        textHtml: "Documentazione formativa, AI White Label Kit, board Trello, checklist e guide passo-passo.",
      },
    ],
  },
  techSupport: {
    titleHtml: 'Supporto tecnico<br/><span class="text-gradient">White Label</span>',
    textHtml: "Un team di sviluppatori esperti per le vostre integrazioni, la personalizzazione delle funzionalità e qualsiasi esigenza su misura.",
    items: [
      {
        title: "Documentazione dettagliata",
        textHtml: "Con esempi di request e response, schemi di integrazione dettagliati, descrizioni degli errori e raccomandazioni per scenari non standard.",
      },
      {
        title: "Server di test",
        textHtml: "Un sandbox completo per validare tutta la catena di chiamata: dalla creazione dell'operazione fino al callback finale e alla gestione degli stati.",
      },
      {
        title: "Status code trasparenti",
        textHtml: "Un sistema di stati chiaro, logico e prevedibile, con comportamento comprensibile in ogni scenario e documentazione per ogni stato.",
      },
      {
        title: "Personalizzazione API",
        textHtml: "Adattamento di API e logica di business ai vostri processi: campi aggiuntivi, callback non standard, metodi e funzionalità personalizzate su richiesta.",
      },
    ],
  },
  contactUs: {
    title: "Consulenza con uno specialista",
    textHtml: "Una breve call con un esperto vi aiuterà a scegliere la soluzione giusta, lanciare rapidamente ed evitare errori all'inizio e durante l'operatività.",
  },
  contactModal: {
    title: "Contattaci",
    fields: {
      name: "Nome",
      contact: "Contatto (email o Telegram)",
      contactPlaceholder: "example@mail.com | @example",
      comment: "Commento",
      commentPlaceholder: "Il tuo messaggio...",
    },
    consent: {
      lead: "Accetto il trattamento dei dati personali",
      join: "e accetto la",
      link: "Politica sulla Privacy",
    },
    validation: {
      nameRequired: "Inserisci il tuo nome",
      nameTooShort: "Il nome deve contenere almeno 2 caratteri",
      nameTooLong: "Il nome non deve superare i 100 caratteri",
      contactRequired: "Inserisci un contatto (email o Telegram)",
      contactInvalid: "Inserisci un'email o un Telegram validi (@username)",
      commentTooLong: "Il commento non deve superare i 2000 caratteri",
      consentRequired: "È necessario il consenso al trattamento dei dati",
    },
    status: {
      success: "Grazie, la tua richiesta è stata inviata.",
      error: "Errore durante l'invio della richiesta.",
    },
  },
  footer: {
    terms: "Termini di servizio",
    privacy: "Politica sulla Privacy",
    contact: "Contattaci",
    company: "2026 Integranova Dynamics, LLC.",
  },
  legal: {
    center: "Centro Legale",
    tabs: {
      terms: "Termini di servizio",
      privacy: "Politica sulla Privacy",
    },
    downloads: {
      privacy: "Scarica la Politica sulla Privacy",
      terms: "Scarica i Termini di servizio",
    },
    privacy: {
      title: "Politica sulla Privacy",
      contentHtml: privacyContent,
    },
    terms: {
      title: "Termini di servizio",
      contentHtml: termsContent,
    },
  },
};
