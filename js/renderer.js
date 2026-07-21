function renderHeader(config, content){

    document.getElementById("header").innerHTML = `
        <div class="header-inner">

            <div class="brand">
                ${config.business.name}
            </div>

            <div class="header-actions">

                <div
                    class="language-switcher"
                    id="language-switcher">
                    <button
                        class="language-toggle"
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded="false">
                        <span class="language-current"></span>
                    </button>
                    <div class="language-menu" role="listbox">
                        <!-- Language options will be rendered here by JavaScript -->
                    </div>
                </div>
                
                <a
                    class="btn btn-secondary header-action-btn header-location-btn"
                    href="#location"
                    aria-label="${content.location.title}">
                    <svg class="location-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 5.1-5.2 10.7-6.4 11.9a.8.8 0 0 1-1.2 0C10.2 19.7 5 14.1 5 9a7 7 0 0 1 7-7Zm0 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"/></svg>
                </a>

                <a
                    class="btn btn-secondary header-action-btn"
                    href="tel:${config.business.phone}">
                    <svg class="location-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M6.6 2h3.2c.5 0 .9.3 1 .8l.8 3.9c.1.5-.1 1-.5 1.3L9.4 9.4a14.5 14.5 0 0 0 5.2 5.2l1.4-1.7c.3-.4.8-.6 1.3-.5l3.9.8c.5.1.8.5.8 1v3.2A1.6 1.6 0 0 1 20.4 19C10.8 19 5 13.2 5 3.6A1.6 1.6 0 0 1 6.6 2Z"/></svg>
                    ${config.business.phone}
                </a>

                <a
                    class="btn btn-primary header-action-btn"
                    href="${config.business.bookingUrl}"
                    target="_blank">
                    <svg class="location-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm13 8H4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9Z"/></svg>
                    ${content.ui.bookNow}
                </a>

            </div>

        </div>
    `;
}

function renderMobileBottomBar(config, content) {
    document.getElementById("mobile-bottom-bar").innerHTML = `
        <div class="mobile-messenger-links">
            <a
                class="btn btn-secondary"
                href="${config.business.whatsappUrl}"
                target="_blank"
                aria-label="WhatsApp">
                <img src="https://cdn.simpleicons.org/whatsapp/3f5131" alt="WhatsApp">
            </a>
            <a
                class="btn btn-secondary"
                href="${config.business.viberUrl}"
                aria-label="Viber">
                <img src="https://cdn.simpleicons.org/viber/3f5131" alt="Viber">
            </a>
        </div>

        <a
            class="btn btn-secondary"
            href="#location"
            aria-label="${content.location.title}">
            <svg class="location-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 5.1-5.2 10.7-6.4 11.9a.8.8 0 0 1-1.2 0C10.2 19.7 5 14.1 5 9a7 7 0 0 1 7-7Zm0 4a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"/></svg>
        </a>

        <a
            class="btn btn-secondary"
            href="tel:${config.business.phone}"
            aria-label="${content.ui.call}">
            <svg class="location-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M6.6 2h3.2c.5 0 .9.3 1 .8l.8 3.9c.1.5-.1 1-.5 1.3L9.4 9.4a14.5 14.5 0 0 0 5.2 5.2l1.4-1.7c.3-.4.8-.6 1.3-.5l3.9.8c.5.1.8.5.8 1v3.2A1.6 1.6 0 0 1 20.4 19C10.8 19 5 13.2 5 3.6A1.6 1.6 0 0 1 6.6 2Z"/></svg>
        </a>

        <a
            class="btn btn-primary"
            href="${config.business.bookingUrl}"
            target="_blank">
            <svg class="location-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" stroke="none" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1Zm13 8H4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9Z"/></svg>
            ${content.ui.bookNow}
        </a>
    `;
}

function renderHero(config, content){

    document.getElementById("hero").innerHTML = `
        <div class="container hero">

            <div>

                <h1>${content.hero.title}</h1>

                <p>${content.hero.subtitle}</p>

            </div>

            <img
                src="${config.hero.image}"
                alt="">

        </div>
    `;
}

function renderServices(config, content){

    document.getElementById("services-title")
        .textContent = content.services.title;

    const container =
        document.getElementById("services");

    container.innerHTML = "";

    config.services.forEach(service => {

        const t =
            content.services[service.id];

        container.innerHTML += `
            <div class="card">

                <img
                    src="${service.image}"
                    alt="${t.title}">

                <div class="card-content">

                    <h3>${t.title}</h3>

                    <p>${t.description}</p>

                    <div class="price">

                        ${service.durationMinutes}
                        ${content.ui.units.minute}

                        ·

                        ${service.price}
                        ${content.ui.units.currency}

                    </div>

                    <div class="card-actions">

                        <button
                            class="btn btn-secondary"
                            type="button"
                            data-service-details="${service.id}">
                            ${content.ui.details}
                        </button>

                        <a
                            class="btn btn-primary"
                            href="${config.business.bookingUrl}"
                            target="_blank">

                            ${content.ui.book}

                        </a>

                    </div>

                </div>

            </div>
        `;
    });

    setupServiceDetails(config, content);
}

function renderCertificates(config, content){

    const section =
        document.getElementById("certificates");

    const certificateItems =
        config.certificates || [];

    if (!certificateItems.length){
        section.innerHTML = "";
        section.hidden = true;
        return;
    }

    section.hidden = false;

    const html =
        certificateItems
            .slice(0, 3)
            .map(certificate => {
                const t = content.certificates.items.find(item => item.id === certificate.id);
                if (!t) return ''; // Skip if content not found

                return `
                    <div class="certificates-card">
                        <img
                            src="${certificate.image}"
                            alt="">
                        <div>
                            <h3>${t.title}</h3>
                            <p>${content.certificates.issued} ${t.date}</p>
                        </div>
                    </div>
                `;
            })
            .join("");

    section.innerHTML = `
        <h2>${content.certificates.title}</h2>
        <div class="certificates-grid">
            ${html}
        </div>
    `;
}

const serviceModalState = {
    photos: [],
    index: 0
};

function setupServiceDetails(config, content){

    renderServiceModalShell();

    document
        .querySelectorAll("[data-service-details]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const service =
                        config.services.find(
                            item => item.id === button.dataset.serviceDetails
                        );

                    if (service){
                        openServiceModal(service, config, content);
                    }
                }
            );
        });
}

function renderServiceModalShell(){

    if (document.getElementById("service-modal")){
        return;
    }

    document.body.insertAdjacentHTML(
        "beforeend",
        `
            <div
                class="service-modal"
                id="service-modal"
                aria-hidden="true">
                <div
                    class="service-modal-backdrop"
                    data-service-modal-close></div>

                <div
                    class="service-modal-panel"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="service-modal-title">
                    <button
                        class="service-modal-close"
                        type="button"
                        aria-label="Close"
                        data-service-modal-close></button>

                    <div class="service-modal-carousel">
                        <button
                            class="service-modal-arrow"
                            type="button"
                            data-service-modal-prev
                            aria-label="Previous photo"></button>

                        <img
                            id="service-modal-photo"
                            src=""
                            alt="">

                        <button
                            class="service-modal-arrow"
                            type="button"
                            data-service-modal-next
                            aria-label="Next photo"></button>

                        <div
                            class="service-modal-dots"
                            id="service-modal-dots"></div>
                    </div>

                    <div class="service-modal-content">
                        <h2 id="service-modal-title"></h2>
                        <p id="service-modal-description"></p>
                        <div
                            class="service-modal-meta"
                            id="service-modal-meta"></div>
                        <a
                            class="btn btn-primary service-modal-book"
                            id="service-modal-book"
                            href=""
                            target="_blank"></a>
                    </div>
                </div>
            </div>
        `
    );

    document
        .querySelectorAll("[data-service-modal-close]")
        .forEach(element => {
            element.addEventListener("click", closeServiceModal);
        });

    document
        .querySelector("[data-service-modal-prev]")
        .addEventListener(
            "click",
            () => changeServiceModalPhoto(-1)
        );

    document
        .querySelector("[data-service-modal-next]")
        .addEventListener(
            "click",
            () => changeServiceModalPhoto(1)
        );

    document.addEventListener(
        "keydown",
        event => {
            if (event.key === "Escape"){
                closeServiceModal();
            }
        }
    );
}

function openServiceModal(service, config, content){

    const modal =
        document.getElementById("service-modal");

    const serviceContent =
        content.services[service.id];

    serviceModalState.photos =
        service.photos?.length
            ? service.photos
            : [service.image];

    serviceModalState.index = 0;

    document.getElementById("service-modal-title")
        .textContent = serviceContent.title;

    document.getElementById("service-modal-description")
        .textContent = serviceContent.details || serviceContent.description;

    document.getElementById("service-modal-meta")
        .textContent = `${service.durationMinutes} ${content.ui.units.minute} · ${service.price} ${content.ui.units.currency}`;

    const bookButton =
        document.getElementById("service-modal-book");

    bookButton.href = config.business.bookingUrl;
    bookButton.textContent = content.ui.bookNow;

    renderServiceModalPhoto(serviceContent.title);

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeServiceModal(){

    const modal =
        document.getElementById("service-modal");

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

function changeServiceModalPhoto(direction){

    const total =
        serviceModalState.photos.length;

    serviceModalState.index =
        (serviceModalState.index + direction + total) % total;

    renderServiceModalPhoto(
        document.getElementById("service-modal-title").textContent
    );
}

function renderServiceModalPhoto(title){

    const photo =
        document.getElementById("service-modal-photo");

    const dots =
        document.getElementById("service-modal-dots");

    photo.src =
        serviceModalState.photos[serviceModalState.index];

    photo.alt = title;

    dots.innerHTML =
        serviceModalState.photos
            .map((_, index) => `
                <button
                    class="${index === serviceModalState.index ? "is-active" : ""}"
                    type="button"
                    aria-label="Show photo ${index + 1}"
                    data-service-modal-dot="${index}">
                </button>
            `)
            .join("");

    dots
        .querySelectorAll("[data-service-modal-dot]")
        .forEach(dot => {
            dot.addEventListener(
                "click",
                () => {
                    serviceModalState.index =
                        Number(dot.dataset.serviceModalDot);

                    renderServiceModalPhoto(title);
                }
            );
        });
}

function renderTestimonials(content){

    const section =
        document.getElementById("testimonials");

    const testimonialItems =
        content.testimonials?.items || [];

    if (!testimonialItems.length){
        section.innerHTML = "";
        section.hidden = true;
        return;
    }

    section.hidden = false;

    const html =
        testimonialItems
            .slice(0, 3)
            .map(item => `
                <div class="testimonial">
                    <div
                        class="testimonial-score"
                        aria-label="${item.score} out of 5">
                        ${renderStars(item.score)}
                    </div>

                    <p>${item.review}</p>
                </div>
            `)
            .join("");

    section.innerHTML = `
        <h2>${content.testimonials.title}</h2>

        <div class="testimonial-grid">
            ${html}
        </div>
    `;
}

function renderStars(score){

    const rating =
        Math.max(
            0,
            Math.min(5, Number(score) || 0)
        );

    return Array
        .from(
            { length:5 },
            (_, index) => `
                <span class="${index < rating ? "is-filled" : ""}">
                    &#9733;
                </span>
            `
        )
        .join("");
}

function renderFaq(content){

    const section =
        document.getElementById("faq");

    const faqItems =
        content.faq?.items || [];

    if (!faqItems.length){
        section.innerHTML = "";
        section.hidden = true;
        return;
    }

    section.hidden = false;

    const items =
        faqItems
            .map(item => `
                <details>
                    <summary>${item.question}</summary>
                    <p>${item.answer}</p>
                </details>
            `)
            .join("");

    section.innerHTML = `
        <h2>${content.faq.title}</h2>

        <div class="faq">
            ${items}
        </div>
    `;
}

function renderAbout(config, content){

    document.getElementById("about").innerHTML = `
        <div class="about-grid">

            <img
                src="${config.about.image}"
                alt="">

            <div>

                <h2>${content.about.title}</h2>

                <p>${content.about.text}</p>

                <br>

                <p>${content.about.text2}</p>

            </div>

        </div>
    `;
}

function renderLocation(config, content){

    document.getElementById("location").innerHTML = `
    <div>
        <h2>${content.location.whereToFindUsTitle}</h2>
        
        <p class="location-address-header">${config.business.address}</p>
        
        <p class="location-working-hours">${content.location.hoursTitle}</p>
    <div>
        <div class="location">
            <iframe
                src="${config.location.mapUrl}"
                title="${content.location.title} map">
            </iframe>

        </div>
    `;
}

function renderFooter(config, content){

    document.getElementById("footer").innerHTML = `
        <div class="footer-grid">

            <div>

                <h3>${content.footer.address}</h3>

                <p>${config.business.address}</p>

            </div>

            <div>

                <h3>${content.footer.businessInfo}</h3>

                <p>IČO: ${config.business.ico}</p>

            </div>

            <div>

                <h3>${content.footer.contact}</h3>

                <p>${config.business.phone}</p>

                <p>${config.business.email}</p>

            </div>

        </div>
    `;
}

function renderMessengers(config, content){

    document.getElementById(
        "floating-buttons"
    ).innerHTML = /* html */`
        <div class="floating-contact">

            <a
                href="${config.business.whatsappUrl}"
                target="_blank">
                <img
                    src="https://cdn.simpleicons.org/whatsapp"
                    alt="WhatsApp">
            </a>

            <a
                href="${config.business.viberUrl}">
                <img
                    src="https://cdn.simpleicons.org/viber"
                    alt="Viber">
            </a>

        </div>
    `;
}
