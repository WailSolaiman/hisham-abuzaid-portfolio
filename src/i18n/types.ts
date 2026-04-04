export type AchievementItem = {
  n: string;
  title: string;
  body: string;
};

export type CredentialItem = {
  label: string;
  title: string;
  body: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  body: string;
};

export type DocumentItem = {
  title: string;
  href: string;
};

export type PolicySection = {
  heading: string;
  body: string;
};

export type TrainingCourseItem = {
  title: string;
  meta: string;
};

export type RecognitionEntry = {
  text: string;
  details?: string[];
};

export type LocaleMessages = {
  meta: { title: string };
  nav: {
    brand: string;
    vision: string;
    achievements: string;
    qualifications: string;
    training: string;
    recognitions: string;
    experience: string;
    documents: string;
    contact: string;
    menuOpen: string;
    menuClose: string;
    backToTop: string;
    preferenceTheme: string;
    preferenceLanguage: string;
    themeUseLight: string;
    themeUseDark: string;
  };
  hero: {
    kicker: string;
    headline: string;
    lead: string;
    quote: string;
  };
  vision: {
    statValue: string;
    statLabel: string;
    kicker: string;
    title: string;
    p1: string;
    bullets: string[];
  };
  achievements: {
    kicker: string;
    title: string;
    items: AchievementItem[];
  };
  qualifications: {
    kicker: string;
    title: string;
    items: CredentialItem[];
  };
  training: {
    kicker: string;
    title: string;
    label: string;
    courses: TrainingCourseItem[];
  };
  recognitions: {
    kicker: string;
    title: string;
    label: string;
    entries: RecognitionEntry[];
  };
  experience: {
    kicker: string;
    title: string;
    items: ExperienceItem[];
  };
  documents: {
    kicker: string;
    title: string;
    items: DocumentItem[];
  };
  contact: {
    title: string;
    body: string;
    portfolio: string;
  };
  footer: {
    legalName: string;
    rights: string;
    privacy: string;
    terms: string;
    emailAria: string;
    linkedInAria: string;
  };
  policy: {
    privacyTitle: string;
    privacyIntro: string;
    privacySections: PolicySection[];
    termsTitle: string;
    termsIntro: string;
    termsSections: PolicySection[];
    backHome: string;
  };
};
