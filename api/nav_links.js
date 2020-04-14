const links = { 
  copropietario: [ 
    { text: 'Home',  
      childs: [ 
        { text: 'Ir al inicio', link: '/home' }
      ], 
      icon: 'fa-home' 
    },
    { text: 'Boletas',  link: '/dashboard/boletas', icon: 'fa-folder' },
    { text: 'Documentos',  link: '/dashboard/documentos', icon: 'fa-clone' }
  ],
  admin:  [
    { text: 'Home',  
      childs: [ 
        { text: 'Ir al inicio', link: '/home' }, 
        { text: 'Slider', link: '/dashboard/slider' }, 
        { text: 'Contacto', link: '/dashboard/contacto' }
      ], 
      icon: 'fa-home' 
    },
    { text: 'Mensajes',  link: '/dashboard/mensajes', icon: 'fa-envelope' },  
    { text: 'Servicios',  link: '/dashboard/servicios', icon: 'fa-bell' },
    { text: 'Posts',  link: '/dashboard/posts', icon: 'fa-clone'},               
    { text: 'Usuarios',  link: '/dashboard/usuarios', icon: 'fa-building' },
    { text: 'Archivos',  
      childs: [ 
        { text: 'Boletas', link: '/dashboard/archivos/boletas' }, 
        { text: 'Documentos', link: '/dashboard/archivos/documentos'}, 
        { text: 'Legales', link: '/dashboard/archivos/legal'}
      ], 
      icon: 'fa-folder' 
    },
    { text: 'Alex Bot',  link: '/dashboard/bot', icon: 'fa-building' },
  ]
}

const getLinks = (rol) => {
  return (rol) ? links[rol] : null;
};


export default getLinks;