const arr = {
  copropietario: [ 
    {  
      name: 'Boletas',
      img: '/cards/b1.jpg',
      to: '/dashboard/boletas'
    },
    {  
      name: 'Documentos',
      img: '/cards/d3.jpg',
      to: '/dashboard/documentos'
    },
    /*
    {  
      name: 'Novedades',
      img: '/cards/n5.png',
      to: '/dashboard/archivos/novedades'
    }
    */
  ], 
  admin: [
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
    },
    {  
      name: 'Legales',
      img: '/cards/legal1.jpg',
      to: '/dashboard/archivos/legal'
    },
    {  
      name: 'Slider',
      img: '/cards/slider.png',
      to: '/dashboard/slider'
    }
  ]  
};


const getCards = (rol) => {
  return (rol) ? arr[rol] : null;
};


export default getCards;