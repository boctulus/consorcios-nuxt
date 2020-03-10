const arr = [
  {
    'id': 3,
    'type':  'gas',
    'ticket_number': '10303044',
    'from': '03-2020',
    'to': '04-2020',
    'amount': 12550.57,
    'file': 'gas101032.pdf'
  },

  {
    'id': 5,
    'type':  'luz',
    'ticket_number': '10303044',
    'from': '03-2020',
    'to': '04-2020',
    'amount': 10200.03,
    'file': 'luz101032.pdf'
  },

  {
    'id': 33,
    'type':  'gas',
    'ticket_number': '10303044',
    'from': '03-2020',
    'to': '04-2020',
    'amount': 15660.20,
    'file': 'gas101032.pdf'
  },

  {
    'id': 41,
    'type':  'limpieza',
    'ticket_number': '00000340',
    'from': '03-2020',
    'to': '04-2020',
    'amount': 9100,
    'file': 'limpieza0303.pdf'
  },

  {
    'id': 43,
    'type':  'gas',
    'ticket_number': '10303044',
    'from': '03-2020',
    'to': '04-2020',
    'amount': 17500.899,
    'file': 'gas101037.pdf'
  }
];


const getBoletas = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getBoletas;