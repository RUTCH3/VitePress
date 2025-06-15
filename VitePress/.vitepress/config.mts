export default {
  srcDir: 'docs',  
  allowed_elements:["script","VPTeamMembers","Badge"],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Rock',
      description: 'A cool tool to generate apps easier.',
      themeConfig: {
        logo: '/docs/logo.svg',
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
        },
        footer: {
          message: 'Released under the PTR-15 License.',
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
        logo: '/docs/logo.svg',
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
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        outline: 'deep',
        editLink: {
          pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
          text: 'ערוך דף זה ב ־ GitHub'
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
          message: 'Released under the PTR-15 License.',
          copyright: 'Copyright © 2019-present RUTCH3'
        }
      }
    }
  },
  base: '/VitePress/',
  ignoreDeadLinks: [
    /^https?:\/\/localhost/,
    /^\/he\/api-examples$/,
    /^\/he\/customization$/,
    /^\/he\/plugins$/,
    /^\/api-examples$/,
    /^\/customization$/,
    /^\/plugins$/,
    /^\/he\/careers$/,
    /^\/he\/contact$/,
    /^\/careers$/,
    /^\/contact$/
  ]
  // https://vitepress.dev/reference/default-theme-config
}