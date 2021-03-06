/*
The main Tailwind CSS configuration file

The file is loaded when PostCSS loads the Tailwind plugin, which
automatically loads this file. Since Tailwind is supposed to be modified
quite a lot by the developers, it's cleaner to have all the changes here
and not inside the postcss.config.js, especially during development in order
for people to track presentation changes separately from the setup changes.

More details here:

https://tailwindcss.com/docs/configuration
 */
module.exports = {
    // Include custom Tailwind CSS presets
    theme: {
        fontFamily: {
            sans: [
                'atkinson_hyperlegibleregular',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ],
            bold: [
                'atkinson_hyperlegiblebold'
            ],
            italic: [
                'atkinson_hyperlegibleitalic'
            ]

        },
        extend: {}
    },
    variants: {
        extend: {},
    },
    plugins: [],
    purge: [
        './src/**/*.liquid'
    ],
}
