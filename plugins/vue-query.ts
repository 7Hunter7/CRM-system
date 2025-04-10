// Инициализируем QueryClient и настраиваем гидратацию для рендеринга на стороне сервера
// https://tanstack.com/query/latest/docs/framework/vue/guides/ssr

import type {
  DehydratedState,
  VueQueryPluginOptions,
} from "@tanstack/vue-query";
import {
  VueQueryPlugin,
  QueryClient,
  hydrate,
  dehydrate,
} from "@tanstack/vue-query";

import { defineNuxtPlugin, useState } from "#imports";

export default defineNuxtPlugin((nuxt) => {
  // Создаем состояние для хранения состояния Vue Query
  const vueQueryState = useState<DehydratedState | null>("vue-query");

  // Глобальные настройки запроса
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } },
  });

  // Создаем экземпляр QueryClient с настройками по умолчанию
  const options: VueQueryPluginOptions = { queryClient };

  // Подключаем Vue Query плагин
  nuxt.vueApp.use(VueQueryPlugin, options);

  /* Проверяем, находимся ли мы на стороне сервера или клиента
  и соответствующим образом настраиваем гидратацию */
  if (import.meta.server) {
    nuxt.hooks.hook("app:rendered", () => {
      vueQueryState.value = dehydrate(queryClient);
    });
  }

  if (import.meta.client) {
    hydrate(queryClient, vueQueryState.value);
  }
});
