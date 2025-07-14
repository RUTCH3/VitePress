export default {
  srcDir: 'docs',
  head: [['link', { rel: 'icon', href: './circle_logo.png' }]],
  themeConfig: {
    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Rock',
      description: 'A cool tool to generate apps easier.',
      themeConfig: {
        logo: '/circle_logo.png',
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
              { text: 'Our Team', link: '/our-team' }
            ]
          }
        ],
        lastUpdated: {
          text: 'Updated at',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/rutch3/vitepress' }
        ],
        editLink: {
          pattern: 'https://github.com/RUTCH3/VitePress/edit/main/VitePress/docs/:path',
          text: 'Edit this page on GitHub'
        },
        carbonAds: {
          code: 'your-carbon-code',
          placement: 'your-carbon-placement'
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present RUTCH3'
        }
      }
    },
    he: {
      label: 'עברית',
      lang: 'he',
      link: '/he',
      title: 'Rock | אפליקצייה ליצירת יישומים',
      description: 'כלי מגניב ליצירת יישומים בקלות.',
      themeConfig: {
        logo: '/circle_logo.png',
        siteTitle: 'Rock',
        nav: [
          { text: 'בית', link: '/he/' },
          { text: 'מדריך התקנה', link: '/he/installation-guide' }
        ],
        sidebar: [
          {
            text: 'התחלה מהירה',
            items: [
              { text: 'מדריך התקנה', link: '/he/installation-guide' },
              { text: 'הצוות שלנו', link: '/he/our-team' },
            ]
          }
        ],
        lastUpdated: {
          text: 'עודכן ב - ',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/rutch3/vitepress' }
        ],
        editLink: {
          pattern: 'https://github.com/RUTCH3/VitePress/edit/main/VitePress/docs/:path',
          text: 'ערוך דף זה ב - GitHub'
        },
        docFooter: {
          prev: 'לעמוד הקודם',
          next: 'לעמוד הבא'
        },
        outlineTitle: 'בעמוד זה',
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
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present RUTCH3'
        }
      }
    }
  },
  base: '/sign-up-2/',
  ignoreDeadLinks: true
}