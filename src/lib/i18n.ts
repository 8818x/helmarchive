export type Lang = 'en' | 'th';

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    bookshelf: 'bookshelf',
    tags: 'tags',
    latest: 'latest in bookshelf',
    source: 'Written on',
    disclaimer: "This article reflects the author's personal views. The content may contain factual or technical errors; the author apologizes for any mistakes herein.",
    references: 'References',
    related: 'Related',
    entry: 'entry',
    entries: 'entries',
    byDate: 'by date',
    byTag: 'by tag',
    official: 'Official site',
    writing: 'Writing',
    mentionedIn: 'Mentioned in',
    notMentioned: 'Not mentioned yet',
    theme: 'Theme',
    preferences: 'Preferences',
    themeRosePine: 'rosé-pine',
    themeDark: 'dark',
    themeLight: 'light',
    language: 'Language',
    bulletinBoard: 'bulletin board',
  },
  th: {
    bookshelf: 'ชั้นหนังสือ',
    tags: 'แท็ก',
    latest: 'ล่าสุดในชั้นหนังสือ',
    source: 'เขียนบน',
    disclaimer: 'บทความนี้เป็นความคิดเห็นส่วนตัวของผู้เขียน เนื้อหาอาจมีข้อผิดพลาดด้านข้อมูลหรือเทคนิค หากมีข้อผิดพลาดประการใด ผู้เขียนต้องขออภัยไว้ ณ ที่นี้',
    references: 'อ้างอิง',
    related: 'บทความที่เกี่ยวข้อง',
    entry: 'รายการ',
    entries: 'รายการ',
    byDate: 'ตามวันที่',
    byTag: 'ตามแท็ก',
    official: 'เว็บไซต์ทางการ',
    writing: 'งานเขียน',
    mentionedIn: 'ถูกกล่าวถึงใน',
    notMentioned: 'ยังไม่ถูกกล่าวถึง',
    theme: 'ธีม',
    preferences: 'ตั้งค่า',
    themeRosePine: 'โรเซ่ไพน์',
    themeDark: 'มืด',
    themeLight: 'สว่าง',
    language: 'ภาษา',
    bulletinBoard: 'บอร์ดประกาศ',
  },
} satisfies Record<Lang, Record<string, string>>;

// single source of truth for date formatting. the build uses these directly in
// dateLong/dateShort below; Base.astro ships them to the browser (one JSON payload with
// the ui strings) so the runtime language-toggle reformat can't drift from the build render.
export const LOCALE: Record<Lang, string> = { en: 'en-GB', th: 'th-TH' };
export const DATE_FMT = {
  long: { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' },
  short: { year: 'numeric', month: 'short', day: 'numeric' },
} as const;

export function dateLong(date: Date, lang: Lang) {
  return date.toLocaleDateString(LOCALE[lang], DATE_FMT.long);
}

export function dateShort(date: Date, lang: Lang) {
  return date.toLocaleDateString(LOCALE[lang], DATE_FMT.short);
}
