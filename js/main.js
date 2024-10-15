
console.log("sono dentro la console")

/*inserisco il cliclo for da 1 a 100*/


/*stampo i valori da 1 a 100 */

for (let i = 1; i < 101; i++) {
    console.log(i);

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }

   else{
    if (i % 3 == 0) {
        console.log("Fizz")
    }
    if (i % 5 == 0) {
        console.log("Buzz")

    }
   }
    

}




/*
Iteriamo i numeri da 1 a 100.
Per ogni numero:
Se è divisibile sia per 3 che per 5, stampiamo "FizzBuzz".
Se è divisibile solo per 3, stampiamo "Fizz".
Se è divisibile solo per 5, stampiamo "Buzz".
Altrimenti, stampiamo il numero.
 */