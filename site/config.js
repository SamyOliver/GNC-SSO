// =====================================================================
//  CONFIG.JS — le seul fichier à modifier pour régler ton site
// =====================================================================

// 1) BASE DE DONNÉES (Supabase). Laisse vide pour tester en mode démo.
//    Colle entre les guillemets l'URL du projet et la clé publique
//    ("anon public" ou "publishable"). Voir le README, étape A.
//    Exemple : const CONFIG={url:"https://abcd1234.supabase.co",key:"eyJ..."};
const CONFIG={url:"",key:""};

// 2) TES COORDONNÉES
//    wa     = ton numéro WhatsApp avec l'indicatif, sans le +
//    mail   = ton adresse e-mail
//    prefix = texte ajouté devant chaque nom dans le fichier VCF
//    share  = lien court à partager (laisse "" pour utiliser l'adresse du site)
//             exemple : "https://tinyurl.com/sso-contacts"
const OWNER={wa:"237693517598",mail:"stivofolefacknanfack@gmail.com",prefix:"S.S.O",share:""};

// 3) VÉRIFICATION DES NUMÉROS
//    true  = vérification exacte par pays (mobiles uniquement)
//    false = vérifie seulement la longueur (si un vrai numéro est refusé)
const PHONE_STRICT=true;
