import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  // Подключаем модули
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "shadcn-nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    prefix: "Ui",
    componentDir: "./components/ui",
  },
});
