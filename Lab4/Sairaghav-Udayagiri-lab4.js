// Sairaghav Udayagiri
// ITMD 541-01 Graduate Student

(function () {
    // === Utility Functions ===
    const setHTML = (selector, html) => {
      const el = document.querySelector(selector);
      if (el) el.innerHTML = html;
    };
  
    const setText = (selector, text) => {
      const el = document.querySelector(selector);
      if (el) el.textContent = text;
    };
  
    const setStyle = (selector, prop, value) => {
      const el = document.querySelector(selector);
      if (el) el.style[prop] = value;
    };
  
    const removeElement = (selector) => {
      const el = document.querySelector(selector);
      if (el) el.remove();
    };
  
    const cloneWithAttr = (el, attrs = {}) => {
      const clone = el.cloneNode(true);
      Object.entries(attrs).forEach(([k, v]) => clone.setAttribute(k, v));
      el.replaceWith(clone);
      return clone;
    };
  
    // === HERO SECTION ===
    setText("#hero h1", "Uplift Your Brand with Stellar Marketing");
  
    setHTML(
      "#hero p",
      "Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel</i></b>."
    );
  
    setStyle("#hero", "backgroundImage", "url('https://picsum.photos/id/683/1280/720')");
  
    const footer = document.querySelector("footer");
    const navbar = document.querySelector("header");
    if (footer && navbar) {
      navbar.style.backgroundColor = getComputedStyle(footer).backgroundColor;
    }
  
    removeElement("#hero a");
  
    // === CENTER HEADINGS ===
    ["#services h2", "#solutions h2", "#contact h2"].forEach((sel) =>
      setStyle(sel, "textAlign", "center")
    );
  
    // === SERVICES SECTION ===
    document
      .querySelectorAll("#services .material-symbols-outlined")
      .forEach((icon) => (icon.style.color = "#47C714"));
  
    const digitalIcon = document.querySelector("[data-icon='digital']");
    if (digitalIcon) digitalIcon.textContent = "ads_click";
  
    // === SOLUTIONS SECTION ===
    const styleTag = document.createElement("style");
    styleTag.textContent = `
      @media (min-width: 1024px) {
        [data-section="product_cards"] {
          grid-template-columns: repeat(4, 1fr) !important;
        }
      }
    `;
    document.head.appendChild(styleTag);
  
    const musiciansImg = Array.from(document.querySelectorAll("#solutions img")).find((img) =>
      img.alt.toLowerCase().includes("musicians")
    );
    if (musiciansImg) musiciansImg.src = "https://picsum.photos/id/453/400/300";
  
    // === CONTACT FORM ===
    const form = document.querySelector("form");
    if (form) {
      const nameInput = form.querySelector("#name");
      const emailInput = form.querySelector("#email");
  
      const updatedNameInput = nameInput
        ? cloneWithAttr(nameInput, { autocomplete: "name" })
        : null;
  
      const updatedEmailInput = emailInput
        ? cloneWithAttr(emailInput, { type: "email", autocomplete: "email" })
        : null;
  
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = updatedNameInput?.value.trim();
        const email = updatedEmailInput?.value.trim();
  
        if (name && email) {
          alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
        } else {
          alert("Please provide a name and email.");
        }
      });
    }
  })();
  