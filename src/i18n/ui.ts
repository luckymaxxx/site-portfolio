/**
 * Єдине джерело правди для всіх рядків інтерфейсу.
 * У компонентах не має бути жодного захардкодженого тексту — тільки t('ключ').
 */

export const languages = {
  en: 'English',
  uk: 'Українська',
} as const;

export const languageShort = {
  en: 'EN',
  uk: 'UK',
} as const;

export const defaultLang = 'en' satisfies Lang;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // --- навігація та службове ---
    'skip.toContent': 'Skip to content',
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.cv': 'CV',
    'nav.ariaLabel': 'Primary',
    'theme.toggle': 'Toggle colour theme',
    'lang.ariaLabel': 'Language',
    'lang.switchTo': 'Switch to Українська',

    // --- головна ---
    'home.bio': 'About',
    'home.work': 'Selected work',
    'home.workEyebrow': 'Case studies',
    'home.stack': 'Stack',
    'home.stackEyebrow': 'What I work with',
    'home.experience': 'Experience',
    'home.experienceEyebrow': 'Track record',
    'home.contact': 'Contact',
    'home.availability': 'Availability',

    // --- картки проектів ---
    'card.read': 'Read the case',
    'card.originalLang': 'Available in Ukrainian only',
    'card.originalLangEn': 'Available in English only',

    // --- сторінка кейсу ---
    'case.role': 'Role',
    'case.period': 'Period',
    'case.status': 'Status',
    'case.domain': 'Domain',
    'case.team': 'Team',
    'case.present': 'present',
    'case.links': 'Links',
    'case.pains': 'What the product solves',
    'case.painsEyebrow': 'Product',
    'case.painsColLeft': 'Customer pain',
    'case.painsColRight': 'What the platform gives',
    'case.glossary': 'Domain language',
    'case.glossaryEyebrow': 'Terms the code is written in',
    'case.charts': 'Contribution profile',
    'case.chartsEyebrow': 'From git history',
    'case.highlights': 'Key workstreams',
    'case.highlightsEyebrow': 'What was shipped',
    'case.stack': 'Technical stack',
    'case.stackEyebrow': 'Highlighted — used daily',
    'case.resume': 'Ready-made résumé entry',
    'case.resumeEyebrow': 'Copy as is',
    'case.resumeLabel': 'Work experience · entry',
    'case.resumeSelect': 'Select the whole block',
    'case.resumeSelectedMac': 'Selected — press ⌘C',
    'case.resumeSelectedPc': 'Selected — press Ctrl+C',
    'case.notes': 'Additional notes',
    'case.notesEyebrow': 'Appendix',
    'case.prev': 'Previous project',
    'case.next': 'Next project',
    'case.backToWork': 'All projects',

    // --- CV ---
    'cv.title': 'Curriculum vitae',
    'cv.print': 'Save as PDF',
    'cv.summary': 'Summary',
    'cv.experience': 'Experience',
    'cv.skills': 'Skills',
    'cv.education': 'Education',
    'cv.languages': 'Languages',
    'cv.contacts': 'Contacts',

    // --- 404 ---
    '404.title': 'Page not found',
    '404.text': 'The address is wrong or the page has moved.',
    '404.home': 'Go to the home page',

    // --- футер ---
    'footer.rights': 'All rights reserved',
    'footer.builtWith': 'Built with Astro. No trackers, no cookies.',
  },

  uk: {
    // --- навігація та службове ---
    'skip.toContent': 'Перейти до вмісту',
    'nav.home': 'Головна',
    'nav.work': 'Проекти',
    'nav.cv': 'Резюме',
    'nav.ariaLabel': 'Основна навігація',
    'theme.toggle': 'Перемкнути тему',
    'lang.ariaLabel': 'Мова',
    'lang.switchTo': 'Switch to English',

    // --- головна ---
    'home.bio': 'Коротко про себе',
    'home.work': 'Вибрані проекти',
    'home.workEyebrow': 'Розбори',
    'home.stack': 'Стек',
    'home.stackEyebrow': 'З чим працюю',
    'home.experience': 'Досвід',
    'home.experienceEyebrow': 'Хронологія',
    'home.contact': 'Контакти',
    'home.availability': 'Статус',

    // --- картки проектів ---
    'card.read': 'Читати розбір',
    'card.originalLang': 'Доступно тільки українською',
    'card.originalLangEn': 'Доступно тільки англійською',

    // --- сторінка кейсу ---
    'case.role': 'Роль',
    'case.period': 'Період',
    'case.status': 'Статус',
    'case.domain': 'Домен',
    'case.team': 'Команда',
    'case.present': 'по сьогодні',
    'case.links': 'Посилання',
    'case.pains': 'Що вирішує продукт',
    'case.painsEyebrow': 'Продукт',
    'case.painsColLeft': 'Біль клієнта',
    'case.painsColRight': 'Що дає платформа',
    'case.glossary': 'Мова домену',
    'case.glossaryEyebrow': 'Терміни, у яких написаний код',
    'case.charts': 'Профіль внеску',
    'case.chartsEyebrow': 'Дані з git-історії',
    'case.highlights': 'Ключові напрямки',
    'case.highlightsEyebrow': 'Що зроблено',
    'case.stack': 'Технічний стек',
    'case.stackEyebrow': 'Виділено те, з чим працював щодня',
    'case.resume': 'Готовий блок для резюме',
    'case.resumeEyebrow': 'Копіювати як є',
    'case.resumeLabel': 'Досвід роботи · запис',
    'case.resumeSelect': 'Виділити весь блок',
    'case.resumeSelectedMac': 'Виділено — натисніть ⌘C',
    'case.resumeSelectedPc': 'Виділено — натисніть Ctrl+C',
    'case.notes': 'Додатково',
    'case.notesEyebrow': 'Доповнення',
    'case.prev': 'Попередній проект',
    'case.next': 'Наступний проект',
    'case.backToWork': 'Усі проекти',

    // --- CV ---
    'cv.title': 'Резюме',
    'cv.print': 'Зберегти у PDF',
    'cv.summary': 'Про себе',
    'cv.experience': 'Досвід роботи',
    'cv.skills': 'Навички',
    'cv.education': 'Освіта',
    'cv.languages': 'Мови',
    'cv.contacts': 'Контакти',

    // --- 404 ---
    '404.title': 'Сторінку не знайдено',
    '404.text': 'Адреса помилкова або сторінка переїхала.',
    '404.home': 'На головну',

    // --- футер ---
    'footer.rights': 'Усі права застережено',
    'footer.builtWith': 'Зроблено на Astro. Без трекерів і кукі.',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];
