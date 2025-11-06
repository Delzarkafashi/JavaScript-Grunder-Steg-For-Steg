// === DEL 1: Bygg “Kontakta oss” helt i JS  ===
const kontaktaoss = document.getElementById("kontaktaoss");

// Rubrik
const rubrik = document.createElement("h2");
rubrik.textContent = "Kontakta oss";
rubrik.style.textAlign = "center";
rubrik.style.margin = "0 0 8px";
kontaktaoss.appendChild(rubrik);

// Statisk info
const telP = document.createElement("p");
telP.textContent = "Telefonnummer: 010-000 00 00";
telP.style.textAlign = "center";
telP.style.margin = "0 0 4px";
kontaktaoss.appendChild(telP);

const adressP = document.createElement("p");
adressP.textContent = "Adress: Storgatan 16, 111 11 Stockholm";
adressP.style.textAlign = "center";
adressP.style.margin = "0 0 16px";
kontaktaoss.appendChild(adressP);

// Instruktion
const infoH3 = document.createElement("h3");
infoH3.textContent = "Fyll i dina uppgifter nedan:";
infoH3.style.textAlign = "center";
infoH3.style.margin = "0 0 12px";
kontaktaoss.appendChild(infoH3);

// Wrapper för fält
const formWrap = document.createElement("div");
formWrap.style.display = "grid";
formWrap.style.gap = "12px";
formWrap.style.placeItems = "center";
kontaktaoss.appendChild(formWrap);

// Telefon bara placeholder
const inputTelefon = document.createElement("input");
inputTelefon.type = "tel";
inputTelefon.placeholder = "Ditt telefonnummer";
inputTelefon.style.width = "100%";
inputTelefon.style.maxWidth = "320px";
inputTelefon.style.padding = "8px";
inputTelefon.style.border = "1px solid #ccc";
inputTelefon.style.borderRadius = "8px";
inputTelefon.style.textAlign = "center";
formWrap.appendChild(inputTelefon);

// Namn bara placeholder
const inputNamn = document.createElement("input");
inputNamn.type = "text";
inputNamn.placeholder = "Ditt namn";
inputNamn.style.width = "100%";
inputNamn.style.maxWidth = "320px";
inputNamn.style.padding = "8px";
inputNamn.style.border = "1px solid #ccc";
inputNamn.style.borderRadius = "8px";
inputNamn.style.textAlign = "center";
formWrap.appendChild(inputNamn);

// Kommentar bara placeholder
const inputKommentar = document.createElement("textarea");
inputKommentar.placeholder = "Din kommentar";
inputKommentar.style.width = "100%";
inputKommentar.style.maxWidth = "320px";
inputKommentar.style.minHeight = "96px";
inputKommentar.style.padding = "8px";
inputKommentar.style.border = "1px solid #ccc";
inputKommentar.style.borderRadius = "8px";
inputKommentar.style.textAlign = "center";
formWrap.appendChild(inputKommentar);

// Skicka-knapp
const skickaBtn = document.createElement("button");
skickaBtn.type = "button";
skickaBtn.textContent = "Skicka";
skickaBtn.style.padding = "10px 16px";
skickaBtn.style.borderRadius = "8px";
skickaBtn.style.border = "1px solid #ccc";
skickaBtn.style.cursor = "pointer";
formWrap.appendChild(skickaBtn);

// Enkel responsruta
const statusP = document.createElement("p");
statusP.style.textAlign = "center";
statusP.style.margin = "8px 0 0";
statusP.style.color = "green";
statusP.textContent = "";
kontaktaoss.appendChild(statusP);

// Grundläggande events 
const submit = () => {
  const tel = inputTelefon.value.trim();
  const namn = inputNamn.value.trim();
  const kommentar = inputKommentar.value.trim();

  console.log("Skickar:", { tel, namn, kommentar });
  statusP.textContent = "Tack! Vi har tagit emot dina uppgifter.";
};

skickaBtn.addEventListener("click", submit);

// Enter i inputs -> “Skicka”
[inputTelefon, inputNamn, inputKommentar].forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target !== inputKommentar) {
      e.preventDefault();
      submit();
    }
  });
});
