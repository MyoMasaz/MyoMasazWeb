# Project Documentation

This document outlines the files you'll need to edit to update the website's content and images, without touching any code or styling.

### Files to Edit for Content and Images

*   **`content/en.json`**
    *   **Description:** This file contains all the English text content displayed on your website. You should edit the values associated with keys like `title`, `subtitle`, `description`, `details`, `review`, `question`, `answer`, and `text` to update the various sections of your site (e.g., hero section, service descriptions, testimonials, FAQ, about section, footer).
    *   **What to edit:**
        *   `meta.title`: The title that appears in the browser tab.
        *   `ui.*`: User interface labels like "Call", "Book", "Details", and units for time and currency.
        *   `hero.title`, `hero.subtitle`: The main heading and subheading on your homepage.
        *   `services.*.title`, `services.*.description`, `services.*.details`: Titles, short descriptions, and detailed descriptions for each massage service.
        *   `certificates.items.*.title`, `certificates.items.*.date`: Titles and dates for your certificates.
        *   `testimonials.items.*.review`: Client reviews.
        *   `faq.items.*.question`, `faq.items.*.answer`: Frequently asked questions and their answers.
        *   `about.text`, `about.text2`: Information about the therapist.
        *   `location.title`, `location.whereToFindUsTitle`: Titles related to the location section.
        *   `footer.*`: Text for the footer section, such as "Address", "Business Information", and "Contact".

*   **`content/cz.json`**
    *   **Description:** Similar to `en.json`, this file holds all the Czech text content for your website. If your site supports multiple languages, ensure you update this file with the corresponding Czech translations for all the content mentioned above.
    *   **What to edit:** All text content fields, mirroring the structure of `en.json`, but in Czech.

*   **`config/site.json`**
    *   **Description:** This configuration file is where you'll find paths to images and other crucial business information. You'll need to update the image URLs to your own images and modify business contact details.
    *   **What to edit:**
        *   `business.name`: Your business name.
        *   `business.phone`: Your business phone number.
        *   `business.bookingUrl`: The URL for your online booking system.
        *   `business.whatsappUrl`, `business.viberUrl`: URLs for your messenger contact links.
        *   `business.address`: Your business physical address.
        *   `business.ico`: Your business identification number.
        *   `business.email`: Your business email address.
        *   `hero.image`: The image displayed in the hero section.
        *   `services.*.image`, `services.*.photos`: Images associated with each service, including any additional photos for the service modal.
        *   `certificates.*.image`: Images for your certificates.
        *   `about.image`: The image displayed in the "About Your Therapist" section.
        *   `location.mapUrl`: The URL for the embedded map of your location.

*   **`assets/images/`**
    *   **Description:** This folder contains all the images used on your website. To customize the site's appearance, you should replace these placeholder images with your own photos. Ensure your new images have the same filenames to avoid breaking the image links.
    *   **What to edit:**
        *   `hero.jpg`: Main image for the hero section.
        *   `therapist.jpg`: Photo for the "About Your Therapist" section.
        *   `service-1.jpg` to `service-7.jpg`: Images for each of your services.
        *   `certificate-1.jpg`, `certificate-2.jpg`: Images of your certificates.