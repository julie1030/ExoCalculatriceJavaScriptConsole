let total = 0  
// => pour partir de zéro sur la calculette
 
function addition (x) {
    total += x;
    return total;
}

function soustraction (x) {
    total -= x; 
    return total; 
}

function multiplication (x) {
    // => On teste si la valeur est zéro pour lui attribuer x, sans quoi la multiplication ou la division resterait nulle
    if (total === 0) {
        return (total = x);
    } 
    else {
        total *= x ;
        return total;
    }
    
}
function division (x) {
    if (total === 0) {
        return (total = x);
     } 
    else { 
    total /= x ;
    return total;
     }
    }
 
function reset () {
    total = 0;
}
// => la fonction reset nous permet de revenir à l'état initial de la calculatrice