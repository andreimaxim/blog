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
