# Portfolio V2

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a fully functional contact form.

## ✨ Features

- 🎨 Modern, clean UI design with gradient accents
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive (mobile-first design)
- ✉️ Working contact form with EmailJS integration
- 🎭 Smooth animations using Framer Motion
- ⚡ Fast build and hot reload with Vite
- 🎯 TypeScript for type safety
- 📊 Vercel Analytics integration
- 🎨 Tailwind CSS v4 for styling

## 🛠️ Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email Service:** EmailJS
- **Analytics:** Vercel Analytics

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

> **Note:** These variables must start with `VITE_` to be accessible in the browser.

## 🚀 Running Locally

```bash
# Development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── componets/          # React components
│   ├── ui/            # Reusable UI components
│   ├── NavBar.tsx     # Navigation bar
│   ├── Hero.tsx       # Landing section
│   ├── About.tsx      # About section
│   ├── Projects.tsx   # Projects showcase
│   ├── Skills.tsx     # Skills & expertise
│   ├── Experience.tsx # Work experience
│   ├── Education.tsx  # Education & certifications
│   ├── Languages.tsx  # Language proficiency
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer
├── constants/         # Centralized data
├── types/            # TypeScript type definitions
├── assets/           # Images and static files
└── App.tsx           # Main app component
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in **Settings → Environment Variables**
4. Deploy automatically on push

### Update Personal Information

Edit `src/constants/personal.ts`:

```typescript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  // ...
};
```

### Add Projects

Edit `src/constants/projects.ts`:

```typescript
export const PROJECTS = [
  {
    title: "Project Name",
    description: "Project description",
    // ...
  },
];
```

### Modify Styles

- Tailwind configuration: `tailwind.config.js`
- Global styles: `src/index.css`
- Component styles: inline Tailwind classes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Thanapoom Santhong**

- GitHub: [@Poomsanthong](https://github.com/Poomsanthong)
- LinkedIn: [Thanapoom Santhong](https://www.linkedin.com/in/thanapoom-santhong)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [EmailJS](https://www.emailjs.com)
- [Vite](https://vitejs.dev)

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
