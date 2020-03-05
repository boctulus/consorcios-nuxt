const links = { 
  habitante: [ 
    { msg: 'Boletas',  link: '/dashboard/boletas', icon: 'fa-folder' },
    { msg: 'Documentos',  link: '/dashboard/Documentos', icon: 'fa-clone' }
  ],
  admin:  [
    { msg: 'Mensajes',  link: '/dashboard/mensajes', icon: 'fa-envelope' },  
    { msg: 'Servicios',  link: '/dashboard/servicios', icon: 'fa-bell' },
    { msg: 'Posts',  link: '/dashboard/posts', icon: 'fa-clone'},               
    { msg: 'Edificios',  link: '/dashboard/edificios', icon: 'fa-building' },
    { msg: 'Archivos',  link: '/dashboard/archivos', icon: 'fa-folder' }
  ]
}

const getLinks = (rol) => {
  return (rol) ? links[rol] : null;
};


export default getLinks;