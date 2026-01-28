const scenarios = [
  {
    id: 1,
    title: "Accesso all'account di un'altra persona",
    description: "Una persona entra senza permesso nell'account email o social di un'altra, leggendo messaggi privati.",
    crime: "Accesso abusivo a sistema informatico",
    law: "Art. 615-ter c.p.",
    explanation: "Commette reato chiunque si introduca abusivamente in un sistema informatico o telematico protetto da misure di sicurezza.<br>Non è necessario causare danni: è sufficiente l'accesso non autorizzato.",
    consequences: "Reclusione fino a 3 anni. Pena aumentata se il fatto è aggravato: es. danni, pubblica amministrazione, furto di dati."
  },
  {
    id: 2,
    title: "Phishing via mail",
    description: "Viene inviata un'email fingendosi una banca per rubare password e dati personali.",
    crime: "Truffa informatica",
    law: "Art. 640-ter c.p.",
    explanation: "La truffa informatica si verifica quando qualcuno altera il funzionamento di un sistema informatico o inganna la vittima per ottenere un profitto illecito con altrui danno.",
    consequences: "Reclusione da 6 mesi a 3 anni e multa. Pene più gravi se il fatto è aggravato."
  },
  {
    id: 3,
    title: "Cancellazione intenzionale di dati aziendali",
    description: "Un dipendente cancella volontariamente file importanti dai server dell'azienda.",
    crime: "Danneggiamento di informazioni, dati e programmi informatici",
    law: "Art. 635-bis c.p.",
    explanation: "È reato distruggere, deteriorare, cancellare o rendere inservibili dati o programmi informatici altrui.",
    consequences: "Reclusione da 6 mesi a 3 anni. Pene aggravate se colpisce sistemi pubblici o di interesse pubblico."
  },
  {
    id: 4,
    title: "Creazione di un documento digitale falso",
    description: "Viene creato un certificato digitale falso con il nome di un'altra persona.",
    crime: "Falsità in documento informatico",
    law: "Art. 491-bis c.p.",
    explanation: "Le norme sulla falsità in atti si applicano anche ai documenti informatici. Un documento digitale ha valore legale.",
    consequences: "Stesse pene previste per la falsità in documenti tradizionali."
  },
  {
    id: 5,
    title: "Wi-Fi “rubato”",
    description: "&emsp;<b>Marco:</b> “Ho trovato una rete Wi-Fi protetta, ma con un programmino sono riuscito a entrarci. Non ho fatto danni, ho solo navigato.”<br>&emsp;<b>Amico:</b> “Ma il proprietario non lo sa?”<br>&emsp;<b>Marco:</b> “No, però non gli ho rotto niente… quindi non è un reato, giusto?”",
    crime: "Accesso abusivo a sistema informatico o telematico",
    law: "Art. 615-ter c.p.",
    explanation: "Commette questo reato chiunque si introduca in un sistema informatico o telematico protetto da misure di sicurezza senza autorizzazione. Non è necessario causare danni: è sufficiente l’accesso non consentito, anche solo per navigare.",
    consequences: "Reclusione fino a 3 anni. La pena aumenta se il fatto è commesso su sistemi di interesse pubblico o con sottrazione di dati."
  },
  {
    id: 6,
    title: "Sito mandato offline",
    description: "&emsp;<b>Responsabile IT:</b> “Il nostro sito è irraggiungibile da ore, qualcuno sta inviando migliaia di richieste al secondo.<br>&emsp;<b>Direttore:</b> “Quindi non è un guasto?”<br>&emsp;<b>Responsabile IT:</b> “No, è un attacco per bloccare il servizio.”",
    crime: "Danneggiamento di sistemi informatici o telematici",
    law: "Art. 635-quater c.p.",
    explanation: "È reato rendere inservibile un sistema informatico, ostacolandone il funzionamento, ad esempio tramite un attacco che sovraccarica il server e impedisce agli utenti di accedere al servizio.",
    consequences: "Reclusione da 1 a 5 anni. Pene aggravate se il fatto colpisce sistemi pubblici o di pubblica utilità."
  },
  {
    id: 7,
    title: "Backup cancellato",
    description: "&emsp;<b>Tecnico:</b> “Ho cancellato i dati, ma tanto avevano il backup.”<br>&emsp;<b>Avvocato:</b> “Il fatto che siano recuperabili non elimina il reato.”",
    crime: "Danneggiamento di informazioni, dati e programmi informatici",
    law: "Art. 635-bis c.p.",
    explanation: "Il reato consiste nel distruggere, deteriorare, cancellare o rendere inservibili dati informatici altrui. Il fatto che i dati possano essere recuperati non esclude automaticamente la responsabilità penale.",
    consequences: "Reclusione da 6 mesi a 3 anni. Aumento della pena se il danno riguarda sistemi pubblici o di interesse pubblico."
  },
  {
    id: 8,
    title: "Profilo social fake",
    description: "&emsp;<b>Ragazza:</b> “Qualcuno ha creato un profilo social con il mio nome e le mie foto.”<br>&emsp;<b>Amico:</b> “Scrive anche alle persone fingendo di essere te?”<br>&emsp;<b>Ragazza:</b> “Sì, e sta rovinando la mia reputazione.”",
    crime: "Sostituzione di persona (commessa tramite strumenti informatici)",
    law: "Art. 494 c.p.",
    explanation: "Commette questo reato chi crea un falso profilo e si attribuisce l’identità di un’altra persona per trarre vantaggio o arrecare danno. L’uso di strumenti informatici non cambia la natura del reato, ma ne è oggi la forma più diffusa.",
    consequences: "Reclusione fino a 1 anno.<br>Possibili aggravanti se il fatto causa danni rilevanti alla vittima."
  },
  {
    id: 9,
    title: "Dipendente curioso",
    description: "&emsp;<b>Dipendente:</b> “Lavoro in ospedale, ho guardato la cartella clinica di un vicino per curiosità.”<br>&emsp;<b>Collega:</b> “Ma non era un tuo paziente…”<br>&emsp;<b>Dipendente:</b> “Sì, però ho solo letto, non ho modificato nulla.”",
    crime: "Accesso abusivo a sistema informatico + trattamento illecito di dati",
    law: "Art. 615-ter c.p.<br>Art. 167 D.lgs. 196/2003 (Codice Privacy)",
    explanation: "Anche se si è autorizzati ad accedere a un sistema, è reato entrare in aree o consultare dati per cui non si ha titolo. Nel caso di dati sanitari si aggiunge la violazione delle norme sulla protezione dei dati personali.",
    consequences: "Reclusione fino a 3 anni per l’accesso abusivo. Ulteriori sanzioni penali e amministrative per il trattamento illecito dei dati."
  },
  {
    id: 10,
    title: "Download di software pirata",
    description: "&emsp;<b>Utente:</b> “Ho scaricato un programma crackato, ma dentro c’era un file che ha rubato tutte le password del mio computer.”<br>&emsp;<b>Esperto:</b> “Quel programma era stato modificato apposta per diffondere malware.”",
    crime: "Diffusione di programmi diretti a danneggiare o interrompere un sistema informatico",
    law: "Art. 615-quinquies c.p.",
    explanation: "È reato diffondere programmi informatici contenenti malware, virus o altri codici dannosi, capaci di compromettere il funzionamento di sistemi o sottrarre informazioni.",
    consequences: "Reclusione fino a 2 anni e multa. Pene più gravi se dal fatto deriva un danno rilevante."
  }
];

const scenarioBox = document.getElementById("scenarioBox");
const resultBox = document.getElementById("result");

const resTitle = document.getElementById("res-title");
const resDescription = document.getElementById("res-description");
const resCrime = document.getElementById("res-crime");
const resLaw = document.getElementById("res-law");
const resExplanation = document.getElementById("res-explanation");
const resConsequences = document.getElementById("res-consequences");
const resCulpability = document.getElementById("res-culpability");
const resAntigiuridicità = document.getElementById("res-antigiuridicità");

// Generazione pulsanti
scenarios.forEach((scenario) => {
  const btn = document.createElement("button");
  btn.className = "scenario-btn";
  btn.textContent = scenario.title;

  btn.addEventListener("click", () => showScenario(scenario));

  scenarioBox.appendChild(btn);
});

// Mostra risultato
function showScenario(scenario) {
  resTitle.textContent = scenario.title;
  resDescription.innerHTML = scenario.description;
  resCrime.textContent = scenario.crime;
  resLaw.innerHTML = scenario.law;
  resExplanation.innerHTML = scenario.explanation;
  resConsequences.innerHTML = scenario.consequences;

  resultBox.style.display = "block";
  resultBox.scrollIntoView({ behavior: "smooth" });
}