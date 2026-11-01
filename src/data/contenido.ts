export const CONTACTO = {
  whatsapp: 'https://wa.me/5219813344909',
  whatsappTexto: 'https://wa.me/5219813344909?text=' + encodeURIComponent('Hola, quiero información sobre las sesiones de Sanación Cuántica Energética.'),
  telefono: 'tel:+527721980609',
  telefonoTexto: '+52 772 198 0609',
  direccion: 'Calle Limón 618, Col. Chapultepec, entre Sabino y Ébano, frente a la guardería Chiquitines',
};

export const PILARES = [
  { ico: '🌊', t: 'Método Yujuen', c: 'pilar', d: 'La base de presencia del procedimiento: silencio sostenido, atención plena y respiración lenta. Nadie empuja y nada se fuerza. De ahí se derivan la inducción personal y el enlace con la persona.' },
  { ico: '✋', t: 'Interrogación al cuerpo', c: 'pilar j', d: 'La terapeuta pregunta con sus dedos, a distancia, al cuerpo de la persona: sí o no. El cuerpo responde con movimientos finos que ella interpreta. No se le pregunta a la mente: se le pregunta al cuerpo.' },
  { ico: '✨', t: 'Lenguaje cuántico', c: 'pilar c', d: 'Hablamos de partículas enlazadas y de lo que permanece conectado a la distancia como metáfora de vínculo y presencia. No afirmamos que la física cuántica cure: afirmamos que nombrar la conexión ayuda a sostenerla.' },
];

export const FASES = [
  { t: '1 · Escucha sin prisa', d: 'Primero hablas tú. Cuentas todo lo que sientes, sin orden y sin filtro: lo que duele, lo que preocupa, lo que no has dicho en otro lado. Aquí no se interrumpe ni se corrige.' },
  { t: '2 · Enlace energético', d: 'Cuando terminas de hablar, se pide permiso y se conecta la energía de la terapeuta con la tuya. A partir de este punto el trabajo es con tu cuerpo, no con tus palabras.' },
  { t: '3 · Interrogación al cuerpo', d: 'Con sus dedos, la terapeuta pregunta a distancia al cuerpo: sí o no. El cuerpo contesta con movimientos finos que ella interpreta; la persona no tiene que saber nada ni hacer nada.' },
  { t: '4 · Catálogo de sistemas y orígenes', d: 'Se recorre un catálogo de enfermedades y sistemas preguntándole al cuerpo si eso es lo que tiene, y de dónde viene: si el origen es emocional, psicológico, físico o energético. Todo se le pregunta al cuerpo, no a la persona.' },
  { t: '5 · Guía de sanación holística', d: 'Con las respuestas obtenidas se guía a la persona por un proceso de sanación emocional y psicológica de forma holística: palabra, respiración, silencio y presencia.' },
  { t: '6 · Integración con el cuestionario', d: 'Lo que el cuerpo respondió se cruza con las treinta respuestas que la persona dio antes por escrito. Una es la versión de la persona; la otra, la del cuerpo. El cruce es lo que da profundidad.' },
  { t: '7 · El diagnóstico es del paciente', d: 'La terapeuta no diagnostica: conduce y traduce. El paciente y su cuerpo llegan a su propio diagnóstico y sale a flote el origen real del malestar.' },
];

export const SESIONES = [
  {
    n: 'Armonización',
    precio: '$700',
    dur: '90 minutos · una sesión por semana',
    dest: false,
    incluye: ['Cuestionario de primer encuentro', 'Escucha inicial completa y enlace energético', 'Interrogación al cuerpo sobre el motivo principal', 'Guía de respiración y cierre con lo observado'],
    no: 'No incluye el catálogo completo de sistemas ni seguimiento posterior.',
  },
  {
    n: 'Sesión profunda',
    precio: '$900',
    dur: '2 horas · una sesión por semana',
    dest: true,
    incluye: ['Todo lo de Armonización', 'Catálogo completo de sistemas y orígenes', 'Interrogación extendida al cuerpo, a distancia', 'Guía holística de sanación emocional y psicológica', 'Seguimientos a las 72 horas'],
    no: 'No incluye acompañamiento de varios meses ni intervención en tratamientos médicos.',
  },
  {
    n: 'Programa Convergencia',
    precio: '$2,400',
    dur: 'Cuatro sesiones semanales de 90 a 120 min',
    dest: false,
    incluye: ['Cuatro encuentros semanales completos', 'Cuestionario inicial y cruce con las respuestas del cuerpo', 'Catálogo completo en cada encuentro', 'Acompañamiento por WhatsApp entre sesiones', 'Comparativa de estado y pauta de cuidado al cierre'],
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
    '¿Crees que existe algo que llamamos energía?', '¿Has practicado meditación, yoga, Reiki u otra disciplina de atención?',
    '¿Practicas alguna religión o espiritualidad?', '¿Qué significa para ti sanar?',
    '¿Qué te daría miedo de este proceso?', '¿Qué necesitas saber antes de empezar?',
  ]},
  { bloque: '5. Compromiso y acuerdos', items: [
    '¿Qué días y horarios te acomodan?', '¿Cuál de las tres sesiones consideras posible para ti?',
    '¿Aceptas que este acompañamiento no sustituye atención médica?',
    '¿Aceptas que se te pregunte antes de cada fase y que puedas detener el proceso?',
    '¿Entiendes que en la sesión se le pregunta a tu cuerpo y no a tu mente?',
    '¿Qué resultado, para ti, sería suficiente para decir que valió la pena?',
  ]},
];

export const FAQ = [
  { q: '¿Esto cura enfermedades?', a: 'No. Es un acompañamiento de bienestar que busca relajación profunda, alivio del estrés y una sensación de integración. No diagnostica, no trata ni cura enfermedades y no sustituye a tu médico.' },
  { q: '¿Por qué se le pregunta al cuerpo y no a la persona?', a: 'Porque la persona ya contó su versión en el cuestionario y en la escucha inicial. La segunda versión, la del cuerpo, no pasa por el filtro de la mente ni por el miedo: sale directa en forma de respuestas que la terapeuta lee.' },
  { q: '¿El método es inventado?', a: 'El Método Convergencia no inventa una técnica. Entrelaza métodos que ya existen y funcionan, como quien revisa una computadora componente por componente hasta encontrar qué consume la energía del sistema. La convergencia sí es propia: el orden, el catálogo de preguntas y la lectura de respuestas.' },
  { q: '¿Quién da el diagnóstico?', a: 'El paciente y su cuerpo. La terapeuta no diagnostica ni decide: conduce el proceso y traduce lo que el cuerpo responde, para que el origen del malestar salga a flote desde dentro.' },
  { q: '¿Cuánto dura y cada cuándo?', a: 'Cada sesión va de noventa minutos a dos horas, y el ritmo natural es una sesión por semana: tiempo suficiente para que el cuerpo procese y no tanto como para perder el hilo.' },
  { q: '¿Cuánto cuesta?', a: 'La primera conversación no tiene costo. Las sesiones van de $700 a $900, y el Programa Convergencia de cuatro encuentros semanales cuesta $2,400.' },
];
