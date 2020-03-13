const arr = [
  {  
    id: 1,
    title: '¿Qué es un condominio?',
    text: '<p>El sector inmobiliario en la ciudad de México esta en crecimiento, la falta de espacios para vivienda se reduce por lo que vivir en condominios es cada vez mas frecuente, pero ¿Qué es un condominio? El inmueble que como propiedad privada reúne un derecho singular y exclusivo sobre una unidad de propiedad exclusiva (departamento, casa o local) y un derecho de copropiedad sobre elementos y partes comunes (terreno, cimientos, estructura, muros de carga, techos, azoteas, fachadas, patios, jardines, andadores, vestíbulos, escaleras y sus cubos, equipos e instalaciones, etc.).</p>',
    created_by: 5,
    belongs_to: 5,
    created_at: '',
    updated_at: ''
  },
  {  
    id: 2,
    title: 'Costos',
    text: 'Los costos bla bla bla .......',
    created_by: 5,
    belongs_to: 5,
    created_at: '',
    updated_at: ''
  },
  {  
    id: 3,
    title: 'Otro post',
    text: 'Bla bla bla',
    created_by: 5,
    belongs_to: 5,
    created_at: '',
    updated_at: ''
  },
  {  
    id: 5,
    title: '',
    text: '',
    created_by: 5,
    belongs_to: 5,
    created_at: '',
    updated_at: ''
  }  
];


const getUsuarios = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getUsuarios;