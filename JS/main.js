function otvoriMeni() {
  document.body.classList.toggle("meniOtvoren");
}

function zatvoriSlide() {
  document.body.classList.remove("planetes");
  document.body.classList.remove("crs");
  document.body.classList.remove("sistemis");
  document.body.classList.remove("putovanjas");
  document.body.classList.remove("meniOtvoren");
}

function otvoriPlanete() {
  document.body.classList.add("planetes");
  document.body.classList.remove("meniOtvoren");
}

function sljedeciSlide1() {
  document.body.classList.remove("planetes");
  document.body.classList.remove("meniOtvoren");
  document.body.classList.add("sistemis");
}

function otvoriSisteme() {
  document.body.classList.toggle("sistemis");
  document.body.classList.remove("meniOtvoren");
}

function sljedeciSlide2() {
  document.body.classList.remove("sistemis");
  document.body.classList.add("crs");
  document.body.classList.remove("meniOtvoren");
}

function otvoriCR() {
  document.body.classList.toggle("crs");
  document.body.classList.remove("meniOtvoren");
}

function sljedeciSlide3() {
  document.body.classList.remove("crs");
  document.body.classList.add("putovanjas");
  document.body.classList.remove("meniOtvoren");
}

function otvoriPutovanja() {
  document.body.classList.toggle("putovanjas");
  document.body.classList.remove("meniOtvoren");
}

function sljedeciSlide4() {
  document.body.classList.remove("putovanjas");
  document.body.classList.add("planetes");
  document.body.classList.remove("meniOtvoren");
}

function hvala() {
  alert("Hvala na poruci! Očekujte naš odgovor! (ili ne)");
}

function scroll() {
  window.scrollTo(0, 0);
}
