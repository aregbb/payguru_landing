import type { LocaleMessages } from "./types";

const privacyContent = `
<div class="chapter">
  <h4>1. Disposiciones Generales</h4>
  <p>Esta Política de Privacidad (la "Política") regula el tratamiento de la información en relación con el uso de la plataforma tecnológica PayGuru.</p>
  <p>La plataforma PayGuru es una solución tecnológica diseñada para automatizar y coordinar interacciones entre participantes autorizados dentro de modelos de colaboración acordados. La plataforma no está destinada al uso público por consumidores y no presta servicios directamente a los usuarios finales.</p>
</div>
<div class="chapter">
  <h4>2. Jurisdicción y Regulación</h4>
  <p>El tratamiento de la información se lleva a cabo dentro de la estructura operativa registrada bajo la jurisdicción de Nevis.</p>
  <p>Esta jurisdicción se elige para garantizar flexibilidad operativa y coordinación entre los participantes de la infraestructura. Salvo acuerdo escrito en contrario, la ley aplicable será la de la jurisdicción de la sociedad operadora.</p>
</div>
<div class="chapter">
  <h4>3. Finalidad del Tratamiento de la Información</h4>
  <p>La plataforma procesa información exclusivamente para los siguientes fines:</p>
  <ul>
    <li>garantizar un funcionamiento estable y confiable de la plataforma;</li>
    <li>soporte técnico y diagnóstico;</li>
    <li>monitorización de la seguridad del sistema y prevención de abusos;</li>
    <li>automatización de interacciones entre participantes autorizados a través de las interfaces de la plataforma;</li>
    <li>mantenimiento de registros técnicos, trazas y reportes operativos.</li>
  </ul>
  <p>El tratamiento de la información se limita al alcance necesario para cumplir los fines anteriores.</p>
</div>
<div class="chapter">
  <h4>4. Categorías de Información Tratada</h4>
  <p>Como parte de sus operaciones técnicas, la plataforma puede procesar y almacenar temporalmente las siguientes categorías de información:</p>
  <ul>
    <li>identificadores técnicos (dirección IP, user-agent, traceID);</li>
    <li>información de contacto proporcionada por los participantes de la plataforma (correo electrónico, cuenta de Telegram);</li>
    <li>parámetros de integración (claves API, URL de callback);</li>
    <li>registros de actividad, eventos del sistema, errores e incidentes;</li>
    <li>metadatos relacionados con el enrutamiento de transacciones, la lógica de procesamiento y las notificaciones internas.</li>
  </ul>
  <p>La plataforma <strong>no almacena datos de tarjetas de pago, credenciales de cuentas bancarias ni fondos de usuarios finales.</strong></p>
  <p>En determinados escenarios, incluidos modelos de comercio electrónico u orquestación de pagos, la plataforma puede recibir, transmitir o reenviar técnicamente datos proporcionados por los participantes <strong>únicamente con el fin de enrutar dichos datos a proveedores de servicios externos autorizados.</strong> Ese tratamiento es automatizado, transitorio y limitado a la transmisión técnica, sin uso independiente, conservación o control de dichos datos por parte de la plataforma.</p>
</div>
<div class="chapter">
  <h4>5. Medidas Técnicas de Seguridad</h4>
  <p>La plataforma aplica medidas técnicas y organizativas para proteger la información tratada, entre ellas:</p>
  <ul>
    <li>cifrado a nivel de transporte (SSL/TLS);</li>
    <li>autenticación basada en roles y control de acceso;</li>
    <li>separación de entornos de producción y prueba;</li>
    <li>control de acceso mediante restricciones por IP y gestión de claves;</li>
    <li>registro centralizado, monitorización y alertas.</li>
  </ul>
  <p>La arquitectura de seguridad de la plataforma sigue principios alineados con los requisitos aplicables de PCI DSS dentro del alcance técnico de las operaciones de la plataforma.</p>
</div>
<div class="chapter">
  <h4>6. Interacción con Terceros</h4>
  <p>La información puede transmitirse a terceros únicamente en la medida necesaria para:</p>
  <ul>
    <li>garantizar la compatibilidad técnica de las integraciones;</li>
    <li>cumplir acuerdos contractuales entre participantes autorizados;</li>
    <li>respaldar servicios de infraestructura como hosting, almacenamiento, monitorización y seguridad.</li>
  </ul>
  <p>Todas las interacciones con terceros se limitan al alcance mínimo necesario para la funcionalidad de la plataforma.</p>
</div>
<div class="chapter">
  <h4>7. Conservación de Datos</h4>
  <p>La información se conserva durante el periodo establecido por las políticas técnicas y operativas internas de la plataforma.</p>
  <p>La eliminación o anonimización de los datos se realiza automáticamente al expirar el periodo de conservación aplicable o mediante acuerdo con el participante correspondiente de la plataforma.</p>
</div>
<div class="chapter">
  <h4>8. Disposiciones Finales</h4>
  <p>El uso de la plataforma PayGuru constituye la aceptación de esta Política de Privacidad.</p>
  <p>El operador de la plataforma se reserva el derecho de actualizar esta Política para reflejar cambios técnicos, operativos o regulatorios.</p>
</div>
`;

const termsContent = `
<div class="chapter">
  <h4>1. Disposiciones Generales</h4>
  <p>Estos Términos de Servicio (en adelante, los "Términos") regulan el acceso y uso de la plataforma tecnológica PayGuru, incluidas sus interfaces web, APIs, paneles e infraestructura relacionada.</p>
  <p>PayGuru es una <strong>plataforma tecnológica que proporciona herramientas para la orquestación, coordinación y automatización de procesos relacionados con pagos</strong> entre participantes independientes dentro de un modelo de colaboración acordado.</p>
  <p>La plataforma <strong>no es un servicio público</strong>, no constituye una oferta pública y está disponible exclusivamente para socios autorizados previa aprobación.</p>
  <p>PayGuru <strong>no actúa como banco, institución de pago, empresa de servicios monetarios, agente escrow ni intermediario financiero,</strong> salvo acuerdo expreso distinto por escrito.</p>
</div>
<div class="chapter">
  <h4>2. Acceso y Registro</h4>
  <p>El acceso a la plataforma se concede únicamente tras:</p>
  <ul>
    <li>la verificación del socio;</li>
    <li>la confirmación del caso de uso previsto;</li>
    <li>la alineación de requisitos técnicos y operativos.</li>
  </ul>
  <p>El registro, la provisión de acceso y la emisión de credenciales API se realizan manualmente por administradores autorizados o representantes designados. La Empresa se reserva el derecho a denegar o revocar el acceso a su sola discreción.</p>
</div>
<div class="chapter">
  <h4>3. Funcionalidad de la Plataforma</h4>
  <p>La plataforma PayGuru ofrece un conjunto de <strong>herramientas técnicas para gestionar y coordinar flujos de pago,</strong> incluyendo, entre otras:</p>
  <ul>
    <li>creación y gestión de registros de transacciones;</li>
    <li>enrutamiento y distribución de transacciones entre proveedores externos independientes;</li>
    <li>seguimiento de estados, callbacks y notificaciones;</li>
    <li>flujos de trabajo para disputas;</li>
    <li>herramientas de reporting, analítica y conciliación;</li>
    <li>integraciones basadas en API.</li>
  </ul>
  <p>Toda la funcionalidad se <strong>configura individualmente para cada socio y proyecto</strong> y refleja una lógica de coordinación técnica, no de ejecución financiera.</p>
</div>
<div class="chapter">
  <h4>4. Rol de PayGuru y Operaciones de Pago</h4>
  <p>PayGuru actúa exclusivamente como <strong>intermediario tecnológico y capa de orquestación.</strong></p>
  <p>PayGuru:</p>
  <ul>
    <li><strong>no</strong> acepta fondos de usuarios finales;</li>
    <li><strong>no</strong> mantiene, almacena ni custodia activos fiduciarios;</li>
    <li><strong>no</strong> inicia ni ejecuta transferencias financieras;</li>
    <li><strong>no</strong> garantiza la finalización de transacciones por terceros.</li>
  </ul>
  <p>Todas las operaciones de pago, incluidas transferencias de fondos, cambio de divisas, liquidación y provisión de liquidez, son ejecutadas por <strong>proveedores terceros independientes, ejecutores o contrapartes,</strong> seleccionados por el socio o determinados por la lógica de enrutamiento acordada.</p>
  <p>Cualquier transferencia de valor ocurre <strong>fuera del control</strong> y la responsabilidad de PayGuru.</p>
</div>
<div class="chapter">
  <h4>5. Responsabilidades del Usuario</h4>
  <p>El usuario se compromete a:</p>
  <ul>
    <li>cumplir todas las leyes y regulaciones aplicables en su jurisdicción;</li>
    <li>asegurar que su uso de la plataforma no vulnere derechos de terceros;</li>
    <li>proporcionar información exacta y lícita cuando sea necesario;</li>
    <li>evaluar de manera independiente los riesgos asociados con operaciones de pago y proveedores terceros.</li>
  </ul>
  <p>El usuario reconoce que <strong>todos los riesgos comerciales, financieros y regulatorios recaen exclusivamente sobre el usuario y sus contrapartes.</strong></p>
</div>
<div class="chapter">
  <h4>6. Seguridad y Confidencialidad</h4>
  <p>El usuario es responsable de proteger credenciales de acceso, claves API y datos de autenticación.</p>
  <p>La plataforma emplea medidas técnicas de seguridad, entre ellas cifrado, controles de acceso, registros y monitorización.</p>
  <p>No obstante, PayGuru <strong>no garantiza un funcionamiento ininterrumpido ni seguridad absoluta</strong> y no será responsable de incidentes causados por sistemas externos, proveedores o fallos del lado del usuario.</p>
</div>
<div class="chapter">
  <h4>7. Disputas y Ajustes</h4>
  <p>La plataforma puede proporcionar mecanismos técnicos para la gestión de disputas, ajustes de transacciones y correcciones de estado.</p>
  <p>Dichos mecanismos:</p>
  <ul>
    <li>no constituyen aceptación de responsabilidad por parte de PayGuru;</li>
    <li>se ejecutan estrictamente dentro de los flujos técnicos acordados;</li>
    <li>no implican responsabilidad financiera por los resultados de las transacciones.</li>
  </ul>
  <p>La responsabilidad final de la resolución de disputas recae en las partes involucradas en la transacción subyacente.</p>
</div>
<div class="chapter">
  <h4>8. Limitación de Responsabilidad</h4>
  <p>En la máxima medida permitida por la ley aplicable:</p>
  <ul>
    <li>PayGuru no será responsable por daños indirectos, incidentales o consecuentes;</li>
    <li>PayGuru no será responsable por pérdidas derivadas de actos u omisiones de proveedores terceros;</li>
    <li>PayGuru no será responsable por transacciones fallidas, retrasadas o revertidas ejecutadas fuera de su infraestructura.</li>
  </ul>
  <p>La plataforma se proporciona <strong>"tal cual" y "según disponibilidad"</strong> sin garantías de ningún tipo.</p>
</div>
<div class="chapter">
  <h4>9. Modificaciones</h4>
  <p>La Empresa se reserva el derecho de modificar estos Términos en cualquier momento.</p>
  <p>Las versiones actualizadas se publicarán en el sitio web o estarán disponibles a través de la interfaz de la plataforma.</p>
  <p>El uso continuado de la plataforma constituye aceptación de los Términos actualizados.</p>
</div>
<div class="chapter">
  <h4>10. Ley Aplicable e Información de la Empresa</h4>
  <p>La plataforma es operada por:</p>
  <ul>
    <li><strong>IntegraNova Dynamics LLC</strong></li>
    <li>Jurisdicción: Nevis</li>
    <li>N.º de registro: L 24105</li>
  </ul>
  <p>Estos Términos se regirán e interpretarán conforme a las leyes aplicables a la jurisdicción de la sociedad operadora, salvo acuerdo escrito en contrario.</p>
</div>
<div class="chapter">
  <h4>11. Disposiciones Finales</h4>
  <p>PayGuru funciona exclusivamente como <strong>plataforma tecnológica de coordinación</strong> entre participantes independientes.</p>
  <p>Al utilizar la plataforma, el usuario confirma comprender plenamente el rol de PayGuru, acepta estos Términos y reconoce que <strong>PayGuru no actúa como garante financiero ni procesador de pagos.</strong></p>
</div>
`;

export const es: LocaleMessages = {
  pages: {
    homeTitle: "sistema de orquestación de pagos",
    legalCenter: "Centro Legal",
  },
  common: {
    brandName: "PayGuru",
    close: "Cerrar",
    language: "Idioma",
    copyright: "Copyright © 2026, Integranova Dynamics, LLC.",
  },
  actions: {
    scheduleCall: "Programar una llamada",
    requestDemo: "Solicitar acceso a la demo",
    download: "Descargar",
    send: "Enviar",
    signIn: "Iniciar sesión",
    expertConsultation: "Consulta con un especialista",
  },
  banner: {
    text: "Programa una demo y descubre lo que estamos construyendo. Conócenos en la MAC Affiliate Conference en Armenia, 26-27 de mayo.",
    linkText: "Más información.",
  },
  nav: {
    about: "Sobre nosotros",
    api: "Documentación API",
    terms: "Términos del servicio",
    contacts: "Contactos",
  },
  hero: {
    titleHtml: "Control total <br /> sobre los flujos de dinero",
    textHtml: "<strong>PayGuru</strong> es un sistema multifuncional de orquestación de pagos con cobertura global.",
  },
  geographyNew: {
    title: "Trabajamos en todos los continentes",
    textHtml: "Años de cooperación con empresas de confianza en todo el mundo <br> nos permiten elegir soluciones realmente fiables para su negocio.",
    coverageTitle: "Cobertura global",
    coverageTextHtml: "Soporte de métodos locales con enrutamiento en cascada <br> flexible por GEO, banco, divisa, importe y riesgo.",
    bullets: [
      {
        title: "Filtros antifraude:",
        textHtml: "por importe, frecuencia, BIN/<br>ISSUER, hora del día, geografía y <br> patrones de comportamiento.",
      },
      {
        title: "Tipos inteligentes/FX:",
        textHtml: "fuente externa o tipo fijo <br> por ruta.",
      },
    ],
  },
  geographyLegacy: {
    title: "Geografía y cobertura",
    cardTitle: "Trabajamos en todos los continentes",
    cardText: "50+ países",
    items: [
      { textHtml: "Soporte de métodos locales, <br /> bancos y divisas." },
      {
        textHtml: "Enrutamiento por GEO, divisa, banco <br /> o sistema de pago del destinatario, rango <br /> de importes y perfil de riesgo.",
      },
      { textHtml: "Lógica en cascada flexible entre ejecutores." },
      { textHtml: "Escenarios transfronterizos, conversión <br /> y límites multinivel." },
    ],
  },
  technologies: {
    title: "Tecnologías en acción",
    text: "Control total sobre pagos y procesos de negocio.",
    items: [
      { title: "Automatización", textHtml: "El 99% de las operaciones sin intervención manual." },
      { title: "Rendimiento", textHtml: "Funcionamiento estable <br> bajo cargas pico." },
      { title: "Seguridad", textHtml: "Alineación con PCI DSS, <br> medidas de protección integradas." },
      { title: "Funcionalidad", textHtml: "Cientos de parámetros en la UI <br> para ajuste fino." },
      { title: "Control", textHtml: "Acceso total a la lógica de negocio, <br> APIs y parámetros." },
      { title: "Confiabilidad", textHtml: "Soporte 24/7 para operaciones <br> críticas." },
    ],
  },
  features: {
    items: [
      { title: "Soporte 24/7", textHtml: "Un equipo de guardia de especialistas <br> para reaccionar rápidamente." },
      { title: "Monitorización", textHtml: "Control continuo de servicios <br> con alertas automáticas en Telegram." },
      { title: "Registro completo", textHtml: "Logs detallados, auditoría de operaciones <br> y trazabilidad transparente de solicitudes." },
    ],
  },
  whiteLabel: {
    title: "White Label PayGuru",
    textHtml: "Una infraestructura de pagos lista para usar para procesar y gestionar flujos de dinero de nivel enterprise.",
    items: [
      { title: "Infraestructura lista", textHtml: "Branding para el cliente: dominio y logotipo." },
      { title: "Actualizaciones continuas", textHtml: "Nuevas funciones y métodos de pago <br> sin detener los servicios." },
      { title: "Lanzamiento rápido", textHtml: "Con posibilidad de personalizar métodos y lógica de negocio." },
    ],
  },
  fastStart: {
    title: "Lanzamiento rápido",
    items: [
      {
        title: "Branding",
        textHtml: "Lanzamiento completo bajo su marca en hasta 7 días: dominio, logotipo y configuración inicial.",
      },
      {
        title: "Procesos de negocio preparados",
        textHtml: "Escenarios operativos listos y reglamentos para soporte, alertas y onboarding.",
      },
      {
        title: "Soporte de lanzamiento",
        textHtml: "Documentación formativa, AI White Label Kit, tableros de Trello, checklists y guías paso a paso.",
      },
    ],
  },
  techSupport: {
    titleHtml: 'Soporte técnico<br/><span class="text-gradient">White Label</span>',
    textHtml: "Un equipo de desarrolladores con experiencia para sus integraciones, la personalización de funcionalidades y cualquier tarea a medida.",
    items: [
      {
        title: "Documentación detallada",
        textHtml: "Con ejemplos de solicitudes y respuestas, esquemas detallados de integración, descripción de errores y recomendaciones para escenarios no estándar.",
      },
      {
        title: "Servidor de pruebas",
        textHtml: "Un sandbox completo para validar toda la cadena de llamadas: desde la creación de la operación hasta el callback final y el tratamiento de estados.",
      },
      {
        title: "Códigos de estado transparentes",
        textHtml: "Un sistema de estados claro, lógico y predecible, con un comportamiento comprensible en cada escenario y documentación para cada estado.",
      },
      {
        title: "Personalización de API",
        textHtml: "Adaptación de API y lógica de negocio a sus procesos: campos adicionales, callbacks no estándar, métodos y funcionalidad personalizada bajo solicitud.",
      },
    ],
  },
  contactUs: {
    title: "Consulta con un especialista",
    textHtml: "Una breve llamada con un experto le ayudará a elegir la solución adecuada, lanzar rápido y evitar errores al inicio y durante la operación.",
  },
  contactModal: {
    title: "Contáctenos",
    fields: {
      name: "Nombre",
      contact: "Contacto (email o Telegram)",
      contactPlaceholder: "example@mail.com | @example",
      comment: "Comentario",
      commentPlaceholder: "Su mensaje...",
    },
    consent: {
      lead: "Acepto el tratamiento de datos personales",
      join: "y acepto la",
      link: "Política de Privacidad",
    },
    validation: {
      nameRequired: "Introduzca su nombre",
      nameTooShort: "El nombre debe tener al menos 2 caracteres",
      nameTooLong: "El nombre no debe superar los 100 caracteres",
      contactRequired: "Introduzca un contacto (email o Telegram)",
      contactInvalid: "Introduzca un email o Telegram válido (@username)",
      commentTooLong: "El comentario no debe superar los 2000 caracteres",
      consentRequired: "Se requiere el consentimiento para el tratamiento de datos",
    },
    status: {
      success: "Gracias, su solicitud ha sido enviada.",
      error: "Error al enviar la solicitud.",
    },
  },
  footer: {
    terms: "Términos del servicio",
    privacy: "Política de Privacidad",
    contact: "Contáctenos",
    company: "2026 Integranova Dynamics, LLC.",
  },
  legal: {
    center: "Centro Legal",
    tabs: {
      terms: "Términos del servicio",
      privacy: "Política de Privacidad",
    },
    downloads: {
      privacy: "Descargar la Política de Privacidad",
      terms: "Descargar los Términos del Servicio",
    },
    privacy: {
      title: "Política de Privacidad",
      contentHtml: privacyContent,
    },
    terms: {
      title: "Términos del Servicio",
      contentHtml: termsContent,
    },
  },
};
