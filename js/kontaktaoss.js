const root = document.getElementById("kontaktaoss");

const form = document.createElement("form");
form.noValidate = true;
root.appendChild(form);

const h2 = document.createElement("h2");
h2.textContent = "Kontakta oss";
h2.style.textAlign = "center";
h2.style.margin = "0 0 8px";
form.appendChild(h2);

const intro = document.createElement("p");
intro.textContent = "Fyll i dina uppgifter nedan.";
intro.style.textAlign = "center";
intro.style.margin = "0 0 16px";
form.appendChild(intro);

const errorSummary = document.createElement("div");
errorSummary.id = "error-summary";
errorSummary.setAttribute("role", "alert");
errorSummary.setAttribute("aria-labelledby", "error-summary-title");
errorSummary.style.display = "none";
errorSummary.style.border = "1px solid #b00020";
errorSummary.style.borderRadius = "8px";
errorSummary.style.padding = "12px";
errorSummary.style.margin = "0 0 16px";
errorSummary.tabIndex = -1;
const errorTitle = document.createElement("strong");
errorTitle.id = "error-summary-title";
errorTitle.textContent = "Korrigera följande:";
errorTitle.style.display = "block";
errorTitle.style.marginBottom = "8px";
const errorList = document.createElement("ul");
errorList.style.margin = "0";
errorList.style.paddingLeft = "20px";
errorSummary.appendChild(errorTitle);
errorSummary.appendChild(errorList);
form.appendChild(errorSummary);

const statusLive = document.createElement("div");
statusLive.setAttribute("aria-live", "polite");
statusLive.style.position = "absolute";
statusLive.style.height = "1px";
statusLive.style.width = "1px";
statusLive.style.overflow = "hidden";
statusLive.style.clipPath = "inset(50%)";
form.appendChild(statusLive);

const makeField = ({id, label, helpText, type, multiline=false, required=false, autocomplete="off", name, placeholder, maxLength}) => {
  const wrap = document.createElement("div");
  wrap.style.textAlign = "center";
  wrap.style.margin = "16px auto";

  const lab = document.createElement("label");
  lab.setAttribute("for", id);
  lab.textContent = label + (required ? " *" : "");
  lab.style.display = "block";
  lab.style.marginBottom = "8px";
  wrap.appendChild(lab);

  const input = multiline ? document.createElement("textarea") : document.createElement("input");
  if (!multiline) input.type = type;
  input.id = id;
  input.name = name;
  input.autocomplete = autocomplete;
  if (placeholder) input.placeholder = placeholder;
  if (maxLength) input.maxLength = maxLength;
  if (required) input.required = true;
  if (multiline) input.style.minHeight = "96px";
  input.style.width = "100%";
  input.style.maxWidth = "320px";
  input.style.padding = "8px";
  input.style.border = "1px solid #ccc";
  input.style.borderRadius = "8px";
  input.style.display = "block";
  input.style.margin = "0 auto";
  input.style.textAlign = "center";
  wrap.appendChild(input);

  const help = document.createElement("p");
  help.id = `${id}-help`;
  help.textContent = helpText;
  help.style.fontSize = "0.9rem";
  help.style.margin = "8px 0 4px";
  wrap.appendChild(help);

  const err = document.createElement("p");
  err.id = `${id}-error`;
  err.textContent = "";
  err.style.color = "#b00020";
  err.style.margin = "4px 0 0";
  err.style.fontWeight = "600";
  err.style.display = "none";
  wrap.appendChild(err);

  input.setAttribute("aria-describedby", `${help.id} ${err.id}`);
  input.setAttribute("aria-invalid", "false");

  form.appendChild(wrap);
  return {wrap, lab, input, help, err};
};

const tel = makeField({
  id: "tel",
  label: "Telefonnummer",
  helpText: "Tillåtna tecken: siffror, +, mellanslag och bindestreck.",
  type: "tel",
  required: true,
  autocomplete: "tel",
  name: "telephone",
  placeholder: "t.ex. +46 70 123 45 67",
  maxLength: 20
});

const namn = makeField({
  id: "namn",
  label: "Namn",
  helpText: "Använd bokstäver (inkl. å, ä, ö), mellanslag, bindestreck och apostrof.",
  type: "text",
  required: true,
  autocomplete: "name",
  name: "name",
  placeholder: "t.ex. Anna-Lena O’Neill",
  maxLength: 60
});

const komment = makeField({
  id: "kommentar",
  label: "Kommentar",
  helpText: "Skriv ditt meddelande. Max 500 tecken.",
  multiline: true,
  required: false,
  autocomplete: "off",
  name: "message",
  placeholder: "Hur kan vi hjälpa dig?",
  maxLength: 500
});

const counter = document.createElement("div");
counter.style.fontSize = "0.85rem";
counter.style.marginTop = "6px";
counter.textContent = `0 / ${komment.input.maxLength}`;
komment.wrap.appendChild(counter);

const isValidTel = (value) => /^[+0-9][0-9\s-]{5,19}$/.test(value.trim());
const isValidName = (value) => /^[-' a-zA-ZÀ-ÖØ-öø-ÿÄÖÅäöå]{2,60}$/.test(value.trim());

const showError = (field, msg) => {
  field.err.textContent = msg;
  field.err.style.display = msg ? "block" : "none";
  field.input.setAttribute("aria-invalid", msg ? "true" : "false");
  field.input.style.borderColor = msg ? "#b00020" : "#ccc";
  statusLive.textContent = msg || `${field.lab.textContent.replace(" *","")} ser bra ut.`;
};

const validateTel = () => {
  const v = tel.input.value;
  if (!v) { showError(tel, "Telefonnummer krävs."); return false; }
  if (!isValidTel(v)) { showError(tel, "Ogiltigt telefonnummer. Ex: +46 70 123 45 67."); return false; }
  showError(tel, ""); return true;
};

const validateName = () => {
  const v = namn.input.value;
  if (!v) { showError(namn, "Namn krävs."); return false; }
  if (!isValidName(v)) { showError(namn, "Endast bokstäver, mellanslag, bindestreck och apostrof (minst 2 tecken)."); return false; }
  showError(namn, ""); return true;
};

const validateComment = () => {
  const v = komment.input.value;
  if (v.length > komment.input.maxLength) { showError(komment, `Max ${komment.input.maxLength} tecken.`); return false; }
  showError(komment, ""); return true;
};

tel.input.addEventListener("input", () => {
  const v = tel.input.value;
  if (!v) showError(tel, "Telefonnummer krävs.");
  else if (!isValidTel(v)) showError(tel, "Använd siffror, +, mellanslag eller bindestreck.");
  else showError(tel, "");
});
tel.input.addEventListener("change", () => { if (!tel.input.value) showError(tel, "Telefonnummer krävs."); });
tel.input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); submitBtn.click(); }
});

namn.input.addEventListener("input", () => {
  const v = namn.input.value;
  if (!v) showError(namn, "Namn krävs.");
  else if (!isValidName(v)) showError(namn, "Endast bokstäver, mellanslag, bindestreck och apostrof (minst 2 tecken).");
  else showError(namn, "");
});
namn.input.addEventListener("change", () => { if (!namn.input.value) showError(namn, "Namn krävs."); });
namn.input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); submitBtn.click(); }
});

komment.input.addEventListener("input", () => {
  counter.textContent = `${komment.input.value.length} / ${komment.input.maxLength}`;
  validateComment();
});
komment.input.addEventListener("change", () => { validateComment(); });

const actions = document.createElement("div");
actions.style.textAlign = "center";
actions.style.margin = "20px 0 0";
form.appendChild(actions);

const submitBtn = document.createElement("button");
submitBtn.type = "button";
submitBtn.textContent = "Skicka";
submitBtn.style.padding = "10px 16px";
submitBtn.style.borderRadius = "8px";
submitBtn.style.border = "1px solid #ccc";
submitBtn.style.cursor = "pointer";
actions.appendChild(submitBtn);

const success = document.createElement("p");
success.textContent = "";
success.style.color = "green";
success.style.textAlign = "center";
success.style.marginTop = "12px";
success.style.display = "none";
form.appendChild(success);

const buildSummary = (items) => {
  errorList.innerHTML = "";
  items.forEach(({id, text}) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${id}`;
    a.textContent = text;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById(id).focus();
    });
    li.appendChild(a);
    errorList.appendChild(li);
  });
};

submitBtn.addEventListener("click", () => {
  success.style.display = "none";
  const errors = [];
  if (!validateTel()) errors.push({id: "tel", text: "Telefonnummer: ogiltigt eller saknas."});
  if (!validateName()) errors.push({id: "namn", text: "Namn: ogiltigt eller saknas."});
  if (!validateComment()) errors.push({id: "kommentar", text: "Kommentar: för lång text."});

  if (errors.length) {
    buildSummary(errors);
    errorSummary.style.display = "block";
    errorSummary.focus();
    statusLive.textContent = "Det finns fel i formuläret.";
    const firstId = errors[0].id;
    document.getElementById(firstId).focus();
  } else {
    errorSummary.style.display = "none";
    statusLive.textContent = "Formuläret är giltigt.";
    success.textContent = "Tack! Ditt meddelande är redo att skickas.";
    success.style.display = "block";
  }
});
