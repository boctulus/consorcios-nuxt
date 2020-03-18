const arr = [
  {  
    name: 'Juan Perez', 
    email: 'juanp@gmail.com', 
    phone: '221 452 33 00', 
    subject: 'Trabajos en altura', 
    content: 'Tienen el servicio?'
  },
  {
    name: 'Ana María', 
    email: 'am@gmail.com', 
    phone: '221 452 5555', 
    subject: 'Desinfección', 
    content: 'Cuando podrán pasar? la rata más chica parece un gato'
  },
  {
    name: 'PK', 
    email: 'pk@hotmail.com', 
    phone: '00000001', 
    subject: 'Contratar', 
    content: 'Quisiera contratarlos :)'
  },
  {
    name: 'Pepe', 
    email: 'pp@gmail.com', 
    phone: '221 452 66666', 
    subject: 'Desinfección', 
    content: 'Pasan por favor por el edificio?'
  }
];


const getMsg = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getMsg;