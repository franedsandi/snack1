/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

/* const numero1 = parseInt(prompt('Inserire un numero'));
const numero2 = parseInt(prompt('Inserire un altro numero'));

if(numero1 < numero2){
  document.getElementById('output').innerHTML = numero2;
}
else if(numero2 < numero1){
  document.getElementById('output').innerHTML = numero1;
}
else{
  document.getElementById('output').innerHTML = 'i due numeri sono uguali'
} */


/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/* const parola1 = prompt('Inserire una parola');
const parola2 = prompt('Inserire unaltra parola');

if(parola1.length < parola2.length){
  document.getElementById('output').innerHTML = parola1 + ' ' +parola2;
}
else if(parola1.length > parola2.length){
  document.getElementById('output').innerHTML = parola2 + ' ' +parola1;
}
else{
  document.getElementById('output').innerHTML = 'le due parole sono lunghe uguale'
  document.getElementById('output').innerHTML = parola2 + ' ' +parola1;
} */

/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
*/
/* mejorar */
/* const numero1 = parseInt(prompt('Inserire un numero'));
const numero2 = parseInt(prompt('Inserire un altro numero'));
const numero3 = parseInt(prompt('Inserire un terzo numero'));
const numero4 = parseInt(prompt('Inserire un quarto numero'));
const numero5 = parseInt(prompt('Inserire un quinto numero'));

document.getElementById('output').innerHTML = numero1 + numero2 + numero3 + numero4 +  numero5; */

/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/
const numeri = [''];
const numeriDispari = ['']; 
const output = document.getElementById("output");
for (let i = 0; i < 6; i++) {
  const input = prompt(`Inserisci il ${i + 1}° numero`);
  const numero = parseInt(input);
    if (numero % 2 !== 0) {
      numeriDispari.push(numero);
    }
}
const numeriDispariString = numeriDispari.join(" #");
output.textContent = `Numeri dispari: ${numeriDispariString}`;
