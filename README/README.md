# Contacts Exchange — Guide complet

Site de collecte de contacts WhatsApp : les visiteurs s'inscrivent (nom + numéro), une **barre de progression** montre l'avancement vers l'objectif (5 000 par défaut), et le **fichier VCF** est débloqué quand l'objectif est atteint — ou quand **toi seul** décides de le publier avant.

---

## 1. Les fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | La page du site et son fonctionnement (rien à modifier ici, sauf l'adresse `VOTRE-LIEN`, étape E) |
| `config.js` | **Le fichier à modifier** : clés Supabase, ton numéro WhatsApp, ton e-mail, le préfixe `S.S.O` |
| `translations.js` | Tous les textes dans les 12 langues : clause de confidentialité, publicité « BESOIN DE… ? », messages |
| `phone.js` | La vérification des numéros de chaque pays. **Ne pas ouvrir ni modifier** |
| `og-image.jpg` | L'image de l'aperçu du lien (carte affichée quand on partage le lien) |
| `supabase-setup.sql` | Le script qui crée la base de données et la sécurité |
| `README.md` | Ce guide |

> **Envoie toujours TOUS les fichiers du dossier** sur ton hébergeur. Si l'un manque, le site affiche un bandeau rouge « Fichier(s) manquant(s) » avec son nom.

### Ouvrir les fichiers dans VS Code

1. Décompresse `site.zip` (clic droit → *Extraire tout*) : tu obtiens un dossier `site`.
2. Dans VS Code : **File → Open Folder…** → choisis le dossier `site`. Les fichiers apparaissent à gauche.
3. Clique sur `config.js` ou `translations.js` : ils sont courts et lisibles.
4. **N'ouvre pas `phone.js`** : c'est une bibliothèque compressée sur une seule ligne géante, illisible dans n'importe quel éditeur. Tu n'as jamais besoin d'y toucher.

---

## 2. Ce que fait le site

- **Barre de progression** collée en haut, mise à jour automatiquement toutes les 10 secondes.
- **Langue** : anglais par défaut ; 12 langues au total (en, fr, es, pt, ar, sw, de, it, tr, ru, hi, zh).
- **Inscription** : nom + numéro ; indicatif **+237 (Cameroun)** présélectionné, modifiable parmi **tous les pays (245)**, avec drapeau et nom du pays dans la langue choisie.
- **Identifiants** : après l'inscription, le site rappelle que le **même nom et le même numéro** serviront à télécharger le VCF (onglet « Connexion » pour revenir plus tard).
- **Préfixe `S.S.O`** ajouté devant chaque nom **dans le fichier VCF** (ex. `S.S.O Jean`). Dans tes contacts / tes vues WhatsApp, tu reconnais ainsi tout ce qui vient du site.
- **Clause de confidentialité** : case **obligatoire** à cocher à l'inscription (lien pour la lire dans la langue choisie) + message de confidentialité affiché dès l'arrivée.
- **Publicité** : bandeau animé en haut (« BESOIN D'UN PC ? … »), grande carte sous le formulaire avec la liste complète, bouton WhatsApp flottant, lien `wa.me` + e-mail.
- **Ambiance** : fond dégradé animé, bulles, et sons discrets (bouton 🔊/🔇 en haut pour couper).
- **Espace admin** (lien « Admin » en bas de page) : voir/modifier l'objectif, publier le VCF, télécharger tous les contacts, les consulter, en supprimer.

---

## 2 bis. Numéros de téléphone : comment c'est géré

La vérification utilise **libphonenumber** (la bibliothèque de Google, licence MIT), fournie dans le fichier `phone.js` (même dossier que le site) : pas besoin d'internet pour la charger.

- **Règles propres à chaque pays** : longueur et début de numéro exacts (Cameroun : 9 chiffres commençant par 6 ou 2…, Russie : 10 chiffres, Belgique : 9 chiffres pour un mobile, etc.). Les faux numéros (`123456789`) et les numéros trop courts ou trop longs sont refusés.
- **Tous les formats habituels sont acceptés** : `6 71 23 45 67`, `0470 12 34 56`, `8 916 123-45-67` (le 0 ou le 8 du début est géré), `+237 671 234 567`, ou le code pays tapé par erreur (`237 671…`). Le cas particulier où le `0` fait partie du numéro (Côte d'Ivoire, Bénin) est géré.
- **Mise en forme automatique** pendant la saisie et **aperçu vert** `✓ +237 6 71 23 45 67` quand le numéro est valide.
- **Enregistrement uniforme (format international E.164)** : `+237671234567`. Un même numéro écrit de deux façons est reconnu comme le même → pas de doublon, et la connexion marche quelle que soit la façon de le taper.
- Si le pays choisi ne correspond pas au numéro, le site le dit (« Vérifiez le pays et le numéro »). Un numéro tapé avec `+` et un autre code pays est accepté s'il est valide.
- **Mobiles uniquement** : les numéros fixes sont refusés (WhatsApp fonctionne sur mobile). Si un vrai mobile récent était refusé (nouvelle tranche d'opérateur), mets `const PHONE_STRICT=false;` dans `config.js` : le site ne vérifie alors que la longueur.

---

## 3. Essayer tout de suite (mode démo)

Ouvre `index.html` dans ton navigateur (avec les autres fichiers dans le même dossier). Sans configuration, le site fonctionne en **mode démo** : les données restent sur ton appareil, mot de passe admin = `admin`. Utile pour tester l'apparence, les langues, les sons et le parcours.

⚠️ En mode démo, les autres visiteurs **ne voient pas** tes inscrits. Pour un vrai site public, suis les étapes ci-dessous.

---

## 4. Mise en ligne, pas à pas

### Étape A — Créer la base de données (Supabase, gratuit)

1. Va sur **supabase.com** → *Start your project* → crée un compte.
2. **New project** : donne un nom (ex. `contacts`), choisis un **mot de passe de base de données** (garde-le), et une région proche (Europe de l'Ouest convient bien pour le Cameroun). Attends 1–2 minutes.
3. Ouvre `supabase-setup.sql` dans un éditeur de texte.
4. **Remplace `CHANGE_ME_STRONG_PASSWORD`** par **ton mot de passe admin** (long, avec chiffres et symboles). C'est lui qui te donnera accès à l'espace admin.
5. Dans Supabase : menu **SQL Editor** → **New query** → colle **tout** le contenu du fichier → **Run**. Tu dois voir « Success ».
6. Menu **Project Settings → API** : copie
   - **Project URL** (ex. `https://abcd1234.supabase.co`)
   - la clé publique : **anon public** (ou **publishable key** si c'est ce que Supabase affiche).
   Ne copie **jamais** la clé `service_role` / `secret`.

### Étape B — Configurer le site

1. Ouvre **`config.js`** (dans VS Code ou le Bloc-notes). C'est le seul fichier à régler.
2. Ligne `const CONFIG` : colle entre les guillemets l'URL et la clé publique de Supabase :
   ```js
   const CONFIG={url:"https://abcd1234.supabase.co",key:"ta-cle-anon-publique"};
   ```
3. Ligne `const OWNER` : vérifie ton numéro WhatsApp **sans +**, ton e-mail et le préfixe (déjà remplis avec tes coordonnées) :
   ```js
   const OWNER={wa:"237693517598",mail:"stivofolefacknanfack@gmail.com",prefix:"S.S.O",share:""};
   ```
4. Enregistre (Ctrl+S).

### Étape C — Mettre le site en ligne (choisis une option)

**Option 1 — Netlify Drop (le plus simple, depuis un ordinateur)**
1. Utilise le dossier `site` complet (il contient `index.html`, `config.js`, `translations.js`, `phone.js` et `og-image.jpg`).
2. Va sur **app.netlify.com/drop** (compte gratuit), glisse-dépose le dossier.
3. Netlify te donne un lien `https://xxxx.netlify.app`. Tu peux le renommer dans *Site settings → Change site name*.

**Option 2 — GitHub Pages**
1. Crée un compte sur **github.com** → *New repository* (public), nom au choix.
2. *Add file → Upload files* → glisse **tous les fichiers du dossier `site`** (sauf `README.md` et `supabase-setup.sql` si tu veux) → *Commit*.
3. *Settings → Pages* → Source : **Deploy from a branch** → branche `main`, dossier `/ (root)` → *Save*.
4. Après 1–2 minutes, ton lien est `https://ton-pseudo.github.io/nom-du-depot/`.

**Option 3 — Vercel ou Cloudflare Pages** : même principe (déposer le dossier, aucun réglage de build).

> Depuis un téléphone, active « version pour ordinateur » dans le navigateur si le glisser-déposer ne marche pas.

### Étape D — Tester avant de partager

1. Ouvre ton lien, inscris un faux contact (coche la clause) → la barre passe à `1 / 5,000`.
2. Clique **Admin** (bas de page), entre ton mot de passe → tu vois l'espace admin.
3. Dans l'admin, mets l'objectif à `1` et **Enregistre** : le VCF doit se débloquer. Télécharge-le et ouvre-le : les noms commencent par **S.S.O**.
4. Remets l'objectif à `5000`, supprime le faux contact (icône 🗑 dans « Voir les contacts »).
5. Partage ton lien (statut WhatsApp, groupes, réseaux sociaux).

---

### Étape E — Aperçu et lien de partage (important)

Quand on partage le lien sur WhatsApp, une **carte d'aperçu** (titre + image) s'affiche seulement si ces deux réglages sont faits :

1. Dans `index.html`, cherche `VOTRE-LIEN` (2 endroits : `og:url` et `og:image`) et remplace par ton adresse réelle, sans `https://`. Exemple : `mon-site.netlify.app`.
2. Envoie `og-image.jpg` au même endroit que `index.html`.

Puis teste : colle ton lien dans un message WhatsApp à toi-même. WhatsApp garde les aperçus en mémoire : si tu corriges après un premier essai, ajoute `?v=2` à la fin du lien pour forcer un nouvel aperçu.

**Lien raccourci / « masqué »** : WhatsApp n'accepte pas les liens cachés derrière un mot — tout lien envoyé s'affiche en entier et reste cliquable. Pour qu'il soit court et propre :
- donne un nom court à ton site (Netlify : *Site settings → Change site name*), ou
- crée un lien court (tinyurl.com, is.gd…) avec un alias facile, puis mets-le dans `OWNER` → `share:"https://tinyurl.com/ton-alias"`. Le bouton « Inviter des amis » enverra alors ce lien court.

Le message de partage place le lien **seul sur sa propre ligne** pour qu'il ne se mélange pas au texte (important en arabe et en chinois).

> Le lien partagé ne doit **pas** être celui d'un aperçu ou d'un fichier ouvert depuis ton téléphone (adresse du type `file://…`) : partage toujours l'adresse de ton site en ligne.

---

## 5. Utiliser l'espace admin

Lien **Admin** en bas de page → mot de passe admin.

- **Objectif** : change le nombre de contacts à atteindre (toi seul peux le faire).
- **Case « Rendre le VCF téléchargeable pour tout le monde maintenant »** : publie le fichier même si l'objectif n'est pas atteint. Décoche pour re-verrouiller.
- **Télécharger le VCF** : tous les contacts, à tout moment, même verrouillé.
- **Voir les contacts** : liste avec recherche. L'icône 🗑 supprime un contact (demande de suppression d'un utilisateur).

Pour changer le mot de passe admin plus tard, dans Supabase → SQL Editor :
```sql
update settings set admin_hash = extensions.crypt('NOUVEAU_MOT_DE_PASSE', extensions.gen_salt('bf'));
```

---

## 6. Personnaliser

Utilise Ctrl+F dans le fichier indiqué pour trouver le mot-clé.

| Je veux changer… | Fichier | Chercher |
|---|---|---|
| Mon numéro, e-mail, le préfixe `S.S.O`, le lien de partage court | `config.js` | `OWNER` |
| Les clés Supabase | `config.js` | `CONFIG` |
| La sévérité de la vérification des numéros | `config.js` | `PHONE_STRICT` |
| La liste des « BESOIN DE… ? » (par langue) | `translations.js` | `ad:` (et les emojis dans `AE`) |
| Le message WhatsApp pré-rempli de la publicité | `translations.js` | `aq:` |
| La clause de confidentialité (par langue) | `translations.js` | `cp:` |
| Le texte d'accueil sur la confidentialité | `translations.js` | `pv:` |
| N'importe quel autre texte | `translations.js` | le texte lui-même |
| L'aperçu du lien (titre, description, image) | `index.html` | `og:title`, `og:description`, `VOTRE-LIEN` |
| Les couleurs de fond | `index.html` | `--g1`, `--g2`, `--g3`, `--g4` |
| Les sons | `index.html` | `function snd` |
| La langue par défaut | `index.html` | `let lang=gs("lg")` |
| Ajouter une langue | `translations.js` | copier un bloc de langue dans `L`, puis l'ajouter dans `N` |

**Important** : si tu retires un « BESOIN DE… ? » dans une langue, garde le **même nombre de phrases** dans `AE` et dans la liste `ad` de **toutes** les langues.

---

## 7. Confidentialité et règles — à lire absolument

- **Pourquoi le message de confidentialité est formulé ainsi** : le fichier VCF contient le nom et le numéro de **tous** les inscrits, remis aux autres membres. Écrire « numéro strictement confidentiel » sans le préciser serait trompeur pour les utilisateurs et risqué pour toi. Le site dit donc la vérité : le numéro n'est **jamais affiché sur le site**, **jamais vendu**, traité selon la clause, et **partagé uniquement (avec le nom) dans le VCF** remis aux inscrits.
- **La clause est un modèle** : fais-la relire (idéalement par un juriste) et adapte-la. Des lois sur la protection des données existent au Cameroun et dans le pays de tes visiteurs (RGPD pour l'Europe, par exemple).
- **Respecte ta clause** : ne vends pas la liste, ne l'utilise pas pour autre chose. Traite les demandes de suppression rapidement (admin → 🗑).
- **N'envoie pas de messages en masse non sollicités** à la liste : WhatsApp peut restreindre ou bannir un compte pour cela. Le VCF sert à ce que les membres se voient mutuellement leurs statuts.
- La clause demande **18 ans minimum** ; ne l'enlève pas.
- Tes publicités (liste « BESOIN DE… ? ») : garde uniquement ce que tu proposes réellement.

---

## 8. Sécurité : ce qui est protégé, ce qui ne l'est pas

**Protégé**
- Personne ne peut lire la base directement : seules des fonctions contrôlées sont accessibles.
- L'objectif, la publication, la liste complète et la suppression exigent **ton mot de passe admin** (vérifié côté serveur, stocké chiffré).
- Le VCF n'est servi qu'à un inscrit, et seulement si l'objectif est atteint ou publié.
- Les noms affichés dans l'admin sont affichés en texte brut (pas d'injection de code).

**Limites à connaître**
- Les identifiants des visiteurs sont **nom + numéro** (pas de code SMS) : quelqu'un qui connaît le nom et le numéro d'un inscrit peut télécharger le VCF une fois débloqué. De même, rien ne prouve qu'un numéro appartient bien à la personne qui l'inscrit : le site vérifie qu'il est **valide et bien formé**, pas qu'il est **réellement celui de l'utilisateur** (il faudrait un code de confirmation par SMS, service payant).
- La vérification par pays se fait dans le navigateur ; côté serveur, la base vérifie seulement la forme (`+` suivi de 7 à 15 chiffres). Quelqu'un de technique pourrait donc envoyer un faux numéro en contournant le site. Les doublons, eux, sont bloqués par la base.
- Choisis un mot de passe admin **long et unique** : il n'y a pas de limitation du nombre d'essais.
- La clé « anon/publishable » est **publique par conception** ; ce sont les règles SQL qui protègent les données. Ne mets jamais la clé `service_role` dans le site.
- Un projet Supabase gratuit peut être mis en pause après une longue inactivité : réactive-le depuis le tableau de bord si besoin.

---

## 9. Problèmes fréquents

| Problème | Solution |
|---|---|
| La barre reste à `0 / 5,000` et le bandeau « Demo mode » apparaît | `CONFIG` est vide ou mal rempli dans `config.js` (URL + clé) |
| Bandeau rouge « Fichier(s) manquant(s) » | Un fichier du dossier n'a pas été envoyé sur l'hébergeur : renvoie tout le dossier |
| VS Code affiche un texte illisible ou se fige | Tu as ouvert `phone.js` : ferme-le, ouvre `config.js` ou `translations.js` à la place |
| « Problème de connexion » | URL/clé erronées, ou le script SQL n'a pas été exécuté en entier |
| « Mot de passe incorrect » (admin) | Le mot de passe dans le SQL n'est pas celui que tu tapes ; change-le avec la commande de la section 5 |
| Un vrai numéro mobile est refusé | Vérifie le pays choisi ; sinon passe `PHONE_STRICT` à `false` (section 2 bis) |
| Le bouton de téléchargement reste verrouillé 🔒 | Objectif non atteint : baisse l'objectif ou coche « Rendre le VCF téléchargeable… » |
| Le VCF ne s'ouvre pas sur iPhone | Ouvre le fichier depuis l'app Fichiers ou envoie-le-toi par e-mail, puis « Ajouter tous les contacts » |
| Le lien partagé s'affiche sans carte ni image | `VOTRE-LIEN` pas remplacé, ou `og-image.jpg` absent de l'hébergeur (étape E) |
| Pas de son | Touche l'écran une fois (les navigateurs bloquent le son avant un premier geste) et vérifie le bouton 🔊 |
| Changement de `index.html` non visible | Renvoie le fichier sur ton hébergeur et rafraîchis (Ctrl+F5) |

---

## 10. Mettre à jour le site

Modifie le fichier voulu (le plus souvent `config.js` ou `translations.js`), puis renvoie-le (même glisser-déposer sur Netlify, ou *Upload files* sur GitHub). Les données (inscrits, objectif) restent dans Supabase et ne sont pas affectées.

Bon lancement ! 🚀
