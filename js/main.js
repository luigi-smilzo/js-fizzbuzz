/* Scrivi un programma che stampi i numeri da 1 a 100, ma:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi Buzz. 
per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

var list = document.getElementById('list');
var part3 = 'Fizz';
var part5 = 'Buzz';

for (var i = 1; i < 101; i++) {
    
    var listContent = list.innerHTML;

    if ( i % 3 == 0 && i % 5 == 0 ) {
        list.innerHTML = listContent + '<li>' + part3 + part5 + '</li>';
    } else if ( i % 5 == 0) {
        list.innerHTML = listContent + '<li>' + part5 + '</li>';
    } else if ( i % 3 == 0) {
        list.innerHTML = listContent + '<li>' + part3 + '</li>';
    } else {
        list.innerHTML = listContent + '<li>' + i + '</li>';
    }
}