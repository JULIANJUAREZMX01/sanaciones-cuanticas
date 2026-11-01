export const CONTACTO = {
  whatsapp: 'https://wa.me/5219813344909',
  whatsappTexto: 'https://wa.me/5219813344909?text=' + encodeURIComponent('Hola, quiero información sobre las sesiones de Sanación Cuántica Energética.'),
  telefono: 'tel:+527721980609',
  telefonoTexto: '+52 772 198 0609',
  direccion: 'Calle Limón 618, Col. Chapultepec, entre Sabino y Ébano, frente a la guardería Chiquitines',
};

export const PILARES = [
  { ico: '🌸', t: 'Reiki', c: 'pilar', d: 'Imposición de manos y intención amorosa para favorecer la relajación profunda. El Reiki se practica como terapia complementaria: la evidencia disponible apunta a efectos moderados en dolor y ansiedad, siempre junto a la atención médica.' },
  { ico: '🌀', t: 'Inducción personal', c: 'pilar j', d: 'Tu propia voz te guía: respiración, imaginería y frases que tú reconoces como tuyas. Nada de guiones ajenos. La inducción se adapta a tu historia y a tu ritmo.' },
  { ico: '✨', t: 'Lenguaje cuántico', c: 'pilar c', d: 'Hablamos de partículas enlazadas y de lo que se mantiene conectado a la distancia como metáfora de vínculo y presencia. No afirmamos que la física cuántica cure: afirmamos que nombrar la conexión ayuda a sostenerla.' },
];

export const FASES = [
  { t: 'Primera conversación', d: 'Nos conocemos sin costo. Escucho qué te trae, qué esperas y qué te da miedo. Se resuelven dudas y se explica el procedimiento completo.' },
  { t: 'Cuestionario de primer encuentro', d: 'Treinta preguntas para conocer tu malestar, tu estado actual, tus creencias y el motivo real por el que quieres empezar. Se responde en línea o en el consultorio.' },
  { t: 'Pre-aprobación y aprobación', d: 'El acompañante revisa tu cuestionario y la Lic. Dra. Rosa Patricia Alvarado Moreno da la aprobación final. No toda persona ni todo momento son adecuados para este trabajo, y eso es parte del cuidado.' },
  { t: 'Consentimiento paso por paso', d: 'Antes de cada fase se te pregunta si estás de acuerdo. Si dices no, se detiene. Se te explica qué sigue, qué puedes sentir y cómo salir si lo necesitas.' },
  { t: 'Inducción y acompañamiento', d: 'Voz guiada, Reiki y silencio sostenido. Observamos y anotamos tus respuestas involuntarias: respiración, calor, hormigueo, emoción, tensión que se suelta.' },
  { t: 'Cierre y seguimiento', d: 'Te vas con lo que sentiste por escrito y con una pauta de cuidado para cuarenta y ocho horas. Se agenda seguimiento a los tres días.' },
];

export const SESIONES = [
  {
    n: 'Armonización',
    precio: '$600',
    dur: '60 minutos · en línea o a distancia',
    dest: false,
    incluye: ['Cuestionario de primer encuentro', 'Inducción guiada en vivo', 'Reiki a distancia con tu permiso', 'Nota de cierre con lo observado'],
    no: 'No incluye seguimiento posterior ni sesiones adicionales.',
  },
  {
    n: 'Sesión profunda',
    precio: '$900',
    dur: '90 minutos + 2 seguimientos',
    dest: true,
    incluye: ['Todo lo de Armonización', 'Inducción personal escrita para tu caso', 'Reiki presencial o a distancia extendido', 'Dos mensajes de seguimiento en 72 horas', 'Ejercicios de respiración para casa'],
    no: 'No incluye acompañamiento continuo por meses.',
  },
  {
    n: 'Programa Convergencia',
    precio: '$1,200',
    dur: 'Tres sesiones de 60 min · un mes',
    dest: false,
    incluye: ['Tres encuentros completos', 'Inducción personalizada que evoluciona contigo', 'Acompañamiento por WhatsApp entre sesiones', 'Cuestionario de cierre y comparativa de tu estado inicial', 'Pauta de cuidado para el mes'],
    no: 'No incluye atención de urgencias ni intervención en tratamientos médicos.',
  },
];

export const PREGUNTAS: { bloque: string; items: string[] }[] = [
  { bloque: '1. Quién eres y cómo te encuentro', items: [
    'Nombre completo', 'Edad', 'Ciudad y estado donde vives', 'Teléfono o WhatsApp de contacto',
    'Correo electrónico', '¿Prefieres sesión en línea, a distancia o presencial?',
  ]},
  { bloque: '2. Qué te trae aquí', items: [
    '¿Qué te trae a este proceso, en tus propias palabras?', '¿Desde cuándo lo sientes?',
    'Si tuvieras que darle una intensidad del 1 al 10, ¿cuál es hoy?', '¿Cómo afecta tu día a día?',
    '¿Qué has intentado antes?', '¿Qué esperas que ocurra en la primera sesión?',
  ]},
  { bloque: '3. Tu estado actual', items: [
    '¿Cómo describes tu sueño?', '¿Cómo está tu energía en un día normal?',
    '¿Tienes dolor físico? ¿Dónde y de qué tipo?', '¿Cómo anda tu digestión?',
    '¿Cómo vives el estrés o la ansiedad?', '¿Tomas medicamentos o estás en algún tratamiento? ¿Cuál?',
  ]},
  { bloque: '4. Creencias y espiritualidad', items: [
    '¿Crees que existe algo que llamamos energía?', '¿Has practicado Reiki, meditación, yoga u otra disciplina?',
    '¿Practicas alguna religión o espiritualidad?', '¿Qué significa para ti sanar?',
    '¿Qué te daría miedo de este proceso?', '¿Qué necesitas saber antes de empezar?',
  ]},
  { bloque: '5. Compromiso y acuerdos', items: [
    '¿Qué días y horarios te acomodan?', '¿Cuál de las tres sesiones consideras posible para ti?',
    '¿Aceptas que este acompañamiento no sustituye atención médica?',
    '¿Aceptas que se te pregunte antes de cada fase y que puedas detener el proceso?',
    '¿Cómo prefieres que te contactemos?', '¿Qué resultado, para ti, sería suficiente para decir que valió la pena?',
  ]},
];

export const FAQ = [
  { q: '¿Esto cura enfermedades?', a: 'No. Es un acompañamiento de bienestar que busca relajación profunda, alivio del estrés y una sensación de integración. No diagnostica, no trata ni cura enfermedades y no sustituye a tu médico.' },
  { q: '¿Qué significa “cuántico” aquí?', a: 'Usamos el lenguaje de la física cuántica como metáfora de la conexión entre personas y de la presencia a distancia. No sostenemos que partículas enlazadas te curen: sería deshonesto y no hay evidencia de eso.' },
  { q: '¿Qué pasa si no sé si creo en esto?', a: 'Está bien. La duda es bienvenida y de hecho ayuda: trabajamos con lo que sientes, no con lo que deberías creer.' },
  { q: '¿Puedo detener la sesión?', a: 'Sí, en cualquier momento y sin explicaciones. Antes de cada fase se te pregunta si estás de acuerdo, y tu no se respeta.' },
  { q: '¿Por qué hay que responder treinta preguntas?', a: 'Porque sin conocerte, cualquier inducción es genérica. El cuestionario permite adaptar la sesión y decidir con responsabilidad si es buen momento para ti.' },
  { q: '¿Quién aprueba mi solicitud?', a: 'Dos filtros: una pre-aprobación del acompañante y la aprobación final de la Lic. Dra. Rosa Patricia Alvarado Moreno, creadora del método.' },
];
