const url = `https://mvnwbvtixgopigcrnqrm.supabase.co/rest/v1/Banker?select=*&limit=5&order=id`;
const apiKey = `sb_publishable_ySIb969bk4BcFXEOsKdIww_zyp9KW3L`;
const options = {
  headers: {
    apikey: apiKey,
  },
};
const data = await fetch(url, options).then((res) => res.json());
console.log(data);
const res = await fetch(url, options);

const skrivOpContainer = document.querySelector("#list");
let valgteBank = "";

let taellerTal = 102.01;
const storttal = document.querySelector("#storttal");

/*****************************************************************/
/*************En hel masse js til søge bank funktion *************/
/*****************************************************************/

const trigger = document.getElementById("trigger");
const panel = document.getElementById("panel");
const search = document.getElementById("search");
const empty = document.getElementById("empty");
const label = document.getElementById("label");

trigger.addEventListener("click", () => {
  const isOpen = panel.classList.toggle("open");
  trigger.classList.toggle("open", isOpen);
  if (isOpen) setTimeout(() => search.focus(), 50);
  else resetSearch();
});

search.addEventListener("input", () => {
  const q = search.value.toLowerCase();
  let visible = 0;
  document.querySelectorAll(".dd-item").forEach((item) => {
    const match = item.textContent.toLowerCase().includes(q);
    item.classList.toggle("hidden", !match);
    if (match) visible++;
  });
  empty.style.display = visible === 0 ? "block" : "none";
});

document.getElementById("list").addEventListener("click", (e) => {
  const item = e.target.closest(".dd-item");
  if (!item) return;
  valgteBank = item.dataset.bankId - 1;
  console.log(valgteBank);
  label.textContent = item.dataset.value;
  trigger.classList.add("selected");
  trigger.classList.remove("open");
  panel.classList.remove("open");
  resetSearch();
  fillData();
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#dd")) {
    trigger.classList.remove("open");
    panel.classList.remove("open");
    resetSearch();
  }
});

function resetSearch() {
  search.value = "";
  document
    .querySelectorAll(".dd-item")
    .forEach((i) => i.classList.remove("hidden"));
  empty.style.display = "none";
}

/*********************************************************************/
/*********************************************************************/
/*********************************************************************/

skrivOpContainer.innerHTML = "";
data.forEach((bank) => {
  skrivOpContainer.innerHTML += `<div class="dd-item" data-bank-id=${bank.id} data-value="${bank.bankNavn}">${bank.bankNavn}</div>`;
});

function fillData() {
  let bank = data[valgteBank];
  document.querySelector("#bankLogo").innerHTML =
    `<img src="${bank.bankLogo}">`;
  document.querySelector("#bankNavn").innerHTML = `<h1>${bank.bankNavn}</h1>`;
  document.querySelector("#linkContainer").innerHTML =
    `<a href="${bank.bankLink}" target="_blank" id="link">Skriv dig op Hér!</a>`;
  document.querySelector("#tider").innerHTML = `<p>${bank.aabningstider}</p>`;
  document.querySelector("#telefon").innerHTML = `<p>${bank.bankTelefon}</p>`;
}
setInterval(function talTaeller() {
  taellerTal += 0.01;
  storttal.innerHTML = "3.213." + taellerTal.toFixed(2) + "KR";
}, 25);
// talTaeller();
