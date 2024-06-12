document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".icon-box");

  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const contentId = icon.id + "-content";
      let content = document.getElementById(contentId);

      // Kontrola, zda je obsah již vytvořen
      if (!content) {
        // Pokud neexistuje, vytvoříme nový element obsahu
        content = document.createElement("div");
        content.classList.add("content");
        content.id = contentId;
        icon.appendChild(content);

        // Získání textu obsahu z atributu data-content
        let contentText = icon.dataset.content;

        // Pokud jde o popis "O Harry Potterovi", nepřidáváme seznam
        if (icon.id === "about") {
          content.textContent = contentText;
        } else {
          // Vytvoření seznamového prvku (<ul>)
          const ul = document.createElement("ul");

          // Rozdělení obsahu do položek seznamu a přidání jako <li>
          contentText.split(",").forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item.trim(); // Odstranění přebytečných mezer
            ul.appendChild(li);
          });

          // Přidání seznamu do vytvořeného elementu obsahu
          content.appendChild(ul);
        }
      }

      // Kontrola, zda je obsah zobrazen nebo skryt
      if (content.style.display === "block") {
        // Pokud je zobrazen, skryjeme ho
        content.style.display = "none";
      } else {
        // Jinak ho zobrazíme
        content.style.display = "block";
      }
    });
  });

  const menuIcon = document.querySelector(".menu-icon");
  const menuList = document.querySelector("nav");
  const hamburgerIcon = document.querySelector(".fa-solid");

  menuIcon.addEventListener("click", () => {
    if (hamburgerIcon.classList.contains("fa-bars")) {
      hamburgerIcon.classList.add("fa-xmark");
      hamburgerIcon.classList.remove("fa-bars");
      menuList.style.display = "block";
    } else {
      hamburgerIcon.classList.add("fa-bars");
      hamburgerIcon.classList.remove("fa-xmark");
      menuList.style.display = "none";
    }
  });

  // Proklik z menu na ikony
  const menuLinks = document.querySelectorAll("nav a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Zabrání výchozímu chování přesměrování

      const targetId = link.getAttribute("href").substring(1); // Získání id cílové ikony z atributu href
      const targetIcon = document.getElementById(targetId);

      // Scroll na danou ikonu
      if (targetIcon) {
        targetIcon.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
