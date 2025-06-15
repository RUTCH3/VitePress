---
outline: deep
---

# מדריך התקנה <Badge type="warning" text="בטא" />

ברוכים הבאים למדריך ההתקנה הרשמי של **Rock** — מחולל האפליקציות האולטימטיבי שיעזור לכם לבנות, לפרוס ולתחזק אפליקציות בצורה פשוטה ומהירה.

## דרישות מוקדמות

לפני שמתחילים, ודאו שברשותכם:

- [Node.js](https://nodejs.org/) (גרסה 18 ומעלה)
- [npm](https://www.npmjs.com/) או [yarn](https://yarnpkg.com/)
- Git (רשות, אך מומלץ)

## התקנת CLI של Rock

להתקנת הכלי הגלובלי:

```bash
npm install -g create-rock
```

או עם Yarn:

```bash
yarn global add create-rock
```

## יצירת אפליקציה חדשה

להתחלת פרויקט:

```bash
create-rock my-app
```

תתבקשו לבחור:

- תבנית (כמו Dashboard, פורטפוליו, SaaS)
- Framework (Vue, React, Solid)
- שירותים (CI/CD, DB, Auth, תשלומים)

בסיום – הכל מוכן כולל Frontend, Backend ופריסה אוטומטית.

## הרצה מקומית

עברו לתיקיית האפליקציה:

```bash
cd my-app
npm run dev
```

גשו לכתובת [http://localhost:3000](http://localhost:3000).

## פריסה בלחיצה אחת

ניתן לפרוס ל:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- **שרת פרטי (VPS)**

לדוגמה לפריסה ל-GitHub Pages:

```bash
npm run build
npm run deploy
```

> Rock תייצר לכם Pipeline אוטומטי עם סביבות staging ו-production.

## טיפים

::: tip
`rock config` — להגדרות מתקדמות
:::

::: tip
`rock doctor` — פתרון תקלות אוטומטי
:::

::: tip
`rock plugins` — הרחבות מותאמות אישית
:::

## מה הלאה?

- [ראו דוגמאות API](/he/api-examples)
- [התאימו את האפליקציה](/he/customization)
- [עיינו בתוספים](/he/plugins)

---

> צריכים עזרה? הצטרפו ל[Discord שלנו](https://discord.gg/rock) או פתחו [בעיה ב-GitHub](https://github.com/rutch3/VitePress/issues).

תנו ל־**Rock** ללוות אתכם עד להשקה מוצלחת ומאובטחת!
