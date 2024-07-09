

function reverseCharecters (params) {
    const selfOfArray = params.split('');

let newArray =[];
for (let i =selfOfArray.length -1; i <= selfOfArray.length && i >= 0; i--) {
    const Charecters = selfOfArray[i];
    newArray.push(Charecters);

}
const newString = newArray.join('');
return newString ;

}

const mySelf ='I am a developer';
const revers = reverseCharecters (mySelf);
console.log(revers);
