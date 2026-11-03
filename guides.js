/*
  ARCHIVIO GUIDE DODITECH
  -----------------------
  Per aggiungere una guida, copia uno dei blocchi qui sotto, incollalo in fondo
  (prima della parentesi quadra finale) e cambia i campi. Ricorda la virgola
  tra un blocco e l'altro.

  Campi:
    id         identificativo breve, senza spazi né accenti (diventa il link: index.html#g=id)
    titolo     titolo della guida
    categoria  una tra: Windows, Android, Sicurezza, Rete, Privacy, Open source, Backup, Linux
               (puoi anche inventarne di nuove: compaiono da sole tra i filtri)
    tipo       Trucco | Guida | Tool | Sicurezza | Tesoro nascosto
    sommario   una riga che spiega a cosa serve (compare nell'elenco)
    tag        elenco di parole chiave per la ricerca
    data       (facoltativa) data di pubblicazione, formato AAAA-MM-GG. Le guide senza data stanno in fondo
    testo      il contenuto, una riga per volta (vedi regole sotto)

  Regole per il campo "testo":
    - una riga vuota crea uno spazio
    - le righe che iniziano con 1️⃣ 2️⃣ 3️⃣ ... diventano i passaggi numerati
    - le righe che iniziano con "• " diventano un elenco puntato
    - le righe che iniziano con "> " diventano un comando da copiare (con pulsante)
    - le righe che iniziano con ⚠️ diventano un riquadro di avviso
    - le righe che iniziano con 💡 diventano un riquadro con un consiglio
    - tutte le altre sono testo normale
    - non usare mai il carattere ` (apice inverso) dentro il testo
*/

window.GUIDE = [
  {
    id: "cronologia-appunti",
    titolo: "Cronologia degli appunti di Windows",
    categoria: "Windows",
    tipo: "Trucco",
    sommario: "Smetti di perdere ciò che hai copiato: Windows ricorda gli ultimi elementi.",
    tag: ["appunti", "copia incolla", "screenshot", "scorciatoie"],
    data: "2026-10-26",
    testo: `❓ Il problema: copi un testo, ne copi un altro e il primo è perso.
✅ La soluzione: la cronologia degli appunti di Windows.

1️⃣ Premi Win + V
2️⃣ Se te lo chiede, clicca "Attiva"
3️⃣ Da ora vedi tutto ciò che hai copiato e lo incolli con un clic

💡 Con Win + Shift + S fai uno screenshot di una parte dello schermo, e finisce subito negli appunti.`
  },
  {
    id: "powertoys",
    titolo: "Microsoft PowerToys: la cassetta degli attrezzi di Windows",
    categoria: "Windows",
    tipo: "Tool",
    sommario: "Decine di funzioni in più per Windows: rinomina file in blocco, righello, selettore colori.",
    tag: ["powertoys", "microsoft", "strumenti", "gratis", "open source"],
    data: "2026-10-27",
    testo: `Serve a: aggiungere a Windows una cassetta degli attrezzi con decine di funzioni utili.

• Gratuito, ufficiale e open source
• Rinomina file in blocco, righello a schermo, selettore colori, ridimensionamento immagini
• "Always on top" per fissare una finestra sopra le altre
• Contro: tante opzioni, ci metti un po' a scoprirle tutte

💰 Prezzo: gratis. Disponibile per Windows.
Lo trovi nel Microsoft Store o su github.com/microsoft/PowerToys

💡 Con Win + Shift + T attivi "Text Extractor" e copi il testo da immagini, screenshot e video in pausa.`
  },
  {
    id: "chiavetta-windows",
    titolo: "Creare una chiavetta USB avviabile di Windows",
    categoria: "Windows",
    tipo: "Guida",
    sommario: "Prepara una chiavetta per installare o ripristinare Windows, con Rufus.",
    tag: ["rufus", "usb", "iso", "installazione", "boot"],
    data: "2026-10-28",
    testo: `Ti serve una chiavetta USB da almeno 8 GB (verrà formattata, quindi salva prima i dati!), il programma Rufus dal sito ufficiale rufus.ie e l'ISO di Windows dal sito ufficiale Microsoft.

1️⃣ Scarica l'ISO di Windows dal sito Microsoft (gratis, senza programmi strani)
2️⃣ Scarica e apri Rufus (non serve installarlo)
3️⃣ In "Dispositivo" scegli la tua chiavetta
4️⃣ Clicca "Seleziona" e carica l'ISO
5️⃣ Lascia le impostazioni consigliate da Rufus (schema GPT per i PC recenti)
6️⃣ Premi "Avvia" e aspetta la fine

✅ Fatto! Ora puoi installare o ripristinare Windows su qualsiasi PC.

⚠️ Scarica sempre ISO e programmi solo dai siti ufficiali.`
  },
  {
    id: "sms-truffa",
    titolo: "Finti SMS di pacchi e banche",
    categoria: "Sicurezza",
    tipo: "Sicurezza",
    sommario: "Come riconoscere i messaggi truffa e cosa fare se hai già cliccato.",
    tag: ["truffe", "phishing", "sms", "banca", "pacco"],
    data: "2026-10-30",
    testo: `Arrivano SMS che sembrano di corrieri o banche: "Il tuo pacco è bloccato, paga 1,99 € per sbloccarlo" oppure "Accesso sospetto al conto". Il link porta a un sito falso che ruba i tuoi dati.

Come riconoscerli:
• Messaggio urgente, con minaccia o scadenza
• Link accorciato o con un indirizzo strano
• Errori di grammatica o numero sconosciuto

Cosa fare:
1️⃣ Non cliccare il link e non rispondere
2️⃣ Se aspetti davvero un pacco, controlla dall'app o dal sito ufficiale del corriere
3️⃣ Se hai già inserito dati, chiama subito la banca e blocca la carta
4️⃣ Segnala e cancella il messaggio

💡 Inoltra questa guida a un familiare: spesso le vittime sono i meno esperti.`
  },
  {
    id: "password-manager",
    titolo: "Smetti di usare la stessa password ovunque (Bitwarden)",
    categoria: "Sicurezza",
    tipo: "Guida",
    sommario: "Un gestore di password gratuito e open source: ne ricordi una sola, lui pensa al resto.",
    tag: ["bitwarden", "password", "gestore", "open source", "verifica in due passaggi"],
    testo: `Bitwarden è un gestore di password gratuito e open source. Ricordi UNA sola password, lui pensa a tutte le altre.

1️⃣ Crea l'account su bitwarden.com
2️⃣ Scegli una password principale LUNGA: una frase di 4-5 parole è meglio di una parola complicata
3️⃣ Installa l'estensione del browser e l'app Android/iOS
4️⃣ Importa le password salvate nel browser (Impostazioni > Importa dati)
5️⃣ Attiva la verifica in due passaggi dalle impostazioni dell'account
6️⃣ Elimina le password salvate nel browser e cambia a mano quelle più importanti (email, banca)

✅ Da ora Bitwarden genera e compila password uniche per ogni sito.

⚠️ Non perdere la password principale: non esiste un "recupero" semplice, proprio perché nessuno (nemmeno Bitwarden) può leggerla.`
  },
  {
    id: "email-violata",
    titolo: "La tua email è stata violata? Scoprilo in 30 secondi",
    categoria: "Sicurezza",
    tipo: "Sicurezza",
    sommario: "Controlla gratis se i tuoi dati compaiono in una violazione nota.",
    tag: ["haveibeenpwned", "violazione", "data breach", "email"],
    testo: `Ogni anno vengono rubati miliardi di account. Puoi controllare se ci sei dentro, gratis.

1️⃣ Vai su haveibeenpwned.com (sito del ricercatore Troy Hunt, molto affidabile)
2️⃣ Scrivi il tuo indirizzo email e premi "pwned?"
3️⃣ Se compare in una violazione, vedrai quale servizio è stato colpito e quali dati sono usciti

Se la risposta è sì:
• Cambia subito la password di quel servizio
• Se la usavi anche altrove, cambiala ovunque
• Attiva la verifica in due passaggi
• Occhio a email e SMS sospetti nei giorni successivi

💡 Puoi iscriverti alle notifiche per essere avvisato se la tua email compare in nuove violazioni.`
  },
  {
    id: "backup-321",
    titolo: "La regola 3-2-1: non perdere mai più foto e documenti",
    categoria: "Backup",
    tipo: "Guida",
    sommario: "Tre copie, due supporti, una fuori casa. Un metodo semplice e gratuito.",
    tag: ["backup", "copia", "hard disk", "cloud", "cronologia file"],
    testo: `Un disco si rompe, un telefono cade, un ransomware cifra tutto. Chi ha un backup dorme tranquillo.

La regola 3-2-1:
• tre copie dei tuoi dati
• su due tipi di supporto diversi
• almeno una copia fuori casa

Esempio pratico e gratuito: i file sul PC, una copia su hard disk esterno e una su un cloud.

1️⃣ Collega l'hard disk esterno
2️⃣ Su Windows cerca "Cronologia file" e attivala
3️⃣ Sul telefono attiva il backup delle foto (Google Foto o iCloud)
4️⃣ Fissa un promemoria mensile: "Controllo backup"

✅ Fatto! Ora un guasto è solo un fastidio, non un disastro.

⚠️ Un backup che non hai mai provato a ripristinare è solo una speranza: ogni tanto apri un file di prova dalla copia.`
  },
  {
    id: "cambiare-dns",
    titolo: "Cambia DNS e naviga meglio (e più al sicuro)",
    categoria: "Rete",
    tipo: "Trucco",
    sommario: "Il DNS del provider spesso è lento. Cloudflare e Quad9 sono gratuiti.",
    tag: ["dns", "cloudflare", "quad9", "router", "navigazione"],
    testo: `Il DNS è la "rubrica" di internet. Quello del tuo provider spesso è lento e non filtra nulla. Puoi cambiarlo gratis.

DNS consigliati:
• Cloudflare: 1.1.1.1 e 1.0.0.1 (veloce e attento alla privacy)
• Quad9: 9.9.9.9 (blocca anche siti pericolosi noti)

Su Windows 11:
1️⃣ Impostazioni > Rete e Internet > Wi-Fi (o Ethernet) > Proprietà
2️⃣ Assegnazione server DNS > Modifica > Manuale
3️⃣ Attiva IPv4 e inserisci i DNS

Su Android (DNS privato):
1️⃣ Impostazioni > Rete e Internet > DNS privato
2️⃣ Scegli "Nome host del provider DNS" e inserisci one.one.one.one (Cloudflare) oppure dns.quad9.net (Quad9)

💡 Il DNS impostato sul router si applica a tutti i dispositivi di casa in un colpo solo.

⚠️ I nomi dei menu cambiano a seconda della marca del telefono: se non li trovi, usa la barra di ricerca nelle impostazioni.`
  },
  {
    id: "cronologia-affidabilita",
    titolo: "Il PC si pianta? Usa la cartella clinica nascosta di Windows",
    categoria: "Windows",
    tipo: "Trucco",
    sommario: "La Cronologia affidabilità mostra crash, blocchi e aggiornamenti falliti, giorno per giorno.",
    tag: ["crash", "blocchi", "diagnosi", "perfmon", "affidabilità"],
    testo: `Windows registra ogni crash, blocco e aggiornamento fallito in un grafico che quasi nessuno apre mai.

Come aprirla:
1️⃣ Premi Win + R
2️⃣ Scrivi il comando qui sotto
3️⃣ Premi Invio

> perfmon /rel

Cosa vedi:
• Un indice di stabilità da 1 a 10, giorno per giorno
• Una X rossa = un errore o un crash in quel giorno
• Un triangolo giallo = un avviso
• Una "i" = installazioni e aggiornamenti

Come leggerlo:
1️⃣ Clicca sul giorno in cui è calato l'indice
2️⃣ In basso leggi cosa è successo: quale programma o driver ha dato problemi
3️⃣ Se un nome si ripete spesso, ecco il colpevole

💡 Ora sai cosa disinstallare, aggiornare o cercare su internet.`
  },
  {
    id: "localsend",
    titolo: "L'AirDrop che funziona tra TUTTI i dispositivi (LocalSend)",
    categoria: "Open source",
    tipo: "Trucco",
    sommario: "Invia file tra telefono, PC e Mac sulla stessa rete, senza cavi, cloud o account.",
    tag: ["localsend", "airdrop", "trasferimento file", "wi-fi", "open source"],
    testo: `Vuoi mandare un file dal telefono Android al PC, all'iPhone o al Mac, senza cavi, senza cloud, senza account? LocalSend è gratuito e open source.

Ti serve LocalSend da localsend.org (Windows, macOS, Linux, Android, iOS) e dispositivi collegati alla stessa rete Wi-Fi.

1️⃣ Installa LocalSend su entrambi i dispositivi
2️⃣ Aprilo: ogni dispositivo ha un nome casuale (puoi cambiarlo)
3️⃣ Scegli i file o il testo da inviare
4️⃣ Tocca il dispositivo che compare in elenco
5️⃣ Chi riceve accetta: il trasferimento parte, cifrato

💡 Perfetto per video pesanti o intere cartelle, senza compressione.

⚠️ Se non si vedono, controlla che il router non abbia attivo l'isolamento dei client Wi-Fi (a volte è nella rete ospiti).`
  },
  {
    id: "foto-posizione",
    titolo: "Le tue foto contengono la tua posizione: toglila prima di condividerle",
    categoria: "Privacy",
    tipo: "Sicurezza",
    sommario: "Ogni foto può contenere coordinate GPS e dati del telefono. Come controllarli e ripulirli.",
    tag: ["exif", "metadati", "gps", "foto", "posizione"],
    testo: `Ogni foto scattata con il telefono può contenere dati nascosti (EXIF): data, modello del telefono e, se attivo, le coordinate GPS esatte del punto in cui l'hai scattata.

Come controllare:
1️⃣ Su Windows: tasto destro sulla foto > Proprietà > Dettagli
2️⃣ Guarda le voci Latitudine e Longitudine

Come ripulirla:
1️⃣ Dalla stessa finestra clicca "Rimuovi proprietà e informazioni personali"
2️⃣ Scegli "Crea una copia con tutte le proprietà possibili rimosse"
3️⃣ Condividi la copia

Su telefono: molti telefoni, quando condividi una foto, mostrano l'opzione "Rimuovi posizione". Oppure spegni la geolocalizzazione nelle impostazioni della fotocamera.

⚠️ Se invii una foto "come file" su alcune app di messaggistica, i metadati possono restare.

💡 Per ripulire più foto insieme, prova ExifCleaner (gratuito e open source).`
  },
  {
    id: "wsl",
    titolo: "Installa Linux in Windows in 5 minuti, senza chiavette (WSL)",
    categoria: "Linux",
    tipo: "Guida",
    sommario: "Un vero terminale Linux dentro Windows, senza partizioni né macchine virtuali.",
    tag: ["wsl", "ubuntu", "terminale", "linux", "windows"],
    testo: `WSL (Windows Subsystem for Linux) è una funzione gratuita di Windows che ti fa usare un vero terminale Linux, senza partizioni e senza macchine virtuali da configurare.

Ti serve Windows 10 (aggiornato) o Windows 11 e una connessione a internet.

1️⃣ Apri il Terminale (o PowerShell) come amministratore
2️⃣ Scrivi il comando qui sotto
3️⃣ Riavvia il PC quando richiesto
4️⃣ Alla riapertura Ubuntu finisce l'installazione: scegli nome utente e password
5️⃣ Ora hai un terminale Linux: prova "ls" o "pwd"

> wsl --install

Vuoi un'altra distribuzione? Elenco di quelle disponibili:

> wsl --list --online

💡 I tuoi file Linux sono visibili da Windows: in Esplora file scrivi \\\\wsl$

⚠️ Su alcuni PC va attivata la virtualizzazione nel BIOS/UEFI.`
  },
  {
    id: "wayback-machine",
    titolo: "Rivedi i siti com'erano 10 o 20 anni fa (Wayback Machine)",
    categoria: "Open source",
    tipo: "Tesoro nascosto",
    sommario: "Internet Archive conserva miliardi di pagine. Ritrova articoli e siti ormai spariti.",
    tag: ["wayback machine", "internet archive", "archivio", "siti cancellati"],
    testo: `Internet Archive conserva copie di miliardi di pagine. Con la Wayback Machine puoi vedere come era un sito in qualsiasi momento, anche se oggi non esiste più. Si trova su web.archive.org

1️⃣ Incolla l'indirizzo del sito nella barra di ricerca
2️⃣ Compare un calendario: i giorni evidenziati hanno una copia salvata
3️⃣ Scegli una data e sfoglia la pagina com'era

A cosa serve:
• Ritrovare un articolo o una guida cancellata
• Vedere come cambiavano prezzi o pagine di prodotti nel tempo
• Recuperare il tuo vecchio sito
• Salvare una pagina come prova

💡 Con "Save Page Now" incolli un indirizzo e lo salvi ora, così resta consultabile anche se poi sparisce.

⚠️ Non tutti i siti o le pagine sono archiviati, e alcuni contenuti (immagini, filmati, moduli) possono mancare.`
  },
  {
    id: "android-animazioni",
    titolo: "Android più veloce in 30 secondi (animazioni)",
    categoria: "Android",
    tipo: "Trucco",
    sommario: "Dimezza la durata delle animazioni e il telefono sembra molto più scattante.",
    tag: ["animazioni", "opzioni sviluppatore", "velocità", "android"],
    testo: `1️⃣ Vai in Impostazioni > Informazioni sul telefono
2️⃣ Tocca 7 volte "Numero build" per attivare le Opzioni sviluppatore
3️⃣ Entra in Opzioni sviluppatore
4️⃣ Imposta "Scala animazione finestra", "Scala animazione transizione" e "Scala durata animatore" su 0,5x

✅ Il telefono sembra molto più scattante, senza installare nulla.

⚠️ Tocca solo queste voci: le altre sono per sviluppatori.
💡 Per tornare indietro, rimetti le animazioni a 1x.`
  },
  {
    id: "streaming-nascosto",
    titolo: "Il Netflix che nessuno ti dice: streaming gratuito e legale poco noto",
    categoria: "Streaming",
    tipo: "Tesoro nascosto",
    sommario: "MLOL Cinema, Internet Archive, Archivio Luce e i film open source di Blender.",
    tag: ["streaming", "mlol", "internet archive", "archivio luce", "blender", "gratis"],
    testo: `Prima di pagare un altro abbonamento, prova questi quattro tesori.

• MLOL Cinema: con la tessera di una biblioteca che aderisce a MLOL guardi film e documentari gratis in streaming. Chiedi alla tua biblioteca o guarda il sito della tua rete bibliotecaria.
• Internet Archive (archive.org): migliaia di film d'epoca, cartoni classici e documentari liberi da diritti. Cerca "Moving Images".
• Archivio Luce: il più grande archivio storico di filmati italiani, consultabile online.
• Film open source di Blender: Big Buck Bunny, Sintel, Tears of Steel, con licenza Creative Commons. Perfetti anche per testare monitor e connessione.

💡 Vuoi uno streaming tutto tuo? Con Jellyfin crei in casa una piattaforma gratuita per i tuoi film, la tua musica e le tue foto.

⚠️ L'accesso a MLOL e il catalogo dipendono dalla tua biblioteca: controlla sul sito che sia attivo.`
  },
  {
    id: "streaming-gratis-legale",
    titolo: "Guarda gratis (e legalmente): RaiPlay, Pluto TV e altri",
    categoria: "Streaming",
    tipo: "Trucco",
    sommario: "Servizi gratuiti da provare prima di abbonarti, e come trovare dove vedere un titolo.",
    tag: ["streaming", "raiplay", "pluto tv", "justwatch", "risparmio"],
    testo: `Prima di abbonarti a un altro servizio, prova questi:
• RaiPlay: film, serie e programmi Rai, gratis
• Pluto TV: canali tematici sempre in onda, senza abbonamento
• YouTube Film: una selezione di titoli gratuiti con pubblicità
• Mediaset Infinity: parte del catalogo è gratuita con registrazione

💡 Trucco smanettone: usa JustWatch (sito e app) per cercare un titolo e scoprire in quale piattaforma lo trovi, anche tra quelle gratuite.

⚠️ I cataloghi cambiano spesso: controlla cosa c'è al momento.`
  },
  {
    id: "liberare-spazio-windows",
    titolo: "Libera decine di GB su Windows senza programmi strani",
    categoria: "Windows",
    tipo: "Trucco",
    sommario: "Gli strumenti di pulizia già dentro Windows e come vedere cosa occupa davvero spazio.",
    tag: ["spazio", "pulizia", "archiviazione", "senso di archiviazione", "wiztree"],
    testo: `1️⃣ Premi Win + I e vai su Sistema > Archiviazione
2️⃣ Apri "File temporanei" e scegli cosa eliminare (cestino, download vecchi, file temporanei)
3️⃣ Attiva "Senso di archiviazione" per la pulizia automatica ogni tanto
4️⃣ Vai su "Raccomandazioni di pulizia" per vedere i file grandi o inutilizzati
5️⃣ Bonus: cerca "Pulizia disco", fai clic su "Pulisci file di sistema" e libera anche vecchi aggiornamenti

💡 Per vedere cosa occupa davvero spazio, prova WizTree o WinDirStat: mappano il disco e mostrano le cartelle più pesanti.

⚠️ Prima di eliminare qualcosa che non conosci, controlla cos'è.`
  },
  {
    id: "jellyfin",
    titolo: "Crea il tuo servizio streaming personale (Jellyfin)",
    categoria: "Streaming",
    tipo: "Guida",
    sommario: "Un server multimediale gratuito e open source per film, serie, musica e foto.",
    tag: ["jellyfin", "server multimediale", "open source", "smart tv", "nas"],
    testo: `Jellyfin organizza film, serie, musica e foto, con locandine e trama, e li guardi da TV, telefono e PC. Niente abbonamento, niente tracciamento.

Ti servono un PC (anche vecchio) sempre acceso, o un NAS, e i tuoi file video e musicali (copie dei tuoi dischi, video personali, contenuti liberi).

1️⃣ Scarica Jellyfin dal sito ufficiale jellyfin.org e installalo
2️⃣ Apri il browser su localhost:8096 (o sull'indirizzo IP del PC e la porta 8096)
3️⃣ Segui la procedura guidata: crea l'utente e scegli la lingua
4️⃣ Aggiungi le cartelle con i tuoi film, serie e musica e indica il tipo di contenuto
5️⃣ Installa l'app Jellyfin su telefono, Smart TV o Fire TV e collegati al server

💡 Organizza i file con nomi chiari, per esempio Nome Film (2010).mkv: Jellyfin riconosce da solo copertine e informazioni.`
  },
  {
    id: "provare-linux-ventoy",
    titolo: "Prova Linux senza toccare Windows (Ventoy)",
    categoria: "Linux",
    tipo: "Guida",
    sommario: "Una sola chiavetta con più distribuzioni Linux da provare senza installare nulla.",
    tag: ["ventoy", "linux", "mint", "ubuntu", "live", "usb"],
    testo: `Ti servono una chiavetta USB da 8 GB o più (verrà formattata), Ventoy da ventoy.net e le ISO delle distribuzioni (per esempio Linux Mint o Ubuntu) dai siti ufficiali.

1️⃣ Scarica e apri Ventoy, scegli la chiavetta e premi "Install"
2️⃣ Copia le ISO nella chiavetta come se fossero normali file
3️⃣ Riavvia il PC e apri il menu di avvio (di solito F12, F11, F10 o Esc)
4️⃣ Scegli la chiavetta e, dal menu di Ventoy, la distribuzione da provare
5️⃣ Scegli "Prova" (live) e usa Linux senza installare nulla

💡 Puoi metterne più di una nella stessa chiavetta e provarle tutte, senza riformattare.
✅ Se ti piace, puoi poi installarla accanto a Windows o su un vecchio PC.`
  },
  {
    id: "syncthing",
    titolo: "Sincronizza file tra PC e telefono senza cloud (Syncthing)",
    categoria: "Open source",
    tipo: "Guida",
    sommario: "Le cartelle si copiano direttamente tra i tuoi dispositivi, senza server di terzi.",
    tag: ["syncthing", "sincronizzazione", "senza cloud", "open source", "foto"],
    testo: `Syncthing copia le cartelle tra i tuoi dispositivi direttamente, senza server di terzi e senza limiti di spazio, tranne quello dei tuoi dischi.

Ti servono Syncthing da syncthing.net (PC) e, su Android, Syncthing-Fork da F-Droid o GitHub.

1️⃣ Installa e avvia Syncthing sul PC: si apre la pagina di controllo nel browser
2️⃣ Installa l'app sul telefono
3️⃣ Su ogni dispositivo vai su Azioni > Mostra ID e copia l'ID
4️⃣ Sul PC clicca "Aggiungi dispositivo remoto" e incolla l'ID del telefono
5️⃣ Conferma la richiesta sul telefono
6️⃣ Scegli una cartella da condividere e seleziona il dispositivo

✅ Da ora ciò che metti nella cartella compare anche sull'altro dispositivo.

💡 Idea pratica: sincronizza la cartella delle foto del telefono con il PC, in automatico.
⚠️ Non è un backup: se cancelli un file, sparisce ovunque. Usalo in aggiunta a un backup vero.`
  },
  {
    id: "ollama-ai-offline",
    titolo: "Un'AI gratuita sul tuo PC, senza abbonamento e senza internet (Ollama)",
    categoria: "AI",
    tipo: "Guida",
    sommario: "Modelli di linguaggio aperti, eseguiti in locale: le tue conversazioni restano tue.",
    tag: ["ollama", "intelligenza artificiale", "offline", "llm", "privacy"],
    testo: `Con Ollama usi modelli di linguaggio open direttamente sul computer: niente account, niente limiti giornalieri.

Ti servono Windows, macOS o Linux, almeno 8 GB di RAM per i modelli piccoli (più RAM = modelli migliori) e spazio su disco: i modelli pesano da qualche GB in su.

1️⃣ Scarica Ollama da ollama.com e installalo
2️⃣ Apri il terminale (su Windows: PowerShell o Prompt dei comandi)
3️⃣ Vai su ollama.com/library e scegli un modello leggero
4️⃣ Scrivi "ollama run" seguito dal nome del modello
5️⃣ Aspetta il download la prima volta, poi chiacchiera con lui dal terminale

💡 Se il PC è lento, scegli un modello più piccolo: risponde in fretta ma è meno preciso.
⚠️ Le risposte possono contenere errori: verifica sempre le informazioni importanti.`
  },
  {
    id: "windows-sandbox",
    titolo: "Prova un programma sospetto senza rischiare il PC (Windows Sandbox)",
    categoria: "Sicurezza",
    tipo: "Trucco",
    sommario: "Una finestra con un Windows pulito che sparisce quando la chiudi.",
    tag: ["sandbox", "virus", "isolamento", "windows pro", "test"],
    testo: `Windows ha una "stanza isolata" integrata: apri un Windows pulito dentro una finestra, ci provi quello che vuoi e, quando la chiudi, tutto sparisce.

⚠️ Serve Windows 10/11 Pro, Enterprise o Education: non c'è nella versione Home.

Come attivarla:
1️⃣ Cerca "Attiva o disattiva funzionalità di Windows"
2️⃣ Spunta "Windows Sandbox" e premi OK
3️⃣ Riavvia il PC
4️⃣ Cerca "Windows Sandbox" nel menu Start e aprilo

Come usarla:
• Copia e incolla il file sospetto dentro la finestra
• Aprilo e guarda cosa fa
• Chiudi la finestra: tutto viene cancellato

💡 Se non si avvia, controlla che la virtualizzazione sia attiva nel BIOS/UEFI.
⚠️ Per prudenza, non inserire password o dati personali dentro la sandbox.`
  },
  {
    id: "scrcpy",
    titolo: "Controlla il telefono Android dal PC con mouse e tastiera (scrcpy)",
    categoria: "Android",
    tipo: "Guida",
    sommario: "Lo schermo del telefono in una finestra del PC, senza root e senza app sul telefono.",
    tag: ["scrcpy", "schermo", "debug usb", "adb", "registrare schermo"],
    testo: `scrcpy mostra lo schermo del telefono sul PC e ti permette di usarlo con mouse e tastiera. Gratuito e open source.

Ti servono un cavo USB e scrcpy dal GitHub ufficiale (github.com/Genymobile/scrcpy).

1️⃣ Sul telefono: Impostazioni > Info telefono > tocca 7 volte "Numero build"
2️⃣ Entra in Opzioni sviluppatore e attiva "Debug USB"
3️⃣ Collega il telefono al PC e accetta l'autorizzazione che compare sul telefono
4️⃣ Scarica scrcpy, estrai la cartella ed esegui scrcpy.exe
5️⃣ Il telefono compare in una finestra del PC

Cosa ci puoi fare:
• Rispondere ai messaggi con la tastiera del PC
• Registrare lo schermo per i tuoi tutorial
• Mostrare il telefono in un video o in una diretta

⚠️ Spegni il debug USB quando non ti serve più.`
  },
  {
    id: "rustdesk",
    titolo: "Aiuta amici e parenti da remoto, gratis (RustDesk)",
    categoria: "Open source",
    tipo: "Guida",
    sommario: "Assistenza remota gratuita e open source, senza limiti di tempo per uso personale.",
    tag: ["rustdesk", "assistenza remota", "desktop remoto", "teamviewer"],
    testo: `1️⃣ Installa RustDesk (da rustdesk.com) su entrambi i dispositivi
2️⃣ Chi chiede aiuto apre il programma e ti comunica il suo ID e la password temporanea
3️⃣ Tu inserisci l'ID nel tuo RustDesk e premi "Connetti"
4️⃣ Inserisci la password
5️⃣ La persona accetta la connessione: ora vedi e controlli lo schermo

💡 Meglio chiedere una password nuova per ogni sessione e chiudere il programma a fine assistenza.

⚠️ Aiuta solo persone che conosci. Chi ti chiama dicendo di essere "dell'assistenza" e ti chiede di installare un programma è quasi sempre una truffa.`
  },
  {
    id: "termux-mini-server",
    titolo: "Trasforma un vecchio telefono Android in un mini server (Termux)",
    categoria: "Android",
    tipo: "Guida",
    sommario: "Un terminale Linux completo sul vecchio telefono, raggiungibile dal PC via SSH.",
    tag: ["termux", "ssh", "server", "vecchio telefono", "linux"],
    testo: `Con Termux ottieni un terminale Linux completo, gratis, da cui accedere anche dal PC.

Ti servono un telefono Android (anche vecchio), Termux da F-Droid o dal GitHub ufficiale (la versione del Play Store non è aggiornata) e telefono e PC sulla stessa rete Wi-Fi.

1️⃣ Installa Termux e aprilo
2️⃣ Aggiorna i pacchetti con il comando qui sotto
3️⃣ Installa il server SSH
4️⃣ Scrivi "whoami" per vedere il nome utente, poi "passwd" per scegliere una password
5️⃣ Avvia il server con "sshd"
6️⃣ Scopri l'indirizzo del telefono con "ifconfig"
7️⃣ Dal PC, nel terminale, collegati con l'ultimo comando

> pkg update
> pkg install openssh
> ssh -p 8022 NOME_UTENTE@INDIRIZZO_IP

✅ Ora controlli il telefono dal PC, dal terminale.

💡 Puoi provare script Python, creare un piccolo sito o fare esperimenti con Linux, senza rischiare nulla.
💡 Se lo lasci acceso a lungo, tienilo in carica e togli l'ottimizzazione batteria a Termux.`
  },
  {
    id: "report-batteria",
    titolo: "Scopri quanto è malata la batteria del portatile",
    categoria: "Windows",
    tipo: "Trucco",
    sommario: "Windows crea un report con l'usura reale della batteria, senza programmi esterni.",
    tag: ["batteria", "powercfg", "portatile", "usura", "report"],
    testo: `1️⃣ Premi Win + X e apri Terminale (o PowerShell / Prompt dei comandi)
2️⃣ Scrivi il comando qui sotto
3️⃣ Premi Invio: Windows crea un file HTML e ti dice dove l'ha salvato (di solito nella tua cartella utente)
4️⃣ Aprilo con il browser

> powercfg /batteryreport

Cosa guardare:
• Design capacity: capacità quando era nuova
• Full charge capacity: capacità attuale
• Più sono distanti, più la batteria è consumata
• Più sotto trovi la cronologia di utilizzo e carica

💡 Se è al 60% o meno della capacità originale, è il momento di pensare a sostituirla.
💡 Per un controllo energetico generale prova anche "powercfg /energy".`
  },
  {
    id: "tailscale",
    titolo: "Collegati ai tuoi dispositivi da ovunque, senza aprire porte sul router (Tailscale)",
    categoria: "Rete",
    tipo: "Guida",
    sommario: "Una rete privata tra i tuoi dispositivi, come se fossero tutti nella stessa casa.",
    tag: ["tailscale", "vpn", "accesso remoto", "rete privata", "taildrop"],
    testo: `Tailscale crea una "rete privata" tra i tuoi dispositivi, anche se sei in vacanza. Il piano personale è gratuito.

Ti servono un account (puoi entrare con Google, Microsoft o GitHub) e Tailscale da tailscale.com su ogni dispositivo.

1️⃣ Installa Tailscale sul PC di casa e accedi con il tuo account
2️⃣ Installa l'app sul telefono (o su un altro PC) e accedi con lo STESSO account
3️⃣ I dispositivi compaiono in elenco, ognuno con un indirizzo che inizia per 100.
4️⃣ Da fuori casa usa quell'indirizzo per raggiungere il PC

Cosa ci puoi fare:
• Guardare i film del tuo server Jellyfin
• Aprire cartelle condivise
• Collegarti in SSH o con Desktop remoto

💡 La funzione Taildrop ti permette di inviare file tra i tuoi dispositivi con un tocco.
⚠️ Per usare Desktop remoto di Windows come ospite serve Windows Pro.`
  },
  {
    id: "adguard-home",
    titolo: "Blocca pubblicità e tracker su tutti i dispositivi di casa (AdGuard Home)",
    categoria: "Privacy",
    tipo: "Guida",
    sommario: "Un solo blocco sulla rete invece di uno su ogni telefono, TV e PC.",
    tag: ["adguard", "pubblicità", "tracker", "dns", "router"],
    testo: `AdGuard Home è gratuito e open source. Lo installi una volta e protegge tutta la rete.

Ti servono un PC (o mini PC / Raspberry) sempre acceso, AdGuard Home dalla pagina GitHub ufficiale (AdguardTeam/AdGuardHome) e l'accesso alle impostazioni del router.

1️⃣ Scarica e avvia AdGuard Home sul PC
2️⃣ Apri nel browser l'indirizzo che compare (di solito IP-del-PC:3000)
3️⃣ Segui la procedura guidata e crea nome utente e password
4️⃣ Accedi al router e, nelle impostazioni DNS, inserisci come DNS l'indirizzo IP del PC
5️⃣ Riavvia il Wi-Fi sui dispositivi

✅ Da ora vedi nel pannello tutte le richieste bloccate, per ogni dispositivo.

💡 Nelle impostazioni "Filtri DNS" puoi aggiungere liste di blocco, per esempio per tracker e siti pericolosi.
⚠️ Se il PC è spento, i dispositivi potrebbero non navigare: tieni un DNS di riserva configurato nel router.`
  },
  {
    id: "buzz-trascrizione",
    titolo: "Trasforma audio e video in testo o sottotitoli, offline (Buzz)",
    categoria: "AI",
    tipo: "Guida",
    sommario: "Trascrizioni e sottotitoli con Whisper, direttamente sul tuo PC.",
    tag: ["buzz", "whisper", "trascrizione", "sottotitoli", "audio"],
    testo: `Buzz è un programma gratuito e open source che usa il modello Whisper di OpenAI. Tutto resta sul tuo PC: niente account, niente abbonamenti.

Ti servono Buzz dal GitHub ufficiale (chidiwilliams/buzz) e un file audio o video.

1️⃣ Installa Buzz e aprilo
2️⃣ Premi "Nuova trascrizione" (o il pulsante "+")
3️⃣ Scegli il file o registra direttamente dal microfono
4️⃣ Seleziona la lingua (Italiano) e un modello: i piccoli sono più veloci, i grandi più precisi
5️⃣ Avvia: al primo uso scarica il modello
6️⃣ Esporta il risultato in testo (.txt) o sottotitoli (.srt)

💡 Usi pratici: appunti da una lezione, sottotitoli per i tuoi video, trascrizione di messaggi vocali lunghi.
⚠️ Controlla sempre il risultato: nomi e termini tecnici possono essere sbagliati.`
  },
  {
    id: "obtainium",
    titolo: "Aggiorna le app Android direttamente dagli sviluppatori (Obtainium)",
    categoria: "Android",
    tipo: "Guida",
    sommario: "Controlla gli aggiornamenti delle app open source su GitHub e te li propone.",
    tag: ["obtainium", "github", "aggiornamenti", "f-droid", "apk"],
    testo: `Molte app open source pubblicano gli aggiornamenti su GitHub prima (o al posto) degli store. Obtainium li controlla per te. Gratis e open source.

Ti servono Obtainium dalla pagina GitHub ufficiale (ImranR98/Obtainium) o da F-Droid e il link GitHub dell'app che vuoi seguire.

1️⃣ Installa Obtainium e concedi il permesso di installare app da questa fonte
2️⃣ Premi "Aggiungi app"
3️⃣ Incolla il link del progetto (per esempio la pagina GitHub di scrcpy o Termux)
4️⃣ Conferma e premi "Installa"
5️⃣ Da ora l'app controlla gli aggiornamenti e te li propone

⚠️ Installa solo app di sviluppatori fidati e controlla sempre il link: va bene per le app open source, non per scaricare programmi a caso.`
  },
  {
    id: "winget",
    titolo: "Dopo una formattazione, reinstalla tutti i programmi con un comando (winget)",
    categoria: "Windows",
    tipo: "Trucco",
    sommario: "Il gestore di pacchetti già incluso in Windows installa, aggiorna ed esporta la lista dei programmi.",
    tag: ["winget", "reinstallare", "formattare", "aggiornamenti", "terminale"],
    testo: `Winget è incluso in Windows 10/11. Apri il Terminale e usa questi comandi.

Cerca un programma:
> winget search nomeprogramma

Installa un programma:
> winget install nomeprogramma

Aggiorna tutto in un colpo:
> winget upgrade --all

Prima di formattare, salva la lista dei programmi:
> winget export -o programmi.json

Dopo la formattazione, reinstalla tutto:
> winget import -i programmi.json

💡 Conserva programmi.json insieme ai tuoi backup.
⚠️ Non tutti i programmi sono disponibili: quelli mancanti vengono segnalati e vanno installati a mano.`
  },
  {
    id: "cryptomator",
    titolo: "Metti file privati su Drive, OneDrive o Dropbox senza che nessuno li legga (Cryptomator)",
    categoria: "Privacy",
    tipo: "Guida",
    sommario: "Cifra i file prima che vadano nel cloud: neanche il servizio può leggerli.",
    tag: ["cryptomator", "cifratura", "cloud", "cassaforte", "privacy"],
    testo: `Cryptomator è gratuito e open source su computer. Ti serve Cryptomator da cryptomator.org e una cartella sincronizzata col tuo cloud preferito.

1️⃣ Installa Cryptomator e aprilo
2️⃣ Premi "Aggiungi cassaforte" > "Crea nuova"
3️⃣ Dai un nome alla cassaforte e scegli come posizione una cartella già sincronizzata col cloud
4️⃣ Scegli una password robusta
5️⃣ Salva la chiave di ripristino in un posto sicuro
6️⃣ Premi "Sblocca": compare come un'unità del PC, dove sposti i file privati

✅ Quando blocchi la cassaforte, nel cloud restano solo dati illeggibili.

⚠️ Se perdi password e chiave di ripristino, i file sono persi per sempre.
💡 Le app mobili possono avere costi: la versione per computer è gratuita. Controlla le condizioni sul sito.`
  },
  {
    id: "foto-vere-o-false",
    titolo: "Come capire se una foto o una notizia sono false",
    categoria: "Sicurezza",
    tipo: "Guida",
    sommario: "Tre controlli gratuiti: ricerca inversa, dati nascosti e strumenti per i video.",
    tag: ["fake news", "ricerca inversa", "google lens", "tineye", "invid"],
    testo: `Prima di condividere una foto "incredibile" fai tre controlli, tutti gratuiti.

1️⃣ Ricerca inversa: apri Google Lens, TinEye o la ricerca per immagini di Bing, carica la foto o incolla il link e guarda se compare già in articoli più vecchi o con un'altra storia
2️⃣ Dati nascosti (EXIF): su Windows, tasto destro sul file > Proprietà > Dettagli. Vedi data, fotocamera e a volte la posizione
3️⃣ Per i video: l'estensione gratuita InVID-WeVerify estrae i fotogrammi chiave da cercare come immagini

⚠️ I social e le chat di solito eliminano i dati EXIF: se mancano, non significa che la foto sia falsa.

Segnali d'allarme:
• Mani, testi o riflessi strani nelle immagini generate con AI
• Nessuna fonte, solo "mi è arrivato su WhatsApp"
• Titoli che ti spingono a condividere subito

💡 Se hai un dubbio, aspetta: meglio una condivisione in meno.`
  },
  {
    id: "sunshine-moonlight",
    titolo: "Streaming dei giochi del tuo PC su telefono, TV e portatile (Sunshine e Moonlight)",
    categoria: "Giochi",
    tipo: "Guida",
    sommario: "Sunshine trasforma il PC in server, Moonlight è l'app che lo riceve. Gratis e open source.",
    tag: ["sunshine", "moonlight", "game streaming", "gaming", "desktop remoto"],
    testo: `Ti servono un PC con scheda video NVIDIA, AMD o Intel recente, Sunshine dal GitHub ufficiale (LizardByte/Sunshine), Moonlight da moonlight-stream.org (Android, iOS, PC, Mac, Linux, alcune TV) e un buon Wi-Fi 5 GHz o, meglio, un cavo di rete.

1️⃣ Installa Sunshine sul PC e avvialo
2️⃣ Apri nel browser https://localhost:47990 (l'avviso del certificato è normale)
3️⃣ Crea nome utente e password
4️⃣ Installa Moonlight sull'altro dispositivo: trova da solo il PC
5️⃣ Selezionalo: ti mostra un PIN
6️⃣ Inserisci il PIN nella scheda "PIN" di Sunshine
7️⃣ Scegli il desktop o un gioco e avvia

✅ Ora giochi (o lavori) sul tuo PC da un altro schermo.

💡 Se lo abbini a Tailscale puoi farlo anche fuori casa.
⚠️ La qualità dipende molto dalla rete: se scatta, abbassa risoluzione e bitrate.`
  },
  {
    id: "kiwix",
    titolo: "Wikipedia e una biblioteca intera, anche senza connessione (Kiwix)",
    categoria: "Open source",
    tipo: "Tesoro nascosto",
    sommario: "Scarica interi siti per consultarli offline: Wikipedia, Wikibooks, guide di riparazione e altro.",
    tag: ["kiwix", "wikipedia", "offline", "biblioteca", "viaggi"],
    testo: `Kiwix è un'app gratuita e open source che scarica interi siti per consultarli offline. Perfetta per viaggi, zone senza segnale, o per tenerti una biblioteca sul telefono.

Ti servono Kiwix da kiwix.org (Windows, macOS, Linux, Android, iOS) e spazio libero: dagli archivi piccoli, di pochi MB, alle decine di GB.

1️⃣ Installa Kiwix e aprilo
2️⃣ Vai su "Libreria" e cerca per lingua
3️⃣ Scegli un archivio: Wikipedia in italiano (con o senza immagini), Wikibooks, Wikisource, guide di manutenzione e altro
4️⃣ Scarica e aspetta
5️⃣ Apri l'archivio e cerca come sempre: tutto funziona offline

💡 Scegli le versioni "senza immagini" o "mini" per risparmiare spazio.
💡 Esistono anche archivi con guide di riparazione, ricette, documentazione tecnica e libri liberi.`
  },
  {
    id: "sysinternals",
    titolo: "Il Task Manager non ti dice tutto: Process Explorer e Autoruns",
    categoria: "Sicurezza",
    tipo: "Guida",
    sommario: "Due strumenti ufficiali Microsoft per scoprire cosa gira davvero sul PC.",
    tag: ["sysinternals", "process explorer", "autoruns", "virustotal", "avvio"],
    testo: `Microsoft offre gratis la suite Sysinternals, usata da tecnici e analisti di sicurezza. Cerca "Sysinternals Process Explorer" sulla pagina ufficiale Microsoft.

Process Explorer (il Task Manager "potenziato"):
1️⃣ Scaricalo ed eseguilo come amministratore
2️⃣ Vai su Options > VirusTotal.com > Check VirusTotal.com
3️⃣ Accetta e guarda la nuova colonna: ogni processo riceve un punteggio
4️⃣ Un numero diverso da 0/xx merita un controllo, ma ricorda che sono possibili falsi positivi

Autoruns (tutto quello che parte con Windows):
1️⃣ Eseguilo come amministratore
2️⃣ Spunta Options > Hide Microsoft Entries
3️⃣ Guarda le schede "Logon", "Scheduled Tasks" e "Services"
4️⃣ Voci sconosciute? Cercale su internet prima di toccare qualsiasi cosa

⚠️ Se non sei sicuro, togli la spunta (disattiva) invece di eliminare: è reversibile.`
  },
  {
    id: "chromeos-flex",
    titolo: "Il vecchio PC lento diventa veloce con ChromeOS Flex",
    categoria: "Linux",
    tipo: "Guida",
    sommario: "Il sistema leggero di Google, gratuito, per riportare in vita portatili e PC vecchi.",
    tag: ["chromeos flex", "vecchio pc", "riciclo", "google", "chromebook"],
    testo: `ChromeOS Flex trasforma portatili e PC vecchi in un computer leggero, rapido e sicuro, centrato su browser e app web.

Ti servono un PC con processore Intel o AMD a 64 bit, almeno 4 GB di RAM e 16 GB di spazio, una chiavetta USB da 8 GB o più (verrà formattata) e il browser Chrome (o Edge) con l'estensione "Chromebook Recovery Utility".

1️⃣ Installa l'estensione "Chromebook Recovery Utility" sul PC con cui prepari la chiavetta
2️⃣ Aprila, premi "Inizia" > "Seleziona un modello da un elenco"
3️⃣ Come produttore scegli "Google ChromeOS Flex" e come prodotto "ChromeOS Flex"
4️⃣ Scegli la chiavetta e crea il supporto
5️⃣ Sul vecchio PC avvia dalla chiavetta (F12, F10, F2 o Esc, a seconda del modello)
6️⃣ Prova prima senza installare: se tutto va bene, scegli "Installa"

⚠️ L'installazione cancella tutto il disco: salva i file prima.
⚠️ Non c'è il Play Store e non girano i programmi Windows: serve soprattutto il browser.`
  },
  {
    id: "adb-debloat",
    titolo: "Elimina le app preinstallate che non puoi disinstallare, senza root (ADB)",
    categoria: "Android",
    tipo: "Guida",
    sommario: "Disattiva le app inutili del produttore per il tuo utente, in modo reversibile.",
    tag: ["adb", "debloat", "app preinstallate", "platform-tools", "disinstallare"],
    testo: `Ogni telefono arriva con app inutili che non si possono togliere dal menu. Con ADB puoi disattivarle per il tuo utente, gratis e senza root.

Ti servono un cavo USB, le Platform-tools dal sito ufficiale Android (cerca "SDK Platform Tools") e il Debug USB attivo (Opzioni sviluppatore).

1️⃣ Estrai le Platform-tools in una cartella e apri lì il terminale
2️⃣ Collega il telefono e conferma l'autorizzazione che compare
3️⃣ Verifica il collegamento con il primo comando
4️⃣ Cerca il nome dell'app con il secondo
5️⃣ Rimuovi per il tuo utente con il terzo, sostituendo NOME.PACCHETTO

> adb devices
> adb shell pm list packages
> adb shell pm uninstall -k --user 0 NOME.PACCHETTO

Per ripristinare un'app:
> adb shell cmd package install-existing NOME.PACCHETTO

💡 Per capire quali sono sicure, consulta "Universal Android Debloater Next Generation" su GitHub: spiega ogni pacchetto con un livello di rischio.

⚠️ NON rimuovere app di sistema, launcher, tastiera, Google Play Services e simili: il telefono potrebbe non avviarsi bene.
⚠️ Fai un backup prima e procedi una app per volta. Un ripristino di fabbrica riporta tutto com'era.`
  },
  {
    id: "home-assistant",
    titolo: "La tua casa intelligente senza hub a pagamento (Home Assistant)",
    categoria: "Domotica",
    tipo: "Guida",
    sommario: "Un sistema di domotica gratuito e open source per luci, prese, sensori e termostati.",
    tag: ["home assistant", "domotica", "virtualbox", "smart home", "automazioni"],
    testo: `Home Assistant collega dispositivi di tante marche diverse in un unico pannello, senza cloud obbligatorio.

Ti servono un PC che puoi lasciare acceso (anche vecchio), VirtualBox da virtualbox.org e l'immagine VDI di Home Assistant dalla pagina di installazione per Windows su home-assistant.io.

1️⃣ Scarica e decomprimi l'immagine VDI di Home Assistant
2️⃣ In VirtualBox crea una nuova macchina: tipo Linux, versione "Other Linux (64-bit)"
3️⃣ Assegna almeno 2 GB di RAM e abilita "EFI" nelle impostazioni di sistema
4️⃣ Come disco scegli "Usa un file di disco rigido virtuale esistente" e seleziona il VDI
5️⃣ Nelle impostazioni di rete scegli "Scheda con bridge"
6️⃣ Avvia la macchina e aspetta qualche minuto
7️⃣ Dal browser apri homeassistant.local:8123 (o l'IP che compare) e crea il tuo utente

✅ Dopo la configurazione iniziale, Home Assistant trova da solo molti dispositivi presenti in rete.

💡 Primo esperimento facile: un'automazione che accende una presa o una luce a un orario preciso.
⚠️ Il PC deve restare acceso, altrimenti la domotica si ferma.
⚠️ L'installazione viene aggiornata spesso: controlla i passaggi sul sito ufficiale.`
  },
  {
    id: "batocera",
    titolo: "Trasforma un PC in una console retro, da una chiavetta (Batocera)",
    categoria: "Giochi",
    tipo: "Guida",
    sommario: "Un sistema gratuito pensato solo per il retrogaming, che parte da USB senza toccare Windows.",
    tag: ["batocera", "retrogaming", "emulazione", "joypad", "homebrew"],
    testo: `Batocera è gratuito e open source, con interfaccia da console.

Ti servono una chiavetta USB da 16 GB o più (verrà formattata), Batocera da batocera.org, un programma per scrivere l'immagine come balenaEtcher (gratuito) e un joypad USB o Bluetooth.

1️⃣ Scarica l'immagine di Batocera per PC dal sito ufficiale
2️⃣ Con balenaEtcher scrivila sulla chiavetta
3️⃣ Avvia il PC dalla chiavetta (F12, F10, F2 o Esc, a seconda del modello)
4️⃣ Al primo avvio configura il joypad seguendo le istruzioni a schermo
5️⃣ Per aggiungere giochi, dal PC apri la rete, cerca la risorsa "BATOCERA" e copia nella cartella "roms"

⚠️ Giochi e BIOS: usa solo ciò che possiedi legalmente (copie dei tuoi giochi originali) o titoli liberi e homebrew creati dalla community, gratuiti e legali.

💡 Cerca i giochi homebrew per Game Boy, NES e Mega Drive: ce ne sono di bellissimi, pubblicati dagli autori.`
  },
  {
    id: "wake-on-lan",
    titolo: "Accendi il tuo PC di casa dal telefono (Wake-on-LAN)",
    categoria: "Rete",
    tipo: "Trucco",
    sommario: "Il PC resta spento e si accende solo quando serve, con un pacchetto inviato in rete.",
    tag: ["wake on lan", "wol", "accensione remota", "bios", "mac address"],
    testo: `Ti servono il PC collegato al router con cavo Ethernet (con il Wi-Fi spesso non funziona) e un'app gratuita per inviare il pacchetto: su F-Droid o sul Play Store ne trovi diverse.

Sul PC:
1️⃣ Entra nel BIOS/UEFI e attiva l'opzione "Wake on LAN" (a volte chiamata "Power on by PCI-E")
2️⃣ In Windows apri Gestione dispositivi > Schede di rete e fai doppio clic sulla scheda
3️⃣ Nella scheda "Risparmio energia" attiva "Consenti al dispositivo di riattivare il computer" e "Consenti solo ai magic packet"
4️⃣ Disattiva l'avvio rapido: Pannello di controllo > Opzioni risparmio energia > Specifica comportamento pulsanti di alimentazione
5️⃣ Annota l'indirizzo fisico (MAC) con il comando qui sotto

> ipconfig /all

Sul telefono:
1️⃣ Apri l'app, inserisci il MAC del PC e invia il segnale

✅ Il PC si accende.

💡 Per accenderlo anche da fuori casa serve un dispositivo sempre acceso nella rete che invii il segnale per te: puoi abbinarlo a Tailscale.
⚠️ I nomi delle opzioni cambiano molto da un produttore all'altro.`
  },
  {
    id: "photorec",
    titolo: "Recupera foto e file cancellati, anche da una scheda SD (PhotoRec)",
    categoria: "Backup",
    tipo: "Guida",
    sommario: "Un programma gratuito e open source che cerca sul disco i file che sembrano cancellati.",
    tag: ["photorec", "testdisk", "recupero dati", "scheda sd", "file cancellati"],
    testo: `Ti servono PhotoRec (fa parte di TestDisk) dal sito ufficiale cgsecurity.org e un secondo disco o una chiavetta dove salvare ciò che recuperi.

⚠️ Primo consiglio, fondamentale: smetti SUBITO di usare il disco o la scheda. Ogni nuovo file scritto può sovrascrivere quello che vuoi recuperare.

1️⃣ Scarica TestDisk/PhotoRec, estrai la cartella e apri "qphotorec_win.exe" (versione con finestre)
2️⃣ Scegli il disco o la scheda da analizzare
3️⃣ Seleziona la partizione e il tipo di file system (per Windows, di solito "Altro", cioè FAT/NTFS/exFAT)
4️⃣ Nella finestra del formato puoi scegliere solo i tipi di file che ti servono, per esempio JPG o PDF
5️⃣ Scegli la cartella di destinazione, su un ALTRO disco
6️⃣ Premi "Cerca" e aspetta

I file recuperati compaiono in cartelle "recup_dir", con nomi generici: il nome originale spesso si perde.

💡 Su SSD moderni, dopo la cancellazione, il recupero può non riuscire.
💡 Morale: fai sempre un backup. Se non l'hai ancora fatto, leggi la guida sulla regola 3-2-1.`
  },
  {
    id: "verifica-hash",
    titolo: "Prima di installare, controlla che il file non sia stato modificato (hash)",
    categoria: "Sicurezza",
    tipo: "Trucco",
    sommario: "Confronta l'impronta digitale del file con quella pubblicata sul sito ufficiale.",
    tag: ["hash", "sha256", "get-filehash", "integrità", "download"],
    testo: `Molti siti ufficiali pubblicano accanto al download una "impronta digitale" del file (hash, di solito SHA-256). Se la tua copia ha la stessa impronta, è identica all'originale.

1️⃣ Scarica il file dal sito ufficiale e trova il codice hash pubblicato nella pagina di download
2️⃣ Premi Win + X e apri il Terminale (o PowerShell)
3️⃣ Scrivi "Get-FileHash", uno spazio, e trascina il file nella finestra
4️⃣ Premi Invio: compare un lungo codice
5️⃣ Confrontalo con quello del sito: devono essere IDENTICI

✅ Uguale = file integro.
⚠️ Diverso = non installarlo: scaricalo di nuovo, solo dal sito ufficiale.

Alternativa:
> certutil -hashfile nomefile SHA256

💡 Se hai dubbi su un file, caricalo anche su VirusTotal per un controllo veloce.
⚠️ Se l'hash è pubblicato nella stessa pagina falsa da cui hai scaricato, il controllo non serve: usa sempre il sito ufficiale.`
  },
  {
    id: "angry-ip-scanner",
    titolo: "Chi è collegato alla tua rete? Scoprilo in 1 minuto (Angry IP Scanner)",
    categoria: "Rete",
    tipo: "Guida",
    sommario: "Mostra tutti i dispositivi presenti nella tua rete di casa.",
    tag: ["angry ip scanner", "wi-fi", "dispositivi", "intrusi", "router"],
    testo: `Angry IP Scanner è gratuito e open source. Ti serve il programma da angryip.org e il PC collegato alla tua rete.

⚠️ Usalo solo sulla tua rete di casa.

1️⃣ Installa e apri il programma: l'intervallo di indirizzi viene già impostato
2️⃣ Premi "Start"
3️⃣ Aspetta qualche secondo: compare l'elenco dei dispositivi attivi, con indirizzo IP e spesso il nome
4️⃣ Confronta con i dispositivi che hai davvero: telefoni, TV, console, PC, lampadine smart

Se trovi qualcosa di sconosciuto:
• Controlla bene: molti dispositivi hanno nomi strani ma sono tuoi
• Cambia la password del Wi-Fi (con cifratura WPA2 o WPA3)
• Cambia anche la password di accesso al router
• Riconnetti i tuoi dispositivi

💡 In alternativa, la pagina del router ha quasi sempre l'elenco dei dispositivi collegati.`
  },
  {
    id: "kde-connect",
    titolo: "Collega telefono e PC come in un ecosistema Apple, ma gratis (KDE Connect)",
    categoria: "Android",
    tipo: "Guida",
    sommario: "Notifiche, appunti, file e controllo del PC dal telefono.",
    tag: ["kde connect", "notifiche", "appunti condivisi", "telefono pc", "open source"],
    testo: `KDE Connect è un progetto gratuito e open source che unisce telefono e computer.

Ti servono KDE Connect da kdeconnect.kde.org (PC), l'app per Android dal Play Store o da F-Droid, e PC e telefono sulla stessa rete Wi-Fi.

1️⃣ Installa KDE Connect sul PC e sul telefono
2️⃣ Apri l'app su entrambi: dovrebbero vedersi a vicenda
3️⃣ Dal telefono tocca il nome del PC e scegli "Richiedi associazione"
4️⃣ Accetta la richiesta sul PC
5️⃣ Nelle impostazioni dell'app attiva i plugin che ti interessano

Cosa ci puoi fare:
• Leggere sul PC le notifiche del telefono
• Copiare un testo su un dispositivo e incollarlo sull'altro
• Inviare file con un tocco
• Usare il telefono come mouse, tastiera o telecomando per i media
• Far squillare il telefono se non lo trovi in casa

💡 Alcune funzioni richiedono permessi extra sul telefono: l'app ti guida passo passo.
⚠️ Associa solo i tuoi dispositivi e solo su reti fidate.`
  },
  {
    id: "clonezilla",
    titolo: "Fai una copia identica di tutto il PC, sistema compreso (Clonezilla)",
    categoria: "Backup",
    tipo: "Guida",
    sommario: "Salva l'intero disco in un'immagine e ripristinalo com'era, con programmi e impostazioni.",
    tag: ["clonezilla", "clonare disco", "immagine disco", "ripristino", "backup completo"],
    testo: `Clonezilla è gratuito e open source.

Ti servono una chiavetta USB da 8 GB o più (verrà formattata), Clonezilla da clonezilla.org (versione ISO), un hard disk esterno con abbastanza spazio libero e Ventoy o Rufus per preparare la chiavetta.

Per salvare:
1️⃣ Prepara la chiavetta avviabile con Clonezilla
2️⃣ Collega l'hard disk esterno, avvia dalla chiavetta e scegli la lingua
3️⃣ Scegli la modalità "device-image" e la "Modalità principiante"
4️⃣ Indica il disco esterno come posizione dove salvare l'immagine
5️⃣ Scegli "savedisk" (salva l'intero disco) e il disco da copiare
6️⃣ Conferma e aspetta la fine

Per ripristinare: stessa procedura, ma scegli "restoredisk".

⚠️ Il ripristino SOVRASCRIVE tutto il disco di destinazione: controlla bene i nomi dei dischi prima di confermare.
💡 Fai la copia a sistema "pulito", dopo un'installazione nuova, e rinnovala ogni tanto.`
  },
  {
    id: "ntfy",
    titolo: "Fatti mandare notifiche sul telefono da qualsiasi cosa (ntfy)",
    categoria: "Open source",
    tipo: "Guida",
    sommario: "Notifiche push al telefono con un comando, senza account e senza registrazione.",
    tag: ["ntfy", "notifiche", "automazione", "script", "powershell"],
    testo: `ntfy è un servizio gratuito e open source. Ti servono l'app ntfy per Android o iPhone e un PC con Windows, Linux o macOS.

1️⃣ Installa l'app ntfy sul telefono
2️⃣ Tocca "+" e crea un argomento (topic) con un nome LUNGO e impossibile da indovinare, per esempio doditech-8f3k2x9q
3️⃣ Dal PC invia un messaggio. Su Windows PowerShell usa il comando qui sotto, con il nome del tuo topic
4️⃣ Sul telefono arriva subito la notifica

> Invoke-RestMethod -Uri https://ntfy.sh/NOME-DEL-TUO-TOPIC -Method Post -Body "Ciao dal PC!"

Usi pratici:
• Un avviso quando finisce un download o un backup lungo
• Una notifica quando uno script o un'attività pianificata ha terminato
• Un promemoria da riga di comando

⚠️ Sul server pubblico chiunque conosca il nome del topic può leggere e scrivere: non inviare mai dati personali o password.
💡 Per più riservatezza puoi usare un tuo server ntfy: è open source.`
  },
  {
    id: "autohotkey",
    titolo: "Scrivi frasi intere con 3 lettere (AutoHotkey)",
    categoria: "Windows",
    tipo: "Trucco",
    sommario: "Espandi abbreviazioni e crea scorciatoie tutte tue con poche righe di script.",
    tag: ["autohotkey", "scorciatoie", "automazione", "abbreviazioni", "script"],
    testo: `AutoHotkey è un programma gratuito e open source che automatizza tastiera e Windows. Ti serve AutoHotkey (versione 2) da autohotkey.com.

1️⃣ Installa AutoHotkey
2️⃣ Clic destro sul desktop > Nuovo > AutoHotkey Script
3️⃣ Dai un nome al file (per esempio mie-scorciatoie.ahk) e aprilo con il Blocco note
4️⃣ Scrivi le righe qui sotto
5️⃣ Salva e fai doppio clic sul file

> ::ciaoc::Ciao, grazie per il messaggio! Ti rispondo appena posso.
> ::mmail::nome.cognome@esempio.it
> ^!c::Run "calc.exe"

✅ Scrivi "ciaoc" + spazio e compare la frase intera.
✅ Con Ctrl + Alt + C si apre la calcolatrice.

💡 Per averlo sempre attivo, metti un collegamento al file nella cartella di avvio: premi Win + R e scrivi shell:startup.
⚠️ Non scrivere mai password dentro gli script: restano in chiaro.
⚠️ Scarica gli script di altri solo da fonti fidate e leggi cosa fanno.`
  },
  {
    id: "everything-ricerca",
    titolo: "Everything: la ricerca di Windows, ma davvero veloce",
    categoria: "Windows",
    tipo: "Tool",
    sommario: "Indicizza tutti i file in pochi secondi e li trova mentre scrivi.",
    tag: ["everything", "voidtools", "ricerca file", "ntfs", "filtri"],
    testo: `Everything è gratuito per uso personale. Lo scarichi dal sito ufficiale voidtools.com.

1️⃣ Installalo (la versione "installer" ti propone di attivare il servizio per leggere subito i dischi NTFS)
2️⃣ Aprilo: dopo un istante vedi tutti i file del PC
3️⃣ Scrivi qualche lettera del nome e i risultati si aggiornano a ogni tasto

Filtri utili:
• ext:pdf → solo i PDF
• size:>1gb → file più grandi di 1 GB
• dm:today → modificati oggi
• Puoi combinarli: ext:mp4 size:>500mb

💡 Per trovare cosa occupa spazio, ordina i risultati per dimensione.
⚠️ Per i dischi non NTFS e per le unità di rete la ricerca può funzionare diversamente.`
  },
  {
    id: "wifi-qr-code",
    titolo: "Condividi il Wi-Fi con un QR code",
    categoria: "Rete",
    tipo: "Trucco",
    sommario: "Gli ospiti inquadrano il codice e si collegano, senza digitare la password.",
    tag: ["wi-fi", "qr code", "password", "ospiti", "rete ospiti"],
    testo: `Su Android, la strada più semplice:
1️⃣ Vai in Impostazioni > Rete e Internet > Wi-Fi
2️⃣ Tocca la rotellina accanto alla tua rete
3️⃣ Scegli "Condividi" o "Codice QR" e autenticati con sblocco o impronta
4️⃣ L'ospite inquadra il codice con la fotocamera

Vuoi stamparlo? Il QR contiene un testo scritto così, con i tuoi dati:
> WIFI:T:WPA;S:NomeRete;P:LaTuaPassword;;

Incollalo in un generatore di QR code che funzioni offline e stampalo.

💡 Con un'app o un software installati sul PC, la password non passa da siti esterni.
💡 Meglio ancora: crea una rete "ospiti" sul router, con una password diversa da quella principale.
⚠️ Chi inquadra il codice vede la password: non appenderlo dove passano estranei. Se la password è stata condivisa troppo, cambiala.`
  },
  {
    id: "alias-email",
    titolo: "Basta spam: un indirizzo email diverso per ogni sito (alias)",
    categoria: "Privacy",
    tipo: "Guida",
    sommario: "Un alias inoltra alla tua vera casella e si può spegnere se un sito perde o vende i dati.",
    tag: ["alias", "simplelogin", "firefox relay", "spam", "email"],
    testo: `Un alias è un indirizzo "usa e getta" che inoltra alla tua vera casella. Servizi con piano gratuito (con numero di alias limitato): SimpleLogin (simplelogin.io) e Firefox Relay (relay.firefox.com).

1️⃣ Crea un account sul servizio e verifica la tua email vera
2️⃣ Installa l'estensione per il browser
3️⃣ Quando ti iscrivi a un sito, clicca sul campo email e scegli "Crea alias"
4️⃣ Usa quell'indirizzo per la registrazione
5️⃣ Le email arrivano nella tua casella, senza mostrare il tuo indirizzo vero

• Se inizi a ricevere spam, disattiva solo quell'alias
• Capisci subito quale sito ha venduto o perso i tuoi dati

⚠️ Non usarlo per servizi critici (banca, fisco, account principali): se perdi l'accesso all'alias o al servizio, puoi bloccarti.
⚠️ Alcuni siti rifiutano gli alias.
💡 I limiti del piano gratuito cambiano: controlla le condizioni sul sito.`
  },
  {
    id: "calibre-ebook",
    titolo: "Crea una biblioteca di ebook gratuiti e legali (Calibre)",
    categoria: "Open source",
    tipo: "Guida",
    sommario: "Organizza e converti ebook, e scopri dove scaricare libri liberi in modo legale.",
    tag: ["calibre", "ebook", "epub", "liber liber", "project gutenberg"],
    testo: `Calibre è un programma gratuito e open source (calibre-ebook.com) che organizza, converte e sincronizza gli ebook.

Dove trovare ebook gratuiti e legali:
• Liber Liber (liberliber.it): classici della letteratura italiana
• Project Gutenberg (gutenberg.org): decine di migliaia di titoli di pubblico dominio
• Biblioteca Italiana (bibliotecaitaliana.it): testi della tradizione letteraria italiana

1️⃣ Installa e apri Calibre, scegli una cartella per la tua biblioteca
2️⃣ Scarica un libro in formato EPUB dai siti sopra
3️⃣ Trascina il file nella finestra di Calibre
4️⃣ Per cambiare formato: seleziona il libro e premi "Converti libri" (per esempio da EPUB a PDF)
5️⃣ Collega il tuo e-reader via USB e usa "Invia al dispositivo"

💡 Calibre scarica anche copertine e informazioni dei libri: premi "Modifica metadati" > "Scarica metadati".
⚠️ Scarica solo opere di pubblico dominio o distribuite con licenza libera.`
  },
  {
    id: "text-extractor",
    titolo: "Copia il testo da foto, screenshot e video (Text Extractor)",
    categoria: "Windows",
    tipo: "Trucco",
    sommario: "Con PowerToys copi in un secondo il testo non selezionabile, anche offline.",
    tag: ["text extractor", "ocr", "powertoys", "screenshot", "testo da immagine"],
    testo: `Ti serve Microsoft PowerToys (gratuito, dal Microsoft Store o da GitHub ufficiale).

1️⃣ Apri PowerToys e controlla che "Text Extractor" sia attivo
2️⃣ Premi Win + Shift + T
3️⃣ Il cursore diventa un mirino: trascina sull'area col testo
4️⃣ Il testo viene copiato negli appunti
5️⃣ Incollalo dove vuoi con Ctrl + V

💡 Funziona su immagini, schermate di programmi, finestre bloccate e video in pausa.
💡 La lingua del riconoscimento dipende dai pacchetti linguistici di Windows: se non legge bene l'italiano, aggiungilo da Impostazioni > Ora e lingua.
⚠️ Controlla sempre il risultato: lettere simili (0 e O, 1 e l) possono essere confuse.`
  },
  {
    id: "github-pages",
    titolo: "Pubblica un sito web gratis, senza hosting a pagamento (GitHub Pages)",
    categoria: "Open source",
    tipo: "Guida",
    sommario: "Metti online una pagina o un piccolo sito gratuitamente, senza server da gestire.",
    tag: ["github pages", "sito web", "hosting gratis", "index.html", "github"],
    testo: `Con GitHub Pages puoi mettere online una pagina o un piccolo sito gratuitamente. Ottimo per un portfolio, per delle guide o per la pagina link del tuo canale.

Ti servono un account gratuito su github.com e un file index.html (anche una pagina semplicissima).

1️⃣ Crea l'account su GitHub
2️⃣ Premi "New repository"
3️⃣ Chiamalo NOMEUTENTE.github.io (con il tuo nome utente reale) e lascialo pubblico
4️⃣ Premi "Add file" > "Upload files" e carica il tuo index.html
5️⃣ Conferma con "Commit changes"
6️⃣ Vai su Settings > Pages e controlla che la pubblicazione parta dal ramo principale
7️⃣ Dopo uno o due minuti il sito è su https://NOMEUTENTE.github.io

💡 Per iniziare, una pagina con i link ai tuoi canali (Telegram, YouTube) è il progetto perfetto.
⚠️ Tutto quello che carichi è pubblico: niente dati personali, password o chiavi.`
  },
  {
    id: "bot-telegram-python",
    titolo: "Crea un bot Telegram che pubblica nel tuo canale (Python)",
    categoria: "Open source",
    tipo: "Guida",
    sommario: "Poche righe di codice per pubblicare post nel canale in automatico.",
    tag: ["bot telegram", "python", "botfather", "automazione", "canale"],
    testo: `Con un bot e poche righe di codice puoi pubblicare post sul canale in automatico, anche programmandoli. Ti servono Python da python.org e l'app Telegram.

1️⃣ Su Telegram cerca @BotFather e scrivi /newbot
2️⃣ Scegli nome e username: ti consegna un TOKEN (una lunga stringa)
3️⃣ Aggiungi il bot come AMMINISTRATORE del tuo canale, con il permesso di pubblicare messaggi
4️⃣ Installa la libreria con il comando qui sotto
5️⃣ Crea un file bot.py con il codice sotto (cambia TOKEN e CANALE)
6️⃣ Avvia lo script con "python bot.py"

> pip install requests

> import requests
> TOKEN = "IL_TUO_TOKEN"
> CANALE = "@nomedelcanale"
> TESTO = "Ciao dal mio bot!"
> r = requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage", data={"chat_id": CANALE, "text": TESTO})
> print(r.json())

✅ Il messaggio compare nel canale.

💡 Per programmare l'invio usa l'Utilità di pianificazione di Windows e fai eseguire lo script all'ora scelta.
⚠️ Il TOKEN è la chiave del bot: non condividerlo mai, né in chat né nei post. Se lo scopre qualcuno, rigeneralo con BotFather.`
  },
  {
    id: "portableapps",
    titolo: "I tuoi programmi su chiavetta, senza installare nulla (PortableApps)",
    categoria: "Windows",
    tipo: "Tool",
    sommario: "Una raccolta gratuita di programmi che girano da chiavetta e non lasciano tracce sul PC.",
    tag: ["portableapps", "programmi portatili", "chiavetta", "senza installazione"],
    testo: `PortableApps.com è una raccolta gratuita di programmi che girano direttamente da chiavetta o da una cartella.

1️⃣ Scarica "PortableApps.com Platform" da portableapps.com e installalo sulla chiavetta (o in una cartella)
2️⃣ Apri il menu: trovi un catalogo di programmi gratuiti
3️⃣ Scegli cosa installare: browser, lettori multimediali, suite per ufficio, strumenti di sistema, editor di testo e molto altro
4️⃣ Avvia i programmi direttamente dal menu

• Lavori su qualsiasi PC Windows con i tuoi programmi e le tue impostazioni
• Per molti programmi non servono permessi di amministratore
• Contro: la chiavetta deve essere veloce, altrimenti tutto è lento
• Contro: serve Windows

💡 Idea smanettone: una chiavetta "pronto soccorso" con strumenti di diagnosi e pulizia.
⚠️ Fai un backup della chiavetta: se si rompe o la perdi, perdi anche impostazioni e dati.`
  },
  {
    id: "organic-maps",
    titolo: "Mappe e navigazione senza internet, gratis e senza tracciamento (Organic Maps)",
    categoria: "Android",
    tipo: "Guida",
    sommario: "Un'app open source basata su OpenStreetMap che funziona completamente offline.",
    tag: ["organic maps", "mappe offline", "openstreetmap", "navigazione", "escursioni"],
    testo: `Organic Maps è gratuita e open source (organicmaps.app, Play Store, App Store o F-Droid). Ottima in montagna, all'estero senza roaming o quando manca il segnale.

1️⃣ Installa l'app e apri la mappa
2️⃣ Quando ti sposti in una zona, l'app propone di scaricare la mappa di quella regione (oppure vai su Menu > Scarica mappe)
3️⃣ Scarica le regioni che ti servono: l'Italia si scarica per regioni
4️⃣ Ora cerca indirizzi e luoghi, o calcola un percorso, anche in modalità aereo

• Percorsi a piedi, in bici e in auto
• Segnaposto salvabili e organizzabili in liste
• Sentieri e punti d'acqua molto dettagliati per escursioni

💡 Prima di partire, scarica le mappe quando sei sul Wi-Fi.
⚠️ La qualità dipende da OpenStreetMap: in alcune zone mancano negozi o orari. Per i sentieri controlla sempre meteo e difficoltà.`
  },
  {
    id: "iperf3",
    titolo: "Il tuo Wi-Fi è lento? Misuralo davvero (iperf3)",
    categoria: "Rete",
    tipo: "Guida",
    sommario: "Misura la velocità tra due dispositivi dentro casa, per capire se il problema è Wi-Fi, cavo o router.",
    tag: ["iperf3", "velocità rete", "wi-fi", "test", "lan"],
    testo: `Gli speed test misurano il collegamento verso fuori. Con iperf3 misuri la velocità tra due dispositivi DENTRO casa.

Ti servono iperf3 su due dispositivi della stessa rete (per Windows i file da iperf.fr, per Linux/macOS è nei repository) e uno dei due collegato con CAVO al router, per fare il confronto.

1️⃣ Sul dispositivo A (cavo) apri il terminale ed esegui il primo comando
2️⃣ Scopri il suo indirizzo IP con "ipconfig" (Windows) oppure "ip a" (Linux)
3️⃣ Sul dispositivo B (quello da testare) esegui il secondo comando, con l'IP di A
4️⃣ Aspetta 10 secondi: leggi la velocità media in Mbits/sec

> iperf3 -s
> iperf3 -c INDIRIZZO_IP_DI_A

Altre prove:
> iperf3 -c INDIRIZZO_IP_DI_A -R
> iperf3 -c INDIRIZZO_IP_DI_A -P 4

Come leggerlo:
• Con cavo gigabit ti aspetti circa 900 Mbit/s o più
• Il Wi-Fi varia molto con distanza, muri e interferenze
• Confronta stanza per stanza per capire dove serve un ripetitore

⚠️ Se il test non parte, controlla che il firewall permetta la porta 5201.`
  },
  {
    id: "wifi-analyzer",
    titolo: "Il Wi-Fi scatta? Forse sei nel canale più affollato del palazzo (WiFiAnalyzer)",
    categoria: "Rete",
    tipo: "Trucco",
    sommario: "Un'app gratuita mostra quali canali Wi-Fi sono liberi, così scegli quello giusto.",
    tag: ["wifi analyzer", "canali wi-fi", "interferenze", "router", "2,4 ghz"],
    testo: `Nei condomini decine di reti si sovrappongono sugli stessi canali. WiFiAnalyzer è un'app gratuita e open source per Android (Play Store o F-Droid).

1️⃣ Installa l'app e concedi il permesso richiesto (per cercare le reti Android chiede la posizione)
2️⃣ Apri la schermata "Valutazione canali" per vedere quali canali sono più liberi
3️⃣ Guarda il grafico: più reti stanno sullo stesso canale, peggio funziona
4️⃣ Entra nel pannello del router e cambia il canale con uno meno usato

• Sui 2,4 GHz i canali che non si sovrappongono sono 1, 6 e 11: scegli uno di questi
• I 5 GHz hanno più canali e meno traffico, ma meno portata attraverso i muri

💡 Fai il test dove usi di più il Wi-Fi, non vicino al router.
💡 Dopo il cambio, rifai una prova con iperf3 per vedere la differenza.
⚠️ Se la rete è gestita dal provider, a volte il canale non è modificabile.`
  },
  {
    id: "google-takeout",
    titolo: "Scarica tutto quello che Google ha su di te (Takeout)",
    categoria: "Privacy",
    tipo: "Sicurezza",
    sommario: "Esporta foto, email, cronologia e posizioni: utile come backup e per capire cosa viene salvato.",
    tag: ["google takeout", "dati personali", "cronologia", "privacy", "esportare"],
    testo: `Google ti permette di esportare i tuoi dati: foto, email, cronologia, posizioni, calendari e molto altro. Lo trovi su takeout.google.com

1️⃣ Accedi con il tuo account Google
2️⃣ Scegli cosa esportare (puoi selezionare tutto o solo alcuni servizi)
3️⃣ Premi "Passaggio successivo" e scegli formato e dimensione degli archivi
4️⃣ Scegli se ricevere un link via email o salvare su un cloud
5️⃣ Avvia l'esportazione: può richiedere ore o giorni
6️⃣ Scarica l'archivio dal link, entro la scadenza indicata

Poi dai un'occhiata a:
• La cronologia delle posizioni e delle ricerche
• Le app e i siti collegati al tuo account
• Le attività salvate (da "Attività personale" nel tuo account)

💡 Se non ti piace quello che trovi, nelle impostazioni dell'account puoi attivare l'eliminazione automatica delle attività o disattivare i salvataggi.
⚠️ L'archivio contiene dati molto personali: conservalo in un posto sicuro, meglio cifrato (vedi la guida su Cryptomator). Fallo solo con il tuo account.`
  },
  {
    id: "firefox-containers",
    titolo: "Più account sullo stesso sito, nello stesso browser (Firefox Containers)",
    categoria: "Privacy",
    tipo: "Trucco",
    sommario: "L'estensione di Mozilla divide il browser in contenitori separati con cookie e sessioni propri.",
    tag: ["firefox", "containers", "account multipli", "cookie", "estensione"],
    testo: `Ti servono Firefox e l'estensione "Firefox Multi-Account Containers" da addons.mozilla.org.

1️⃣ Installa l'estensione e clicca sulla sua icona
2️⃣ Crea i contenitori che ti servono (per esempio Personale, Lavoro, Acquisti)
3️⃣ Apri una nuova scheda dentro un contenitore: il bordo colorato ti dice dove sei
4️⃣ Accedi ai tuoi account in contenitori diversi
5️⃣ Per bloccare un sito in un contenitore: apri il sito, clicca sull'icona e scegli "Apri sempre in ..."

Idee pratiche:
• Account personale e di lavoro dello stesso servizio, aperti insieme
• Un contenitore solo per i social, così i cookie non seguono le altre schede
• Uno per gli acquisti online

⚠️ Non è una VPN e non è una protezione completa: indirizzo IP e impronta del browser restano gli stessi. Un contenitore separa solo i cookie e i dati salvati dai siti.`
  },
  {
    id: "backup-automatico-robocopy",
    titolo: "Backup automatico settimanale con gli strumenti già dentro Windows",
    categoria: "Backup",
    tipo: "Guida",
    sommario: "Robocopy e l'Utilità di pianificazione copiano i tuoi file da soli, senza programmi esterni.",
    tag: ["robocopy", "utilità di pianificazione", "backup automatico", "taskschd", "windows"],
    testo: `Ti servono un disco esterno (o una seconda unità) con la lettera sempre uguale e la cartella da salvare, per esempio i tuoi Documenti.

1️⃣ Premi Win + R e scrivi "taskschd.msc"
2️⃣ Clicca "Crea attività di base" e dai un nome (per esempio "Backup documenti")
3️⃣ Come attivazione scegli "Settimanale" e l'orario che preferisci
4️⃣ Come azione scegli "Avvia un programma"
5️⃣ In Programma/script scrivi "robocopy"
6️⃣ Negli argomenti scrivi la riga qui sotto, adattando i percorsi
7️⃣ Conferma e salva

> "C:\\Users\\TUONOME\\Documents" "D:\\Backup\\Documenti" /E /XO /R:1 /W:1

Cosa fanno le opzioni:
• /E copia anche le sottocartelle
• /XO salta i file più vecchi di quelli già presenti
• /R:1 /W:1 evita lunghe attese in caso di errori

✅ Per provarlo: tasto destro sull'attività > Esegui.

⚠️ NON usare l'opzione /MIR se non sai cosa fa: cancella nella destinazione i file eliminati nell'origine.
⚠️ Se il disco esterno non è collegato, la copia non parte.
💡 È solo una delle tre copie della regola 3-2-1: tieni anche una copia fuori casa.`
  },
  {
    id: "shelter-profilo-lavoro",
    titolo: "Isola le app sul telefono con un profilo di lavoro gratuito (Shelter)",
    categoria: "Android",
    tipo: "Guida",
    sommario: "Uno spazio separato dove le app non vedono i tuoi dati: due account e app congelate.",
    tag: ["shelter", "profilo di lavoro", "isolamento", "app clonate", "privacy"],
    testo: `Android ha una funzione nascosta: il profilo di lavoro, uno spazio separato dove le app non vedono i tuoi dati. Shelter è un'app gratuita e open source che lo gestisce senza bisogno di un'azienda.

Ti servono Shelter da F-Droid o dalla pagina GitHub ufficiale (PeterCxy/Shelter) e un telefono Android recente.

1️⃣ Installa Shelter e aprilo
2️⃣ Conferma le richieste per creare il profilo di lavoro: l'operazione può richiedere qualche momento
3️⃣ Dall'elenco delle app, scegli quella da isolare e tocca "Clona nel profilo di lavoro"
4️⃣ Troverai l'app con l'icona della valigetta: è una copia separata, con dati propri

Cosa ci puoi fare:
• Usare due account della stessa app
• Mettere un'app poco fidata in uno spazio isolato
• "Congelare" le app che non usi: smettono di funzionare e di consumare risorse finché non le riattivi

⚠️ Su alcuni telefoni (soprattutto con interfacce molto personalizzate) la funzione può comportarsi in modo diverso.
⚠️ L'isolamento riduce i rischi ma non è una protezione assoluta.
💡 I permessi del profilo di lavoro sono separati: controllali dalle impostazioni.`
  }
];
