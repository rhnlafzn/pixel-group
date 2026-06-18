# PT. Idea Kreasi Media - OOH Media Website

A Next.js 16 (App Router) web application built for **PT. Idea Kreasi Media**, specializing in Out-Of-Home (OOH) media campaigns, billboards, and street name signage.

---

## 📂 Project Architecture

To facilitate seamless collaboration across different maintenance teams, the codebase follows a highly modular structure:

```text
pixel-group/
├── public/                 # Static assets served directly (logo, hero images, etc.)
│   ├── images/             # Organized visual assets (about, services, portfolio)
│   └── logo-idea.png       # Primary branding logo
├── scripts/                # Node.js utility and database management scripts
│   └── seed_db.mjs         # Script to seed Firestore database with initial data
├── src/
│   ├── app/                # Next.js App Router (Pages, layouts, and route handlers)
│   │   ├── about/          # "Tentang Kami" page and layout
│   │   ├── admin/          # Admin Portal dashboard (Portfolios, Settings, Inbox)
│   │   ├── contact-us/     # "Hubungi Kami" contact form
│   │   ├── our-works/      # Dynamic portfolio display
│   │   ├── services/       # Services presentation
│   │   ├── robots.js       # Dynamic robots.txt SEO rules
│   │   ├── sitemap.js      # Dynamic sitemap.xml SEO crawler index
│   │   ├── layout.js       # Root layout containing SEO metadata and JSON-LD schema
│   │   └── page.js         # Landing page (Homepage)
│   ├── components/         # Reusable UI components (Navbar, Footer, CTA, Canvas animations)
│   ├── context/            # React Context Providers for global state
│   │   ├── CompanyContext.js   # Fetches and manages company settings from Firestore
│   │   └── LanguageContext.js  # Manages multi-language translation state (ID/EN)
│   ├── hooks/              # Custom React Hooks (scroll animations, etc.)
│   ├── lib/                # Database and third-party library initializations
│   │   └── firebase.js     # Firebase App and Firestore configuration
│   ├── translations/       # Translation JSON dictionaries (ID/EN)
│   └── utils/              # Utility helper functions
└── .env.local              # Local environment credentials (excluded from Git)
```

---

## 🔥 Firebase Database Integration

This project is connected directly to **Firebase Firestore** for dynamic content management.

### Seeding Initial Data
If you need to populate a new Firestore database instance, run the built-in seeding script:
```bash
node scripts/seed_db.mjs
```
This script will automatically write:
1. Default Company Identity Settings to the `company_settings/default` document.
2. 11 starting portfolio items to the `portfolio_works` collection.

### Environment Variables
To connect this app online (both in local dev and production), configure the following environment variables in `.env.local` or your hosting provider (e.g. Vercel, Netlify):
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

*Note: If these variables are not set, the application will automatically fall back to browser `localStorage` as a fail-safe.*

---

## 🚀 SEO & Launching

The application is pre-configured with SEO best practices for Google Search indexing:
* **JSON-LD Schema**: Root layout contains `Organization` and `WebSite` structured data to display rich search results (Knowledge Graphs, logos, and contacts).
* **Robots.txt**: Excludes the `/admin` path from being crawled to protect dashboard security.
* **Sitemap.xml**: Auto-generates URLs for all public routes to aid search engine indexing.

---

## 🛠️ Development and Maintenance

### Getting Started
Install dependencies and run the local development server:
```bash
npm install
npm run dev
```

### Production Build
Generate optimized production bundle:
```bash
npm run build
npm start
```
