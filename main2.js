// Lezione di pratica 13/11
Esercizio 1
let voto = 24;

if(voto < 18){
    console.log("Insuficiente");
}else if( voto >= 18 && voto < 21){
        console.log(" Sufficiente ");
    }
    else if( voto >= 21 && voto < 24){
        console.log("Buono");
    }
    else if( voto >= 24 && voto < 27){
        console.log("Distinto");
    }
    else if( voto >= 27 && voto <=29){
        console.log("Ottimo");
    } 
    else if( voto == 30){
        console.log("Eccellente");
    } else {
        console.log("Nullo");
}

// Esercizio 2

let temperature= prompt("Quanti gradi fa fuori?");

if(temperature >=0 && temperature < 20){
    console.log(" Non ci sono più le mezze stagioni ");
    }else if( temperature >= 30){
        console.log(" lu mare, lu sule e lu ientu ");
    }
    else if( temperature >=20 && temperature < 30){
        console.log("mi dia una peroni sudata");
    }
    else if( temperature >= -10 && temperature < 0){
        console.log("Non è tanto il freddo quanto l’umidità");
    }
    else if( temperature < -10){
        console.log("copriti…ancora ti raffreddi");
    } else {
        console.log("Lu mare, lu sole, lu ientu");
}

// Esercizio 3
let num=2;
let total=20;


for(let i=2; i<=total; i=i+2){
    console.log(i);
}

// Esercizio 4
let digit= prompt("Seleziona il numero del prodotto");


switch( digit ){
    case "1":
        console.log("hai selezionato acqua");
    break;
    case "2":
        console.log("Hai selezionato coca cola");
    break;
    case "3":
        console.log("Hai selezionato birra");
    break;
    default:
        let digit= prompt("Seleziona il numero del prodotto");
}