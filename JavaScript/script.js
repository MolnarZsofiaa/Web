console.log('Hello world!')
console.log(1); console.log(3)
let a = 1; // dinamikusan típusos nyelv
console.log(typeof a);
//var b = 2; -> nem használjuk
console.log(1 == '1')
console.log (1 ==='1')

const c = 3 //konstans

const cim = document.querySelector('h1');
const input = document.querySelector('input#nev');
const button = document.querySelector('button#send');
console.log(cim, input, button)

button.addEventListener('click', onClick)

function onClick (){
    cim.innerHTML = `Hello, ${input.value}!`;
}
console.log(cim)