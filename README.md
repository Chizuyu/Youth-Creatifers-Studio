<h1 align="center">Youth Creatifers Studio (YCS)</h1>

> **End-to-end event and digital solutions for the modern era.**

Official company profile & portfolio website for **Youth Creatifers Studio (YCS)**. Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Features

- **Modern Tech Stack**: Next.js 14 (App Router) + React 18 + TypeScript.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile displays.
- **Dynamic Carousel Showcase**: Smooth animated spotlight section powered by Framer Motion.
- **Integrated Contact Form**: API Route (`/api/contact`) sending inquiries directly to email via Nodemailer.
- **Automated CI Pipeline**: GitHub Actions workflow checking linting and build on pull requests & push.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + `@tailwindcss/forms` |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Email Service** | [Nodemailer](https://nodemailer.com/) |
| **Icons & Font** | Inter + Google Material Symbols |

---

## Project Structure

```text
├── app/
│   ├── api/contact/route.ts  # Contact form email API handler
│   ├── globals.css           # Global typography & custom utility styles
│   ├── layout.tsx            # Root layout & SEO metadata
│   └── page.tsx              # Main landing page composition
├── components/
│   ├── Navbar.tsx            # Responsive navigation with scroll spy
│   ├── Hero.tsx              # Hero banner with dynamic CTA
│   ├── Spotlight.tsx         # Portfolio showcase carousel
│   ├── Services.tsx          # Service & core competency cards
│   ├── Vision.tsx            # About/Vision section with imagery
│   ├── Contact.tsx           # Controlled contact form component
│   └── Footer.tsx            # Footer links & copyright
├── public/                   # Static assets (images, favicon)
├── tailwind.config.ts        # Custom design system tokens
└── next.config.js            # Next.js configuration
```

---

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/YCS.git
   cd YCS
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECEIVER_EMAIL=recipient@example.com
   ```
   > **Note:** For Gmail, generate an [App Password](https://support.google.com/accounts/answer/185833) instead of using your primary account password.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser:
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start development server on localhost:3000 |
| `npm run build` | Build production-ready app in `.next/` |
| `npm run start` | Serve production build locally |
| `npm run lint` | Run ESLint code quality checks |

---

## Configuration

### Environment Variables

| Variable | Description |
| :--- | :--- |
| `EMAIL_USER` | SMTP sender email (e.g., Gmail account) |
| `EMAIL_PASS` | SMTP password (use app-specific password) |
| `RECEIVER_EMAIL` | Email address to receive contact form submissions |

---

## Contact

**Youth Creatifers Studio (YCS)**
- Website: [youthcreatifersstudio](https://youthcreatifersstudio.my.id)
- Instagram: [@youthcreatifers](https://www.instagram.com/youthcreatifers/)
- Email: youthcreatifers@gmail.com
