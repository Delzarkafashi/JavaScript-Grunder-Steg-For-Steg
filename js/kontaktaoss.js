//del 1//
const kontaktaoss = document.getElementById("kontaktaoss");


//title 
const rubrik = document.createElement("h2");
rubrik.textContent = "Kontakta oss";
kontaktaoss.appendChild(rubrik);

//telefonnummer
const telP = document.createElement("p");
telP.textContent = "Telefonnummer: 0100000000";
kontaktaoss.appendChild(telP);


//adress
const adress = document.createElement("p");
adress.textContent = "storgatna 16"
kontaktaoss.appendChild(adress);

//information
const omduvillviskakontaktadig = document.createElement("h3");
omduvillviskakontaktadig.textContent = "Om du vill vi ska ringa upp dig, skriv ditt nummer här:";
kontaktaoss.appendChild(omduvillviskakontaktadig);


// input för telefonnummer
const inputtelefonnummer = document.createElement("input");

inputtelefonnummer.type = "tel"
inputtelefonnummer.placeholder = "skriv din nummer här";
kontaktaoss.appendChild(inputtelefonnummer);

//style//
kontaktaoss.style.textAlign = "center";
inputtelefonnummer.style.width = "100%";
inputtelefonnummer.style.maxWidth = "320px";
inputtelefonnummer.style.padding = "8px";
inputtelefonnummer.style.border = "1px solid #ccc";
inputtelefonnummer.style.borderRadius = "8px";
inputtelefonnummer.style.display = "block";
inputtelefonnummer.style.margin = "12px auto";
inputtelefonnummer.style.textAlign = "center";


//input för namn
const inputnamn = document.createElement("input");

inputnamn.type = "text"
inputnamn.placeholder = "skriv dit naman här";
kontaktaoss.appendChild(inputnamn);

inputnamn.style.width = "100%";
inputnamn.style.maxWidth = "320px";
inputnamn.style.padding = "8px";
inputnamn.style.border = "1px solid #ccc";
inputnamn.style.borderRadius = "8px";
inputnamn.style.display = "block";
inputnamn.style.margin = "12px auto";
inputnamn.style.textAlign = "center";


// input för behov
const inputbehov = document.createElement("textarea");

inputbehov.placeholder = "skriv vad du behöver hjälp med";
kontaktaoss.appendChild(inputbehov);

inputbehov.style.width = "100%";
inputbehov.style.maxWidth = "320px";
inputbehov.style.padding = "8px";
inputbehov.style.border = "1px solid #ccc";
inputbehov.style.borderRadius = "8px";
inputbehov.style.display = "block";
inputbehov.style.margin = "12px auto";
inputbehov.style.textAlign = "center";
inputbehov.style.minHeight = "96px"; 



