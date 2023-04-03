// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    "@/assets/styles/web.css",
  ],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
    transpile: ['@headlessui/vue']
  },
  buildModules: [
    
  ],
  runtimeConfig: {
    public: {
      API_URL: 'http://127.0.0.1:8080',
      API_URL_ASSETS: 'http://127.0.0.1:3000',
    }
  },
  ssr:false,
  //middleware: ["auth"],
  env: {
    baseUrl: process.env.NUXT_API_URL || 'http://127.0.0.1:3000'
  }
});
