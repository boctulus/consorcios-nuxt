let TrainingSet = [];
let types = [];

function loadData(data) {
  TrainingSet = data;

  for(let i=0; i<TrainingSet.length; i++){
    TrainingSet[i].keywords = JSON.parse(TrainingSet[i].keywords); 
    TrainingSet[i].keywords = TrainingSet[i].keywords.map(x => sanitize(x));
    types.push(TrainingSet[i].question);
  } 

  //console.log('TS', TrainingSet);
  //console.log(types);
}

function sanitize(str){
  if (typeof str === 'undefined'  || str === null)
    return null;

  return str.toLowerCase()
            .replace(/[?]/, ' ')
            .replace(/[¿]/, ' ')  
            .replace(/[!]/, ' ')                     
            .normalize('NFD')
            .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
            .normalize()
}

function tokenize(phrase)
{ 
  phrase = sanitize(phrase);
  const tokens = phrase.replace(/[,]/, ' ').replace(/[.]/, ' ').split(' ');
  return tokens;
}

const classify = (str) => {
  str = sanitize(str);
  let tokens = tokenize(str);
  let ws = []; 

  types.forEach(t => {
    ws[t] = 0;
  });

  TrainingSet.forEach(dato => {
    dato.keywords.forEach(keyword => {      
      if (tokens.includes(keyword)){
        ws[dato.question]++;
      }
    });    
  });

  return ws;
}

export default {
  loadData,
  classify  
};