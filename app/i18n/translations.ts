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
      content: `Quando temos um problema de saúde e buscamos um profissional, queremos uma pessoa em que possamos confiar. Com pacientes de endometriose isso é mais complexo: existem evidências de que, mundialmente, uma série de mitos desmentidos há décadas continuam guiando a conduta médica. A desinformação é uma questão chave porque afeta não só pacientes, mas também médicos, familiares, empregadores e governantes. Isso impacta não só o tempo gasto até o diagnóstico, mas o acesso a um tratamento adequado. A falta de conhecimento também propicia a realização de cirurgias feitas de forma comprovadamente errada, o que  pode piorar os sintomas e causar complicações mais cruéis que a própria doença para a vida da paciente.`
    },
    whatWeDo: {
      title: "O que fazemos",
      content: "Combatemos a desinformação quando compartilhamos informações sobre endometriose e dor crônica, sempre baseadas em evidências científicas, nas redes sociais. Compartilhando a nossa vivência, percebemos que vários dos problemas enfrentados durante o tratamento da Hannah são coletivos. Começamos então a colaborar com a Frente Parlamentar de Endometriose e  a usar a usar tecnologia para trazer soluções inovadoras para pacientes e profissionais de saúde, ambos mirando à redução do tempo de acesso à um especialista. Esse é  um dos grandes desafios e fatores de complicação da doença, já que o tempo médio de diagnóstico varia entre 7 e 12 anos após o início dos sintomas. O combate à desinformação é uma das chaves para solucionar esse problema."
    },
    purpose: {
      title: "Propósito",
      content: `Nosso propósito é contribuir para que nenhuma mulher passe pelo que nós passamos: 7 procedimentos cirúrgicos, gaslighting, preconceito e um tratamento físico,emocional e financeirameirte exaustivo. Sabemos que, diferentemente da maior parte das pessoas,tivemos o privilégio acessar um tratamento adequado, mas ainda assim com 11 anos de demora. Acreditamos que os conhecimentos sobre a endometriose, suas consequências e tratamentos devem ser públicos e acessíveis, e que o tratamendo multidisciplinar não deve ser um privilégio, mas acessível a todos que necessitam.`
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
      content: `When we have a health issue and seek a professional, we want someone we can trust. For endometriosis patients, this is more complex: there is evidence that, worldwide, a series of myths debunked decades ago still guide medical conduct.
Misinformation is a key issue because it affects not only patients, but also doctors, family members, employers, and policymakers. This impacts not only the time it takes to get a diagnosis, but also access to proper treatment. The lack of knowledge also leads to surgeries being performed in ways that are proven to be incorrect, which can worsen symptoms and cause complications even more cruel than the disease itself for the patient’s life.`
    },
    whatWeDo: {
      title: "What We Do",
      content: `We fight misinformation by sharing evidence-based information about endometriosis and chronic pain on social media. Through sharing our personal experience, we realized that many of the challenges faced during Hannah’s treatment are shared by others. That led us to collaborate with the Endometriosis Parliamentary Front and to start using technology to bring innovative solutions to both patients and healthcare professionals — all aimed at reducing the time it takes to access a specialist. This is one of the major challenges and complicating factors of the disease, as the average time to diagnosis ranges from 7 to 12 years after the onset of symptoms.
Fighting misinformation is one of the key ways to address this problem.`
    },
    purpose: {
      title: "Purpose",
      content: `Our purpose is to help ensure that no woman goes through what we went through: 7 surgical procedures, gaslighting, prejudice, and a physically, emotionally, and financially exhausting treatment journey. We know that, unlike most people, we had the privilege of accessing proper treatment — but even so, it took 11 years.
We believe that knowledge about endometriosis, its consequences, and its treatments should be public and accessible, and that multidisciplinary care should not be a privilege, but available to everyone who needs it.`
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