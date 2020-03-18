const arr = [
  {  
    id: 1,
    name: 'Administración',
    username: 'juanma',
    email: 'adm.elgrove@outlook.com',
    password: '*******'
  },
  {  
    id: 2,
    name: 'El Águila', 
    username: null,
    email: null,
    password: '*******'
  },
  {  
    id: 55,
    name: 'Torres Gemelas', 
    username: null,
    email: null,
    password: '*******'
  },
  {  
    id: 102,
    name: 'El Fuerte',
    username: null,
    email: null,
    password: '*******'
  },
  {  
    id: 105,
    name: 'Los Pitufos',
    username: null,
    email: null,
    password: '*******'
  }    
];


const getUsuarios = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getUsuarios;