

var name  = "Ouassila";
var number = 26;
var txt = "Salut JJ, tu as aujo, c'est la fiesta !!! " 

console.log(name)


/*EXO calcul moyenne V3

1 fonction moyenne qui prend en paramètre un array de plusieurs notes et elle retourne la moyenne calculée.

Dans cette fonction  On créer une boucle pour faciliter le calcul de la moyenne

On console log un appel à la fonction moyenne en lui passant un tableau de plusieurs notes.

(la fonction doit pouvoir calculer la moyenne peut importe le nombre de notes qu'on lui passe dans le tableau)*/


function moyenne(array) {
    
    for (let i=0; i<array.length; i++) {

        result+= (array[i])/array.length;
        
    }
    return result
    
}
console.log(moyenne([10,20,30,40]))

// Correction 
// 42 Calcul Moyenne V3 
function moyenne (tab) {
    var total = 0;
// on Boucle pour tout additionner    
    for(var i =0; i < tab.length; i++){
        total += tab[i];
    }
// On fait la Division    
    return total / tab.length;
}
console.log(moyenne([10,13,2,3,4,5,18,20])); 

/*Créer une fonction plus () qui reçoit un tableau en paramètre

Ce tableau qu'on lui passera, est un tableau contenant plusieurs tableau de 2 chiffres 

Dans cette fonction plus il faudra utiliser 2 boucles imbriquées pour ajouter +1 à chaque cases des tableaux dans le tableau           

Exemple d'utilisation dans le console log                                                       
console.log(plus([[10,10],[2,2],[3,3]])); **/

function plus(array) {
    let array= [a,b]
    for (let i=0; i<array.length; i++) {

    }

}


