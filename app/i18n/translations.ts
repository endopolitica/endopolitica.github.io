export interface TranslationContent {
  nav: {
    home: string;
    manifesto: string;
    whatWeDo: string;
    purpose: string;
    support: string;
    contact: string;
  };
  hero: {
    intro: string;
    main: string;
    outro: string;
  };
  manifesto: {
    title: string;
    content: string;
  };
  whatWeDo: {
    title: string;
    content: string;
  };
  purpose: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    intro: string;
    email: string;
  };
  footer: {
    supportedBy: string;
  };
}

export const translations: Record<string, TranslationContent> = {
  pt: {
    nav: {
      home: "Home",
      manifesto: "Manifesto",
      whatWeDo: "O que fazemos",
      purpose: "Propósito",
      support: "Apoio",
      contact: "Contato",
    },
    hero: {
      intro: "A nossa",
      main: "Endometriose",
      outro: "é política!",
    },
    manifesto: {
      title: "Manifesto",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
    },
    whatWeDo: {
      title: "O que fazemos",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
    },
    purpose: {
      title: "Propósito",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
    },
    contact: {
      title: "Contato",
      intro: "Fale com a gente pelo e-mail:",
      email: "contato@endopolitica.org"
    },
    footer: {
      supportedBy: "Somos apoiados por"
    }
  },
  en: {
    nav: {
      home: "Home",
      manifesto: "Manifesto",
      whatWeDo: "What We Do",
      purpose: "Purpose",
      support: "Support",
      contact: "Contact",
    },
    hero: {
      intro: "Our",
      main: "Endometriosis",
      outro: "is political!",
    },
    manifesto: {
      title: "Manifesto",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
    },
    whatWeDo: {
      title: "What We Do",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
    },
    purpose: {
      title: "Purpose",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
    },
    contact: {
      title: "Contact",
      intro: "Get in touch with us via email:",
      email: "contato@endopolitica.org"
    },
    footer: {
      supportedBy: "We are supported by"
    }
  }
}; 