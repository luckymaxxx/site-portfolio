/**
 * Мінімальний інлайновий Markdown для рядків із frontmatter.
 * Підтримує **жирний**, *курсив*, `код` і [текст](посилання) — цього досить
 * для буллітів, lede та блоку резюме. Повноцінний Markdown живе в тілі файлу.
 *
 * Вхід завжди екранується, тому HTML із контенту не виконується.
 */

/** Сентинел для тимчасової заміни code-спанів. У контенті не трапляється. */
const CODE_OPEN = '@@code-7f3a-';
const CODE_CLOSE = '-a3f7@@';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function inlineMd(source: string): string {
  const codes: string[] = [];

  // 1. виймаємо `код`, щоб решта правил його не чіпала
  let out = escapeHtml(source).replace(/`([^`]+)`/g, (_match, code: string) => {
    codes.push(code);
    return `${CODE_OPEN}${codes.length - 1}${CODE_CLOSE}`;
  });

  // 2. посилання, жирний, курсив
  out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" rel="noopener">$1</a>');
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');

  // 3. повертаємо код на місце
  const restore = new RegExp(`${CODE_OPEN}(\\d+)${CODE_CLOSE}`, 'g');
  out = out.replace(restore, (_match, index: string) => `<code>${codes[Number(index)]}</code>`);

  return out;
}
