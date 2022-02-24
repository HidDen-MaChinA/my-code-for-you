const prompt = require('prompt-sync')()
let x = +prompt('le nombre à traduire en binaire : ')

if(x<0){
    throwError('pas en dessous de 0')
}
else{
    console.log(x.toString(2))
}

//Mais pour éviter qu'il traduit aussi les nombres décimal

function Binaire(b,str){
     if(!Number.isSafeInteger(b) || b<0){
         console.log("pas en dessous de 0 ") 
     }
     if(b === 1){
         return '1';
     }
     if(b === 0){
         return '0';
     }
  return Binaire(Math.floor(b / 2) + (b % 2));
}
console.log("yo bro")
