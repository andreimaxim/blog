module.exports = function (config) {

    // TODO: Add 11ty configuration settings here.

    return {
        dir: {
            // Use the `src` folder as the default root folder when building
            // the site.
            input: "src",
            // Output the static site to a `dist` folder.
            output: "dist"
        },

        // Use the Liquid templating engine. Maybe switch to njk later?
        templateFormats: ["liquid", "md", "11ty.js"],
        htmlTemplateEngine: "liquid"
    }
};