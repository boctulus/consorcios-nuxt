const arr = [
  {  
    name: 'Mensajes',
    img: '/cards/m4.jpg',
    to: '/dashboard/mensajes'
  },
  {  
    name: 'Servicios',
    img: '/cards/s1.jpg',
    to: '/dashboard/servicios'
  },
  {  
    name: 'Posts',
    img: '/cards/p5.png',
    to: '/dashboard/posts'
  },
  {  
    name: 'Usuarios',
    img: '/cards/u3.jpg',
    to: '/dashboard/usuarios'
  },
  {  
    name: 'Boletas',
    img: '/cards/b1.jpg',
    to: '/dashboard/archivos/boletas'
  },
  {  
    name: 'Documentos',
    img: '/cards/d3.jpg',
    to: '/dashboard/archivos/documentos'
  }
];


const getCards = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getCards;