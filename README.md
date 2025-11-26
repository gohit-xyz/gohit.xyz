<div align="center" id="readme-top">

# gohit.xyz

**Modern Portfolio & Blog** — Built with Astro 5, React & Tailwind CSS

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat&logo=vercel)](https://www.gohit.xyz)
[![Astro](https://img.shields.io/badge/Astro-5.15.6-FF5D01?style=flat&logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Protected-F38020?style=flat&logo=cloudflare)](https://www.cloudflare.com)

[**Live Demo**](https://www.gohit.xyz) • [**Architecture**](./ARCHITECTURE.md)

---

<img src="https://raw.githubusercontent.com/gohit-xyz/gohit.xyz/refs/heads/main/public/images/github/screenshot.webp" alt="Portfolio Screenshot" width="800" />

<br />

<img src="https://raw.githubusercontent.com/gohit-xyz/gohit.xyz/refs/heads/main/public/images/github/performance.webp" alt="Performance Score" width="444" />

</div>

<br>

## 🛠️ Tech Stack

| Category         | Technologies                     |
| ---------------- | -------------------------------- |
| **Framework**    | Astro 5.15.6                     |
| **UI Libraries** | React 19.2.0                     |
| **Styling**      | Tailwind CSS 4.1.17 + Custom CSS |
| **Content**      | MDX with Content Collections     |
| **Runtime**      | Bun                              |
| **Deployment**   | Vercel + Cloudflare              |

---

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, SVGs)
├── components/      # Reusable UI components
│   ├── icons/       # SVG icon library (37 icons)
│   └── ui/          # UI components (buttons, grids, effects)
├── content/         # Blog articles (MDX)
├── data/            # Static data files (TypeScript)
├── layouts/         # Page layouts with SEO & theme
├── pages/           # File-based routing
│   ├── blog/        # Blog system with pagination
│   ├── me/          # About page
│   ├── new/         # Projects showcase
│   └── sponsors/    # Sponsorship pages
├── sections/        # High-level page sections
└── styles/          # Global CSS with theme variables
```

> 📖 For detailed architecture documentation, see [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 🚀 Getting Started

### Prerequisites

- **Bun** runtime installed ([install guide](https://bun.sh))
- Node 18+ compatible environment

### Installation

```bash
# Clone the repository
git clone https://github.com/gohit-xyz/gohit.xyz.git
cd gohit.xyz

# Install dependencies
bun install
```

### Development

```bash
# Start development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview

# Type checking
bun run check

# Format code
bun run format
```

---

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance)
- **WebP Images**: Optimized image formats
- **View Transitions**: Smooth page navigation
- **Lazy Loading**: React components with `client:idle`
- **Minimal JS**: Astro's zero-JS by default approach

---

<div align="center">

**Built with ❤️ by gohitx**

[Website](https://www.gohit.xyz) • [GitHub](https://github.com/gohit-xyz)

</div>

<p align="right">
    (<strong><a href="#readme-top">Back to Top</a></strong>)
</p>
