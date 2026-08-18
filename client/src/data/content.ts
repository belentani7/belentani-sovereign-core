// Dirección BELENTANI: Archivo Soberano. Datos editoriales separados de la presentación; el rojo umbral se reserva para estados y señales.

export type Locale = "es" | "pt" | "en" | "ca" | "fr" | "it" | "zh" | "hi" | "th" | "fi";

export type EditorialState = "visible" | "partial" | "sealed" | "pending";

export type LocalizedCopy = {
  eyebrow: string;
  title: string;
  summary: string;
  action: string;
};

export type LocaleCopy = {
  languageName: string;
  shortName: string;
  nav: {
    home: string;
    artist: string;
    archive: string;
    work: string;
    studio: string;
    portal: string;
    rights: string;
  };
  shell: {
    menu: string;
    close: string;
    motion: string;
    sound: string;
    soundValue: string;
    quality: string;
    qualityValue: string;
    language: string;
    enter: string;
    return: string;
  };
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    action: string;
    secondaryAction: string;
    coordinate: string;
    archiveLabel: string;
    archiveCopy: string;
    workLabel: string;
    workCopy: string;
    portalLabel: string;
    portalCopy: string;
    sealLabel: string;
    sealCopy: string;
  };
  pages: {
    artist: LocalizedCopy;
    archive: LocalizedCopy;
    work: LocalizedCopy;
    studio: LocalizedCopy;
    portal: LocalizedCopy;
    rights: LocalizedCopy;
  };
  common: {
    visible: string;
    partial: string;
    sealed: string;
    pending: string;
    open: string;
    read: string;
    continue: string;
    noAudio: string;
    noDownload: string;
    pendingDetail: string;
    languageNote: string;
  };
};

export const localeOrder: Locale[] = ["es", "pt", "en", "ca", "fr", "it", "zh", "hi", "th", "fi"];

export const locales: Record<Locale, LocaleCopy> = {
  es: {
    languageName: "Español",
    shortName: "ES",
    nav: { home: "Inicio", artist: "The Artist", archive: "Archivo", work: "Obra", studio: "Studio", portal: "Portal", rights: "Derechos" },
    shell: { menu: "Abrir navegación", close: "Cerrar navegación", motion: "Movimiento", sound: "Sonido", soundValue: "Sellado", quality: "Calidad", qualityValue: "Alta", language: "Idioma", enter: "Entrar", return: "Volver al umbral" },
    home: { eyebrow: "BELENTANI / UNIVERSO SOBERANO", title: "No entras a una web.\nAtraviesas un umbral.", intro: "Una entidad artística en expansión. Archivo, proceso y obra conviven en un sistema vivo; lo que debe permanecer sellado, permanece sellado.", action: "Abrir el archivo visible", secondaryAction: "Entrar en silencio", coordinate: "COORD. 01 / PRESENCIA", archiveLabel: "Archivo", archiveCopy: "Rastros, imágenes y registros autorizados.", workLabel: "Obra", workCopy: "Una pieza central permanece sellada.", portalLabel: "Portal", portalCopy: "Elige cómo continuar y en qué idioma.", sealLabel: "JUDAS / SEALED", sealCopy: "Sin audio. Sin letra. Sin descarga. Sin URL pública del master." },
    pages: { artist: { eyebrow: "IDENTIDAD / THE ARTIST", title: "La presencia\ndetrás del umbral.", summary: "Pedro aparece aquí de forma deliberadamente contenida. La información biográfica verificable se incorporará solo cuando el autor la confirme.", action: "Ver el archivo del artista" }, archive: { eyebrow: "ARCHIVO / VISIBLE", title: "Lo que queda\ncuando la escena calla.", summary: "Una sala de imágenes y registros disponibles. El archivo no explica la obra: conserva sus señales.", action: "Recorrer el archivo" }, work: { eyebrow: "OBRA / JUDAS", title: "Una obra no se abre\nporque pueda abrirse.", summary: "JUDAS permanece sellado en esta versión. La experiencia protege el límite: no audio, no letra, no waveform, no descarga y no URL pública del master.", action: "Volver al portal" }, studio: { eyebrow: "PROCESO / STUDIO", title: "La obra también existe\nen sus decisiones.", summary: "Este espacio queda preparado para notas de proceso, materiales y método cuando el autor los haga verificables.", action: "Ver el archivo visible" }, portal: { eyebrow: "ACCESO / PORTAL", title: "Elige una puerta.\nNo todas llevan al mismo lugar.", summary: "El portal sostiene el ritmo de entrada: idioma, calidad y movimiento quedan bajo el control de quien mira.", action: "Abrir el archivo" }, rights: { eyebrow: "ACCESO / DERECHOS", title: "La obra necesita\nun borde claro.", summary: "La página de derechos queda preparada para contacto, permisos y condiciones cuando el autor comparta la información correspondiente.", action: "Volver al portal" } },
    common: { visible: "Visible", partial: "Parcial", sealed: "Sellado", pending: "Pendiente", open: "Abrir", read: "Leer", continue: "Continuar", noAudio: "Sin audio", noDownload: "Sin descarga", pendingDetail: "Contenido pendiente de verificación del autor.", languageNote: "Las traducciones de interfaz son funcionales; el texto de la obra se incorporará tras revisión autoral." },
  },
  pt: {
    languageName: "Português", shortName: "PT", nav: { home: "Início", artist: "The Artist", archive: "Arquivo", work: "Obra", studio: "Studio", portal: "Portal", rights: "Direitos" },
    shell: { menu: "Abrir navegação", close: "Fechar navegação", motion: "Movimento", sound: "Som", soundValue: "Selado", quality: "Qualidade", qualityValue: "Alta", language: "Idioma", enter: "Entrar", return: "Voltar ao limiar" },
    home: { eyebrow: "BELENTANI / UNIVERSO SOBERANO", title: "Você não entra em um site.\nVocê atravessa um limiar.", intro: "Uma entidade artística em expansão. Arquivo, processo e obra convivem em um sistema vivo; o que precisa permanecer selado permanece selado.", action: "Abrir o arquivo visível", secondaryAction: "Entrar em silêncio", coordinate: "COORD. 01 / PRESENÇA", archiveLabel: "Arquivo", archiveCopy: "Vestígios, imagens e registros autorizados.", workLabel: "Obra", workCopy: "Uma peça central permanece selada.", portalLabel: "Portal", portalCopy: "Escolha como continuar e em qual idioma.", sealLabel: "JUDAS / SEALED", sealCopy: "Sem áudio. Sem letra. Sem download. Sem URL pública do master." },
    pages: { artist: { eyebrow: "IDENTIDADE / THE ARTIST", title: "A presença\npor trás do limiar.", summary: "Pedro aparece aqui de forma deliberadamente contida. A informação biográfica verificável será incorporada somente quando o autor a confirmar.", action: "Ver o arquivo do artista" }, archive: { eyebrow: "ARQUIVO / VISÍVEL", title: "O que permanece\nquando a cena silencia.", summary: "Uma sala de imagens e registros disponíveis. O arquivo não explica a obra: conserva seus sinais.", action: "Percorrer o arquivo" }, work: { eyebrow: "OBRA / JUDAS", title: "Uma obra não se abre\nporque pode ser aberta.", summary: "JUDAS permanece selada nesta versão. A experiência protege o limite: sem áudio, letra, waveform, download ou URL pública do master.", action: "Voltar ao portal" }, studio: { eyebrow: "PROCESSO / STUDIO", title: "A obra também existe\nem suas decisões.", summary: "Este espaço está pronto para notas de processo, materiais e método quando o autor os tornar verificáveis.", action: "Ver o arquivo visível" }, portal: { eyebrow: "ACESSO / PORTAL", title: "Escolha uma porta.\nNem todas levam ao mesmo lugar.", summary: "O portal sustenta o ritmo de entrada: idioma, qualidade e movimento ficam sob controle de quem observa.", action: "Abrir o arquivo" }, rights: { eyebrow: "ACESSO / DIREITOS", title: "A obra precisa\nde uma borda clara.", summary: "A página de direitos está preparada para contato, permissões e condições quando o autor compartilhar as informações correspondentes.", action: "Voltar ao portal" } },
    common: { visible: "Visível", partial: "Parcial", sealed: "Selado", pending: "Pendente", open: "Abrir", read: "Ler", continue: "Continuar", noAudio: "Sem áudio", noDownload: "Sem download", pendingDetail: "Conteúdo pendente de verificação do autor.", languageNote: "As traduções de interface são funcionais; o texto da obra será incorporado após revisão autoral." },
  },
  en: {
    languageName: "English", shortName: "EN", nav: { home: "Home", artist: "The Artist", archive: "Archive", work: "Work", studio: "Studio", portal: "Portal", rights: "Rights" },
    shell: { menu: "Open navigation", close: "Close navigation", motion: "Motion", sound: "Sound", soundValue: "Sealed", quality: "Quality", qualityValue: "High", language: "Language", enter: "Enter", return: "Return to threshold" },
    home: { eyebrow: "BELENTANI / SOVEREIGN UNIVERSE", title: "You do not enter a website.\nYou cross a threshold.", intro: "An expanding artistic entity. Archive, process and work share one living system; what must remain sealed, remains sealed.", action: "Open the visible archive", secondaryAction: "Enter in silence", coordinate: "COORD. 01 / PRESENCE", archiveLabel: "Archive", archiveCopy: "Traces, images and authorized records.", workLabel: "Work", workCopy: "A central piece remains sealed.", portalLabel: "Portal", portalCopy: "Choose how to continue and in which language.", sealLabel: "JUDAS / SEALED", sealCopy: "No audio. No lyrics. No download. No public master URL." },
    pages: { artist: { eyebrow: "IDENTITY / THE ARTIST", title: "The presence\nbehind the threshold.", summary: "Pedro appears here with deliberate restraint. Verifiable biographical information will be added only when confirmed by the author.", action: "View the artist archive" }, archive: { eyebrow: "ARCHIVE / VISIBLE", title: "What remains\nwhen the scene is quiet.", summary: "A room for available images and records. The archive does not explain the work; it preserves its signals.", action: "Enter the archive" }, work: { eyebrow: "WORK / JUDAS", title: "A work does not open\njust because it can.", summary: "JUDAS remains sealed in this version. The experience protects the boundary: no audio, lyrics, waveform, download or public master URL.", action: "Return to the portal" }, studio: { eyebrow: "PROCESS / STUDIO", title: "The work also exists\nin its decisions.", summary: "This room is prepared for process notes, materials and method when the author makes them verifiable.", action: "View the visible archive" }, portal: { eyebrow: "ACCESS / PORTAL", title: "Choose a door.\nThey do not all lead to the same place.", summary: "The portal holds the pace of entry: language, quality and motion remain under the viewer's control.", action: "Open the archive" }, rights: { eyebrow: "ACCESS / RIGHTS", title: "The work needs\na clear edge.", summary: "The rights page is prepared for contact, permissions and conditions when the author shares the corresponding information.", action: "Return to the portal" } },
    common: { visible: "Visible", partial: "Partial", sealed: "Sealed", pending: "Pending", open: "Open", read: "Read", continue: "Continue", noAudio: "No audio", noDownload: "No download", pendingDetail: "Content pending author verification.", languageNote: "Interface translations are functional; work text will be added after author review." },
  },
  ca: {
    languageName: "Català", shortName: "CA", nav: { home: "Inici", artist: "The Artist", archive: "Arxiu", work: "Obra", studio: "Studio", portal: "Portal", rights: "Drets" },
    shell: { menu: "Obrir navegació", close: "Tancar navegació", motion: "Moviment", sound: "So", soundValue: "Segellat", quality: "Qualitat", qualityValue: "Alta", language: "Idioma", enter: "Entrar", return: "Tornar al llindar" },
    home: { eyebrow: "BELENTANI / UNIVERS SOBIRÀ", title: "No entres en una web.\nTravesses un llindar.", intro: "Una entitat artística en expansió. Arxiu, procés i obra conviuen en un sistema viu; allò que ha de romandre segellat, roman segellat.", action: "Obrir l’arxiu visible", secondaryAction: "Entrar en silenci", coordinate: "COORD. 01 / PRESÈNCIA", archiveLabel: "Arxiu", archiveCopy: "Rastres, imatges i registres autoritzats.", workLabel: "Obra", workCopy: "Una peça central roman segellada.", portalLabel: "Portal", portalCopy: "Tria com continuar i en quin idioma.", sealLabel: "JUDAS / SEALED", sealCopy: "Sense àudio. Sense lletra. Sense descàrrega. Sense URL pública del master." },
    pages: { artist: { eyebrow: "IDENTITAT / THE ARTIST", title: "La presència\ndarrere del llindar.", summary: "Pedro apareix aquí de manera deliberadament continguda. La informació biogràfica verificable s’hi incorporarà quan l’autor la confirmi.", action: "Veure l’arxiu de l’artista" }, archive: { eyebrow: "ARXIU / VISIBLE", title: "El que queda\nquan l’escena calla.", summary: "Una sala d’imatges i registres disponibles. L’arxiu no explica l’obra: en conserva els senyals.", action: "Recórrer l’arxiu" }, work: { eyebrow: "OBRA / JUDAS", title: "Una obra no s’obre\nperquè es pugui obrir.", summary: "JUDAS roman segellada en aquesta versió. L’experiència protegeix el límit: sense àudio, lletra, waveform, descàrrega ni URL pública del master.", action: "Tornar al portal" }, studio: { eyebrow: "PROCÉS / STUDIO", title: "L’obra també existeix\nen les seves decisions.", summary: "Aquest espai està preparat per a notes de procés, materials i mètode quan l’autor els faci verificables.", action: "Veure l’arxiu visible" }, portal: { eyebrow: "ACCÉS / PORTAL", title: "Tria una porta.\nNo totes porten al mateix lloc.", summary: "El portal sosté el ritme d’entrada: idioma, qualitat i moviment queden sota el control de qui mira.", action: "Obrir l’arxiu" }, rights: { eyebrow: "ACCÉS / DRETS", title: "L’obra necessita\nun límit clar.", summary: "La pàgina de drets està preparada per a contacte, permisos i condicions quan l’autor comparteixi la informació corresponent.", action: "Tornar al portal" } },
    common: { visible: "Visible", partial: "Parcial", sealed: "Segellat", pending: "Pendent", open: "Obrir", read: "Llegir", continue: "Continuar", noAudio: "Sense àudio", noDownload: "Sense descàrrega", pendingDetail: "Contingut pendent de verificació de l’autor.", languageNote: "Les traduccions de la interfície són funcionals; el text de l’obra s’incorporarà després de la revisió de l’autor." },
  },
  fr: {
    languageName: "Français", shortName: "FR", nav: { home: "Accueil", artist: "The Artist", archive: "Archive", work: "Œuvre", studio: "Studio", portal: "Portail", rights: "Droits" },
    shell: { menu: "Ouvrir la navigation", close: "Fermer la navigation", motion: "Mouvement", sound: "Son", soundValue: "Scellé", quality: "Qualité", qualityValue: "Haute", language: "Langue", enter: "Entrer", return: "Retour au seuil" },
    home: { eyebrow: "BELENTANI / UNIVERS SOUVERAIN", title: "Vous n’entrez pas sur un site.\nVous franchissez un seuil.", intro: "Une entité artistique en expansion. Archive, processus et œuvre cohabitent dans un système vivant ; ce qui doit rester scellé le reste.", action: "Ouvrir l’archive visible", secondaryAction: "Entrer en silence", coordinate: "COORD. 01 / PRÉSENCE", archiveLabel: "Archive", archiveCopy: "Traces, images et documents autorisés.", workLabel: "Œuvre", workCopy: "Une pièce centrale reste scellée.", portalLabel: "Portail", portalCopy: "Choisissez comment continuer et dans quelle langue.", sealLabel: "JUDAS / SEALED", sealCopy: "Pas d’audio. Pas de paroles. Pas de téléchargement. Pas d’URL publique du master." },
    pages: { artist: { eyebrow: "IDENTITÉ / THE ARTIST", title: "La présence\nderrière le seuil.", summary: "Pedro apparaît ici avec une retenue volontaire. Les informations biographiques vérifiables seront ajoutées uniquement après confirmation de l’auteur.", action: "Voir l’archive de l’artiste" }, archive: { eyebrow: "ARCHIVE / VISIBLE", title: "Ce qui reste\nquand la scène se tait.", summary: "Une salle pour les images et documents disponibles. L’archive n’explique pas l’œuvre : elle en conserve les signaux.", action: "Parcourir l’archive" }, work: { eyebrow: "ŒUVRE / JUDAS", title: "Une œuvre ne s’ouvre pas\nparce qu’elle le peut.", summary: "JUDAS reste scellée dans cette version. L’expérience protège la limite : pas d’audio, de paroles, de waveform, de téléchargement ou d’URL publique du master.", action: "Retour au portail" }, studio: { eyebrow: "PROCESSUS / STUDIO", title: "L’œuvre existe aussi\ndans ses décisions.", summary: "Cet espace est prêt pour les notes de processus, matériaux et méthode lorsque l’auteur les rendra vérifiables.", action: "Voir l’archive visible" }, portal: { eyebrow: "ACCÈS / PORTAIL", title: "Choisissez une porte.\nElles ne mènent pas toutes au même endroit.", summary: "Le portail règle le rythme d’entrée : langue, qualité et mouvement restent sous le contrôle du visiteur.", action: "Ouvrir l’archive" }, rights: { eyebrow: "ACCÈS / DROITS", title: "L’œuvre a besoin\nd’une limite claire.", summary: "La page des droits est prête pour le contact, les autorisations et les conditions lorsque l’auteur partagera les informations correspondantes.", action: "Retour au portail" } },
    common: { visible: "Visible", partial: "Partiel", sealed: "Scellé", pending: "En attente", open: "Ouvrir", read: "Lire", continue: "Continuer", noAudio: "Sans audio", noDownload: "Sans téléchargement", pendingDetail: "Contenu en attente de vérification par l’auteur.", languageNote: "Les traductions de l’interface sont fonctionnelles ; le texte de l’œuvre sera ajouté après révision de l’auteur." },
  },
  it: {
    languageName: "Italiano", shortName: "IT", nav: { home: "Home", artist: "The Artist", archive: "Archivio", work: "Opera", studio: "Studio", portal: "Portale", rights: "Diritti" },
    shell: { menu: "Apri navigazione", close: "Chiudi navigazione", motion: "Movimento", sound: "Suono", soundValue: "Sigillato", quality: "Qualità", qualityValue: "Alta", language: "Lingua", enter: "Entra", return: "Torna alla soglia" },
    home: { eyebrow: "BELENTANI / UNIVERSO SOVRANO", title: "Non entri in un sito.\nAttraversi una soglia.", intro: "Un’entità artistica in espansione. Archivio, processo e opera convivono in un sistema vivo; ciò che deve restare sigillato, resta sigillato.", action: "Apri l’archivio visibile", secondaryAction: "Entra nel silenzio", coordinate: "COORD. 01 / PRESENZA", archiveLabel: "Archivio", archiveCopy: "Tracce, immagini e registri autorizzati.", workLabel: "Opera", workCopy: "Un’opera centrale resta sigillata.", portalLabel: "Portale", portalCopy: "Scegli come continuare e in quale lingua.", sealLabel: "JUDAS / SEALED", sealCopy: "Niente audio. Niente testo. Niente download. Nessun URL pubblico del master." },
    pages: { artist: { eyebrow: "IDENTITÀ / THE ARTIST", title: "La presenza\ndietro la soglia.", summary: "Pedro appare qui con deliberata discrezione. Le informazioni biografiche verificabili verranno aggiunte solo dopo la conferma dell’autore.", action: "Vedi l’archivio dell’artista" }, archive: { eyebrow: "ARCHIVIO / VISIBILE", title: "Ciò che resta\nquando la scena tace.", summary: "Una sala per immagini e registri disponibili. L’archivio non spiega l’opera: ne conserva i segnali.", action: "Percorri l’archivio" }, work: { eyebrow: "OPERA / JUDAS", title: "Un’opera non si apre\nsolo perché può farlo.", summary: "JUDAS resta sigillata in questa versione. L’esperienza protegge il limite: niente audio, testo, waveform, download o URL pubblico del master.", action: "Torna al portale" }, studio: { eyebrow: "PROCESSO / STUDIO", title: "L’opera esiste anche\nnelle sue decisioni.", summary: "Questo spazio è pronto per note di processo, materiali e metodo quando l’autore li renderà verificabili.", action: "Vedi l’archivio visibile" }, portal: { eyebrow: "ACCESSO / PORTALE", title: "Scegli una porta.\nNon tutte conducono nello stesso luogo.", summary: "Il portale regola il ritmo d’ingresso: lingua, qualità e movimento restano sotto il controllo di chi guarda.", action: "Apri l’archivio" }, rights: { eyebrow: "ACCESSO / DIRITTI", title: "L’opera ha bisogno\ndi un confine chiaro.", summary: "La pagina dei diritti è pronta per contatti, permessi e condizioni quando l’autore condividerà le informazioni necessarie.", action: "Torna al portale" } },
    common: { visible: "Visibile", partial: "Parziale", sealed: "Sigillato", pending: "In attesa", open: "Apri", read: "Leggi", continue: "Continua", noAudio: "Senza audio", noDownload: "Senza download", pendingDetail: "Contenuto in attesa di verifica dell’autore.", languageNote: "Le traduzioni dell’interfaccia sono funzionali; il testo dell’opera verrà aggiunto dopo la revisione dell’autore." },
  },
  zh: {
    languageName: "中文", shortName: "中", nav: { home: "首页", artist: "艺术家", archive: "档案", work: "作品", studio: "工作室", portal: "入口", rights: "权利" },
    shell: { menu: "打开导航", close: "关闭导航", motion: "动效", sound: "声音", soundValue: "已封存", quality: "质量", qualityValue: "高", language: "语言", enter: "进入", return: "返回入口" },
    home: { eyebrow: "BELENTANI / 主权宇宙", title: "你不是进入一个网站。\n你正在穿越一道门槛。", intro: "一个持续扩展的艺术实体。档案、过程与作品共存于一个有生命的系统中；必须封存的内容，将保持封存。", action: "打开可见档案", secondaryAction: "在静默中进入", coordinate: "坐标 01 / 存在", archiveLabel: "档案", archiveCopy: "经过授权的痕迹、图像与记录。", workLabel: "作品", workCopy: "核心作品保持封存。", portalLabel: "入口", portalCopy: "选择继续的方式与语言。", sealLabel: "JUDAS / SEALED", sealCopy: "无音频。无歌词。无下载。无公开 master 链接。" },
    pages: { artist: { eyebrow: "身份 / THE ARTIST", title: "门槛背后的\n存在。", summary: "Pedro 只在此处以克制的方式出现。可验证的传记信息将在作者确认后加入。", action: "查看艺术家档案" }, archive: { eyebrow: "档案 / 可见", title: "当场景沉默时，\n留下的东西。", summary: "一个用于保存可用图像与记录的房间。档案不解释作品，只保存它的信号。", action: "进入档案" }, work: { eyebrow: "作品 / JUDAS", title: "作品不会因为\n能够打开就被打开。", summary: "在此版本中，JUDAS 保持封存。没有音频、歌词、波形、下载或公开 master 链接。", action: "返回入口" }, studio: { eyebrow: "过程 / STUDIO", title: "作品也存在于\n它的决定之中。", summary: "此空间已为过程笔记、材料与方法预留，等待作者提供可验证内容。", action: "查看可见档案" }, portal: { eyebrow: "访问 / 入口", title: "选择一扇门。\n它们并不通向同一个地方。", summary: "入口控制进入的节奏：语言、质量与动效由观看者决定。", action: "打开档案" }, rights: { eyebrow: "访问 / 权利", title: "作品需要\n清晰的边界。", summary: "权利页面已为联系、许可与条件预留，等待作者提供相应信息。", action: "返回入口" } },
    common: { visible: "可见", partial: "部分", sealed: "封存", pending: "待定", open: "打开", read: "阅读", continue: "继续", noAudio: "无声音", noDownload: "无下载", pendingDetail: "内容等待作者验证。", languageNote: "界面翻译为功能性翻译；作品文本将在作者审核后加入。" },
  },
  hi: {
    languageName: "हिन्दी", shortName: "हि", nav: { home: "आरंभ", artist: "कलाकार", archive: "अभिलेख", work: "कृति", studio: "स्टूडियो", portal: "द्वार", rights: "अधिकार" },
    shell: { menu: "नेविगेशन खोलें", close: "नेविगेशन बंद करें", motion: "गति", sound: "ध्वनि", soundValue: "सीलबंद", quality: "गुणवत्ता", qualityValue: "उच्च", language: "भाषा", enter: "प्रवेश", return: "दहलीज़ पर लौटें" },
    home: { eyebrow: "BELENTANI / सार्वभौम ब्रह्मांड", title: "आप किसी वेबसाइट में प्रवेश नहीं करते।\nआप एक दहलीज़ पार करते हैं।", intro: "विस्तार लेती हुई एक कलात्मक सत्ता। अभिलेख, प्रक्रिया और कृति एक जीवित प्रणाली में साथ हैं; जिसे सीलबंद रहना है, वह सीलबंद रहेगा।", action: "दृश्य अभिलेख खोलें", secondaryAction: "मौन में प्रवेश करें", coordinate: "समन्वय 01 / उपस्थिति", archiveLabel: "अभिलेख", archiveCopy: "अधिकृत निशान, छवियाँ और रिकॉर्ड।", workLabel: "कृति", workCopy: "एक केंद्रीय कृति सीलबंद है।", portalLabel: "द्वार", portalCopy: "भाषा और आगे बढ़ने का तरीका चुनें।", sealLabel: "JUDAS / SEALED", sealCopy: "कोई ऑडियो नहीं। कोई गीत नहीं। कोई डाउनलोड नहीं। कोई सार्वजनिक master URL नहीं।" },
    pages: { artist: { eyebrow: "पहचान / THE ARTIST", title: "दहलीज़ के पीछे\nउपस्थिति।", summary: "Pedro यहाँ जानबूझकर संयमित रूप में दिखाई देते हैं। सत्यापित जीवनी संबंधी जानकारी लेखक की पुष्टि के बाद ही जोड़ी जाएगी।", action: "कलाकार का अभिलेख देखें" }, archive: { eyebrow: "अभिलेख / दृश्य", title: "दृश्य के शांत होने पर\nजो बचता है।", summary: "उपलब्ध छवियों और रिकॉर्ड के लिए एक कक्ष। अभिलेख कृति को समझाता नहीं; उसके संकेतों को सुरक्षित रखता है।", action: "अभिलेख में जाएँ" }, work: { eyebrow: "कृति / JUDAS", title: "कृति इसलिए नहीं खुलती\nकि वह खुल सकती है।", summary: "इस संस्करण में JUDAS सीलबंद है। कोई ऑडियो, गीत, waveform, डाउनलोड या सार्वजनिक master URL नहीं है।", action: "द्वार पर लौटें" }, studio: { eyebrow: "प्रक्रिया / STUDIO", title: "कृति अपने\nनिर्णयों में भी है।", summary: "लेखक द्वारा सत्यापित सामग्री उपलब्ध होने पर प्रक्रिया, सामग्री और विधि के लिए यह कक्ष तैयार है।", action: "दृश्य अभिलेख देखें" }, portal: { eyebrow: "प्रवेश / द्वार", title: "एक द्वार चुनें।\nसभी एक ही जगह नहीं ले जाते।", summary: "द्वार प्रवेश की गति रखता है: भाषा, गुणवत्ता और गति दर्शक के नियंत्रण में हैं।", action: "अभिलेख खोलें" }, rights: { eyebrow: "प्रवेश / अधिकार", title: "कृति को\nएक स्पष्ट सीमा चाहिए।", summary: "लेखक द्वारा जानकारी साझा किए जाने पर संपर्क, अनुमति और शर्तों के लिए अधिकार पृष्ठ तैयार है।", action: "द्वार पर लौटें" } },
    common: { visible: "दृश्य", partial: "आंशिक", sealed: "सीलबंद", pending: "लंबित", open: "खोलें", read: "पढ़ें", continue: "जारी रखें", noAudio: "कोई ध्वनि नहीं", noDownload: "कोई डाउनलोड नहीं", pendingDetail: "सामग्री लेखक के सत्यापन की प्रतीक्षा में है।", languageNote: "इंटरफ़ेस अनुवाद कार्यात्मक हैं; कृति का पाठ लेखक की समीक्षा के बाद जोड़ा जाएगा।" },
  },
  th: {
    languageName: "ไทย", shortName: "TH", nav: { home: "หน้าแรก", artist: "ศิลปิน", archive: "คลัง", work: "ผลงาน", studio: "สตูดิโอ", portal: "ทางเข้า", rights: "สิทธิ์" },
    shell: { menu: "เปิดเมนูนำทาง", close: "ปิดเมนูนำทาง", motion: "การเคลื่อนไหว", sound: "เสียง", soundValue: "ปิดผนึก", quality: "คุณภาพ", qualityValue: "สูง", language: "ภาษา", enter: "เข้าสู่", return: "กลับสู่ธรณีประตู" },
    home: { eyebrow: "BELENTANI / จักรวาลอธิปไตย", title: "คุณไม่ได้เข้าสู่เว็บไซต์\nคุณกำลังข้ามธรณีประตู", intro: "ตัวตนทางศิลปะที่กำลังขยายตัว คลัง กระบวนการ และผลงานอยู่ร่วมกันในระบบที่มีชีวิต สิ่งที่ต้องปิดผนึกจะยังคงปิดผนึก", action: "เปิดคลังที่มองเห็นได้", secondaryAction: "เข้าสู่ความเงียบ", coordinate: "พิกัด 01 / การมีอยู่", archiveLabel: "คลัง", archiveCopy: "ร่องรอย ภาพ และบันทึกที่ได้รับอนุญาต", workLabel: "ผลงาน", workCopy: "ผลงานแกนกลางยังคงปิดผนึก", portalLabel: "ทางเข้า", portalCopy: "เลือกวิธีดำเนินต่อและภาษา", sealLabel: "JUDAS / SEALED", sealCopy: "ไม่มีเสียง ไม่มีเนื้อร้อง ไม่มีการดาวน์โหลด และไม่มี master URL สาธารณะ" },
    pages: { artist: { eyebrow: "ตัวตน / THE ARTIST", title: "การมีอยู่\nหลังธรณีประตู", summary: "Pedro ปรากฏที่นี่อย่างตั้งใจและจำกัด ข้อมูลชีวประวัติที่ตรวจสอบได้จะเพิ่มเมื่อผู้สร้างยืนยันเท่านั้น", action: "ดูคลังของศิลปิน" }, archive: { eyebrow: "คลัง / มองเห็นได้", title: "สิ่งที่ยังคงอยู่\nเมื่อฉากเงียบลง", summary: "ห้องสำหรับภาพและบันทึกที่มีอยู่ คลังไม่ได้อธิบายผลงาน แต่เก็บรักษาสัญญาณของมัน", action: "เข้าสู่คลัง" }, work: { eyebrow: "ผลงาน / JUDAS", title: "ผลงานไม่ได้เปิด\nเพียงเพราะเปิดได้", summary: "JUDAS ยังคงปิดผนึกในเวอร์ชันนี้ ไม่มีเสียง เนื้อร้อง waveform การดาวน์โหลด หรือ master URL สาธารณะ", action: "กลับสู่ทางเข้า" }, studio: { eyebrow: "กระบวนการ / STUDIO", title: "ผลงานยังอยู่ใน\nการตัดสินใจของมัน", summary: "พื้นที่นี้เตรียมไว้สำหรับบันทึกกระบวนการ วัสดุ และวิธีการ เมื่อผู้สร้างทำให้ตรวจสอบได้", action: "ดูคลังที่มองเห็นได้" }, portal: { eyebrow: "การเข้าถึง / ทางเข้า", title: "เลือกประตูหนึ่งบาน\nแต่ละบานไม่ได้พาไปที่เดียวกัน", summary: "ทางเข้าควบคุมจังหวะของการเข้าสู่ระบบ ภาษา คุณภาพ และการเคลื่อนไหวยังคงอยู่ในการควบคุมของผู้ชม", action: "เปิดคลัง" }, rights: { eyebrow: "การเข้าถึง / สิทธิ์", title: "ผลงานต้องการ\nขอบเขตที่ชัดเจน", summary: "หน้าสิทธิ์เตรียมไว้สำหรับการติดต่อ การอนุญาต และเงื่อนไข เมื่อผู้สร้างแบ่งปันข้อมูลที่เกี่ยวข้อง", action: "กลับสู่ทางเข้า" } },
    common: { visible: "มองเห็นได้", partial: "บางส่วน", sealed: "ปิดผนึก", pending: "รอดำเนินการ", open: "เปิด", read: "อ่าน", continue: "ดำเนินต่อ", noAudio: "ไม่มีเสียง", noDownload: "ไม่มีการดาวน์โหลด", pendingDetail: "เนื้อหากำลังรอการตรวจสอบจากผู้สร้าง", languageNote: "คำแปลอินเทอร์เฟซเป็นคำแปลเพื่อการใช้งาน ข้อความของผลงานจะเพิ่มหลังจากผู้สร้างตรวจสอบ" },
  },
  fi: {
    languageName: "Suomi", shortName: "FI", nav: { home: "Alku", artist: "The Artist", archive: "Arkisto", work: "Teos", studio: "Studio", portal: "Portaali", rights: "Oikeudet" },
    shell: { menu: "Avaa navigointi", close: "Sulje navigointi", motion: "Liike", sound: "Ääni", soundValue: "Suljettu", quality: "Laatu", qualityValue: "Korkea", language: "Kieli", enter: "Astu sisään", return: "Palaa kynnykselle" },
    home: { eyebrow: "BELENTANI / SUVERENI UNIVERSUMI", title: "Et astu verkkosivulle.\nYlität kynnyksen.", intro: "Laajeneva taiteellinen kokonaisuus. Arkisto, prosessi ja teos elävät samassa järjestelmässä; sen mikä on pysyttävä suljettuna, annetaan pysyä suljettuna.", action: "Avaa näkyvä arkisto", secondaryAction: "Astu hiljaisuuteen", coordinate: "KOORD. 01 / LÄSNÄOLO", archiveLabel: "Arkisto", archiveCopy: "Jälkiä, kuvia ja hyväksyttyjä tallenteita.", workLabel: "Teos", workCopy: "Keskeinen teos pysyy suljettuna.", portalLabel: "Portaali", portalCopy: "Valitse miten jatkat ja millä kielellä.", sealLabel: "JUDAS / SEALED", sealCopy: "Ei ääntä. Ei sanoituksia. Ei latausta. Ei julkista master-URL-osoitetta." },
    pages: { artist: { eyebrow: "IDENTITEETTI / THE ARTIST", title: "Läsnäolo\nkynnyksen takana.", summary: "Pedro esiintyy täällä harkitun pidättyvästi. Vahvistettavat elämäkertatiedot lisätään vain tekijän vahvistuksen jälkeen.", action: "Katso taiteilijan arkisto" }, archive: { eyebrow: "ARKISTO / NÄKYVÄ", title: "Se mikä jää\nkun näyttämö hiljenee.", summary: "Huone saatavilla oleville kuville ja tallenteille. Arkisto ei selitä teosta, vaan säilyttää sen merkit.", action: "Siirry arkistoon" }, work: { eyebrow: "TEOS / JUDAS", title: "Teos ei avaudu\nvain koska se voidaan avata.", summary: "JUDAS pysyy suljettuna tässä versiossa. Ei ääntä, sanoituksia, waveformia, latausta tai julkista master-URL-osoitetta.", action: "Palaa portaaliin" }, studio: { eyebrow: "PROSESSI / STUDIO", title: "Teos on läsnä myös\nvalinnoissaan.", summary: "Tämä tila on valmis prosessimerkinnöille, materiaaleille ja menetelmälle, kun tekijä tekee ne varmennettaviksi.", action: "Katso näkyvä arkisto" }, portal: { eyebrow: "PÄÄSY / PORTAALI", title: "Valitse ovi.\nKaikki eivät vie samaan paikkaan.", summary: "Portaali säilyttää sisääntulon rytmin: kieli, laatu ja liike ovat katsojan hallinnassa.", action: "Avaa arkisto" }, rights: { eyebrow: "PÄÄSY / OIKEUDET", title: "Teos tarvitsee\nselkeän reunan.", summary: "Oikeussivu on valmis yhteydenottoa, lupia ja ehtoja varten, kun tekijä jakaa vastaavat tiedot.", action: "Palaa portaaliin" } },
    common: { visible: "Näkyvä", partial: "Osittainen", sealed: "Suljettu", pending: "Odottaa", open: "Avaa", read: "Lue", continue: "Jatka", noAudio: "Ei ääntä", noDownload: "Ei latausta", pendingDetail: "Sisältö odottaa tekijän vahvistusta.", languageNote: "Käyttöliittymän käännökset ovat toiminnallisia; teoksen teksti lisätään tekijän tarkistuksen jälkeen." },
  },
};

export const stateLabelKey: Record<EditorialState, keyof LocaleCopy["common"]> = {
  visible: "visible",
  partial: "partial",
  sealed: "sealed",
  pending: "pending",
};
