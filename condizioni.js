
// if/else con esempio 
// facciamo inserire al utente password e verifichiamo se corretta o no
let user_password =prompt('inserisci password');
let password = 'ciao25';
let chek = false;

if(user_password==password){
    chek=true;
} 
console.log(chek);
if(chek==true){
    console.log('giusta');
}else{
    console.log('non giusta');

}

  // else/fi else/if con esempio
  //facciamo scegliere al utente una bevanda chiedendo quanti anni ha e se puo bere


let choose_drink =prompt('Scegli una bevanda:\n 1.Acqua\n 2. Coca-cola \n 3.Birra \n 4.Vino');
if(choose_drink==1){
    console.log('Ecco la tua acqua');
}else if(choose_drink==2){
    console.log('Ecco la tua Coca-cola');
}else if(choose_drink==3){

    let age =prompt('Quanti anni hai?');
    if(age>=18){
        console.log('Puoi bere')
    }else{
        console.log('Mi dispiace non pui bere')
    }
}else if(choose_drink==4){
    let age =prompt('Quanti anni hai?');
    if(age>=18){
        console.log('Puoi berre');
    }else{
        console.log('Mi dispiace non puoi bere')
    }
}else{
    console.log('Scelta non valida');
}

// altro esempio di else/ if else/if 
// voto ,non sufficente,sufficente,buono,ottimo,non valido.

let voto = 30;
if(voto<=18 && voto >=0){
    console.log('Non sufficente');
}else if(voto <=25 && voto >= 18){
    console.log('Sufficente');
}else if(voto <=25 && voto >=29){
    console.log('Buono');
}else if(voto==30){
    console.log('Ottimo');
}else{
    console.log('Voto non valido');
}

// esempio di switch
// colori

let color = 'red';
switch(color){
    case 'red':
           console.log('rosso');
        break;
        case 'green':
           console.log('verde');
        break;
        case 'blue':
            console.log('azzuro');
            break;
        default : console.log('colore non esiste');
}