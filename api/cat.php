<?php

class Utilisateur
    {   
        /*-----------------------------------------------------
                            attributs :
        -----------------------------------------------------*/
        protected $id_cat;
        protected $name_cat;
      
        /*-----------------------------------------------------
                            constucteur :
        -----------------------------------------------------*/        
        public function __construct($id_cat, $name_cat)
        {   $this->id = $id_cat;
            $this->name = $name_cat;
                       
        }
        /*-----------------------------------------------------
                        Getter and Setter :
        -----------------------------------------------------*/
        //getter id_cat
        public function getIdUser()
        {
            return $this->id_cat;
        }
        //setter id_cat
        public function setIdCat($new_id_cat)
        {
            $this->id_cat = $new_id_cat;
        }
        //getter name_cat
        public function getName()
        {
            return $this->name;
        }
        //setter name_cat
        public function setName($new_name_cat)
        {
            $this->name = $new_name_cat;
        }
        



        /*-----------------------------------------------------
                            Fonctions :
        -----------------------------------------------------*/
     
        }        
        //fonction affichage des informations
        public function showUser($id_cat, $name_cat){
            $mess= "";
            echo "$mess";
        }             
        //fonction affichage des erreurs 
        public function showError($id_cat, $name_cat){
            $mess = '';
            echo '<div class="alert  alert-warning" role="alert"></div>
                    </div>';
            echo '<script>            
            let divToast = document.querySelector(".alert")
            divToast.innerHTML = "'.$mess.'"
            </script>';            
        }

        //fonction insertion d'une catégorie en BDD
        public function createUser($id_cat, $name_cat){                                 
            //préparation de la requête SQL
            $req = $bdd->prepare('INSERT INTO catergorie (id_cat, name_cat) 
            VALUES (:id_cat, :name_cat)');
            //éxécution de la requête SQL
            $req->execute(array(
            'id_cat' => iconv("UTF-8", "ISO-8859-1//TRANSLIT", $id_cat),
            'name_cat' => iconv("UTF-8", "ISO-8859-1//TRANSLIT", $name_cat),
                                                                              
            ));
            $mess = 'la catégorie : '.$id_cat.' '.$name_cat.' à était ajouté !!!';
            //echo 'console.log("message erreur")';
            echo '<div class="alert  alert-warning" role="alert"></div>
                    </div>';
            echo '<script>
                console.log("message erreur")
                let divToast = document.querySelector(".alert")            
                divToast.innerHTML = "'.$mess.'"
            </script>';
            //fermeture de la connexion à la bdd
            $req->closeCursor();                          
        }
        
        public function createUser2($nom, $prenom, $login, $mdp, $bdd){                                 
            //connexion à la base de données
            include('utils/connectBdd.php');
            //requete pour stocker le contenu de toute la table
            $reponse = $bdd->query('SELECT * FROM utilisateur WHERE login_user = "'.$login.'" LIMIT 1');
            //boucle pour parcourir et afficher le contenu de chaque ligne de la table
            while ($donnees = $reponse->fetch())
            {   
                //test si le login existe
                if($login == $donnees['login_user'])
                {   
                    $userExist=1;                                  
                }                                              
            }
            if(isset($userExist)){
                header("Location: createFormateur.php?cpterror"); 
            }
            if(!isset($userExist)){
                //connexion à la base de données
                include('utils/connectBdd.php');
                //préparation de la requête SQL
                $req = $bdd->prepare('INSERT INTO utilisateur(nom_user, prenom_user, login_user, mdp_user, id_role) 
                VALUES (:nom_user, :prenom_user, :login_user, :mdp_user, :id_role)');
                //éxécution de la requête SQL
                $req->execute(array(
                'nom_user' => iconv("UTF-8", "ISO-8859-1//TRANSLIT", $nom),
                'prenom_user' => iconv("UTF-8", "ISO-8859-1//TRANSLIT", $prenom),
                'login_user' => iconv("UTF-8", "ISO-8859-1//TRANSLIT", $login),
                'mdp_user' => iconv("UTF-8", "ISO-8859-1//TRANSLIT", $mdp),
                'id_role' => iconv("UTF-8", "ISO-8859-1//TRANSLIT", 1),                                                                   
                ));
                $mss = 'le compte : '.$nom.' '.$prenom.' à était ajouté !!!';
                //echo 'console.log("message erreur")';
                echo '<div class="alert  alert-warning" role="alert"></div>
                    </div>';
                echo '<script>
                console.log("message erreur")
                let divToast = document.querySelector(".alert")             
                divToast.innerHTML = "'.$mss.'"
                </script>';
                //fermeture de la connexion à la bdd
                $req->closeCursor();    
            }                                  
        }
        //fonction vérification existence utilisateur en BDD 
        public function getUser($login, $bdd){
            //connexion à la base de données
            include('utils/connectBdd.php');
            //requete pour stocker le contenu de toute la table
            $reponse = $bdd->query('SELECT * FROM utilisateur WHERE login_user = "'.$login.'" LIMIT 1');
            //boucle pour parcourir et afficher le contenu de chaque ligne de la table
            while ($donnees = $reponse->fetch())
            {   
                //test si le login existe
                if($login == $donnees['login_user'])
                {   
                    $userExist=1;
                    $test = 'le compte : '.$donnees['nom_user'].' existe déja !!!';
                    echo '<div class="alert  alert-warning" role="alert"></div>
                    </div>';
                    echo '<script>            
                        let divToast = document.querySelector(".alert")
                        divToast.innerHTML = "'.$test.'"
                    </script>';
                    //fermeture de la connexion à la bdd
                    $reponse->closeCursor();                         
                }                               
            }                      
        }
    }
?>