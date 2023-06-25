// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt"],
  typescript: {
    strict: true,
  },
  app: {
    pageTransition: { name: "slide-right", mode: "out-in" },
  },
});
