// scrivi una programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
/* se v è minore di 18, stampare in console "insufficente"
se v maggiore uguale 18 e minore di 21, stampare in console "sufficente"
se v maggiore uguale 21 e minore di 24, stampare in console "buono"
se v maggiore uguale 24 e minore di 27, stampare in console "distinto"
se v maggiore uguale 27 e minore di 29, stampare "ottimo"
se v uguale a 30 ,stampare "eccellente"  */

// primo esempio con if/else if/else


let voto = 29;
if(voto<18){
console.log('Insufficente');
}else if(voto>=18 && voto<21){
console.log('Sufficente')
}else if(voto>=21 && voto<24){
console.log('Buono');
}else if(voto >=24 && voto<27){
console.log('Distinto');
}else if(voto>=27 && voto<=29){
console.log('Ottimo');
}else if(voto==30){
console.log('Eccellente');
}else{
console.log('voto non esiste');
}   

// lo stesso esercizio con switch
let v = 29;

switch(true){
    case v < 18:
    console.log('Insufficente');
    break;
    case v >= 18 && v <= 21:
    console.log('Sufficente');
    break;
    case v >= 21 && v <= 24:
    console.log('Buono');
    break;
    case v >= 24 && v <= 27:
    console.log('Distinto');
    break;
    case v >= 27 && v <= 29:
    console.log('Ottimo');
    break;
    case v == 30:
    console.log('eccellente');
    break;
    default:
    console.log('Il voto non esiste');
    
}


