/*Exos js 08/04/21


var name= "Ouass"
var age = 25

var phrase= "Salut " + name + " tu as " + age + " aujourd'hui c'est la fête "


//console.log (phrase);

var pays = "Amsterdam";
console.log (pays.length);
// console.log(pays[3]);
 console.log(pays[pays.length -1]) // avoir la derniere lettre qui s'affiche

//var array = [12, "Salut ", name, age];

//console.log(array);

var passion= ["Boxe", "Fleurs"]; 
var array = [pays, age, passion];
//console.log(passion);
//console.log(array[2][1]) // mettre un tableau dans un tableau 

array[1]= "Super ! " // Changer un élément du tableau, le remplacer 
console.log(array)

console.log(array.length); // nombre de case dans le tableau 

// console.log(array[0].lenght); nombre de lettre dans la case demandée, ici case 0

var monTab= [100,200,300];
var suprr = monTab.pop();
console.log(monTab);
console.log(suprr);

// Créer un tableau et mettre nom prenom et initals 
var nom= "Mess"
var prenom= "Ouass"
var initial= prenom[0]+ nom[0]

var phrase= [nom, prenom, initial]
console.log(phrase)

// Fonctions scope: fonction pere/enfant c'est lorsqu'une fonction contient deux variables 

var num= 30;

function uneFonction(){
    var num =9;
    console.log(num);
}

uneFonction();
console.log(num);

function f1(noteA,noteB) {
    return (noteA+noteB)/2;
}

f1()

// TRUE FALSE boléens , vérifient deux variables 
var a = 11
var b = 99

console.log(a == b);
console.log(a !=b);

// condition ternaire : avant "?" on pose la condition qui doit etre remplie, apres "?" on demande si la condition est remplie ou pas  

var age= 11; 
var majorite= 18;

console.log(age == majorite ? "OK" : "NON" ); 

//Appliquer des conditions 


function mention (note) {
     
    let moy= [(note[0] + note[1]+ note[2])/3]; 

    if(moy >=15) {
        return "Très bien";
    }
    else if (moy >=10) {
        return "Assez bien";
    }
    else {
        return "Refus";
    }

}

console.log(mention([13,10,17]));

//OBJETS

var voiture = {
    "nbChevaux": 500,
    "vitesseMax": 450,
    "faiblesse": ["accélération","adhérence"]
}; 

console.log(voiture.vitesseMax);

// 37 Manipuler les objets
var voiture = {
    "nbChevaux": 500,
    "vitesseMax": 450,
    "faiblesse": ["accélération","adhérence"]
};
var afficher = "vitesseMax";
voiture.marque = "BMW";
delete voiture.marque;
console.log(voiture);
console.log(voiture.vitesseMax);
console.log(voiture["vitesseMax"]);
console.log(voiture[afficher]);
console.log(voiture.faiblesse[1]);
console.log(voiture);

// Exercice  Manip des objets (objet dans un objet).

var voiture = {
    "nbChevaux": 500,
    "vitesseMax": 450,
    "faiblesse": 300,
}

voiture.pilote= {"pilote" : "Jack", "copilote" : "Rose"};

console.log(voiture.pilote.copilote);

// Boucle while= faire une boucle avec la condition  

var i=0
while (i<10) {
    i++;
    console.log(i)
}

//exos
var i=0;
var dessin= [];


while (i<10) {
    i++;
    dessin.push("#")
}
console.log(dessin)

//Autre manière de faire des boucles= on utilise "for" 

for (let i=0; i<10; i++) {
    dessin.push("#");
    console.log(dessin);
}

for (var i=10;i>0;i -=2) {
    dessin.push("#")
    console.log(dessin)
}

var dessin2=[];
for(var i = 0; i < 10; i++){
    dessin2.push("#");
    console.log(dessin2);
}

/*Créer une fonction plus () qui reçoit un tableau en paramètre

Ce tableau qu'on lui passera, est un tableau contenant plusieurs tableau de 2 chiffres 

Dans cette fonction plus il faudra utiliser 2 boucles imbriquées pour ajouter +1 à chaque cases des tableaux dans le tableau           

Exemple d'utilisation dans le console log                                                       
console.log(plus([[10,10],[2,2],[3,3]])); 

function plus(array) {
    let array= [[a,b]]
    for (let i=0; i<array.length; i++) {
        for (let j=0; j<array.length; j++) {
            result+= array[[0],[1]]; 
        }

    }
    return array; 
}

//CORRECTION

function plus(tab) {
    for(var i = 0; i < tab.length; i++){
    for(var j = 0; j < tab[i].length; j++){
    tab[i][j] += 1;
}
    }
    return tab;
}
console.log(plus([[10,10],[2,2],[3,3]]));

//Utiliser la méthode map() afin d'éviter le parcours de tableau d'en haut. C'est une fonction permettant d'ajouter +1 et stocker toutes les cases du tableau(ici dans la variable ajouterUn)

let tab= [1,2,3,4,5,6]
let ajouterUn= tab.map(function(nombre) {
    return nombre +1;
})
console.log(tab);
console.log(ajouterUn)


//langage moderne de JS géré par ES6 et ES7

// fonction fléchée: manière plus courte et plus lisible de lire une fonction on remplace notre fn par =>
const tab= [1,2,3]
const plus = tab.map((nombre)=> {
    return `${nombre} +1 = ${nombre+1}`;
});

//const plus=tab.map(nombre =>)

function disNom(nom="Aucun") {
    console.log(nom);
}
disNom()

/*Exo échange de cartes pokémon : 

On a 2 variables , 
maCarte initialisé avec le pokemon de votre choix
et
taCarte initialisé avec un autre pokemon de votre choix

on va procéder à un échange de carte 

à la fin on console log (maCarte et taCarte) pour vérifie*/

let maCarte = "pikachu";
let taCarte= "salameche";

let c=maCarte;
maCarte=taCarte;
taCarte=c;

console.log(maCarte,taCarte);

//tableau 

[maCarte,taCarte]=[taCarte,maCarte]; 
console.log(maCarte,taCarte); 

//pour calculer des puissance oon utilise ** 
console.log(5 **4)

