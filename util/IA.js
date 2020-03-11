const TrainingSet = require('@/static/data/trainingData.json')
//const natural = require('natural')
//const var_dump = require('var_dump')

var types = new Set();

for(let i=0; i<TrainingSet.length; i++){
  TrainingSet[i].keyword = sanitize(TrainingSet[i].keyword); 
} 

function sanitize(str){
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

function buildDict(trainingData) 
{
  let dict = [];
  for (let i=0; i<trainingData.length; i++){
    dict.push(trainingData[i].keyword);

    Object.keys(trainingData[i].result).forEach((e) => {
      types.add(e);
    })
  }
  return dict;
}

const dict = buildDict(TrainingSet);
//console.log(dict);
//console.log(types);

const classify = (str) => {
 str = sanitize(str); 
 let tokens = tokenize(str);
 let ws = []; 

 types.forEach(e => {
   ws[e] = 0;
 });

 TrainingSet.forEach(dato => {
   if (tokens.includes(dato.keyword)){
    //console.log('* ' + dato.keyword);

    for (var type in dato.result) {
      ws[type] += dato.result[type];
    }

   }
 });

 return ws;
}

export default classify;