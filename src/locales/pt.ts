import type { LocaleMessages } from "./types";

const privacyContent = `
<div class="chapter">
  <h4>1. Disposições Gerais</h4>
  <p>Esta Política de Privacidade (a "Política") regula o tratamento de informações em conexão com o uso da plataforma tecnológica PayGuru.</p>
  <p>A plataforma PayGuru é uma solução tecnológica concebida para automatizar e coordenar interações entre participantes autorizados dentro de modelos de parceria acordados. A plataforma não se destina ao uso público por consumidores e não presta serviços diretamente aos utilizadores finais.</p>
</div>
<div class="chapter">
  <h4>2. Jurisdição e Regulação</h4>
  <p>O tratamento das informações é realizado dentro da estrutura operacional registada sob a jurisdição de Nevis.</p>
  <p>Essa jurisdição é escolhida para garantir flexibilidade operacional e coordenação entre os participantes da infraestrutura. Salvo acordo escrito em contrário, a lei aplicável será a da jurisdição da empresa operadora.</p>
</div>
<div class="chapter">
  <h4>3. Finalidade do Tratamento das Informações</h4>
  <p>A plataforma processa informações apenas para as seguintes finalidades:</p>
  <ul>
    <li>garantir o funcionamento estável e confiável da plataforma;</li>
    <li>suporte técnico e diagnóstico;</li>
    <li>monitorizar a segurança do sistema e prevenir abusos;</li>
    <li>automatizar interações entre participantes autorizados através das interfaces da plataforma;</li>
    <li>manter registos técnicos, logs e relatórios operacionais.</li>
  </ul>
  <p>O tratamento das informações limita-se ao necessário para alcançar as finalidades acima referidas.</p>
</div>
<div class="chapter">
  <h4>4. Categorias de Informações Tratadas</h4>
  <p>Como parte das suas operações técnicas, a plataforma pode processar e armazenar temporariamente as seguintes categorias de informações:</p>
  <ul>
    <li>identificadores técnicos (endereço IP, user-agent, traceID);</li>
    <li>informações de contacto fornecidas pelos participantes da plataforma (endereço de e-mail, conta Telegram);</li>
    <li>parâmetros de integração (chaves API, URLs de callback);</li>
    <li>registos de atividade, eventos do sistema, erros e incidentes;</li>
    <li>metadados relacionados com roteamento de transações, lógica de processamento e notificações internas.</li>
  </ul>
  <p>A plataforma <strong>não armazena dados de cartões de pagamento, credenciais de contas bancárias nem fundos de utilizadores finais.</strong></p>
  <p>Em determinados cenários, incluindo modelos de e-commerce ou de orquestração de pagamentos, a plataforma pode receber, transmitir ou encaminhar tecnicamente dados fornecidos pelos participantes <strong>exclusivamente com o objetivo de encaminhar esses dados a prestadores de serviços terceiros autorizados.</strong> Tal tratamento é automatizado, transitório e limitado à transmissão técnica, sem utilização independente, retenção ou controlo desses dados pela plataforma.</p>
</div>
<div class="chapter">
  <h4>5. Medidas Técnicas de Segurança</h4>
  <p>A plataforma aplica medidas técnicas e organizacionais para proteger as informações tratadas, incluindo:</p>
  <ul>
    <li>encriptação ao nível do transporte (SSL/TLS);</li>
    <li>autenticação baseada em funções e controlo de acesso;</li>
    <li>separação entre ambientes de produção e testes;</li>
    <li>controlo de acesso por restrições de IP e gestão de chaves;</li>
    <li>registo centralizado, monitorização e alertas.</li>
  </ul>
  <p>A arquitetura de segurança da plataforma segue princípios alinhados com os requisitos aplicáveis do PCI DSS dentro do âmbito técnico das operações da plataforma.</p>
</div>
<div class="chapter">
  <h4>6. Interação com Terceiros</h4>
  <p>As informações podem ser transmitidas a terceiros apenas na medida necessária para:</p>
  <ul>
    <li>garantir a compatibilidade técnica das integrações;</li>
    <li>cumprir acordos contratuais entre participantes autorizados;</li>
    <li>suportar serviços de infraestrutura como hosting, armazenamento, monitorização e segurança.</li>
  </ul>
  <p>Todas as interações com terceiros são limitadas ao âmbito mínimo necessário para o funcionamento da plataforma.</p>
</div>
<div class="chapter">
  <h4>7. Retenção de Dados</h4>
  <p>As informações são retidas pelo período definido pelas políticas técnicas e operacionais internas da plataforma.</p>
  <p>A eliminação ou anonimização dos dados é realizada automaticamente após o término do período de retenção aplicável ou mediante acordo com o participante relevante da plataforma.</p>
</div>
<div class="chapter">
  <h4>8. Disposições Finais</h4>
  <p>O uso da plataforma PayGuru constitui aceitação desta Política de Privacidade.</p>
  <p>O operador da plataforma reserva-se o direito de atualizar esta Política para refletir alterações técnicas, operacionais ou regulatórias.</p>
</div>
`;

const termsContent = `
<div class="chapter">
  <h4>1. Disposições Gerais</h4>
  <p>Estes Termos de Serviço (doravante, os "Termos") regulam o acesso e uso da plataforma tecnológica PayGuru, incluindo as suas interfaces web, APIs, dashboards e infraestrutura relacionada.</p>
  <p>PayGuru é uma <strong>plataforma tecnológica que fornece ferramentas para orquestração, coordenação e automação de processos relacionados com pagamentos</strong> entre participantes independentes de um modelo de parceria acordado.</p>
  <p>A plataforma <strong>não é um serviço público</strong>, não constitui uma oferta pública e está disponível exclusivamente para parceiros autorizados mediante acordo prévio.</p>
  <p>PayGuru <strong>não atua como banco, instituição de pagamento, empresa de serviços monetários, agente escrow nem intermediário financeiro,</strong> salvo acordo expresso em contrário por escrito.</p>
</div>
<div class="chapter">
  <h4>2. Acesso e Registo</h4>
  <p>O acesso à plataforma é concedido apenas após:</p>
  <ul>
    <li>verificação do parceiro;</li>
    <li>confirmação do caso de uso pretendido;</li>
    <li>alinhamento dos requisitos técnicos e operacionais.</li>
  </ul>
  <p>O registo, a concessão de acesso e a emissão de credenciais API são realizados manualmente por administradores autorizados ou representantes designados. A Empresa reserva-se o direito de recusar ou revogar o acesso ao seu exclusivo critério.</p>
</div>
<div class="chapter">
  <h4>3. Funcionalidade da Plataforma</h4>
  <p>A plataforma PayGuru disponibiliza um conjunto de <strong>ferramentas técnicas para gerir e coordenar fluxos de pagamento,</strong> incluindo, entre outros:</p>
  <ul>
    <li>criação e gestão de registos de transações;</li>
    <li>roteamento e distribuição de transações entre prestadores terceiros independentes;</li>
    <li>acompanhamento de estado, callbacks e notificações;</li>
    <li>fluxos de tratamento de disputas;</li>
    <li>ferramentas de reporting, analytics e reconciliação;</li>
    <li>integrações baseadas em API.</li>
  </ul>
  <p>Toda a funcionalidade é <strong>configurada individualmente por parceiro e projeto</strong> e reflete uma lógica de coordenação técnica, e não execução financeira.</p>
</div>
<div class="chapter">
  <h4>4. Papel da PayGuru e Operações de Pagamento</h4>
  <p>A PayGuru atua exclusivamente como <strong>intermediário tecnológico e camada de orquestração.</strong></p>
  <p>A PayGuru:</p>
  <ul>
    <li><strong>não</strong> aceita fundos de utilizadores finais;</li>
    <li><strong>não</strong> mantém, armazena ou guarda ativos fiduciários;</li>
    <li><strong>não</strong> inicia nem executa transferências financeiras;</li>
    <li><strong>não</strong> garante a conclusão de transações por terceiros.</li>
  </ul>
  <p>Todas as operações de pagamento, incluindo transferências de fundos, câmbio, liquidação e fornecimento de liquidez, são executadas por <strong>prestadores terceiros independentes, executores ou contrapartes,</strong> selecionados pelo parceiro ou determinados pela lógica de roteamento acordada.</p>
  <p>Qualquer transferência de valor ocorre <strong>fora do controlo</strong> e da responsabilidade da PayGuru.</p>
</div>
<div class="chapter">
  <h4>5. Responsabilidades do Utilizador</h4>
  <p>O utilizador concorda em:</p>
  <ul>
    <li>cumprir todas as leis e regulamentos aplicáveis na sua jurisdição;</li>
    <li>garantir que a utilização da plataforma não viola direitos de terceiros;</li>
    <li>fornecer informações corretas e lícitas quando necessário;</li>
    <li>avaliar de forma independente os riscos associados às operações de pagamento e aos prestadores terceiros.</li>
  </ul>
  <p>O utilizador reconhece que <strong>todos os riscos comerciais, financeiros e regulatórios permanecem exclusivamente com o utilizador e as suas contrapartes.</strong></p>
</div>
<div class="chapter">
  <h4>6. Segurança e Confidencialidade</h4>
  <p>O utilizador é responsável por proteger credenciais de acesso, chaves API e dados de autenticação.</p>
  <p>A plataforma emprega medidas técnicas de segurança, incluindo encriptação, controlos de acesso, registo e monitorização.</p>
  <p>No entanto, a PayGuru <strong>não garante funcionamento ininterrupto nem segurança absoluta</strong> e não será responsável por incidentes causados por sistemas externos, prestadores ou falhas do lado do utilizador.</p>
</div>
<div class="chapter">
  <h4>7. Disputas e Ajustes</h4>
  <p>A plataforma pode disponibilizar mecanismos técnicos para tratamento de disputas, ajustes de transações e correções de estado.</p>
  <p>Tais mecanismos:</p>
  <ul>
    <li>não constituem aceitação de responsabilidade por parte da PayGuru;</li>
    <li>são executados estritamente dentro dos fluxos técnicos acordados;</li>
    <li>não implicam responsabilidade financeira pelos resultados das transações.</li>
  </ul>
  <p>A responsabilidade final pela resolução de disputas cabe às partes envolvidas na transação subjacente.</p>
</div>
<div class="chapter">
  <h4>8. Limitação de Responsabilidade</h4>
  <p>Na máxima extensão permitida pela lei aplicável:</p>
  <ul>
    <li>a PayGuru não será responsável por danos indiretos, incidentais ou consequenciais;</li>
    <li>a PayGuru não será responsável por perdas resultantes de ações ou omissões de prestadores terceiros;</li>
    <li>a PayGuru não será responsável por transações falhadas, atrasadas ou revertidas executadas fora da sua infraestrutura.</li>
  </ul>
  <p>A plataforma é fornecida <strong>"tal como está" e "conforme disponível"</strong> sem garantias de qualquer tipo.</p>
</div>
<div class="chapter">
  <h4>9. Alterações</h4>
  <p>A Empresa reserva-se o direito de modificar estes Termos a qualquer momento.</p>
  <p>As versões atualizadas serão publicadas no website ou disponibilizadas através da interface da plataforma.</p>
  <p>A continuação da utilização da plataforma constitui aceitação dos Termos atualizados.</p>
</div>
<div class="chapter">
  <h4>10. Lei Aplicável e Informações da Empresa</h4>
  <p>A plataforma é operada por:</p>
  <ul>
    <li><strong>IntegraNova Dynamics LLC</strong></li>
    <li>Jurisdição: Nevis</li>
    <li>N.º de registo: L 24105</li>
  </ul>
  <p>Estes Termos serão regidos e interpretados de acordo com as leis aplicáveis à jurisdição da empresa operadora, salvo acordo escrito em contrário.</p>
</div>
<div class="chapter">
  <h4>11. Disposições Finais</h4>
  <p>A PayGuru funciona exclusivamente como <strong>plataforma tecnológica de coordenação</strong> entre participantes independentes.</p>
  <p>Ao utilizar a plataforma, o utilizador confirma plena compreensão do papel da PayGuru, aceita estes Termos e reconhece que <strong>a PayGuru não atua como garantidor financeiro nem processador de pagamentos.</strong></p>
</div>
`;

export const pt: LocaleMessages = {
  pages: {
    homeTitle: "sistema de orquestração de pagamentos",
    legalCenter: "Centro Jurídico",
  },
  common: {
    brandName: "PayGuru",
    close: "Fechar",
    language: "Idioma",
    copyright: "Copyright © 2026, Integranova Dynamics, LLC.",
  },
  actions: {
    scheduleCall: "Agendar uma chamada",
    requestDemo: "Solicitar acesso à demo",
    download: "Baixar",
    send: "Enviar",
    signIn: "Entrar",
    expertConsultation: "Consulta com um especialista",
  },
  banner: {
    text: "Agende uma demo e veja o que estamos a construir. Encontre-nos na MAC Affiliate Conference na Arménia, dias 26 e 27 de maio.",
    linkText: "Saiba mais.",
  },
  nav: {
    about: "Sobre nós",
    api: "Documentação da API",
    terms: "Termos de Serviço",
    contacts: "Contactos",
  },
  hero: {
    titleHtml: "Controlo total <br /> sobre os fluxos financeiros",
    textHtml: "<strong>PayGuru</strong> é um sistema multifuncional de orquestração de pagamentos com cobertura global.",
  },
  geographyNew: {
    title: "Trabalhamos em todos os continentes",
    textHtml: "Anos de cooperação com empresas de confiança em todo o mundo <br> permitem-nos escolher soluções realmente fiáveis para o seu negócio.",
    coverageTitle: "Cobertura global",
    coverageTextHtml: "Suporte para métodos locais com roteamento em cascata <br> flexível por GEO, banco, moeda, montante e risco.",
    bullets: [
      {
        title: "Filtros antifraude:",
        textHtml: "por montante, frequência, BIN/<br>ISSUER, hora do dia, geografia e <br> padrões comportamentais.",
      },
      {
        title: "Taxas inteligentes/FX:",
        textHtml: "fonte externa ou taxa fixa <br> por rota.",
      },
    ],
  },
  geographyLegacy: {
    title: "Geografia e cobertura",
    cardTitle: "Trabalhamos em todos os continentes",
    cardText: "50+ países",
    items: [
      { textHtml: "Suporte para métodos locais, <br /> bancos e moedas." },
      {
        textHtml: "Roteamento por GEO, moeda, banco <br /> ou sistema de pagamento do destinatário, intervalo <br /> de valores e perfil de risco.",
      },
      { textHtml: "Lógica em cascata flexível entre executores." },
      { textHtml: "Cenários transfronteiriços, conversão <br /> e limites em vários níveis." },
    ],
  },
  technologies: {
    title: "Tecnologias em ação",
    text: "Controlo total sobre pagamentos e processos de negócio.",
    items: [
      { title: "Automação", textHtml: "99% das operações sem intervenção manual." },
      { title: "Desempenho", textHtml: "Funcionamento estável <br> sob picos de carga." },
      { title: "Segurança", textHtml: "Alinhamento com PCI DSS, <br> medidas de proteção integradas." },
      { title: "Funcionalidade", textHtml: "Centenas de parâmetros na UI <br> para ajuste fino." },
      { title: "Controlo", textHtml: "Acesso total à lógica de negócio, <br> APIs e parâmetros." },
      { title: "Fiabilidade", textHtml: "Suporte 24/7 para operações <br> críticas." },
    ],
  },
  features: {
    items: [
      { title: "Suporte 24/7", textHtml: "Uma equipa de especialistas de plantão <br> para resposta rápida." },
      { title: "Monitorização", textHtml: "Monitorização contínua dos serviços <br> com alertas automáticos no Telegram." },
      { title: "Logging completo", textHtml: "Logs detalhados, auditoria de operações <br> e rastreabilidade transparente dos pedidos." },
    ],
  },
  whiteLabel: {
    title: "White Label PayGuru",
    textHtml: "Uma infraestrutura de pagamentos pronta para processar e gerir fluxos financeiros de nível enterprise.",
    items: [
      { title: "Infraestrutura pronta", textHtml: "Branding para o cliente: domínio e logótipo." },
      { title: "Atualizações contínuas", textHtml: "Novas funcionalidades e métodos de pagamento <br> sem interrupção dos serviços." },
      { title: "Arranque rápido", textHtml: "Com possibilidade de personalizar métodos e lógica de negócio." },
    ],
  },
  fastStart: {
    title: "Arranque rápido",
    items: [
      {
        title: "Branding",
        textHtml: "Lançamento completo sob a sua marca em até 7 dias: domínio, logótipo e configuração inicial.",
      },
      {
        title: "Processos de negócio ajustados",
        textHtml: "Cenários operacionais prontos e regulamentos para suporte, alertas e onboarding.",
      },
      {
        title: "Suporte ao lançamento",
        textHtml: "Documentação de formação, AI White Label Kit, quadros Trello, checklists e guias passo a passo.",
      },
    ],
  },
  techSupport: {
    titleHtml: 'Suporte técnico<br/><span class="text-gradient">White Label</span>',
    textHtml: "Uma equipa de developers experientes para as suas integrações, personalização de funcionalidades e qualquer tarefa sob medida.",
    items: [
      {
        title: "Documentação detalhada",
        textHtml: "Com exemplos de pedidos e respostas, esquemas detalhados de integração, descrição de erros e recomendações para cenários não padrão.",
      },
      {
        title: "Servidor de testes",
        textHtml: "Um sandbox completo para validar toda a cadeia de chamadas: da criação da operação ao callback final e tratamento de estados.",
      },
      {
        title: "Códigos de estado transparentes",
        textHtml: "Um sistema de estados claro, lógico e previsível, com comportamento compreensível em cada cenário e documentação para cada estado.",
      },
      {
        title: "Customização da API",
        textHtml: "Adaptação da API e da lógica de negócio aos seus processos: campos adicionais, callbacks não standard, métodos e funcionalidades personalizadas sob pedido.",
      },
    ],
  },
  contactUs: {
    title: "Consulta com um especialista",
    textHtml: "Uma chamada curta com um especialista vai ajudá-lo a escolher a solução certa, arrancar rapidamente e evitar erros no início e durante a operação.",
  },
  contactModal: {
    title: "Fale connosco",
    fields: {
      name: "Nome",
      contact: "Contacto (email ou Telegram)",
      contactPlaceholder: "example{at}mail.com | {at}example",
      comment: "Comentário",
      commentPlaceholder: "A sua mensagem...",
    },
    consent: {
      lead: "Concordo com o tratamento de dados pessoais",
      join: "e aceito a",
      link: "Política de Privacidade",
    },
    validation: {
      nameRequired: "Introduza o seu nome",
      nameTooShort: "O nome deve ter pelo menos 2 caracteres",
      nameTooLong: "O nome não pode ter mais de 100 caracteres",
      contactRequired: "Introduza um contacto (email ou Telegram)",
      contactInvalid: "Introduza um email ou Telegram válido ({at}username)",
      commentTooLong: "O comentário não pode ter mais de 2000 caracteres",
      consentRequired: "É necessário consentimento para o tratamento de dados",
    },
    status: {
      success: "Obrigado, o seu pedido foi enviado.",
      error: "Erro ao enviar o pedido.",
    },
  },
  footer: {
    terms: "Termos de Serviço",
    privacy: "Política de Privacidade",
    contact: "Fale connosco",
    company: "2026 Integranova Dynamics, LLC.",
  },
  legal: {
    center: "Centro Jurídico",
    tabs: {
      terms: "Termos de Serviço",
      privacy: "Política de Privacidade",
    },
    downloads: {
      privacy: "Baixar a Política de Privacidade",
      terms: "Baixar os Termos de Serviço",
    },
    privacy: {
      title: "Política de Privacidade",
      contentHtml: privacyContent,
    },
    terms: {
      title: "Termos de Serviço",
      contentHtml: termsContent,
    },
  },
};
