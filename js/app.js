async function initialize(language){

    const {
        config,
        content
    } = await loadContent(language);

    document.title =
        content.meta.title;

    renderHeader(config, content);

    renderHero(config, content);

    renderServices(config, content);

    renderFaq(content);

    renderAbout(config, content);

    renderLocation(config, content);

    renderCertificates(config, content);

    renderTestimonials(content);

    renderFooter(config, content);

    renderMessengers(config);

    updateLanguageSwitcher(language);
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

function updateLanguageSwitcher(language){

    const switcher =
        document.getElementById("language-switcher");

    const current =
        switcher.querySelector(".language-current");

    const selected =
        languages[language] || languages.en;

    current.innerHTML = `
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

            option.addEventListener(
                "click",
                () => {

                    localStorage.setItem(
                        "lang",
                        option.dataset.lang
                    );

                    initialize(option.dataset.lang);
                }
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
