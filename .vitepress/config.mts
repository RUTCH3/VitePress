import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Rock',
      description: 'A cool tool to generate apps easier.',
      themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'Rock',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Installation Guide', link: '/installation-guide' }
        ],
        sidebar: [
          {
            text: 'Quick Start',
            items: [
              { text: 'Installation Guide', link: '/installation-guide' },
              { text: 'Runtime API Examples', link: '/installation-guide-2' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        outline: 'deep',
        editLink: {
          pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        search: {
          provider: 'local'
        },
        carbonAds: {
          code: 'your-carbon-code',
          placement: 'your-carbon-placement'
        }
      }
    },
    he: {
      label: 'עברית',
      lang: 'he',
      link: '/he',
      title: 'Rock - עברית',
      description: 'כלי מגניב ליצירת יישומים בקלות.',
      themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'רוק',
        nav: [
          { text: 'בית', link: '/he/' },
          { text: 'מדריך התקנה', link: '/he/installation-guide' }
        ],
        sidebar: [
          {
            text: 'התחלה מהירה',
            items: [
              { text: 'מדריך התקנה', link: '/he/installation-guide' },
              { text: 'דוגמאות קריאת API', link: '/he/installation-guide-2' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        outline: 'deep',
        editLink: {
          pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
          text: 'ערוך דף זה ב־GitHub'
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              he: {
                translations: {
                  button: {
                    buttonText: 'חיפוש',
                    buttonAriaLabel: 'חיפוש'
                  },
                  modal: {
                    displayDetails: 'הצג מידע מפורט',
                    resetButtonTitle: 'איפוס חיפוש',
                    backButtonTitle: 'חזרה לחיפוש',
                    noResultsText: 'אין תוצאות',
                    footer: {
                      selectText: 'בחירה',
                      selectKeyAriaLabel: 'בחירה',
                      navigateText: 'ניווט',
                      navigateUpKeyAriaLabel: 'חץ למעלה',
                      navigateDownKeyAriaLabel: 'חץ למטה',
                      closeText: 'סגירה',
                      closeKeyAriaLabel: 'esc'
                    }
                  }
                }
              }
            }
          }
        },
        carbonAds: {
          code: 'your-carbon-code',
          placement: 'your-carbon-placement'
        }
      }
    }
  },
  base: '/VitePress/'

  // https://vitepress.dev/reference/default-theme-config
})
