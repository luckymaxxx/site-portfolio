// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Адреса продакшн-деплою. Від неї будуються canonical-посилання, hreflang,
// OG-теги та sitemap, тож при переїзді на власний домен міняти треба тут.
const SITE = 'https://maksym-sytkiv-site-portfolio.vercel.app';

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
