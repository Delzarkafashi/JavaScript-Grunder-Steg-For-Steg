//del 1//
const kontaktaoss = document.getElementById("kontaktaoss");

const rubrik = document.createElement("h2");
rubrik.textContent = "Kontakta oss";
kontaktaoss.appendChild(rubrik);

const telP = document.createElement("p");
telP.textContent = "Telefonnummer: 0100000000";
kontaktaoss.appendChild(telP);

const adress = document.createElement("p");
adress.textContent = "storgatna 16"
kontaktaoss.appendChild(adress);

const omduvillviskakontaktadig = document.createElement("h3");
omduvillviskakontaktadig.textContent = "Om du vill vi ska ringa upp dig, skriv ditt nummer här:";
kontaktaoss.appendChild(omduvillviskakontaktadig);

const input = document.createElement("input");

input.type = "text"
input.placeholder = "skriv din nummer här";
kontaktaoss.appendChild(input);

//style//
kontaktaoss.style.textAlign = "center";
input.style.width = "100%";
input.style.maxWidth = "320px";
input.style.padding = "8px";
input.style.border = "1px solid #ccc";
input.style.borderRadius = "8px";
input.style.display = "block";
input.style.margin = "12px auto";



