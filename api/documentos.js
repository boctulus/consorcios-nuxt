const arr = [
  {
    'id': 3,
    'name': 'Reglamento de convivencia',
    'file': 'reglamento.pdf',
    'enabled': true
  }
];


const getDocumentos = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getDocumentos;