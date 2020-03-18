const arr = [
  {
    'id': 10,
    'name':  'Agua'
  },
  {
    'id': 12,
    'name':  'Luz'
  },
  {
    'id': 13,
    'name':  'Gas'
  },
  {
    'id': 11,
    'name':  'Ascensores'
  },
  {
    'id': 14,
    'name':  'Limpieza'
  },
  {
    'id': 15,
    'name':  'Matafuegos'
  },
  {
    'id': 17,
    'name':  'Seguro'
  }
];


const getServiciosFacturables = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getServiciosFacturables;