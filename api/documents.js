const arr = [
  {
    'id': 3,
    'name': 'Reglamento de convivencia',
    'file': 'reglamento2.pdf',
    'belongs_to': 2, 
    'enabled': true
  },
  {
    'id': 5,
    'name': 'Reglamento de convivencia',
    'file': 'reglamento55.pdf',
    'belongs_to': 55, 
    'enabled': true
  },
  {
    'id': 10,
    'name': 'Reglamento de convivencia',
    'file': 'reglamento105.pdf',
    'belongs_to': 105, 
    'enabled': true
  },
  {
    'id': 12,
    'name': 'Otro documento',
    'file': 'otro_doc.pdf',
    'belongs_to': 105, 
    'enabled': true
  }

];


const getDocumentos = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getDocumentos;