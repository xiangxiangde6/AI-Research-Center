AUT Center for Artificial Intelligence Research — Website (Demo)
================================================================

Overview
-----------
This project is a **Next.js 15 + TypeScript + Tailwind CSS** website for the
AUT Center for Artificial Intelligence Research (CAIR).
It demonstrates a modular, academic-style research website with pages for
Projects, People, News & Events, Study, and Resources.

Each section retrieves hardcoded data from /src/data and renders with
component-based layouts (Section, Card, Header, Footer).

Directory Structure
----------------------
cair-website/
├─ public/                 # Static assets (icons, images)
├─ src/
│  ├─ app/                 # Next.js App Router pages
│  │  ├─ page.tsx          # Home page (Research Themes, Projects, etc.)
│  │  ├─ projects/         # Project list & detail pages
│  │  │  ├─ page.tsx       # Project listing page
│  │  │  └─ [slug]/page.tsx# Project detail page (dynamic route)
│  │  ├─ people/           # Researchers and staff directory
│  │  ├─ news-and-events/  # Seminar & news posts
│  │  ├─ study/            # Study opportunities and course links
│  │  └─ resources/        # Open datasets and lab facilities
│  ├─ components/          # Reusable UI components
│  │  ├─ Header.tsx        # Top navigation bar
│  │  ├─ Footer.tsx        # Contact & quick links
│  │  ├─ Section.tsx       # Reusable section wrapper
│  │  └─ Card.tsx          # Content preview card component
│  └─ data/                # Mock data files (editable JSON-like modules)
│     ├─ projects.ts
│     ├─ people.ts
│     ├─ news.ts
│     ├─ study.ts
│     └─ resources.ts
├─ tailwind.config.ts      # Tailwind configuration
├─ postcss.config.mjs      # PostCSS plugins (@tailwindcss/postcss)
├─ tsconfig.json           # TypeScript paths & strict mode settings
├─ package.json            # Dependencies and scripts
└─ README.txt              # (this file)

Running Locally
------------------
1. Install dependencies:
   npm install

2. Run the development server:
   npm run dev

3. Open the website:
   http://localhost:3000/

Navigation
-------------
- Home page:
  Displays research overview, latest projects, people, events, and resources.

- Projects:
  Lists all research projects with filters by theme; click for details.

- People:
  Lists team members, titles, and roles.

- News & Events:
  Highlights seminars, awards, and announcements.

- Study With Us:
  Lists PhD, Master's, and Scholarship opportunities.

- Resources:
  Lists lab facilities, datasets, and software repositories.

Tech Stack
-------------
- Framework: Next.js 15 (App Router)
- Language: TypeScript 5.9
- Styling: Tailwind CSS 4.x + @tailwindcss/postcss
- UI Components: Custom modular layout
- Data Layer: Static TypeScript modules (/src/data)
- Hosting: Static deployable (e.g., Vercel or Netlify)

Credits
-----------
Developed as part of the AUT BCIS Capstone Project.
Designed and implemented by Markus Lee and team (2025).
