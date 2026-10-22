/**
 * AVISO DE COOKIES Y POLÍTICA DE PRIVACIDAD
 * -----------------------------------------
 * Textos del aviso que aparece abajo al entrar y de la página /privacidad.
 * Base legal: Ley 1581 de 2012 y Decreto 1377 de 2013 (Colombia).
 */

export const cookieBanner = {
  text:
    "Usamos cookies de analítica (Microsoft Clarity) para saber qué partes de la página se usan más y mejorarla. No recogemos tu nombre ni tus datos de salud.",
  accept: "Aceptar",
  reject: "Rechazar",
  policyLink: "Política de privacidad",
};

export const privacyPolicy = {
  title: "Política de privacidad y cookies",
  updated: "22 de octubre de 2026",
  intro:
    "En Ecografías Dra. Dulce María · Diagnóstico por Imágenes MÁS respetamos tu privacidad. Aquí te contamos qué datos se recogen cuando visitas esta página, para qué y cuáles son tus derechos, de acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
  sections: [
    {
      title: "Quién es responsable de tus datos",
      body: [
        "Diagnóstico por Imágenes MÁS S.A.S., NIT 902.089.579-7. Calle 127 # 20-16, Consultorio 514, Edificio Pluss 127, Bogotá, Colombia.",
        "Contacto para temas de datos personales: gerencia@diagnosticoporimagenesmas.com.co o WhatsApp +57 310 567 6841.",
      ],
    },
    {
      title: "Qué datos recoge esta página",
      body: [
        "Esta página no tiene formularios y no pide tu nombre, documento ni información de salud.",
        "Si aceptas las cookies, Microsoft Clarity registra de forma anónima cómo usas la página: en qué botones haces clic, hasta dónde bajas, qué páginas visitas, el tipo de dispositivo y navegador, y tu ciudad o país aproximado. Clarity oculta automáticamente los textos que escribas.",
        "Si rechazas las cookies, Clarity no se carga y no se registra nada de esto.",
      ],
    },
    {
      title: "Para qué los usamos",
      body: [
        "Solo para entender qué partes de la página son más útiles, encontrar problemas (por ejemplo, botones que no responden) y mejorarla. No vendemos ni compartimos estos datos para publicidad.",
      ],
    },
    {
      title: "Servicios de terceros",
      body: [
        "Cuando escribes por WhatsApp, pagas un curso en Bold, agendas en Calendly o abres Instagram o Google Maps, sales de esta página y esos servicios tratan tus datos según sus propias políticas de privacidad.",
        "Los datos de tu atención médica (historia clínica y resultados) se manejan en el consultorio con la reserva que exige la ley y no pasan por esta página.",
      ],
    },
    {
      title: "Tus derechos",
      body: [
        "Puedes conocer, actualizar, corregir y pedir que se eliminen tus datos, y retirar tu autorización en cualquier momento. Para hacerlo, escríbenos a gerencia@diagnosticoporimagenesmas.com.co o por WhatsApp. Respondemos consultas en máximo 10 días hábiles y reclamos en máximo 15 días hábiles.",
        "Si consideras que no atendimos tu solicitud, puedes acudir a la Superintendencia de Industria y Comercio (SIC).",
      ],
    },
  ],
  choiceTitle: "Tu elección sobre las cookies",
  choiceStatus: {
    granted: "Aceptaste las cookies de analítica.",
    denied: "Rechazaste las cookies de analítica.",
    none: "Aún no has elegido.",
  },
};
