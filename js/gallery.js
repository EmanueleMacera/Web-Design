let i = 0;
const slides = $('.slide');
const intervalTime = 4000;
let interval;

// Funzione per gestire il click sui slide
slides.click(function () {
  clearInterval(interval); // Stoppa l'intervallo
  $('.active').removeClass('active').addClass('nonActive').find('span').empty();
  $(this).removeClass('nonActive').addClass('active');
  i = $(this).index();
  interval = setInterval(go, intervalTime); // Avvia di nuovo l'intervallo
});

// Avvia l'intervallo all'avvio
interval = setInterval(go, intervalTime);

function go() {
  $('.active').removeClass('active').addClass('nonActive').find('span').empty();
  $(slides[i % slides.length]).removeClass('nonActive').addClass('active');
  i++;
}
