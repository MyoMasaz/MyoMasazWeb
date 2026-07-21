async function initialize(language){

    const {
        config,
        content
    } = await loadContent(language);

    document.title =
        content.meta.title;

    renderHeader(config, content);

    renderLanguageSwitcher(language);

    renderHero(config, content);

    renderServices(config, content);

    renderFaq(content);

    renderAbout(config, content);

    renderLocation(config, content);

    renderCertificates(config, content);

    renderTestimonials(content);

    renderFooter(config, content);

    renderMessengers(config);
}

const languages = {
    en: {
        label: "EN",
        flag: "https://flagcdn.com/w40/gb.png"
    },
    cz: {
        label: "CZ",
        flag: "https://flagcdn.com/w40/cz.png"
    },
    ru: {
        label: "RU",
        flag: "https://flagcdn.com/w40/ru.png"
    },
    ua: {
        label: "UA",
        flag: "https://flagcdn.com/w40/ua.png"
    }
};

function renderLanguageSwitcher(language) {
    const switcher = document.getElementById("language-switcher");
    if (!switcher) return;

    const menu = switcher.querySelector(".language-menu");
    if (!menu) return;

    const optionsHTML = Object.keys(languages)
        .map(langKey => {
            const lang = languages[langKey];
            return `
                <button
                    class="language-option"
                    type="button"
                    data-lang="${langKey}"
                    role="option">
                    <img
                        src="${lang.flag}"
                        alt="">
                    <span>${lang.label}</span>
                </button>
            `;
        })
        .join("");

    menu.innerHTML = optionsHTML;

    updateLanguageSwitcherUI(language);
}

function updateLanguageSwitcherUI(language){

    const switcher =
        document.getElementById("language-switcher");

    if (!switcher) return;

    const current =
        switcher.querySelector(".language-current");

    const selected =
        languages[language] || languages.en;

    if (current) current.innerHTML = `
        <img
            src="${selected.flag}"
            alt="">
        <span>${selected.label}</span>
    `;

    switcher
        .querySelectorAll(".language-option")
        .forEach(option => {

            const isSelected =
                option.dataset.lang === language;

            option.classList.toggle(
                "is-selected",
                isSelected
            );

            option.setAttribute(
                "aria-selected",
                isSelected ? "true" : "false"
            );
        });
}

function setupGlobalEventListeners() {
    document.addEventListener(
        "click",
        e => {
            const switcher = document.getElementById("language-switcher");
            if (!switcher) return;

            // Close switcher if clicking outside
            if (!switcher.contains(e.target)) {
                switcher.classList.remove("is-open");
                const toggle = switcher.querySelector(".language-toggle");
                if (toggle) {
                    toggle.setAttribute("aria-expanded", "false");
                }
            }

            // Handle language toggle click
            const toggle = e.target.closest(".language-toggle");
            if (toggle && switcher.contains(toggle)) {
                const isOpen = switcher.classList.toggle("is-open");
                toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
            }

            // Handle location button scroll
            const locationButton = e.target.closest(".header-location-btn");
            if (locationButton) {
                e.preventDefault();
                document.getElementById("location").scrollIntoView({ behavior: "smooth" });
            }

            // Handle language option click
            const langOption = e.target.closest(".language-option");
            if (langOption && switcher.contains(langOption)) {
                const lang = langOption.dataset.lang;
                if (lang) {
                    // Prevent the new listener from catching the same click
                    e.stopPropagation();
                    localStorage.setItem("lang", lang);
                    initialize(lang);
                }
            }
        }
    );
}

const language =
    localStorage.getItem("lang")
    || "en";

// Run one-time setups
setupGlobalEventListeners();

// Initial load
initialize(language);
