create database judo; 

use judo;
create table participer  (
id_cpt int auto_increment primary key not null, 
id_judoka int auto_increment primary key not null
);

create table judoka (
id_judoka int auto_increment primary key not null, 
nom_judoka varchar(50),
prenom_judoka varchar(50),
age_judoka int,
sexe_judoka varchar(1),
id_niveau int 
); 

create table niveau ( 
id_niveau int auto_increment primary key not null,
couleur_ceinture varchar(50)); 

create table competition( 
id_cpt int auto_increment primary key not null, 
nom_cpt varchar(50),
date_debut_cpt date, 
date_fin_cpt date ); 


alter table judoka 
add  column id_niveau int; 

alter table judoka
add constraint fk_attribuer_niveau
foreign key (id_niveau)
references niveau(id_niveau);

alter table competition 
add constraint fk_posseder_cpt
foreign key (id_cpt)
references participer(id_cpt);

insert into niveau (id_niveau, couleur_ceinture) values 
(1,"blanche"),
(2,"jaune"),
(3,"orange"),
(4,"verte"),
(5,"bleue"),
(6,"marron"),
(7,"noire"); 

insert into judoka (id_judoka,nom_judoka,prenom_judoka,age_judoka,sexe_judoka,id_niveau) values
(1,"Lachance", "Dominique", 16, "F",2),
(2,"Porter","Gilbert",18,"H",2),
(3,"Lemaitre","Anne",15,"F",4),
(4,"Robert","Juliette",12,"F",1),
(5,"Montminy","Pierre",17,"H",5),
(6,"Charette","Pascal",21,"H",6),
(7,"Guay","Emilie",19,"F",6),
(8,"Maheu","Louise",14,"F",4),
(9,"Poulin", "Raymond", 26,"H",7),
(10,"Dupret","Alain",20,"H",6);

insert into participer (id_cpt,id_judoka) values
(1,1),
(1,3),
(1,4),
(2,2),
(2,5),
(2,6),
(2,9),
(3,10),
(3,9),
(4,1),
(4,3),
(4,8),
(4,4);

update judoka 
set id_niveau=3
where id_judoka=1;

update judoka
set id_niveau=3
where id_judoka=2;

update judoka
set id_niveau=5
where id_judoka=3;

update judoka 
set id_niveau=2
where id_judoka=4;

update judoka
set id_niveau=6
where id_judoka=5;

insert into judoka (id_judoka,nom_judoka,prenom_judoka,age_judoka,sexe_judoka,id_niveau) values
(11,"Ouassila","Messaoui",25,"F",6),
(12,"Sarah","Rabah",20,"F",1);

delete from judoka 
where id_judoka=11 and id_judoka=12; 
