const arr = [
  {
    'id': 3,
    'billable_id':  13,
    'detail': '10303044',
    'period': '03-2020',
    'amount': 12550.57,
    'file': 'gas101032.pdf',
    'belongs_to': 2
  },

  {
    'id': 5,
    'billable_id':  12,
    'detail': '10303044',
    'period': '03-2020',
    'to': '04-2020',
    'amount': 10200.03,
    'file': 'luz101032.pdf',
    'belongs_to': 2
  },

  {
    'id': 33,
    'billable_id':  13,
    'detail': '10303044',
    'period': '03-2020',
    'to': '04-2020',
    'amount': 15660.20,
    'file': 'gas101032.pdf',
    'belongs_to': 105
  },

  {
    'id': 41,
    'billable_id':  14,
    'detail': '00000340',
    'period': '03-2020',
    'to': '04-2020',
    'amount': 9100,
    'file': 'limpieza0303.pdf',
    'belongs_to': 105   
  },

  {
    'id': 43,
    'billable_id':  13,
    'detail': '10303044',
    'period': '03-2020',
    'to': '04-2020',
    'amount': 17500.899,
    'file': 'gas101037.pdf',
    'belongs_to': 105
  }
];


const getBoletas = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getBoletas;