export default {
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - Big Five",
    title: "Free open-source BigFive personality traits test",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Take a free, open-source Big Five personality test. Learn to know your personality traits and compare yourself with your partner, colleagues, friends or family."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "big five personality test, big 5 personality test, b5 test, bigfive test, personality traits, bigfive, compare, free, jordan peterson"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Free open-source BigFive personality traits test"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Take a free, open-source Big Five personality test. Learn to know your personality traits and compare yourself with your partner, colleagues, friends or family"
      },
      { hid: "og:type", name: "og:type", content: "website" },
      { hid: "og:url", name: "og:url", content: "https://b5.glows.my" },
      {
        hid: "og:image",
        name: "og:image",
        content:
          "https://campusai.pl/wp-content/uploads/2023/10/Page-2-100x100.png"
      },
      { hid: "twitter:card", name: "twitter:card", content: "summary" },
      { hid: "twitter:site", name: "twitter:site", content: "@maccyber" },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Free open-source BigFive personality traits test"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Take a free, open-source Big Five personality test. Learn to know your personality traits and compare yourself with your partner, colleagues, friends or family"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content:
          "https://campusai.pl/wp-content/uploads/2023/10/Page-2-100x100.png"
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "BigFive logo"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href:
          "https://campusai.pl/wp-content/uploads/2023/10/Page-2-100x100.png"
      }
      // { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  optimizeCSS: true,
  pwa: {
    manifest: {
      name: "bigfive",
      short_name: "b5"
    }
  },
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~/plugins/apexcharts', mode: 'client' },
    { src: "~/plugins/confetti", mode: "client" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-92177881-2"
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  optimizedImages: {
    optimizeImages: true
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/axios",
    "nuxt-webfontloader",
    "@nuxtjs/pwa",
    "@aceforth/nuxt-optimized-images",
    [
      "nuxt-i18n",
      {
        locales: [
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en-US.js",
            dir: "ltr"
          }
        ],
        seo: true,
        baseUrl: "https://b5.glows.my",
        defaultLocale: "en",
        strategy: "no_prefix",
        lazy: true,
        langDir: "translations/",
        detectBrowserLanguage: {
          onlyOnRoot: false,
          useCookie: false,
          fallbackLocale: "en",
          alwaysRedirect: false
        }
      }
    ],
    "@nuxtjs/sitemap",
    [
      "nuxt-amplitude",
      {
        apiKey: "2ceb7de83dc2b9a3f73bbece2eaf0d94",
        config: {
          saveEvents: true,
          includeUtm: true,
          includeReferrer: true,
          trackingOptions: {
            country: true,
            city: true,
            ip_address: false
          }
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  sitemap: {
    hostname: "https://b5.glows.my"
  },
  webfontloader: {
    google: {
      families: ["Mulish"]
    }
  },
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: {
      font: {
        family: "Mulish",
        size: "1.125rem"
      },
      icons: false
    },
    lang: {
      current: "en"
    },
    theme: {
      light: true,
      themes: {
        light: {
          primary: "#000000",
          secondary: "#49bb58",
          accent: "#607d8b",
          error: "#f44336",
          warning: "#ff9800",
          info: "#03a9f4",
          success: "#7dde76",
          anchor: "#49bb58"
        }
      }
    }
  },
  env: {
    API_URL: "https://bigfive-test.com/api/" // TODO: Fix for dev environment
  },
  build: {
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: "pre",
      //     test: /\.(js|vue)$/,
      //     loader: "eslint-loader",
      //     exclude: /(node_modules)/
      //   });
      // }
    }
  }
};
