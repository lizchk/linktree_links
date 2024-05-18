export default ({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
    runtimeConfig: {
        public: {
            appData: process.env.VUE_APP_DATA,
        }
    },
})
