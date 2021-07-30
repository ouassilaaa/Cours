create database projetFilRouge;
use projetFilRouge; 

create table utilisateurs (
id_utilisateur int auto_increment primary key not null,
nom_utilisateur varchar(50),
prenom_utilisateur varchar(50),
mail_utilisateur varchar(50),
mdp_utilisateur varchar(50),
date_de_naissance_utilisateur date);

create table catégorie (
id_catégorie int auto_increment primary key not null,
nom_catégorie varchar(50));

create table reservation (
id_reservation int auto_increment primary key not null,
date_reservation date,
client_reservation varchar(50));

create table categorie (
id_categorie int auto_increment primary key not null,
nom_catégorie varchar(50));

create table commentaire (
id_commentaire int auto_increment primary key not null,
message_commentaire varchar(50));

create table tarif  (
id_tarif int auto_increment primary key not null,
prix_tarif float,
description_tarif varchar(50));

create table attraction  (
id_attraction int auto_increment primary key not null,
nom_attraction varchar(50),
description_attraction varchar(50));

create table evenement (
id_evenement int auto_increment primary key not null,
nom_evenement varchar(50),
date_evenement date,
description_evenement text);





