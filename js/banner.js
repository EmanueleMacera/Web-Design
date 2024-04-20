// Seleziona gli elementi del cookie banner
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

// Funzione per chiudere il banner e memorizzare la scelta dell'utente
const closeCookieBanner = () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
};

// Aggiungi evento al pulsante per chiudere il banner
cookieButton.addEventListener("click", closeCookieBanner);

// Mostra il banner solo se non è stata memorizzata la scelta dell'utente
const displayCookieBanner = () => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
};

// Controlla dopo un ritardo se mostrare il banner
setTimeout(displayCookieBanner);

// Funzione per rimuovere il banner (es. dopo che l'utente ha accettato i cookie)
const removeCookieBanner = () => {
  cookieContainer.remove();
  localStorage.removeItem("cookieBannerDisplayed");
};

// Utilizzo opzionale: Rimuovi il banner dopo un certo periodo (es. 30 giorni)
const removeBannerAfterPeriod = () => {
  const daysUntilExpire = 30;
  const millisecondsInADay = 24 * 60 * 60 * 1000; // 24 ore x 60 minuti x 60 secondi x 1000 millisecondi
  const expiryTime = daysUntilExpire * millisecondsInADay;
  
  setTimeout(removeCookieBanner, expiryTime);
};

// Esegui la rimozione del banner dopo il periodo specificato
removeBannerAfterPeriod();
