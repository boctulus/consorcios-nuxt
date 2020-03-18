const arr = [
  {  
    id: 1,
    img: '/home_slider/0-mision.jpg',
    line1: 'Ofrecer soluciones efectivas en la administración de inmuebles',
    line2: 'Misión',
    line3: 'Brindando un alto estándar de eficiencia, confort, tranquilidad y seguridad a un precio razonable y justo.',
    enabled: true 
  },
  {  
    id: 2,
    img: '/home_slider/1-vision.jpg',
    line1: 'Honestidad, claridad y excelente trato',
    line2: 'Visión',
    line3: 'Otorgar un trato directo hacia nuestros clientes así como por el manejo eficiente de información por medio de tecnología de punta.',
    enabled: true
  },
  {  
    id: 3,
    img: 'https://i.imgur.com/jeORORh.jpg',
    line1: 'Lo más importante son nuestros',
    line2: 'Valores',
    line3: 'Confianza, responsabilidad, transparencia, ética y respeto nos definen.',
    enabled: true
  }
];


const getSlider = (cant) => {
  return (cant != null || typeof cant != 'undefined') ? arr.slice(0, cant) : arr;
};


export default getSlider;