const arr = [
  {  
    id: 1,
    nombre: 'Administración',
    username: 'juanma',
    email: 'adm.elgrove@outlook.com',
    password: '*******'
  },
  {  
    id: 2,
    nombre: 'El Águila', 
    username: null,
    email: null,
    password: '*******'
  },
  {  
    id: 55,
    nombre: 'Torres Gemelas', 
    username: null,
    email: null,
    password: '*******'
  },
  {  
    id: 102,
    nombre: 'El Fuerte',
    username: null,
    email: null,
    password: '*******'
  },
  {  
    id: 105,
    nombre: 'Los Pitufos',
    username: null,
    email: null,
    password: '*******'
  }    
];


const getUsuarios = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getUsuarios;