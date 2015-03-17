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
      url: "http://larruda.github.io/spin-campinas/",
      googleanalytics: "UA-60773644-1"
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
          time: "13h40"
        }
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
          time: "14h50"
        }
      },
      {
        name: "Coffee-break",
        time: "15h50"
      },
      {
        name: "Ricardo Politi",
        photo: "http://www.broota.com.br/assets/ricardo-politi-921024bb0755f2cff75c1f63f80bd21b.jpg",
        bio: "Administrador de Empresas pelo Ibmec São Paulo, Ricardo Politi iniciou sua carreira como consultor de investimentos focado nos mercados hoteleiro, imobiliário e turístico, atuando na sequência como executivo comercial em uma trading company com foco no mercado internacional. Atualmente, como empreendedor, é sócio do Broota Brasil, a primeira plataforma de Equity Crowdfunding da América Latina, tendo sito pioneiro tanto no mercado Chileno quanto Brasileiro. Além disso, atua como fundraiser voluntário no Instituto Gerando Falcões (IGF), é membro do Comitê de Gestão e Coordenador de Solidariedade do LIDE Futuro (Grupo Doria) e Moderador de Fórum YNGr do Young Presidents' Organization (YPO).",
        company: "Broota",
        link: {
          href: "https://br.linkedin.com/pub/ricardo-politi/27/330/381/en",
          text: "LinkedIn"
        },
        presentation: {
          title: "Equity Crowdfunding: Uma maneira inovadora de financiar a sua Startup!",
          description: "Serão abordadas diversas fontes de financiamento/\"capital empreendedor\" disponíveis para se financiar uma idéia ou empresa em estágio inicial (Investimento Anjo, Fundo de Capital Semente, Venture Capital, Subvenção/Edital, Aceleradora, Financiamento Bancário, e etc), culminando no Equity Crowdfunding, uma maneira inovadora de captação de recursos, também conhecida como Investimento Colaborativo para Startups.",
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