export type TextItem = {
  textHtml: string;
};

export type TitledItem = {
  title: string;
  textHtml: string;
};

export type LocaleMessages = {
  pages: {
    homeTitle: string;
    legalCenter: string;
  };
  common: {
    brandName: string;
    close: string;
    language: string;
    copyright: string;
  };
  actions: {
    scheduleCall: string;
    requestDemo: string;
    download: string;
    send: string;
    signIn: string;
    expertConsultation: string;
  };
  banner: {
    text: string;
    linkText: string;
  };
  nav: {
    about: string;
    api: string;
    terms: string;
    contacts: string;
  };
  hero: {
    titleHtml: string;
    textHtml: string;
  };
  geographyNew: {
    title: string;
    textHtml: string;
    coverageTitle: string;
    coverageTextHtml: string;
    bullets: TitledItem[];
  };
  geographyLegacy: {
    title: string;
    cardTitle: string;
    cardText: string;
    items: TextItem[];
  };
  technologies: {
    title: string;
    text: string;
    items: TitledItem[];
  };
  features: {
    items: TitledItem[];
  };
  whiteLabel: {
    title: string;
    textHtml: string;
    items: TitledItem[];
  };
  fastStart: {
    title: string;
    items: TitledItem[];
  };
  techSupport: {
    titleHtml: string;
    textHtml: string;
    items: TitledItem[];
  };
  contactUs: {
    title: string;
    textHtml: string;
  };
  contactModal: {
    title: string;
    fields: {
      name: string;
      contact: string;
      contactPlaceholder: string;
      comment: string;
      commentPlaceholder: string;
    };
    consent: {
      lead: string;
      join: string;
      link: string;
    };
    validation: {
      nameRequired: string;
      nameTooShort: string;
      nameTooLong: string;
      contactRequired: string;
      contactInvalid: string;
      commentTooLong: string;
      consentRequired: string;
    };
    status: {
      success: string;
      error: string;
    };
  };
  footer: {
    terms: string;
    privacy: string;
    contact: string;
    company: string;
  };
  legal: {
    center: string;
    tabs: {
      terms: string;
      privacy: string;
    };
    downloads: {
      privacy: string;
      terms: string;
    };
    privacy: {
      title: string;
      contentHtml: string;
    };
    terms: {
      title: string;
      contentHtml: string;
    };
  };
};
