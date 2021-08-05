const readline = require('readline-sync');

console.info('Program penambah angka');
const number1 = readline.question('masukkan angka pertama: ');
const number2 = readline.question('masukkan angka kedua: ');

function add(a,b){
	return a + b;
}
const hasil = add(parseInt(number1), parseInt(number2));
console.log(hasil);