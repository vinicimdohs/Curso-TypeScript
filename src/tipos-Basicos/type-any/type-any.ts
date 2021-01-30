//Utilizar o any apenas em ultimo caso
function showMessage(msg : any){
     return msg;
 }


console.log(showMessage([2,3,4]));
console.log(showMessage('hello dude'));
console.log(showMessage(1));
