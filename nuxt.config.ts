// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
          ]
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone']
          : []
    }
  },
  modules: ["@bg-dev/nuxt-naiveui", "@hypernym/nuxt-gsap"],
  runtimeConfig: {
      NOTION_API_KEY: process.env.NOTION_API_KEY,
      NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/font/fonts.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
