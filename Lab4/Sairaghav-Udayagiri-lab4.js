// Sairaghav Udayagiri
// ITMD 541-01 Graduate Student

(function () {
    // === HERO SECTION CHANGES ===
  
    // 1. Changing the main headline
    const heroHeadline = document.querySelector("#hero h1");
    if (heroHeadline) {
      heroHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
    }
  
    // 2. Changing the line below the headline
    const heroSubtext = document.querySelector("#hero p");
    if (heroSubtext) {
      heroSubtext.innerHTML =
        "Utilize cutting-edge strategies from Stellar Marketing to help your business <b><i>thrive</i></b> and <b><i>excel</i></b>.";
    }
  
    // 3. Changing the hero background image
    const heroSection = document.querySelector("#hero");
    if (heroSection) {
      heroSection.style.backgroundImage =
        "url('https://picsum.photos/id/683/1280/720')";
    }
  
    // 4. Changing the navbar background to match footer
    const footer = document.querySelector("footer");
    const navbar = document.querySelector("header");
    if (footer && navbar) {
      const footerColor = getComputedStyle(footer).backgroundColor;
      navbar.style.backgroundColor = footerColor;
    }
  
    // 5. Remove the "Get Started" CTA
    const getStartedBtn = document.querySelector("#hero a");
    if (getStartedBtn) {
      getStartedBtn.remove();
    }
  
    // === CENTER SECTION HEADINGS ===
  
    // 6. Center-align section headings
    ["#services h2", "#solutions h2", "#contact h2"].forEach((selector) => {
      const heading = document.querySelector(selector);
      if (heading) {
        heading.style.textAlign = "center";
      }
    });
  
    // === SERVICES SECTION CHANGES ===
  
    // 7. Change all icons in services section to green
    document.querySelectorAll("#services .material-symbols-outlined").forEach((icon) => {
      icon.style.color = "#47C714";
    });
  
    // 8. Change Digital Marketing icon to 'ads_click'
    const digitalIcon = document.querySelector("[data-icon='digital']");
    if (digitalIcon) {
      digitalIcon.textContent = "ads_click";
    }
  
    // === SPECIALIZED MARKETING SOLUTIONS SECTION ===
  
    // 9. Change grid layout to 4 across at >= 1024px
    const styleTag = document.createElement("style");
    styleTag.textContent = `
      @media (min-width: 1024px) {
        [data-section="product_cards"] {
          grid-template-columns: repeat(4, 1fr) !important;
        }
      }
    `;
    document.head.appendChild(styleTag);
  
    // 10. Change Musicians image
    const musiciansImg = Array.from(document.querySelectorAll("#solutions img")).find((img) =>
      img.alt.toLowerCase().includes("musicians")
    );
    if (musiciansImg) {
      musiciansImg.src = "https://picsum.photos/id/453/400/300";
    }
  
    // === GRADUATE REQUIREMENTS: FORM VALIDATION & AUTOCOMPLETE ===
  
    const form = document.querySelector("form");
    if (form) {
      const nameInput = form.querySelector("#name");
      const emailInput = form.querySelector("#email");
  
      // ✅ Fix autocomplete warning using clones
      if (nameInput) {
        const clone = nameInput.cloneNode(true);
        clone.setAttribute("autocomplete", "name");
        nameInput.replaceWith(clone);
      }
      if (emailInput) {
        const clone = emailInput.cloneNode(true);
        clone.setAttribute("type", "email"); // ensure proper type
        clone.setAttribute("autocomplete", "email");
        emailInput.replaceWith(clone);
      }
  
      const updatedNameInput = form.querySelector("#name");
      const updatedEmailInput = form.querySelector("#email");
  
      form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent navigation to contact.html
  
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
  