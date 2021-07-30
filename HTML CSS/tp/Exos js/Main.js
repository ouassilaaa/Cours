//DOM

/*const Titre= document.getElementById("Titre");
console.log(Titre);

const txt = document.getElementById("p")
console.log(p);

document.body.insertBefore(txt[0],Titre);
console.log(Titre);

//appendchild
const titre = document.getElementById("monTitre");
const txt = document.getElementsByTagName("p");
document.body.appendChild(titre);
console.log(titre);

//Supprimer un élément du dom

const Titre= document.getElementById("Titre");
console.log(Titre);

const txt = document.getElementById("p")
console.log(p);

document.body.removeChild(Titre);
console.log(document.body);

// ajouter du texte 

const Titre= document.getElementsByTagName("Titre");
console.log(Titre);

const txt = document.getElementsByTagName("p")
console.log(p);

const newTxt = document.createTextNode("Bienvenue")
console.log(newTxt);
document.body.appendChild(newTxt);
console.log(document.body); 

const Titre= document.getElementById("Titre");
const txt = document.getElementsByTagName("p")
const newTxt = document.createTextNode("Bienvenue")


document.body.appendChild(newTxt);
document.body.replaceChild(newTxt,p)

console.log(document.body); */


// Correction 

/*const titre = document.getElementById("monTitre");
const txt = document.getElementsByTagName("p");

function ajoutTexte(pseudo, duTexte){
    const newTxt = document.createElement("p");
    newTxt.innerHTML = `<strong>${pseudo}</strong> : ${duTexte}`;
    document.body.appendChild(newTxt);
}

ajoutTexte("JOSé", "AZERTYUIOP");
ajoutTexte("COCO", "Wejdene");
ajoutTexte("eiffel65", "Blue Dabeudi dabeuda");
ajoutTexte("Cristaline", "eau de source");
ajoutTexte("EPSON", "Rétro Projecteur");*/

// Récupérer et modifier des attributs

/*const Titre = document.getElementById("Titre");
const txt = document.getElementsByTagName("p");

const lien = document.getElementsByTagName("a");

lien.setAttribute("href", "https://www.super.com/");
console.log(titre.getAttribute("id"));
console.log(lien.getAttribute("href")); */

// evenement: ajouter ecouter un clic 

/*const link= document.querySelector("a");
function monClic () {
    console.log("Bonjour");
}
link.addEventListener("click",monClic)*/


// Espionner le clavier 

/*addEventListener("keypress",
 function(event) {
    
    console.log(event.key);
}); 

// addEventListener qui écoute mouseout

const unTruc = document.querySelector("h1");

addEventListener("mouseout", function() { 
    unTruc.style.display = "block";
})

//desactiver button
const txt = document.querySelector("textarea");
const btn = document.querySelector("button");

txt.addEventListener("keyup", function() {
btn.disabled= txt.value.length >= 5 ? true : false;
});

/*EXO DOM12 Focus & Blur

HTML : sur notre page on a 1 input 

JS : 
On récupère cet input dans une variable leInput,

Sur leInput on va placer un addEventListener qui écoute l'évènement focus et qui lance une fonction 
Dans cette fonction on va modfier le backGround Color de leInput en (couleur au choix)

Sur leInput on va placer un addEventListener qui écoute l'évènement blur et qui lance une fonction 
Dans cette fonction on va modfier le backGround Color de leInput en white*/

/*let leInput = document.querySelector("input");

leInput.addEventListener("focus", function() {
    leInput.style.backgroundColor = "royalBlue";
});
leInput.addEventListener("blur", function() {
    leInput.style.backgroundColor = "white";
});

/*EXO DOM13 Load : 

HTML : 
Une dizaine d'images de grande taille

JS : 
Dans une const images, on récupère TOUTES les img
Une const tabImg va stocker ces images transformées en tableau (Array.from)

Sur tabImg on va utiliser la fonction map()

Dans les paramètres de map on va lui passer une fonction fléchées 
Cette fonction fléchées elle a 2 paramètres, une variable image et i 

Dans cette fonction fléchée, sur image on va placer un addEventListener qui écoute "load" et qui lance une fonction

dans cette fonction on va faire un console log de i pour afficher Numéro image : ${i}*/

/*const images = document.querySelectorAll("img");
const tabImg = Array.from(images);

tabImg.map((image,i) => image.addEventListener("load",function(){
    console.log(`img Num : ${i} - OK`);
}));


/*EXO DOM 14 Barre de scroll pt1

EXO DOM SUPER SCROLL CSS : 
-un body avec une min-height de 5000px (on veut pouvoir scroller) 
- Une classe boxar qui a une width à 100%, une position fixée en top à 0 et en left à 0, une bordure (couleur au choix) 
- Une classe bar qui a une hauteur de 20px et une width à 0, un background (même couleur au choix). 

HTML : ma div class boxbar contient ma div class bar 

JS : 
-On va stocker notre élément avec la classe bar dans une variable bar

-Sur toute notre page on place un addEventListener qui écoute le scroll et qui lance une fonction : 

-Dans cette fonction, on veut afficher en console : 
La hauteur de la page avec document.body.scrollHeight
La hauteur de l’affichage avec innerHeight
La position du scroll avec pageYOffset*/

/*const laBar = document.querySelector(".bar");

addEventListener("scroll", function() {
const scrollMax = document.body.scrollHeight - innerHeight;
const onEstOu = pageYOffset / scrollMax * 100;
laBar.style.width = onEstOu + "%";

    console.log(`
    Hauteur page : ${document.body.scrollHeight}
    Hauteur affichage : ${innerHeight}
    Scroll Position : ${pageYOffset}`);
} 
)

let bar = document.getElementsByClassName("bar")[0];
document.addEventListener("scroll",function(){
    let scrollMax = document.body.scrollHeight - window.innerHeight;
    let onEstOu = (window.pageYOffset / scrollMax)*100 + `%`;
    bar.style.width = onEstOu;
    console.log(document.body.scrollHeight, window.innerHeight, window.pageYOffset);
});

EXO DOM SetTimeout
 HTML : Juste une balise de titre à vide 

CSS : une transition de 1sec sur tout, 
le h1 avec une opacity à 0 

JS : 
°Récupérer le titre dans une variable 
° Créer une variable txt, à laquelle on assigne un setTimeout qui prend en 

-1er paramètre une fonction dans laquelle on modifie le texte du titre (voir textContent), 
qui remet l'opacity à 1, 
qui modifie la couleur du background de la page
 
- en 2e paramètre : 2000 (ms)
*/

/*const titre = document.querySelector("h6");
const txt = setTimeout(function() {
    titre.textContent = "SALUT C'EST COOL";
    titre.style.opacity = 1;
    document.body.style.background = "royalblue", 2000;
}


EXO DOM SetInterval

HTML : un titre qui lance le départ « C’est parti allons y »

CSS: le titre a un cursor à pointer (pour indiquer au user qu’on peut cliquer)

JS : 
1 variable titre qui stock notre h1
1 variable timer initialisée à 3 
1 addEventListener sur le titre écoute le click et lance une fonction dans laquelle on a : 
-1 variable countDown à laquelle on assigne un setInterval qui lance une fonction toute les 2 sec, 
- dans cette fonction : 

Si le timer est suppérieur à 0 alors on assigne au textContent du titre le timer

Sinon on assigne au textContent du titre  "GO GO GO" et on fait un clearInterval de countDown

En dehors du else on console log le timer et on décrémente le timer


    

const titre = document.querySelector("h1");
let timer = 3;
titre.addEventListener("click", function(){
    const countDown = setInterval(function() {
        if(timer > 0) {
            titre.textContent = timer;
        }
        else{
            titre.textContent = "GO GO GO";
            clearInterval(countDown);
        }
        console.log(timer);
        timer--;
    },200);
});

/*EXO DOM image Click 
HTML : rien dans le body 
JS : 
-Un addEventListener sur toute la page qui écoute le click et qui lance une fonction qui a une variable unEvent en paramètre 

-  Dans cette fonction on console log unEvent.
 -explorer ce que renvoi le console log pour trouver les coordonnées x et y de unEvent.
-on affiche ces coordonnées en console.

addEventListener("click", function (unEvent) {
    console.log(unEvent.y, unEvent.x);


});


EXO DOM image Click pt 2 : 
JS : 
Dans la fonction du addEventListener, 
- dans une variable monImg on va créer un élément img 

-Ensuite on modifie l’attribut src de monImg pour lui donner une source d'image (fillMurray etc..)

- Sur monImg on va aller dans style pour modifier sa position que l’on mettra en absolute

-Sur monImg on va aller dans style pour modifier sa propriété left à laquelle on assigne la coordonnée x de unEvent (en pixels)

-Sur monImg on va aller dans style pour modifier sa propriété top à laquelle on assigne la coordonnée y de unEvent (en pixels)

-On oublie pas de placer monImg dans le body de document.

addEventListener("click", function(unEvent) {
    console.log("Coord X",unEvent.x, "-", "Coord Y:", unEvent.y)

    const monImg = document.createElement("img");
    const taille = 220;
    monImg.setAttribute
        ("src",`https://www.placecage.com/${taille}/${taille}/`);

        monImg.style.position = "absolute";
        monImg.style.left = unEvent.x - taille /2 + "px";
        monImg.style.top = unEvent.y - taille /2 + "px";

        document.body.appendChild(monImg);
});

EXO DOM Editeur de texte : 
HTML : 
On a 1 textarea et 1 div vide

 JS : 
-Dans 1 variable monTxt on récup le textarea
-Dans 1 variable rendu on récup la div vide 
-Trouver un moyen de surveiller ce que tape l'utilisateur au clavier 
-Ce que l'utilisateur tape on le met dans le innerHTML de rendu*/

let monTxt= document.querySelector("txt")
let rendu= document.querySelector("div")

addEventListener("keypress", function(event) {
    monTxt.rendu
    
    
});