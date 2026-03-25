import type { LocaleMessages } from "./types";

const privacyContent = `
<div class="chapter">
  <h4>1. Dispositions Générales</h4>
  <p>La présente Politique de Confidentialité (la "Politique") régit le traitement des informations lié à l'utilisation de la plateforme technologique PayGuru.</p>
  <p>La plateforme PayGuru est une solution technologique conçue pour automatiser et coordonner les interactions entre des participants autorisés dans le cadre de modèles de partenariat convenus. La plateforme n'est pas destinée à un usage public par les consommateurs et ne fournit pas de services directement aux utilisateurs finaux.</p>
</div>
<div class="chapter">
  <h4>2. Juridiction et Réglementation</h4>
  <p>Le traitement des informations est effectué au sein de la structure opérationnelle enregistrée sous la juridiction de Nevis.</p>
  <p>Cette juridiction est choisie afin d'assurer une flexibilité opérationnelle et une coordination entre les participants de l'infrastructure. Sauf accord écrit contraire, la loi applicable sera celle de la juridiction de la société exploitante.</p>
</div>
<div class="chapter">
  <h4>3. Finalité du Traitement des Informations</h4>
  <p>La plateforme traite les informations uniquement aux fins suivantes :</p>
  <ul>
    <li>garantir un fonctionnement stable et fiable de la plateforme ;</li>
    <li>assurer le support technique et le diagnostic ;</li>
    <li>surveiller la sécurité du système et prévenir les abus ;</li>
    <li>automatiser les interactions entre participants autorisés via les interfaces de la plateforme ;</li>
    <li>tenir des journaux techniques, registres et rapports opérationnels.</li>
  </ul>
  <p>Le traitement des informations est limité à ce qui est nécessaire pour atteindre les finalités ci-dessus.</p>
</div>
<div class="chapter">
  <h4>4. Catégories d'Informations Traitées</h4>
  <p>Dans le cadre de ses opérations techniques, la plateforme peut traiter et stocker temporairement les catégories d'informations suivantes :</p>
  <ul>
    <li>identifiants techniques (adresse IP, user-agent, traceID) ;</li>
    <li>coordonnées fournies par les participants de la plateforme (adresse e-mail, compte Telegram) ;</li>
    <li>paramètres d'intégration (clés API, URL de callback) ;</li>
    <li>journaux d'activité, événements système, erreurs et incidents ;</li>
    <li>métadonnées liées au routage des transactions, à la logique de traitement et aux notifications internes.</li>
  </ul>
  <p>La plateforme <strong>ne stocke pas les données de carte de paiement, les identifiants bancaires ni les fonds des utilisateurs finaux.</strong></p>
  <p>Dans certains scénarios, y compris les modèles d'e-commerce ou d'orchestration des paiements, la plateforme peut techniquement recevoir, transmettre ou relayer des données fournies par les participants <strong>uniquement dans le but d'acheminer ces données vers des prestataires tiers autorisés.</strong> Ce traitement est automatisé, transitoire et limité à la transmission technique, sans utilisation indépendante, conservation ni contrôle de ces données par la plateforme.</p>
</div>
<div class="chapter">
  <h4>5. Mesures Techniques de Sécurité</h4>
  <p>La plateforme applique des mesures techniques et organisationnelles pour protéger les informations traitées, notamment :</p>
  <ul>
    <li>chiffrement au niveau du transport (SSL/TLS) ;</li>
    <li>authentification basée sur les rôles et contrôle d'accès ;</li>
    <li>séparation des environnements de production et de test ;</li>
    <li>contrôle d'accès via restrictions IP et gestion des clés ;</li>
    <li>journalisation centralisée, supervision et alertes.</li>
  </ul>
  <p>L'architecture de sécurité de la plateforme suit des principes alignés sur les exigences PCI DSS applicables dans le périmètre technique des opérations de la plateforme.</p>
</div>
<div class="chapter">
  <h4>6. Interaction avec des Tiers</h4>
  <p>Les informations peuvent être transmises à des tiers uniquement dans la mesure nécessaire pour :</p>
  <ul>
    <li>assurer la compatibilité technique des intégrations ;</li>
    <li>exécuter les accords contractuels entre participants autorisés ;</li>
    <li>prendre en charge des services d'infrastructure tels que l'hébergement, le stockage, la supervision et la sécurité.</li>
  </ul>
  <p>Toutes les interactions avec des tiers sont limitées au strict minimum nécessaire au fonctionnement de la plateforme.</p>
</div>
<div class="chapter">
  <h4>7. Conservation des Données</h4>
  <p>Les informations sont conservées pendant la durée définie par les politiques techniques et opérationnelles internes de la plateforme.</p>
  <p>La suppression ou l'anonymisation des données est effectuée automatiquement à l'expiration de la période de conservation applicable ou sur accord avec le participant concerné de la plateforme.</p>
</div>
<div class="chapter">
  <h4>8. Dispositions Finales</h4>
  <p>L'utilisation de la plateforme PayGuru vaut acceptation de la présente Politique de Confidentialité.</p>
  <p>L'opérateur de la plateforme se réserve le droit de mettre à jour cette Politique afin de refléter des changements techniques, opérationnels ou réglementaires.</p>
</div>
`;

const termsContent = `
<div class="chapter">
  <h4>1. Dispositions Générales</h4>
  <p>Les présentes Conditions d'Utilisation (ci-après les "Conditions") régissent l'accès à et l'utilisation de la plateforme technologique PayGuru, y compris ses interfaces web, API, tableaux de bord et l'infrastructure associée.</p>
  <p>PayGuru est une <strong>plateforme technologique fournissant des outils d'orchestration, de coordination et d'automatisation des processus liés aux paiements</strong> entre participants indépendants d'un modèle de partenariat convenu.</p>
  <p>La plateforme <strong>n'est pas un service public</strong>, ne constitue pas une offre publique et est disponible exclusivement pour les partenaires autorisés après accord préalable.</p>
  <p>PayGuru <strong>n'agit pas en tant que banque, établissement de paiement, entreprise de services monétaires, agent escrow ou intermédiaire financier,</strong> sauf accord écrit distinct et explicite.</p>
</div>
<div class="chapter">
  <h4>2. Accès et Enregistrement</h4>
  <p>L'accès à la plateforme n'est accordé qu'après :</p>
  <ul>
    <li>vérification du partenaire ;</li>
    <li>confirmation du cas d'usage envisagé ;</li>
    <li>alignement sur les exigences techniques et opérationnelles.</li>
  </ul>
  <p>L'enregistrement, l'octroi d'accès et l'émission des identifiants API sont réalisés manuellement par des administrateurs autorisés ou des représentants désignés. La Société se réserve le droit de refuser ou de révoquer l'accès à sa seule discrétion.</p>
</div>
<div class="chapter">
  <h4>3. Fonctionnalités de la Plateforme</h4>
  <p>La plateforme PayGuru fournit un ensemble d'<strong>outils techniques pour gérer et coordonner les flux de paiement,</strong> notamment :</p>
  <ul>
    <li>la création et la gestion des enregistrements de transactions ;</li>
    <li>le routage et la répartition des transactions entre prestataires tiers indépendants ;</li>
    <li>le suivi des statuts, callbacks et notifications ;</li>
    <li>les workflows de gestion des litiges ;</li>
    <li>les outils de reporting, d'analytique et de rapprochement ;</li>
    <li>les intégrations basées sur API.</li>
  </ul>
  <p>Toutes les fonctionnalités sont <strong>configurées individuellement pour chaque partenaire et projet</strong> et reflètent une logique de coordination technique plutôt qu'une exécution financière.</p>
</div>
<div class="chapter">
  <h4>4. Rôle de PayGuru et Opérations de Paiement</h4>
  <p>PayGuru agit uniquement comme <strong>intermédiaire technologique et couche d'orchestration.</strong></p>
  <p>PayGuru :</p>
  <ul>
    <li><strong>n'accepte pas</strong> de fonds provenant des utilisateurs finaux ;</li>
    <li><strong>ne détient pas</strong>, ne stocke pas et n'assure pas la garde d'actifs en monnaie fiduciaire ;</li>
    <li><strong>n'initie pas</strong> et n'exécute pas de transferts financiers ;</li>
    <li><strong>ne garantit pas</strong> l'achèvement des transactions par des tiers.</li>
  </ul>
  <p>Toutes les opérations de paiement, y compris les transferts de fonds, le change, le règlement et la fourniture de liquidité, sont exécutées par <strong>des prestataires tiers indépendants, exécutants ou contreparties,</strong> sélectionnés par le partenaire ou déterminés par la logique de routage convenue.</p>
  <p>Tout transfert de valeur intervient <strong>hors du contrôle</strong> et de la responsabilité de PayGuru.</p>
</div>
<div class="chapter">
  <h4>5. Responsabilités de l'Utilisateur</h4>
  <p>L'utilisateur s'engage à :</p>
  <ul>
    <li>respecter toutes les lois et réglementations applicables dans sa juridiction ;</li>
    <li>s'assurer que son utilisation de la plateforme ne viole pas les droits de tiers ;</li>
    <li>fournir des informations exactes et licites lorsque cela est requis ;</li>
    <li>évaluer de manière indépendante les risques liés aux opérations de paiement et aux prestataires tiers.</li>
  </ul>
  <p>L'utilisateur reconnaît que <strong>l'ensemble des risques commerciaux, financiers et réglementaires restent exclusivement à sa charge et à celle de ses contreparties.</strong></p>
</div>
<div class="chapter">
  <h4>6. Sécurité et Confidentialité</h4>
  <p>L'utilisateur est responsable de la protection de ses identifiants d'accès, clés API et données d'authentification.</p>
  <p>La plateforme met en œuvre des mesures techniques de sécurité comprenant chiffrement, contrôles d'accès, journalisation et supervision.</p>
  <p>Cependant, PayGuru <strong>ne garantit ni un fonctionnement ininterrompu ni une sécurité absolue</strong> et ne pourra être tenu responsable des incidents causés par des systèmes externes, des prestataires ou des défaillances côté utilisateur.</p>
</div>
<div class="chapter">
  <h4>7. Litiges et Ajustements</h4>
  <p>La plateforme peut fournir des mécanismes techniques de gestion des litiges, d'ajustement des transactions et de correction de statut.</p>
  <p>Ces mécanismes :</p>
  <ul>
    <li>ne constituent pas une acceptation de responsabilité par PayGuru ;</li>
    <li>sont exécutés strictement dans le cadre des workflows techniques convenus ;</li>
    <li>n'impliquent aucune responsabilité financière quant au résultat des transactions.</li>
  </ul>
  <p>La responsabilité finale du règlement des litiges incombe aux parties impliquées dans la transaction sous-jacente.</p>
</div>
<div class="chapter">
  <h4>8. Limitation de Responsabilité</h4>
  <p>Dans la mesure maximale permise par la loi applicable :</p>
  <ul>
    <li>PayGuru ne sera pas responsable des dommages indirects, accessoires ou consécutifs ;</li>
    <li>PayGuru ne sera pas responsable des pertes résultant des actes ou omissions de prestataires tiers ;</li>
    <li>PayGuru ne sera pas responsable des transactions échouées, retardées ou annulées exécutées en dehors de son infrastructure.</li>
  </ul>
  <p>La plateforme est fournie <strong>"en l'état" et "selon disponibilité"</strong> sans garantie d'aucune sorte.</p>
</div>
<div class="chapter">
  <h4>9. Modifications</h4>
  <p>La Société se réserve le droit de modifier les présentes Conditions à tout moment.</p>
  <p>Les versions mises à jour seront publiées sur le site web ou rendues disponibles via l'interface de la plateforme.</p>
  <p>La poursuite de l'utilisation de la plateforme vaut acceptation des Conditions mises à jour.</p>
</div>
<div class="chapter">
  <h4>10. Droit Applicable et Informations sur la Société</h4>
  <p>La plateforme est exploitée par :</p>
  <ul>
    <li><strong>IntegraNova Dynamics LLC</strong></li>
    <li>Juridiction : Nevis</li>
    <li>N° d'enregistrement : L 24105</li>
  </ul>
  <p>Les présentes Conditions sont régies et interprétées conformément aux lois applicables à la juridiction de la société exploitante, sauf accord écrit contraire.</p>
</div>
<div class="chapter">
  <h4>11. Dispositions Finales</h4>
  <p>PayGuru fonctionne exclusivement comme <strong>plateforme technologique de coordination</strong> entre participants indépendants.</p>
  <p>En utilisant la plateforme, l'utilisateur confirme comprendre pleinement le rôle de PayGuru, accepte les présentes Conditions et reconnaît que <strong>PayGuru n'agit pas comme garant financier ni comme processeur de paiement.</strong></p>
</div>
`;

export const fr: LocaleMessages = {
  pages: {
    homeTitle: "système d'orchestration des paiements",
    legalCenter: "Centre Juridique",
  },
  common: {
    brandName: "PayGuru",
    close: "Fermer",
    language: "Langue",
    copyright: "Copyright © 2026, Integranova Dynamics, LLC.",
  },
  actions: {
    scheduleCall: "Planifier un appel",
    requestDemo: "Demander l'accès à la démo",
    download: "Télécharger",
    send: "Envoyer",
    signIn: "Se connecter",
    expertConsultation: "Parler à un expert",
  },
  banner: {
    text: "Planifiez une démo et découvrez ce que nous construisons. Rencontrez-nous à la MAC Affiliate Conference en Arménie, les 26 et 27 mai.",
    linkText: "En savoir plus.",
  },
  nav: {
    about: "À propos",
    api: "Documentation API",
    terms: "Conditions d'utilisation",
    contacts: "Contacts",
  },
  hero: {
    titleHtml: "Contrôle total <br /> des flux financiers",
    textHtml: "<strong>PayGuru</strong> est un système multifonction d'orchestration des paiements avec une couverture mondiale.",
  },
  geographyNew: {
    title: "Nous opérons sur tous les continents",
    textHtml: "Des années de coopération avec des entreprises de confiance dans le monde entier <br> nous permettent de choisir des solutions réellement fiables pour votre activité.",
    coverageTitle: "Couverture mondiale",
    coverageTextHtml: "Prise en charge des méthodes locales avec un routage en cascade <br> flexible selon la GEO, la banque, la devise, le montant et le risque.",
    bullets: [
      {
        title: "Filtres antifraude :",
        textHtml: "par montant, fréquence, BIN/<br>ISSUER, heure de la journée, zone géographique et <br> schémas comportementaux.",
      },
      {
        title: "Taux intelligents / FX :",
        textHtml: "source externe ou taux fixe <br> par route.",
      },
    ],
  },
  geographyLegacy: {
    title: "Géographie et couverture",
    cardTitle: "Nous opérons sur tous les continents",
    cardText: "50+ pays",
    items: [
      { textHtml: "Prise en charge des méthodes locales, <br /> banques et devises." },
      {
        textHtml: "Routage par GEO, devise, banque <br /> ou système de paiement du bénéficiaire, plage <br /> de montants et profil de risque.",
      },
      { textHtml: "Logique en cascade flexible entre exécutants." },
      { textHtml: "Scénarios transfrontaliers, conversion <br /> et limites à plusieurs niveaux." },
    ],
  },
  technologies: {
    title: "Technologies en action",
    text: "Contrôle total des paiements et des processus métier.",
    items: [
      { title: "Automatisation", textHtml: "99 % des opérations sans intervention manuelle." },
      { title: "Performance", textHtml: "Fonctionnement stable <br> sous fortes charges." },
      { title: "Sécurité", textHtml: "Alignement PCI DSS, <br> mesures de protection intégrées." },
      { title: "Fonctionnalités", textHtml: "Des centaines de paramètres dans l'interface <br> pour un réglage précis." },
      { title: "Contrôle", textHtml: "Accès complet à la logique métier, <br> aux API et aux paramètres." },
      { title: "Fiabilité", textHtml: "Support 24/7 pour les opérations <br> critiques." },
    ],
  },
  features: {
    items: [
      { title: "Support 24/7", textHtml: "Une équipe d'experts d'astreinte <br> pour une réaction rapide." },
      { title: "Monitoring", textHtml: "Surveillance continue des services <br> avec alertes automatiques dans Telegram." },
      { title: "Journalisation complète", textHtml: "Logs détaillés, audit des opérations <br> et traçabilité transparente des requêtes." },
    ],
  },
  whiteLabel: {
    title: "White Label PayGuru",
    textHtml: "Une infrastructure de paiement prête à l'emploi pour le traitement et la gestion de flux financiers de niveau enterprise.",
    items: [
      { title: "Infrastructure prête", textHtml: "Branding client : domaine et logo." },
      { title: "Mises à jour continues", textHtml: "Nouvelles fonctionnalités et moyens de paiement <br> sans interruption de service." },
      { title: "Lancement rapide", textHtml: "Avec possibilité de personnaliser les méthodes et la logique métier." },
    ],
  },
  fastStart: {
    title: "Lancement rapide",
    items: [
      {
        title: "Branding",
        textHtml: "Lancement complet sous votre marque en jusqu'à 7 jours : domaine, logo et configuration initiale.",
      },
      {
        title: "Processus métier préparés",
        textHtml: "Scénarios opérationnels prêts à l'emploi et règles pour le support, les alertes et l'onboarding.",
      },
      {
        title: "Support au lancement",
        textHtml: "Documentation de formation, AI White Label Kit, tableaux Trello, checklists et guides pas à pas.",
      },
    ],
  },
  techSupport: {
    titleHtml: 'Support technique<br/><span class="text-gradient">White Label</span>',
    textHtml: "Une équipe de développeurs expérimentés pour vos intégrations, la personnalisation des fonctionnalités et toute demande sur mesure.",
    items: [
      {
        title: "Documentation détaillée",
        textHtml: "Avec des exemples de requêtes et de réponses, des schémas d'intégration détaillés, des descriptions d'erreurs et des recommandations pour les scénarios atypiques.",
      },
      {
        title: "Serveur de test",
        textHtml: "Un sandbox complet pour valider toute la chaîne d'appels : de la création de l'opération jusqu'au callback final et au traitement des statuts.",
      },
      {
        title: "Codes de statut transparents",
        textHtml: "Un système de statuts clair, logique et prévisible, avec un comportement compréhensible dans chaque scénario et une documentation pour chaque statut.",
      },
      {
        title: "Personnalisation de l'API",
        textHtml: "Adaptation de l'API et de la logique métier à vos processus : champs supplémentaires, callbacks non standard, méthodes et fonctionnalités sur demande.",
      },
    ],
  },
  contactUs: {
    title: "Parler à un expert",
    textHtml: "Un court échange avec un expert vous aidera à choisir la bonne solution, à lancer rapidement et à éviter les erreurs au démarrage comme en exploitation.",
  },
  contactModal: {
    title: "Nous contacter",
    fields: {
      name: "Nom",
      contact: "Contact (email ou Telegram)",
      contactPlaceholder: "example@mail.com | @example",
      comment: "Commentaire",
      commentPlaceholder: "Votre message...",
    },
    consent: {
      lead: "J'accepte le traitement des données personnelles",
      join: "et j'accepte la",
      link: "Politique de Confidentialité",
    },
    validation: {
      nameRequired: "Saisissez votre nom",
      nameTooShort: "Le nom doit comporter au moins 2 caractères",
      nameTooLong: "Le nom ne doit pas dépasser 100 caractères",
      contactRequired: "Saisissez un contact (email ou Telegram)",
      contactInvalid: "Saisissez un email ou un Telegram valide (@username)",
      commentTooLong: "Le commentaire ne doit pas dépasser 2000 caractères",
      consentRequired: "Le consentement au traitement des données est requis",
    },
    status: {
      success: "Merci, votre demande a été envoyée.",
      error: "Erreur lors de l'envoi de la demande.",
    },
  },
  footer: {
    terms: "Conditions d'utilisation",
    privacy: "Politique de Confidentialité",
    contact: "Nous contacter",
    company: "2026 Integranova Dynamics, LLC.",
  },
  legal: {
    center: "Centre Juridique",
    tabs: {
      terms: "Conditions d'utilisation",
      privacy: "Politique de Confidentialité",
    },
    downloads: {
      privacy: "Télécharger la Politique de Confidentialité",
      terms: "Télécharger les Conditions d'utilisation",
    },
    privacy: {
      title: "Politique de Confidentialité",
      contentHtml: privacyContent,
    },
    terms: {
      title: "Conditions d'utilisation",
      contentHtml: termsContent,
    },
  },
};
