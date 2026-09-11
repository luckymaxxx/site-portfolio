// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: замінити на реальний домен перед деплоєм — від нього залежать
// canonical-посилання, hreflang, OG-теги та sitemap.
const SITE = 'https://maksymsytkiv.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', uk: 'uk' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
