module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "SPIN Campinas / Encontro #61",
      description: "Empreendedorismo & Startups",
      date: "24 de Março",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "PUC-Campinas",
      address: "Auditório Dom Gilberto, PUC-Campinas",
      city: "Campinas",
      state: "São Paulo"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "http://bit.ly/spin-cps-inscricao"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: ""
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Agenda",
      sponsors: "Co-realização",
      partners: "Patrocínio",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Abertura",
        time: "13h30"
      },
      {
        name: "Tiago Aguirre",
        photo: "https://media.licdn.com/mpr/mpr/shrink_120_120/p/4/000/147/1f6/150df15.jpg",
        bio: "Eng.Computação-PUC-Campinas, MBA e-Business - FGV, empreendedor e empresário, diretor da TechTrend IT Solutions, professor da Disciplina de Empreendedorismo para cursos de SI e Eng. Computação da PUC-Campinas, Coodenador do programa PUC-Campinas Empreende, Conselheiro CIESP-DR-Campinas, Conselheiro SESI-SENAI DR Campinas, membro do Conselho INCAMP, Presidente do Gênese 2008 à 2012, Coordenador do NJE-CIESP 2008 à 2012, membro COMDEFESA-FIESP em 2009.",
        company: "PUC-Campinas",
        link: {
          href: "https://br.linkedin.com/pub/tiago-ferraz-de-arruda-e-aguirre/0/3aa/6a1",
          text: "LinkedIn"
        },
        presentation: {
          title: "Empreendedorismo e Universidade: um modelo para transformação da sociedade",
          description: "Estimular a reflexão do papel do empreendedorismo estimulado por Universidades. Com a crescente demanda de produtividade no mercado de trabalho é necessário refletir como a Universidade pode estimular a consciência empreendedora dos nossos alunos e mecanismos de transformação da sociedade através de empresas já constituídas e também por novas empresas.",
          time: "13h40"
        }
      },
      {
        name: "Wilson Campanholi Jr.",
        photo: "data:image/jpeg;base64,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",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "ACS - Associação Campinas Startups",
        link: {
          href: "https://br.linkedin.com/in/wcampaj",
          text: "LinkedIn"
        },
        presentation: {
          title: "Título da Palestra em Breve",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h50"
        }
      },
      {
        name: "Coffee-break",
        time: "15h50"
      },
      {
        name: "Rosana Fernandes",
        photo: "https://media.licdn.com/mpr/mpr/shrink_200_200/p/6/005/075/308/3196017.jpg",
        bio: "Apaixonada por inovação, sempre atuou  na área de desenvolvimento de soluções em empresas nacionais e multinacionais de alta tecnologia. É Sócia Fundadora da Baita- Aceleradora de Empresas e  presidente  do Unicamp Ventures, rede de relacionamento de empreendedores ligados a Unicamp.Foi  Diretora Senior de Desenvolvimento de Produtos para América Latina da Motorola, onde liderou o desenvolvimento de produtos para o mercado regional e mundial. Brasileira e casada, Rosana formou-se em Ciências da Computação pela Universidade Estadual de Campinas (UNICAMP), especialização em Comunicação de Dados pela JICA (Japão), governança corporativa pelo IBGC e possui MBA pela FIA/ USP.",
        company: "Baita - Aceleradora credenciada MCTI",
        link: {
          href: "https://br.linkedin.com/in/rosanajamal",
          text: "LinkedIn"
        },
        presentation: {
          title: "Empreender? Onde, como, por quê?",
          description: "Discutir o tema empreendedorismo, onde ele se aplica e porque ele faz a diferença. Empreendedorismo é muito mais que criar uma empresa a partir de uma ideia. Empreender é inovar, é gerar valor a partir da resolução de um problema real. Vamos explicar como o conceito se aplica tanto à startup e quanto à grande empresa; as ferramentas mais utilizadas neste ambiente  e porque empreendedorismo está sendo considerado como a mola mestra do crescimento econômico mundial.",
          time: "16h20"
        }
      },
      {
        name: "Encerramento",
        time: "17h20"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "PUC-Campinas",
        logo: "http://www.edudata.net.br/puc15/images/puccamp_logo.png",
        url: "https://www.puc-campinas.edu.br/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Matera Systems",
        logo: "http://logo.empregos.com.br/100927_G.jpg",
        url: "http://www.matera.com/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};