let count = 0;

function aktualisieren() {
  document.getElementById("countLabel").innerHTML = count;
}

function minus() {
  count -= 1;
  aktualisieren();
}

function reset() {
  count = 0;
  aktualisieren();
}

function plus() {
  count += 1;
  aktualisieren();
}
