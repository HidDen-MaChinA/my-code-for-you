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
console.log(Binaire(2))
//pour html
function xdecimal()
{
    decimal = document.getElementById("decimal");
    hexadecimal = document.getElementById("hexadecimal");
    binaire = document.getElementById("binaire");
 
    hexadecimal.value = (decimal.value-0).toString(16);
    binaire.value = (decimal.value-0).toString(2);
}
 
function xhexadecimal()
{
    decimal = document.getElementById("decimal");
    hexadecimal = document.getElementById("hexadecimal");
    binaire = document.getElementById("binaire");
 
    decimal.value = parseInt(hexadecimal.value,16);
    binaire.value = (parseInt(hexadecimal.value,16)).toString(2);
}
 
function xbinaire()
{
    decimal = document.getElementById("decimal");
    hexadecimal = document.getElementById("hexadecimal");
    binaire = document.getElementById("binaire");
 
    decimal.value = parseInt(binaire.value,2);
    hexadecimal.value = (parseInt(binaire.value,2)).toString(16);
}
/**html
<form action="">
 
<p><label for="decimal">Décimal&#160;: </label> <input type="text" id="decimal" name="decimal" >
<input type="button" name="submit1" value="&#8674;" onClick="xdecimal();"></p>
 
<p><label for="hexadecimal">Hexadécimal&#160;: </label> <input type="text" id="hexadecimal" name="hexadecimal">
<input type="button" name="submit2" value="&#8674;" onClick="xhexadecimal();"></p>
 
<p><label for="hexadecimal">Binaire&#160;: </label> <input type="text" id="binaire" name="binaire">
<input type="button" name="submit3" value="&#8674;" onClick="xbinaire();"></p>
 
</form>
*/
/**css
 input[type='text'] {
    text-transform:uppercase;
} 
 */
/**
 * https://gist.github.com/501f90d6ab875a8f6299d9c6e9c0455e.git
 * <script src="https://gist.github.com/YlanNaly/501f90d6ab875a8f6299d9c6e9c0455e.js"></script>
 */