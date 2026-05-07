const menu = document.querySelector(".menu");
const change_icon_menu = document.querySelector(".icon_dark_mode");
const body = document.body;
const button_cv = document.querySelector("#cv");
const path_cv = "./docs/CV_ELISEO_TORRES.pdf";
const menu_over = document.querySelector(".menu");
const menu_tag_show = document.querySelector(".list_menu");
const menu_over_hidden = document.querySelector(".icon_close");

let dark = JSON.parse(localStorage.getItem("DarkMode"));
if (dark) {
  body.classList.add("dark");
  change_icon_menu.classList.add("fa-sun");
  change_icon_menu.classList.remove("fa-moon");
} 
else{
  body.classList.remove("dark");
  
}
menu.addEventListener("click", function (e) {
    if (e.target.classList.contains("icon_dark_mode")) {
      
      if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        change_icon_menu.classList.add("fa-moon");
        change_icon_menu.classList.remove("fa-sun");
        localStorage.setItem("DarkMode", "false");
        
      } else {
        body.classList.add("dark");
        change_icon_menu.classList.add("fa-sun");
        change_icon_menu.classList.remove("fa-moon");
        localStorage.setItem("DarkMode", "true");
        
      }
    }
  });

menu_over.addEventListener("click", function (e) {
  if (e.target.classList.contains("icon_menu")) {
    menu_tag_show.classList.toggle("list_menu_show");
  }
});
menu_over_hidden.addEventListener("click", function (e) {
  if (e.target.classList.contains("icon_close_")) {
    menu_tag_show.classList.toggle("list_menu_show");
  }
});
menu_tag_show.addEventListener("click",function(e) {
  if(e.target.hasAttribute("href")){
    menu_tag_show.classList.remove("list_menu_show");
  };
});
button_cv.addEventListener("click",function (e) {
  window.open(path_cv, "_blank");
})

const SKILL_DATA = {
  github: {
    icon: "fa-brands fa-github",
    title: "Git & GitHub",
    description:
      "Uso Git y GitHub a diario para versionado, manejo de ramas, pull requests y revisión de código. Trabajo con flujos como GitFlow y trunk-based en equipos remotos, integrando releases y CI sobre los repositorios.",
    tags: ["Git", "GitHub", "Pull Requests", "GitFlow", "CI/CD"],
  },
  webDeveloper: {
    icon: "fa-solid fa-code",
    title: "Desarrollo Web Full-Stack",
    description:
      "Backend developer en VERYTEl S.A.S desde 2024. Diseño e implementación de APIs REST escalables con FastAPI, Node.js y TypeScript. Frontend responsive con HTML/CSS/JS aplicando metodología BEM y buenas prácticas de arquitectura.",
    tags: ["FastAPI", "Node.js", "TypeScript", "REST", "BEM", "Responsive"],
  },
  desktop: {
    icon: "fa-solid fa-computer",
    title: "Aplicaciones Desktop .NET",
    description:
      "Desarrollo de aplicaciones de escritorio con Windows Forms y .NET para herramientas internas, integración con bases de datos y automatización de procesos administrativos en entornos corporativos.",
    tags: ["C#", ".NET", "Windows Forms", "Desktop"],
  },
  python: {
    icon: "fa-brands fa-python",
    title: "Python & Automatización",
    description:
      "Automatizaciones, scripting y web scraping en entornos dinámicos y complejos usando Python (requests, Selenium, Playwright, BeautifulSoup). Integración con dispositivos IoT y procesamiento de datos a gran escala como parte del rol Backend / NOC.",
    tags: ["Python", "Scraping", "Selenium", "Playwright", "IoT", "Automation"],
  },
  electronic: {
    icon: "fa-solid fa-microchip",
    title: "Electrónica & Prototipos",
    description:
      "Tecnólogo Electrónico (SENA) y formación en Ingeniería Electrónica (Universidad Manuela Beltrán). Diseño de prototipos, circuitos análogos y digitales, y sistemas embebidos.",
    tags: ["Circuitos", "Prototipado", "Embedded", "PCB"],
  },
  sql: {
    icon: "fa-solid fa-database",
    title: "Bases de Datos SQL",
    description:
      "Administración y consultas avanzadas sobre PostgreSQL y SQL Server. Optimización de queries, diseño de esquemas y manejo de datos en producción para sistemas de monitoreo NOC y backends transaccionales.",
    tags: ["PostgreSQL", "SQL Server", "Queries", "Schema Design"],
  },
  linux: {
    icon: "fa-brands fa-linux",
    title: "Linux & Sysadmin",
    description:
      "Administración de servidores Linux (Debian/Ubuntu, RHEL). Gestión de servicios, scripting en bash, hardening básico y despliegue de aplicaciones backend. Uso diario como entorno principal de desarrollo.",
    tags: ["Linux", "Bash", "Debian", "Ubuntu", "RHEL", "Sysadmin"],
  },
  cctv: {
    icon: "fa-solid fa-video",
    title: "CCTV & Videovigilancia",
    description:
      "Más de 2 años como técnico de sistemas CCTV en VERYTEl S.A.S. Configuración de plataformas SecurOS (certificación N1/N2), DVR/NVR IP, integración de cámaras y mantenimiento correctivo y preventivo.",
    tags: ["SecurOS N1/N2", "IP Cameras", "DVR/NVR", "Videovigilancia"],
  },
  accessControl: {
    icon: "fa-solid fa-tachograph-digital",
    title: "Control de Acceso",
    description:
      "Instalación, configuración y mantenimiento de sistemas de control de acceso en VERYTEl y Fichet Colombia (2018–2022). Programación de controladoras, lectores biométricos y troubleshooting en sitio. Certificación RBH Access Control.",
    tags: ["RBH", "Fichet", "Biometría", "Controladoras", "ITIL"],
  },
};

const skillModal = document.getElementById("skill-modal");
const skillModalIcon = skillModal.querySelector(".skill-modal__icon");
const skillModalTitle = skillModal.querySelector(".skill-modal__title");
const skillModalDescription = skillModal.querySelector(".skill-modal__description");
const skillModalTags = skillModal.querySelector(".skill-modal__tags");
const skillsContainer = document.getElementById("skills");

function openSkillModal(skillKey) {
  const data = SKILL_DATA[skillKey];
  if (!data) return;
  skillModalIcon.className = "skill-modal__icon " + data.icon;
  skillModalTitle.textContent = data.title;
  skillModalDescription.textContent = data.description;
  skillModalTags.innerHTML = "";
  data.tags.forEach((tag) => {
    const li = document.createElement("li");
    li.textContent = tag;
    skillModalTags.appendChild(li);
  });
  skillModal.classList.add("is-open");
  skillModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeSkillModal() {
  skillModal.classList.remove("is-open");
  skillModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

skillsContainer.addEventListener("click", function (e) {
  const card = e.target.closest("#skills > div");
  if (!card) return;
  const key = card.dataset.skill;
  if (key) openSkillModal(key);
});

skillModal.addEventListener("click", function (e) {
  if (e.target.dataset.close === "true" || e.target.closest("[data-close='true']")) {
    closeSkillModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && skillModal.classList.contains("is-open")) {
    closeSkillModal();
  }
});

