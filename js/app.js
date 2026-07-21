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

    setupLanguageSwitcher(language);

    // Setup location button scroll
    const locationButton = document.querySelector(".header-location-btn");
    if (locationButton) {
        locationButton.addEventListener("click", (event) => {
            event.preventDefault();
            document.getElementById("location").scrollIntoView({ behavior: "smooth" });
        });
    }
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

function setupLanguageSwitcher(language){

    const switcher =
        document.getElementById("language-switcher");

    const toggle =
        switcher.querySelector(".language-toggle");

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

    toggle.addEventListener(
        "click",
        () => {

            const isOpen =
                switcher.classList.toggle("is-open");

            toggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        }
    );
}

document.addEventListener(
    "click",
    e => {

        const switcher =
            document.getElementById("language-switcher");

        if (
            !switcher
            || switcher.contains(e.target)
        ){
            return;
        }

        switcher.classList.remove("is-open");

        const toggle =
            switcher.querySelector(".language-toggle");

        if (toggle){
            toggle.setAttribute("aria-expanded", "false");
        }
    }
);

const language =
    localStorage.getItem("lang")
    || "en";

initialize(language);
