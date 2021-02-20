module.exports = function (config) {

    // Copy all the files generated via PostCSS without performing any kind of
    // processing on top of that.
    config.addPassthroughCopy("./src/css");
    // Copy over all the images.
    config.addPassthroughCopy("./src/img")

    return {
        dir: {
            // Use the `src` folder as the default root folder when building
            // the site.
            input: "src",
            includes: "_includes",
            // Output the static site to a `dist` folder.
            output: "release"
        },

        // Use the Liquid templating engine. Maybe switch to njk later?
        templateFormats: ["liquid", "md", "11ty.js"],
        htmlTemplateEngine: "liquid",
        passthroughFileCopy: true
    }
};