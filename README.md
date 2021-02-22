# Andrei Maxim's personal blog

This is supposed to be both a blog but also a way for me to learn how to
build static sites. You'll never know when this might be useful!

The stack is rather simple:

* Node 14 LTS and npm
* 11ty as the site generator
* Tailwind CSS for styling

In the future it might include a JS framework.

The two main commands:

* `npm start` which will start a live server
* `npm run build` which will build the static site in a `release` folder

If the `NODE_ENV` environment variable is present then the Tailwind CSS file
will be automatically purged of unused classes. If the styling is off, verify 
the `purge` configuration  in `tailwind.config.js` to make sure it matches the 
correct file extensions.

The site is ready to be published on Netlify as it contains a `netlify.toml`
configuration file.
