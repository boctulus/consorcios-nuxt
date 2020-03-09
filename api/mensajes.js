const arr = [
  {  
    nombre: 'Juan Perez', 
    email: 'juanp@gmail.com', 
    telefono: '221 452 33 00', 
    tema: 'Trabajos en altura', 
    consulta: 'Tienen el servicio?'
  },
  {
    nombre: 'Ana María', 
    email: 'am@gmail.com', 
    telefono: '221 452 5555', 
    tema: 'Desinfección', 
    consulta: 'Cuando podrán pasar? la rata más chica parece un gato'
  },
  {
    nombre: 'PK', 
    email: 'pk@hotmail.com', 
    telefono: '00000001', 
    tema: 'Contratar', 
    consulta: 'Quisiera contratarlos :)'
  },
  {
    nombre: 'Pepe', 
    email: 'pp@gmail.com', 
    telefono: '221 452 66666', 
    tema: 'Desinfección', 
    consulta: 'Pasan por favor por el edificio?'
  }
];


const getMsg = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getMsg;