async function loadContent(language) {

    const [configResponse, contentResponse] =
        await Promise.all([
            fetch("config/site.json"),
            fetch(`content/${language}.json`)
        ]);

    const config =
        await configResponse.json();

    const content =
        await contentResponse.json();

    return {
        config,
        content
    };
}