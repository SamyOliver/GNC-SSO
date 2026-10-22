// =====================================================================
//  TRANSLATIONS.JS — tous les textes du site, dans les 12 langues
// =====================================================================
//  Pour modifier un texte : change le texte entre guillemets "..."
//  Ne supprime ni les virgules ni les guillemets.
//  {n} {g} {r} {u} sont remplacés automatiquement : ne pas les effacer.
//
//  PUBLICITÉ : la liste « ad » contient 10 phrases (une par ligne). Les
//  emojis sont dans AE ci-dessous, dans le même ordre. Si tu ajoutes ou
//  retires une phrase dans une langue, fais pareil dans TOUTES les langues
//  et dans AE.
// =====================================================================

// Noms des langues affichées dans le menu
const N = {
  en: "English",
  fr: "Français",
  es: "Español",
  pt: "Português",
  ar: "العربية",
  sw: "Kiswahili",
  de: "Deutsch",
  it: "Italiano",
  tr: "Türkçe",
  ru: "Русский",
  hi: "हिन्दी",
  zh: "中文"
};

// Emojis de la publicité (même ordre que la liste "ad")
const AE = ["💻","📱","🚗","🛠️","🖱️","🛡️","🌐","💾","🖨️","📡"];

const L = {

  en: { // English

    // Formulaire et écran de bienvenue
    t: "Get more WhatsApp views",
    sub: "Join, then download the contacts file when it's released and save it on your phone. Everyone sees each other's statuses.",
    reg: "Join",
    sin: "Sign in",
    nm: "Your name",
    ph: "WhatsApp number",
    con: "I have read and accept the Privacy Clause and the rules of use.",
    hint: "You'll use this same name and number to download the VCF file.",
    goR: "Join now",
    goS: "Sign in",
    hi: "Welcome, {n}!",
    nt: "Remember your login",
    nt2: "Use this same name and phone number each time you want to download the VCF file.",

    // Barre de progression, téléchargement, invitation
    pm: "The VCF file will be shared once we reach {g} contacts.",
    po: "🎉 Goal reached! The VCF file is ready.",
    lk: "Locked until {g} contacts — {r} to go. Invite your friends!",
    dl: "Download VCF file",
    how: "Open the downloaded file to import the contacts into your phone.",
    out: "Sign out",
    sh: "Invite friends on WhatsApp",
    shT: "Join me and get more WhatsApp views! {u}",

    // Messages d'erreur
    eNm: "Please enter your name.",
    ePh: "Please enter a valid phone number.",
    ePc: "Check the country and the number.",
    eCk: "Please accept to continue.",
    eNf: "Name and number don't match any account.",
    eEx: "This number is already registered. Sign in with the name you used.",
    eNet: "Connection problem. Try again.",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "Your phone number is never shown on this site, never sold, and is handled according to our Privacy Clause. It is only shared, with your name, in the VCF file given to registered members.",
    cl: "Read the Privacy Clause",
    clt: "Privacy Clause & Rules of Use",
    ok: "I accept",
    cp: [
      "Controller: the site owner (contact below). You must be 18 or older and use your own WhatsApp number.",
      "We collect only your name and WhatsApp number. Nothing else.",
      "Your name (shown with the prefix S.S.O) and number are included in the VCF contacts file. That file is given only to registered members, once the goal is reached or the admin releases it. Your number is never displayed on the website.",
      "We never sell, rent or use your data for anything else. We keep it only as long as the project runs. Members who download the file will have your name and number in their phone.",
      "You can ask at any time to correct or delete your data using the contacts below. We will remove you from the list; files already downloaded cannot be recalled.",
      "Rules: no spam, harassment, scams or illegal content towards other members. Accounts that break these rules may be removed.",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "NEED HELP? WRITE TO ME NOW!",
    asb: "Fast answer on WhatsApp or email.",
    ad: [
      "NEED A PC?",
      "NEED A PHONE?",
      "NEED A CAR?",
      "NEED A DEVICE REPAIRED?",
      "NEED AN IT TOOL?",
      "NEED AN IT SECURITY EXPERT?",
      "NEED A WEBSITE OR AN APP?",
      "NEED TO RECOVER LOST DATA?",
      "NEED ACCESSORIES (SCREEN, PRINTER, CHARGER)?",
      "NEED WI-FI OR SECURITY CAMERAS?",
    ],
    aw: "💬 Chat with me on WhatsApp",
    ae: "✉️ Send me an email",
    aq: "Hello, I saw your ad on the contacts site and I need help with: ",
  },

  fr: { // Français

    // Formulaire et écran de bienvenue
    t: "Obtenez plus de vues WhatsApp",
    sub: "Inscrivez-vous, puis téléchargez le fichier de contacts dès sa publication et enregistrez-le sur votre téléphone. Tout le monde voit les statuts des autres.",
    reg: "S'inscrire",
    sin: "Connexion",
    nm: "Votre nom",
    ph: "Numéro WhatsApp",
    con: "J'ai lu et j'accepte la Clause de confidentialité et les règles d'utilisation.",
    hint: "Vous utiliserez ce même nom et ce même numéro pour télécharger le fichier VCF.",
    goR: "S'inscrire",
    goS: "Se connecter",
    hi: "Bienvenue, {n} !",
    nt: "Retenez vos identifiants",
    nt2: "Utilisez ce même nom et ce même numéro à chaque fois que vous voulez télécharger le fichier VCF.",

    // Barre de progression, téléchargement, invitation
    pm: "Le fichier VCF sera partagé dès que nous atteindrons {g} contacts.",
    po: "🎉 Objectif atteint ! Le fichier VCF est prêt.",
    lk: "Verrouillé jusqu'à {g} contacts — encore {r}. Invitez vos amis !",
    dl: "Télécharger le fichier VCF",
    how: "Ouvrez le fichier téléchargé pour importer les contacts dans votre téléphone.",
    out: "Se déconnecter",
    sh: "Inviter des amis sur WhatsApp",
    shT: "Rejoins-moi et gagne plus de vues WhatsApp ! {u}",

    // Messages d'erreur
    eNm: "Entrez votre nom.",
    ePh: "Entrez un numéro de téléphone valide.",
    ePc: "Vérifiez le pays et le numéro.",
    eCk: "Veuillez accepter pour continuer.",
    eNf: "Nom et numéro ne correspondent à aucun compte.",
    eEx: "Ce numéro est déjà inscrit. Connectez-vous avec le nom utilisé.",
    eNet: "Problème de connexion. Réessayez.",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "Votre numéro de téléphone n'est jamais affiché sur ce site, jamais vendu, et il est traité conformément à notre Clause de confidentialité. Il est uniquement partagé, avec votre nom, dans le fichier VCF remis aux membres inscrits.",
    cl: "Lire la Clause de confidentialité",
    clt: "Clause de confidentialité et règles d'utilisation",
    ok: "J'accepte",
    cp: [
      "Responsable : le propriétaire du site (contact ci-dessous). Vous devez avoir 18 ans ou plus et utiliser votre propre numéro WhatsApp.",
      "Nous collectons uniquement votre nom et votre numéro WhatsApp. Rien d'autre.",
      "Votre nom (affiché avec le préfixe S.S.O) et votre numéro sont inclus dans le fichier de contacts VCF. Ce fichier est remis uniquement aux membres inscrits, une fois l'objectif atteint ou lorsque l'administrateur le publie. Votre numéro n'est jamais affiché sur le site.",
      "Nous ne vendons ni ne louons vos données et ne les utilisons pour rien d'autre. Elles sont conservées tant que le projet existe. Les membres qui téléchargent le fichier auront votre nom et votre numéro dans leur téléphone.",
      "Vous pouvez demander à tout moment la correction ou la suppression de vos données via les contacts ci-dessous. Nous vous retirerons de la liste ; un fichier déjà téléchargé ne peut pas être rappelé.",
      "Règles : pas de spam, de harcèlement, d'arnaque ni de contenu illégal envers les autres membres. Les comptes qui enfreignent ces règles peuvent être supprimés.",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "BESOIN D'AIDE ? ÉCRIVEZ-MOI MAINTENANT !",
    asb: "Réponse rapide sur WhatsApp ou par e-mail.",
    ad: [
      "BESOIN D'UN PC ?",
      "BESOIN D'UN TÉLÉPHONE ?",
      "BESOIN D'UNE VOITURE ?",
      "BESOIN DE DÉPANNER UN APPAREIL ?",
      "BESOIN D'UN OUTIL INFORMATIQUE ?",
      "BESOIN D'ASSISTANCE D'UN EXPERT EN SÉCURITÉ INFORMATIQUE ?",
      "BESOIN D'UN SITE WEB OU D'UNE APPLICATION ?",
      "BESOIN DE RÉCUPÉRER DES DONNÉES PERDUES ?",
      "BESOIN D'ACCESSOIRES (ÉCRAN, IMPRIMANTE, CHARGEUR) ?",
      "BESOIN DE WI-FI OU DE CAMÉRAS DE SURVEILLANCE ?",
    ],
    aw: "💬 Écrivez-moi sur WhatsApp",
    ae: "✉️ Envoyez-moi un e-mail",
    aq: "Bonjour, j'ai vu votre annonce sur le site de contacts et j'ai besoin d'aide pour : ",
  },

  es: { // Español

    // Formulaire et écran de bienvenue
    t: "Consigue más vistas en WhatsApp",
    sub: "Únete y descarga el archivo de contactos cuando se publique; guárdalo en tu teléfono. Todos ven los estados de los demás.",
    reg: "Unirme",
    sin: "Iniciar sesión",
    nm: "Tu nombre",
    ph: "Número de WhatsApp",
    con: "He leído y acepto la Cláusula de privacidad y las reglas de uso.",
    hint: "Usarás este mismo nombre y número para descargar el archivo VCF.",
    goR: "Unirme ahora",
    goS: "Iniciar sesión",
    hi: "¡Bienvenido, {n}!",
    nt: "Recuerda tus datos de acceso",
    nt2: "Usa este mismo nombre y número cada vez que quieras descargar el archivo VCF.",

    // Barre de progression, téléchargement, invitation
    pm: "El archivo VCF se compartirá cuando lleguemos a {g} contactos.",
    po: "🎉 ¡Meta alcanzada! El archivo VCF está listo.",
    lk: "Bloqueado hasta {g} contactos: faltan {r}. ¡Invita a tus amigos!",
    dl: "Descargar archivo VCF",
    how: "Abre el archivo descargado para importar los contactos a tu teléfono.",
    out: "Cerrar sesión",
    sh: "Invitar amigos por WhatsApp",
    shT: "¡Únete y consigue más vistas en WhatsApp! {u}",

    // Messages d'erreur
    eNm: "Introduce tu nombre.",
    ePh: "Introduce un número válido.",
    ePc: "Revisa el país y el número.",
    eCk: "Acepta para continuar.",
    eNf: "El nombre y el número no coinciden con ninguna cuenta.",
    eEx: "Este número ya está registrado. Inicia sesión con el nombre que usaste.",
    eNet: "Problema de conexión. Inténtalo de nuevo.",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "Tu número de teléfono nunca se muestra en este sitio, nunca se vende y se trata conforme a nuestra Cláusula de privacidad. Solo se comparte, con tu nombre, en el archivo VCF entregado a los miembros registrados.",
    cl: "Leer la Cláusula de privacidad",
    clt: "Cláusula de privacidad y reglas de uso",
    ok: "Acepto",
    cp: [
      "Responsable: el propietario del sitio (contacto abajo). Debes tener 18 años o más y usar tu propio número de WhatsApp.",
      "Solo recopilamos tu nombre y tu número de WhatsApp. Nada más.",
      "Tu nombre (con el prefijo S.S.O) y tu número se incluyen en el archivo de contactos VCF. Ese archivo se entrega solo a miembros registrados, cuando se alcance la meta o el administrador lo publique. Tu número nunca se muestra en el sitio web.",
      "No vendemos ni alquilamos tus datos ni los usamos para nada más. Los conservamos mientras dure el proyecto. Los miembros que descarguen el archivo tendrán tu nombre y número en su teléfono.",
      "Puedes pedir en cualquier momento que corrijamos o eliminemos tus datos a través de los contactos de abajo. Te quitaremos de la lista; un archivo ya descargado no se puede retirar.",
      "Reglas: nada de spam, acoso, estafas ni contenido ilegal hacia otros miembros. Las cuentas que incumplan estas reglas pueden ser eliminadas.",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "¿NECESITAS AYUDA? ¡ESCRÍBEME AHORA!",
    asb: "Respuesta rápida por WhatsApp o correo.",
    ad: [
      "¿NECESITAS UN PC?",
      "¿NECESITAS UN TELÉFONO?",
      "¿NECESITAS UN COCHE?",
      "¿NECESITAS REPARAR UN APARATO?",
      "¿NECESITAS UNA HERRAMIENTA INFORMÁTICA?",
      "¿NECESITAS UN EXPERTO EN SEGURIDAD INFORMÁTICA?",
      "¿NECESITAS UN SITIO WEB O UNA APP?",
      "¿NECESITAS RECUPERAR DATOS PERDIDOS?",
      "¿NECESITAS ACCESORIOS (PANTALLA, IMPRESORA, CARGADOR)?",
      "¿NECESITAS WI-FI O CÁMARAS DE SEGURIDAD?",
    ],
    aw: "💬 Escríbeme por WhatsApp",
    ae: "✉️ Envíame un correo",
    aq: "Hola, vi tu anuncio en el sitio de contactos y necesito ayuda con: ",
  },

  pt: { // Português

    // Formulaire et écran de bienvenue
    t: "Ganhe mais visualizações no WhatsApp",
    sub: "Inscreva-se e baixe o arquivo de contatos quando for liberado; salve no seu telefone. Todos veem os status uns dos outros.",
    reg: "Inscrever-se",
    sin: "Entrar",
    nm: "Seu nome",
    ph: "Número do WhatsApp",
    con: "Li e aceito a Cláusula de privacidade e as regras de uso.",
    hint: "Você usará este mesmo nome e número para baixar o arquivo VCF.",
    goR: "Inscrever-se",
    goS: "Entrar",
    hi: "Bem-vindo, {n}!",
    nt: "Guarde seus dados de acesso",
    nt2: "Use este mesmo nome e número sempre que quiser baixar o arquivo VCF.",

    // Barre de progression, téléchargement, invitation
    pm: "O arquivo VCF será compartilhado quando chegarmos a {g} contatos.",
    po: "🎉 Meta atingida! O arquivo VCF está pronto.",
    lk: "Bloqueado até {g} contatos — faltam {r}. Convide seus amigos!",
    dl: "Baixar arquivo VCF",
    how: "Abra o arquivo baixado para importar os contatos no seu telefone.",
    out: "Sair",
    sh: "Convidar amigos no WhatsApp",
    shT: "Entre comigo e ganhe mais visualizações no WhatsApp! {u}",

    // Messages d'erreur
    eNm: "Digite seu nome.",
    ePh: "Digite um número válido.",
    ePc: "Verifique o país e o número.",
    eCk: "Aceite para continuar.",
    eNf: "Nome e número não correspondem a nenhuma conta.",
    eEx: "Este número já está cadastrado. Entre com o nome que você usou.",
    eNet: "Problema de conexão. Tente novamente.",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "O seu número de telefone nunca é exibido neste site, nunca é vendido e é tratado conforme a nossa Cláusula de privacidade. Ele só é compartilhado, com o seu nome, no arquivo VCF entregue aos membros inscritos.",
    cl: "Ler a Cláusula de privacidade",
    clt: "Cláusula de privacidade e regras de uso",
    ok: "Aceito",
    cp: [
      "Responsável: o proprietário do site (contato abaixo). Você deve ter 18 anos ou mais e usar o seu próprio número de WhatsApp.",
      "Coletamos apenas o seu nome e o seu número de WhatsApp. Nada mais.",
      "O seu nome (com o prefixo S.S.O) e o seu número são incluídos no arquivo de contatos VCF. Esse arquivo é entregue apenas a membros inscritos, quando a meta for atingida ou o administrador o liberar. O seu número nunca é exibido no site.",
      "Não vendemos nem alugamos os seus dados nem os usamos para outra finalidade. Eles são mantidos enquanto o projeto existir. Os membros que baixarem o arquivo terão o seu nome e número no telefone.",
      "Você pode pedir a qualquer momento a correção ou a exclusão dos seus dados pelos contatos abaixo. Removeremos você da lista; um arquivo já baixado não pode ser recolhido.",
      "Regras: sem spam, assédio, golpes ou conteúdo ilegal contra outros membros. Contas que violarem estas regras podem ser removidas.",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "PRECISA DE AJUDA? ESCREVA-ME AGORA!",
    asb: "Resposta rápida por WhatsApp ou e-mail.",
    ad: [
      "PRECISA DE UM PC?",
      "PRECISA DE UM TELEFONE?",
      "PRECISA DE UM CARRO?",
      "PRECISA CONSERTAR UM APARELHO?",
      "PRECISA DE UMA FERRAMENTA DE INFORMÁTICA?",
      "PRECISA DE UM ESPECIALISTA EM SEGURANÇA DA INFORMAÇÃO?",
      "PRECISA DE UM SITE OU APLICATIVO?",
      "PRECISA RECUPERAR DADOS PERDIDOS?",
      "PRECISA DE ACESSÓRIOS (TELA, IMPRESSORA, CARREGADOR)?",
      "PRECISA DE WI-FI OU CÂMERAS DE SEGURANÇA?",
    ],
    aw: "💬 Fale comigo no WhatsApp",
    ae: "✉️ Envie-me um e-mail",
    aq: "Olá, vi o seu anúncio no site de contatos e preciso de ajuda com: ",
  },

  ar: { // العربية

    // Formulaire et écran de bienvenue
    t: "احصل على المزيد من مشاهدات واتساب",
    sub: "سجّل ثم نزّل ملف جهات الاتصال عند إصداره واحفظه على هاتفك. يرى الجميع حالات بعضهم.",
    reg: "انضمام",
    sin: "تسجيل الدخول",
    nm: "اسمك",
    ph: "رقم واتساب",
    con: "قرأت شرط الخصوصية وقواعد الاستخدام وأوافق عليها.",
    hint: "ستستخدم نفس الاسم ونفس الرقم لتنزيل ملف VCF.",
    goR: "انضم الآن",
    goS: "تسجيل الدخول",
    hi: "مرحباً {n}!",
    nt: "احتفظ ببيانات الدخول",
    nt2: "استخدم نفس الاسم ورقم الهاتف في كل مرة تريد فيها تنزيل ملف VCF.",

    // Barre de progression, téléchargement, invitation
    pm: "ستتم مشاركة ملف VCF عند وصولنا إلى {g} جهة اتصال.",
    po: "🎉 تم بلوغ الهدف! ملف VCF جاهز.",
    lk: "مقفل حتى {g} جهة اتصال — بقي {r}. ادعُ أصدقاءك!",
    dl: "تنزيل ملف VCF",
    how: "افتح الملف المنزَّل لاستيراد جهات الاتصال إلى هاتفك.",
    out: "تسجيل الخروج",
    sh: "ادعُ أصدقاءك عبر واتساب",
    shT: "انضم إليّ واحصل على مشاهدات أكثر في واتساب! {u}",

    // Messages d'erreur
    eNm: "أدخل اسمك.",
    ePh: "أدخل رقم هاتف صحيحاً.",
    ePc: "تحقق من الدولة والرقم.",
    eCk: "يرجى الموافقة للمتابعة.",
    eNf: "الاسم والرقم لا يطابقان أي حساب.",
    eEx: "هذا الرقم مسجّل مسبقاً. سجّل الدخول بالاسم الذي استخدمته.",
    eNet: "مشكلة في الاتصال. حاول مرة أخرى.",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "لا يظهر رقم هاتفك أبداً على هذا الموقع، ولا يُباع، ويُعالَج وفق شرط الخصوصية لدينا. تتم مشاركته فقط، مع اسمك، في ملف VCF المسلَّم للأعضاء المسجّلين.",
    cl: "اقرأ شرط الخصوصية",
    clt: "شرط الخصوصية وقواعد الاستخدام",
    ok: "أوافق",
    cp: [
      "المسؤول: مالك الموقع (وسائل التواصل أدناه). يجب أن يكون عمرك 18 عاماً أو أكثر وأن تستخدم رقم واتساب الخاص بك.",
      "نجمع اسمك ورقم واتساب فقط. لا شيء آخر.",
      "يُدرج اسمك (مع البادئة S.S.O) ورقمك في ملف جهات الاتصال VCF. يُسلَّم هذا الملف للأعضاء المسجّلين فقط، بعد بلوغ الهدف أو عند إصداره من المشرف. لا يظهر رقمك أبداً على الموقع.",
      "لا نبيع بياناتك ولا نؤجرها ولا نستخدمها لأي غرض آخر. نحتفظ بها ما دام المشروع قائماً. الأعضاء الذين ينزّلون الملف سيجدون اسمك ورقمك في هواتفهم.",
      "يمكنك في أي وقت طلب تصحيح بياناتك أو حذفها عبر وسائل التواصل أدناه. سنحذفك من القائمة؛ أما الملف الذي تم تنزيله فلا يمكن سحبه.",
      "القواعد: لا للرسائل المزعجة أو المضايقة أو الاحتيال أو المحتوى غير القانوني تجاه الأعضاء الآخرين. قد تُحذف الحسابات المخالفة.",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "هل تحتاج مساعدة؟ راسلني الآن!",
    asb: "رد سريع عبر واتساب أو البريد الإلكتروني.",
    ad: [
      "هل تحتاج إلى حاسوب؟",
      "هل تحتاج إلى هاتف؟",
      "هل تحتاج إلى سيارة؟",
      "هل تحتاج إلى إصلاح جهاز؟",
      "هل تحتاج إلى أداة معلوماتية؟",
      "هل تحتاج إلى خبير في أمن المعلومات؟",
      "هل تحتاج إلى موقع ويب أو تطبيق؟",
      "هل تحتاج إلى استعادة بيانات مفقودة؟",
      "هل تحتاج إلى ملحقات (شاشة، طابعة، شاحن)؟",
      "هل تحتاج إلى واي فاي أو كاميرات مراقبة؟",
    ],
    aw: "💬 راسلني على واتساب",
    ae: "✉️ أرسل لي بريداً إلكترونياً",
    aq: "مرحباً، رأيت إعلانك على موقع جهات الاتصال وأحتاج إلى مساعدة في: ",
  },

  sw: { // Kiswahili

    // Formulaire et écran de bienvenue
    t: "Pata watazamaji wengi zaidi wa WhatsApp",
    sub: "Jiunge, kisha pakua faili ya anwani itakapotolewa na uihifadhi kwenye simu yako. Kila mtu anaona hali za wengine.",
    reg: "Jiunge",
    sin: "Ingia",
    nm: "Jina lako",
    ph: "Namba ya WhatsApp",
    con: "Nimesoma na nakubali Kifungu cha Faragha na kanuni za matumizi.",
    hint: "Utatumia jina na namba hii hii kupakua faili ya VCF.",
    goR: "Jiunge sasa",
    goS: "Ingia",
    hi: "Karibu, {n}!",
    nt: "Kumbuka taarifa zako za kuingia",
    nt2: "Tumia jina na namba hii hii kila unapotaka kupakua faili ya VCF.",

    // Barre de progression, téléchargement, invitation
    pm: "Faili ya VCF itashirikiwa tukifikia anwani {g}.",
    po: "🎉 Lengo limefikiwa! Faili ya VCF iko tayari.",
    lk: "Imefungwa hadi anwani {g} — zimebaki {r}. Waalike marafiki zako!",
    dl: "Pakua faili ya VCF",
    how: "Fungua faili uliyopakua ili kuingiza anwani kwenye simu yako.",
    out: "Toka",
    sh: "Waalike marafiki kwenye WhatsApp",
    shT: "Jiunge nami upate watazamaji wengi zaidi wa WhatsApp! {u}",

    // Messages d'erreur
    eNm: "Weka jina lako.",
    ePh: "Weka namba sahihi ya simu.",
    ePc: "Angalia nchi na namba.",
    eCk: "Kubali ili kuendelea.",
    eNf: "Jina na namba havilingani na akaunti yoyote.",
    eEx: "Namba hii imeshasajiliwa. Ingia kwa jina ulilotumia.",
    eNet: "Tatizo la mtandao. Jaribu tena.",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "Namba yako ya simu haionyeshwi kamwe kwenye tovuti hii, haiuzwi, na inashughulikiwa kulingana na Kifungu chetu cha Faragha. Inashirikiwa tu, pamoja na jina lako, kwenye faili ya VCF inayotolewa kwa wanachama waliosajiliwa.",
    cl: "Soma Kifungu cha Faragha",
    clt: "Kifungu cha Faragha na Kanuni za Matumizi",
    ok: "Nakubali",
    cp: [
      "Msimamizi: mmiliki wa tovuti (mawasiliano hapa chini). Lazima uwe na miaka 18 au zaidi na utumie namba yako mwenyewe ya WhatsApp.",
      "Tunakusanya jina lako na namba yako ya WhatsApp pekee. Hakuna kingine.",
      "Jina lako (likiwa na kiambishi S.S.O) na namba yako vinajumuishwa kwenye faili ya anwani ya VCF. Faili hiyo hutolewa kwa wanachama waliosajiliwa tu, lengo likifikiwa au msimamizi akiitoa. Namba yako haionyeshwi kamwe kwenye tovuti.",
      "Hatuuzi wala kukodisha data yako wala kuitumia kwa jambo lingine. Tunaihifadhi mradi ukiendelea. Wanachama watakaopakua faili watakuwa na jina na namba yako kwenye simu zao.",
      "Unaweza kuomba wakati wowote data yako irekebishwe au ifutwe kupitia mawasiliano hapa chini. Tutakuondoa kwenye orodha; faili iliyopakuliwa tayari haiwezi kurejeshwa.",
      "Kanuni: hakuna barua taka, unyanyasaji, ulaghai wala maudhui haramu kwa wanachama wengine. Akaunti zinazokiuka zinaweza kuondolewa.",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "UNAHITAJI MSAADA? NIANDIKIE SASA!",
    asb: "Jibu la haraka kwenye WhatsApp au barua pepe.",
    ad: [
      "UNAHITAJI KOMPYUTA?",
      "UNAHITAJI SIMU?",
      "UNAHITAJI GARI?",
      "UNAHITAJI KIFAA KIREKEBISHWE?",
      "UNAHITAJI ZANA YA TEHAMA?",
      "UNAHITAJI MTAALAMU WA USALAMA WA TEHAMA?",
      "UNAHITAJI TOVUTI AU PROGRAMU?",
      "UNAHITAJI KUREJESHA DATA ILIYOPOTEA?",
      "UNAHITAJI VIFAA (SKRINI, PRINTA, CHAJI)?",
      "UNAHITAJI WI-FI AU KAMERA ZA USALAMA?",
    ],
    aw: "💬 Niandikie kwenye WhatsApp",
    ae: "✉️ Nitumie barua pepe",
    aq: "Habari, nimeona tangazo lako kwenye tovuti ya anwani na ninahitaji msaada kuhusu: ",
  },

  de: { // Deutsch

    // Formulaire et écran de bienvenue
    t: "Mehr WhatsApp-Aufrufe bekommen",
    sub: "Melde dich an und lade die Kontaktdatei herunter, sobald sie freigegeben ist. Alle sehen die Status der anderen.",
    reg: "Beitreten",
    sin: "Anmelden",
    nm: "Dein Name",
    ph: "WhatsApp-Nummer",
    con: "Ich habe die Datenschutzklausel und die Nutzungsregeln gelesen und akzeptiere sie.",
    hint: "Mit demselben Namen und derselben Nummer lädst du die VCF-Datei herunter.",
    goR: "Jetzt beitreten",
    goS: "Anmelden",
    hi: "Willkommen, {n}!",
    nt: "Merke dir deine Zugangsdaten",
    nt2: "Nutze denselben Namen und dieselbe Telefonnummer, wenn du die VCF-Datei herunterladen willst.",

    // Barre de progression, téléchargement, invitation
    pm: "Die VCF-Datei wird geteilt, sobald wir {g} Kontakte erreichen.",
    po: "🎉 Ziel erreicht! Die VCF-Datei ist bereit.",
    lk: "Gesperrt bis {g} Kontakte – noch {r}. Lade deine Freunde ein!",
    dl: "VCF-Datei herunterladen",
    how: "Öffne die heruntergeladene Datei, um die Kontakte auf dein Handy zu importieren.",
    out: "Abmelden",
    sh: "Freunde per WhatsApp einladen",
    shT: "Mach mit und bekomme mehr WhatsApp-Aufrufe! {u}",

    // Messages d'erreur
    eNm: "Bitte gib deinen Namen ein.",
    ePh: "Bitte gib eine gültige Telefonnummer ein.",
    ePc: "Prüfe Land und Nummer.",
    eCk: "Bitte stimme zu, um fortzufahren.",
    eNf: "Name und Nummer passen zu keinem Konto.",
    eEx: "Diese Nummer ist bereits registriert. Melde dich mit dem verwendeten Namen an.",
    eNet: "Verbindungsproblem. Versuche es erneut.",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "Deine Telefonnummer wird auf dieser Seite nie angezeigt, nie verkauft und gemäß unserer Datenschutzklausel behandelt. Sie wird nur zusammen mit deinem Namen in der VCF-Datei geteilt, die registrierte Mitglieder erhalten.",
    cl: "Datenschutzklausel lesen",
    clt: "Datenschutzklausel & Nutzungsregeln",
    ok: "Ich akzeptiere",
    cp: [
      "Verantwortlicher: der Betreiber der Seite (Kontakt unten). Du musst mindestens 18 sein und deine eigene WhatsApp-Nummer verwenden.",
      "Wir erheben nur deinen Namen und deine WhatsApp-Nummer. Sonst nichts.",
      "Dein Name (mit dem Präfix S.S.O) und deine Nummer werden in die VCF-Kontaktdatei aufgenommen. Diese Datei erhalten nur registrierte Mitglieder, sobald das Ziel erreicht ist oder der Admin sie freigibt. Deine Nummer wird nie auf der Website angezeigt.",
      "Wir verkaufen oder vermieten deine Daten nicht und nutzen sie für nichts anderes. Wir speichern sie, solange das Projekt läuft. Mitglieder, die die Datei herunterladen, haben deinen Namen und deine Nummer auf ihrem Handy.",
      "Du kannst jederzeit über die Kontakte unten die Korrektur oder Löschung deiner Daten verlangen. Wir entfernen dich aus der Liste; bereits heruntergeladene Dateien können nicht zurückgerufen werden.",
      "Regeln: kein Spam, keine Belästigung, keine Betrügereien und keine illegalen Inhalte gegenüber anderen Mitgliedern. Konten, die dagegen verstoßen, können entfernt werden.",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "HILFE NÖTIG? SCHREIB MIR JETZT!",
    asb: "Schnelle Antwort per WhatsApp oder E-Mail.",
    ad: [
      "BRAUCHST DU EINEN PC?",
      "BRAUCHST DU EIN HANDY?",
      "BRAUCHST DU EIN AUTO?",
      "BRAUCHST DU EINE GERÄTEREPARATUR?",
      "BRAUCHST DU EIN IT-TOOL?",
      "BRAUCHST DU EINEN IT-SICHERHEITSEXPERTEN?",
      "BRAUCHST DU EINE WEBSITE ODER APP?",
      "MÜSSEN VERLORENE DATEN WIEDERHERGESTELLT WERDEN?",
      "BRAUCHST DU ZUBEHÖR (BILDSCHIRM, DRUCKER, LADEGERÄT)?",
      "BRAUCHST DU WLAN ODER ÜBERWACHUNGSKAMERAS?",
    ],
    aw: "💬 Schreib mir auf WhatsApp",
    ae: "✉️ Schick mir eine E-Mail",
    aq: "Hallo, ich habe deine Anzeige auf der Kontaktseite gesehen und brauche Hilfe bei: ",
  },

  it: { // Italiano

    // Formulaire et écran de bienvenue
    t: "Ottieni più visualizzazioni su WhatsApp",
    sub: "Iscriviti e scarica il file dei contatti quando sarà rilasciato. Tutti vedono gli stati degli altri.",
    reg: "Iscriviti",
    sin: "Accedi",
    nm: "Il tuo nome",
    ph: "Numero WhatsApp",
    con: "Ho letto e accetto la Clausola sulla privacy e le regole d'uso.",
    hint: "Userai lo stesso nome e numero per scaricare il file VCF.",
    goR: "Iscriviti ora",
    goS: "Accedi",
    hi: "Benvenuto, {n}!",
    nt: "Ricorda le tue credenziali",
    nt2: "Usa lo stesso nome e numero di telefono ogni volta che vuoi scaricare il file VCF.",

    // Barre de progression, téléchargement, invitation
    pm: "Il file VCF sarà condiviso quando raggiungeremo {g} contatti.",
    po: "🎉 Obiettivo raggiunto! Il file VCF è pronto.",
    lk: "Bloccato fino a {g} contatti — ne mancano {r}. Invita i tuoi amici!",
    dl: "Scarica il file VCF",
    how: "Apri il file scaricato per importare i contatti sul telefono.",
    out: "Esci",
    sh: "Invita amici su WhatsApp",
    shT: "Unisciti a me e ottieni più visualizzazioni su WhatsApp! {u}",

    // Messages d'erreur
    eNm: "Inserisci il tuo nome.",
    ePh: "Inserisci un numero di telefono valido.",
    ePc: "Controlla il paese e il numero.",
    eCk: "Accetta per continuare.",
    eNf: "Nome e numero non corrispondono a nessun account.",
    eEx: "Questo numero è già registrato. Accedi con il nome che hai usato.",
    eNet: "Problema di connessione. Riprova.",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "Il tuo numero di telefono non viene mai mostrato su questo sito, mai venduto, e viene trattato secondo la nostra Clausola sulla privacy. Viene condiviso solo, insieme al tuo nome, nel file VCF consegnato ai membri iscritti.",
    cl: "Leggi la Clausola sulla privacy",
    clt: "Clausola sulla privacy e regole d'uso",
    ok: "Accetto",
    cp: [
      "Titolare: il proprietario del sito (contatti sotto). Devi avere almeno 18 anni e usare il tuo numero WhatsApp.",
      "Raccogliamo solo il tuo nome e il tuo numero WhatsApp. Nient'altro.",
      "Il tuo nome (con il prefisso S.S.O) e il tuo numero sono inclusi nel file di contatti VCF. Il file è consegnato solo ai membri iscritti, quando l'obiettivo è raggiunto o l'admin lo rilascia. Il tuo numero non è mai mostrato sul sito.",
      "Non vendiamo né affittiamo i tuoi dati e non li usiamo per altro. Li conserviamo finché il progetto esiste. I membri che scaricano il file avranno il tuo nome e numero sul telefono.",
      "Puoi chiedere in qualsiasi momento la correzione o la cancellazione dei tuoi dati tramite i contatti sotto. Ti rimuoveremo dall'elenco; un file già scaricato non può essere richiamato.",
      "Regole: niente spam, molestie, truffe o contenuti illegali verso altri membri. Gli account che violano le regole possono essere rimossi.",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "HAI BISOGNO DI AIUTO? SCRIVIMI ORA!",
    asb: "Risposta rapida su WhatsApp o via e-mail.",
    ad: [
      "HAI BISOGNO DI UN PC?",
      "HAI BISOGNO DI UN TELEFONO?",
      "HAI BISOGNO DI UN'AUTO?",
      "HAI BISOGNO DI RIPARARE UN DISPOSITIVO?",
      "HAI BISOGNO DI UNO STRUMENTO INFORMATICO?",
      "HAI BISOGNO DI UN ESPERTO DI SICUREZZA INFORMATICA?",
      "HAI BISOGNO DI UN SITO WEB O DI UN'APP?",
      "HAI BISOGNO DI RECUPERARE DATI PERSI?",
      "HAI BISOGNO DI ACCESSORI (SCHERMO, STAMPANTE, CARICABATTERIE)?",
      "HAI BISOGNO DI WI-FI O TELECAMERE DI SORVEGLIANZA?",
    ],
    aw: "💬 Scrivimi su WhatsApp",
    ae: "✉️ Inviami un'e-mail",
    aq: "Ciao, ho visto il tuo annuncio sul sito dei contatti e ho bisogno di aiuto con: ",
  },

  tr: { // Türkçe

    // Formulaire et écran de bienvenue
    t: "Daha fazla WhatsApp görüntülenmesi kazan",
    sub: "Katıl ve kişi dosyası yayınlandığında indir. Herkes birbirinin durumlarını görür.",
    reg: "Katıl",
    sin: "Giriş yap",
    nm: "Adın",
    ph: "WhatsApp numarası",
    con: "Gizlilik Maddesi'ni ve kullanım kurallarını okudum, kabul ediyorum.",
    hint: "VCF dosyasını indirmek için aynı adı ve numarayı kullanacaksın.",
    goR: "Şimdi katıl",
    goS: "Giriş yap",
    hi: "Hoş geldin, {n}!",
    nt: "Giriş bilgilerini unutma",
    nt2: "VCF dosyasını her indirmek istediğinde aynı adı ve telefon numarasını kullan.",

    // Barre de progression, téléchargement, invitation
    pm: "{g} kişiye ulaştığımızda VCF dosyası paylaşılacak.",
    po: "🎉 Hedefe ulaşıldı! VCF dosyası hazır.",
    lk: "{g} kişiye kadar kilitli — {r} kişi kaldı. Arkadaşlarını davet et!",
    dl: "VCF dosyasını indir",
    how: "Kişileri telefonuna aktarmak için indirilen dosyayı aç.",
    out: "Çıkış yap",
    sh: "Arkadaşlarını WhatsApp'ta davet et",
    shT: "Bana katıl, daha fazla WhatsApp görüntülenmesi kazan! {u}",

    // Messages d'erreur
    eNm: "Lütfen adını gir.",
    ePh: "Lütfen geçerli bir telefon numarası gir.",
    ePc: "Ülkeyi ve numarayı kontrol et.",
    eCk: "Devam etmek için kabul et.",
    eNf: "Ad ve numara hiçbir hesapla eşleşmiyor.",
    eEx: "Bu numara zaten kayıtlı. Kullandığın adla giriş yap.",
    eNet: "Bağlantı sorunu. Tekrar dene.",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "Telefon numaran bu sitede asla gösterilmez, satılmaz ve Gizlilik Maddemize uygun şekilde işlenir. Yalnızca adınla birlikte, kayıtlı üyelere verilen VCF dosyasında paylaşılır.",
    cl: "Gizlilik Maddesi'ni oku",
    clt: "Gizlilik Maddesi ve Kullanım Kuralları",
    ok: "Kabul ediyorum",
    cp: [
      "Sorumlu: sitenin sahibi (iletişim aşağıda). 18 yaşında veya daha büyük olmalı ve kendi WhatsApp numaranı kullanmalısın.",
      "Yalnızca adını ve WhatsApp numaranı topluyoruz. Başka hiçbir şey yok.",
      "Adın (S.S.O ön ekiyle) ve numaran VCF kişi dosyasına eklenir. Bu dosya yalnızca kayıtlı üyelere, hedefe ulaşıldığında veya yönetici yayınladığında verilir. Numaran web sitesinde asla gösterilmez.",
      "Verilerini satmaz, kiralamaz ve başka bir amaçla kullanmayız. Proje sürdüğü sürece saklarız. Dosyayı indiren üyelerin telefonunda adın ve numaran olacaktır.",
      "İstediğin zaman aşağıdaki iletişim bilgileriyle verilerinin düzeltilmesini veya silinmesini isteyebilirsin. Seni listeden çıkarırız; indirilmiş bir dosya geri alınamaz.",
      "Kurallar: diğer üyelere karşı spam, taciz, dolandırıcılık veya yasa dışı içerik yok. Kuralları ihlal eden hesaplar kaldırılabilir.",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "YARDIMA MI İHTİYACIN VAR? ŞİMDİ YAZ!",
    asb: "WhatsApp veya e-posta ile hızlı yanıt.",
    ad: [
      "BİLGİSAYARA MI İHTİYACIN VAR?",
      "TELEFONA MI İHTİYACIN VAR?",
      "ARABAYA MI İHTİYACIN VAR?",
      "CİHAZIN TAMİRİNE Mİ İHTİYACIN VAR?",
      "BİLİŞİM ARACINA MI İHTİYACIN VAR?",
      "BİLGİ GÜVENLİĞİ UZMANINA MI İHTİYACIN VAR?",
      "WEB SİTESİ VEYA UYGULAMAYA MI İHTİYACIN VAR?",
      "KAYIP VERİLERİ KURTARMAK MI İSTİYORSUN?",
      "AKSESUARLARA MI İHTİYACIN VAR (EKRAN, YAZICI, ŞARJ)?",
      "WI-FI VEYA GÜVENLİK KAMERALARINA MI İHTİYACIN VAR?",
    ],
    aw: "💬 WhatsApp'tan yaz",
    ae: "✉️ E-posta gönder",
    aq: "Merhaba, kişiler sitesindeki ilanını gördüm ve şu konuda yardıma ihtiyacım var: ",
  },

  ru: { // Русский

    // Formulaire et écran de bienvenue
    t: "Получайте больше просмотров в WhatsApp",
    sub: "Присоединяйтесь и скачайте файл контактов, когда он будет опубликован. Все видят статусы друг друга.",
    reg: "Присоединиться",
    sin: "Войти",
    nm: "Ваше имя",
    ph: "Номер WhatsApp",
    con: "Я прочитал(а) и принимаю Политику конфиденциальности и правила использования.",
    hint: "Для скачивания VCF-файла вы будете использовать это же имя и номер.",
    goR: "Присоединиться",
    goS: "Войти",
    hi: "Добро пожаловать, {n}!",
    nt: "Запомните данные для входа",
    nt2: "Используйте это же имя и номер телефона каждый раз, когда захотите скачать VCF-файл.",

    // Barre de progression, téléchargement, invitation
    pm: "VCF-файл будет опубликован, когда мы наберём {g} контактов.",
    po: "🎉 Цель достигнута! VCF-файл готов.",
    lk: "Заблокировано до {g} контактов — осталось {r}. Пригласите друзей!",
    dl: "Скачать VCF-файл",
    how: "Откройте скачанный файл, чтобы импортировать контакты в телефон.",
    out: "Выйти",
    sh: "Пригласить друзей в WhatsApp",
    shT: "Присоединяйся и получай больше просмотров в WhatsApp! {u}",

    // Messages d'erreur
    eNm: "Введите ваше имя.",
    ePh: "Введите корректный номер телефона.",
    ePc: "Проверьте страну и номер.",
    eCk: "Примите условия, чтобы продолжить.",
    eNf: "Имя и номер не соответствуют ни одному аккаунту.",
    eEx: "Этот номер уже зарегистрирован. Войдите с тем именем, которое вы указали.",
    eNet: "Ошибка соединения. Попробуйте снова.",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "Ваш номер телефона никогда не отображается на этом сайте, не продаётся и обрабатывается в соответствии с нашей Политикой конфиденциальности. Он передаётся только вместе с вашим именем в VCF-файле зарегистрированным участникам.",
    cl: "Читать Политику конфиденциальности",
    clt: "Политика конфиденциальности и правила",
    ok: "Принимаю",
    cp: [
      "Ответственный: владелец сайта (контакты ниже). Вам должно быть 18 лет или больше, и вы должны использовать свой собственный номер WhatsApp.",
      "Мы собираем только ваше имя и номер WhatsApp. Больше ничего.",
      "Ваше имя (с префиксом S.S.O) и номер включаются в VCF-файл контактов. Этот файл выдаётся только зарегистрированным участникам, когда цель достигнута или администратор его опубликует. Ваш номер никогда не показывается на сайте.",
      "Мы не продаём и не сдаём в аренду ваши данные и не используем их ни для чего другого. Они хранятся, пока существует проект. У участников, скачавших файл, ваше имя и номер будут в телефоне.",
      "Вы можете в любой момент попросить исправить или удалить ваши данные через контакты ниже. Мы удалим вас из списка; уже скачанный файл отозвать нельзя.",
      "Правила: никакого спама, преследования, мошенничества или незаконного контента в отношении других участников. Аккаунты, нарушающие правила, могут быть удалены.",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "НУЖНА ПОМОЩЬ? НАПИШИТЕ МНЕ СЕЙЧАС!",
    asb: "Быстрый ответ в WhatsApp или по e-mail.",
    ad: [
      "НУЖЕН КОМПЬЮТЕР?",
      "НУЖЕН ТЕЛЕФОН?",
      "НУЖЕН АВТОМОБИЛЬ?",
      "НУЖНО ОТРЕМОНТИРОВАТЬ УСТРОЙСТВО?",
      "НУЖЕН IT-ИНСТРУМЕНТ?",
      "НУЖЕН ЭКСПЕРТ ПО ИНФОРМАЦИОННОЙ БЕЗОПАСНОСТИ?",
      "НУЖЕН САЙТ ИЛИ ПРИЛОЖЕНИЕ?",
      "НУЖНО ВОССТАНОВИТЬ ПОТЕРЯННЫЕ ДАННЫЕ?",
      "НУЖНЫ АКСЕССУАРЫ (МОНИТОР, ПРИНТЕР, ЗАРЯДКА)?",
      "НУЖЕН WI-FI ИЛИ КАМЕРЫ НАБЛЮДЕНИЯ?",
    ],
    aw: "💬 Напишите мне в WhatsApp",
    ae: "✉️ Отправьте мне e-mail",
    aq: "Здравствуйте, я увидел(а) ваше объявление на сайте контактов, мне нужна помощь с: ",
  },

  hi: { // हिन्दी

    // Formulaire et écran de bienvenue
    t: "WhatsApp पर ज़्यादा व्यूज़ पाएँ",
    sub: "जुड़ें और कॉन्टैक्ट फ़ाइल जारी होते ही डाउनलोड करें। सभी एक-दूसरे के स्टेटस देखते हैं।",
    reg: "जुड़ें",
    sin: "लॉग इन",
    nm: "आपका नाम",
    ph: "WhatsApp नंबर",
    con: "मैंने गोपनीयता खंड और उपयोग के नियम पढ़ लिए हैं और स्वीकार करता/करती हूँ।",
    hint: "VCF फ़ाइल डाउनलोड करने के लिए आप यही नाम और नंबर इस्तेमाल करेंगे।",
    goR: "अभी जुड़ें",
    goS: "लॉग इन",
    hi: "स्वागत है, {n}!",
    nt: "अपनी लॉगिन जानकारी याद रखें",
    nt2: "VCF फ़ाइल डाउनलोड करने के लिए हर बार यही नाम और फ़ोन नंबर इस्तेमाल करें।",

    // Barre de progression, téléchargement, invitation
    pm: "{g} कॉन्टैक्ट पूरे होते ही VCF फ़ाइल साझा की जाएगी।",
    po: "🎉 लक्ष्य पूरा हुआ! VCF फ़ाइल तैयार है।",
    lk: "{g} कॉन्टैक्ट तक लॉक है — {r} और चाहिए। अपने दोस्तों को बुलाएँ!",
    dl: "VCF फ़ाइल डाउनलोड करें",
    how: "कॉन्टैक्ट अपने फ़ोन में इंपोर्ट करने के लिए डाउनलोड की गई फ़ाइल खोलें।",
    out: "लॉग आउट",
    sh: "WhatsApp पर दोस्तों को बुलाएँ",
    shT: "मेरे साथ जुड़ें और WhatsApp पर ज़्यादा व्यूज़ पाएँ! {u}",

    // Messages d'erreur
    eNm: "कृपया अपना नाम दर्ज करें।",
    ePh: "कृपया सही फ़ोन नंबर दर्ज करें।",
    ePc: "देश और नंबर जाँचें।",
    eCk: "आगे बढ़ने के लिए सहमति दें।",
    eNf: "नाम और नंबर किसी खाते से मेल नहीं खाते।",
    eEx: "यह नंबर पहले से पंजीकृत है। इस्तेमाल किए गए नाम से लॉग इन करें।",
    eNet: "कनेक्शन में समस्या। फिर से कोशिश करें।",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "आपका फ़ोन नंबर इस साइट पर कभी नहीं दिखाया जाता, कभी बेचा नहीं जाता, और हमारे गोपनीयता खंड के अनुसार संभाला जाता है। इसे केवल आपके नाम के साथ, पंजीकृत सदस्यों को दी जाने वाली VCF फ़ाइल में साझा किया जाता है।",
    cl: "गोपनीयता खंड पढ़ें",
    clt: "गोपनीयता खंड और उपयोग के नियम",
    ok: "मैं स्वीकार करता/करती हूँ",
    cp: [
      "ज़िम्मेदार: साइट का मालिक (संपर्क नीचे)। आपकी उम्र 18 वर्ष या अधिक होनी चाहिए और आपको अपना ही WhatsApp नंबर इस्तेमाल करना होगा।",
      "हम केवल आपका नाम और WhatsApp नंबर लेते हैं। और कुछ नहीं।",
      "आपका नाम (S.S.O उपसर्ग के साथ) और नंबर VCF कॉन्टैक्ट फ़ाइल में शामिल होते हैं। यह फ़ाइल केवल पंजीकृत सदस्यों को दी जाती है, जब लक्ष्य पूरा हो या एडमिन इसे जारी करे। आपका नंबर वेबसाइट पर कभी नहीं दिखता।",
      "हम आपका डेटा न बेचते हैं, न किराये पर देते हैं, और न किसी और काम में लेते हैं। इसे प्रोजेक्ट चलने तक रखा जाता है। फ़ाइल डाउनलोड करने वाले सदस्यों के फ़ोन में आपका नाम और नंबर होगा।",
      "आप कभी भी नीचे दिए संपर्कों से अपना डेटा सुधारने या हटाने को कह सकते हैं। हम आपको सूची से हटा देंगे; पहले से डाउनलोड हो चुकी फ़ाइल वापस नहीं ली जा सकती।",
      "नियम: अन्य सदस्यों के प्रति स्पैम, उत्पीड़न, धोखाधड़ी या अवैध सामग्री नहीं। नियम तोड़ने वाले खाते हटाए जा सकते हैं।",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "मदद चाहिए? अभी मुझे लिखें!",
    asb: "WhatsApp या ईमेल पर तुरंत जवाब।",
    ad: [
      "क्या आपको PC चाहिए?",
      "क्या आपको फ़ोन चाहिए?",
      "क्या आपको कार चाहिए?",
      "क्या कोई डिवाइस ठीक करवाना है?",
      "क्या आपको कोई IT टूल चाहिए?",
      "क्या आपको साइबर सुरक्षा विशेषज्ञ चाहिए?",
      "क्या आपको वेबसाइट या ऐप चाहिए?",
      "क्या खोया डेटा वापस पाना है?",
      "क्या आपको एक्सेसरीज़ चाहिए (स्क्रीन, प्रिंटर, चार्जर)?",
      "क्या आपको वाई-फ़ाई या सुरक्षा कैमरे चाहिए?",
    ],
    aw: "💬 WhatsApp पर मुझे लिखें",
    ae: "✉️ मुझे ईमेल भेजें",
    aq: "नमस्ते, मैंने कॉन्टैक्ट साइट पर आपका विज्ञापन देखा और मुझे इसमें मदद चाहिए: ",
  },

  zh: { // 中文

    // Formulaire et écran de bienvenue
    t: "获得更多 WhatsApp 浏览量",
    sub: "加入后，联系人文件发布时即可下载并保存到手机。大家都能看到彼此的动态。",
    reg: "加入",
    sin: "登录",
    nm: "你的姓名",
    ph: "WhatsApp 号码",
    con: "我已阅读并接受隐私条款和使用规则。",
    hint: "你将使用相同的姓名和号码来下载 VCF 文件。",
    goR: "立即加入",
    goS: "登录",
    hi: "欢迎，{n}！",
    nt: "请记住你的登录信息",
    nt2: "每次下载 VCF 文件时，请使用相同的姓名和手机号码。",

    // Barre de progression, téléchargement, invitation
    pm: "达到 {g} 个联系人后将分享 VCF 文件。",
    po: "🎉 目标达成！VCF 文件已就绪。",
    lk: "在达到 {g} 个联系人前已锁定——还差 {r} 个。邀请你的朋友吧！",
    dl: "下载 VCF 文件",
    how: "打开下载的文件，把联系人导入手机。",
    out: "退出登录",
    sh: "通过 WhatsApp 邀请朋友",
    shT: "和我一起加入，获得更多 WhatsApp 浏览量！{u}",

    // Messages d'erreur
    eNm: "请输入你的姓名。",
    ePh: "请输入有效的手机号码。",
    ePc: "请检查国家和号码。",
    eCk: "请先同意后继续。",
    eNf: "姓名和号码与任何账号都不匹配。",
    eEx: "该号码已注册。请使用你注册时的姓名登录。",
    eNet: "连接出错，请重试。",

    // Clause de confidentialité (pv = message d'accueil, cp = les 6 points de la clause)
    pv: "你的手机号码绝不会在本网站显示，绝不出售，并按照我们的隐私条款处理。它只会连同你的姓名一起，放入提供给已注册成员的 VCF 文件中。",
    cl: "阅读隐私条款",
    clt: "隐私条款与使用规则",
    ok: "我接受",
    cp: [
      "负责人：网站所有者（联系方式见下）。你必须年满 18 岁，并使用你自己的 WhatsApp 号码。",
      "我们只收集你的姓名和 WhatsApp 号码，别无其他。",
      "你的姓名（带前缀 S.S.O）和号码会被写入 VCF 联系人文件。该文件仅在目标达成或管理员发布后提供给已注册成员。你的号码绝不会显示在网站上。",
      "我们不会出售或出租你的数据，也不会用于其他用途。数据仅在项目存续期间保留。下载文件的成员手机里会有你的姓名和号码。",
      "你可以随时通过下方联系方式要求更正或删除你的数据。我们会把你从名单中移除；已经下载的文件无法收回。",
      "规则：不得对其他成员发送垃圾信息、骚扰、诈骗或非法内容。违反规则的账号可能被删除。",
    ],

    // Publicité (ad = les 10 « BESOIN DE… ? », même ordre que les emojis AE ; aq = message WhatsApp pré-rempli)
    ah: "需要帮助？现在就联系我！",
    asb: "通过 WhatsApp 或邮件快速回复。",
    ad: [
      "需要电脑吗？",
      "需要手机吗？",
      "需要汽车吗？",
      "需要维修设备吗？",
      "需要 IT 工具吗？",
      "需要信息安全专家吗？",
      "需要网站或应用吗？",
      "需要找回丢失的数据吗？",
      "需要配件吗（显示器、打印机、充电器）？",
      "需要 Wi-Fi 或监控摄像头吗？",
    ],
    aw: "💬 在 WhatsApp 上联系我",
    ae: "✉️ 给我发邮件",
    aq: "你好，我在联系人网站上看到你的广告，需要以下方面的帮助：",
  },
};
