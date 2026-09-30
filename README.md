# ByteSpace – Landing page

Next.js 14 (App Router) + Tailwind CSS. Built from the ByteSpace Figma design.

- `/` – full landing page (hero, partners, course tabs + grid, categories, growth/creator sections, creator CTA, testimonials, footer)
- `/login`, `/signup` – bonus pages (client-side validation, no backend)
- 404 page – `app/not-found.jsx`

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

```
app/            routes (page, login, signup, not-found, layout, globals.css)
components/     Header, Hero, Partners, CourseBrowser, CourseCard, Categories,
                Growth, CreatorCTA, Testimonials, Footer, AuthShell, AuthForm, ...
lib/data.js     courses, tabs, testimonials, footer links
tailwind.config.js   design tokens (colors, fonts) from the Figma CSS
```

## Notes for the reviewer

- Fonts: Poppins (Google Fonts) and Satoshi + Clash Display (Fontshare), loaded in `app/layout.jsx`.
- Photos and 3D ornaments from Figma were not exported, so the course images, avatars, hero person and lime shapes are code-drawn placeholders. To use real images, put files in `public/images/` and pass `src` to `Thumb` (course images) or replace `PersonArt`.
- The course tabs re-order a mock list of 6 courses; there is no API.
- Login / signup validate the form and show a demo success message only.

## Git + deploy

```bash
git init && git add . && git commit -m "feat: ByteSpace landing page"
git checkout -b feature/landing-page
git remote add origin https://github.com/ShowkatSakib/bytespace-landing.git
git push -u origin feature/landing-page   # then open a Pull Request into main
```

Deploy: import the repo at vercel.com/new (framework: Next.js, defaults) and use the live URL as the submission link.
