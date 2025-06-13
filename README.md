# Next.js 15 Tailwind CSS 4 Starter Kit

```md
# Next.js 15 (App Router)

Configured with **Tailwind CSS**, **TypeScript**, **ESLint**, **Prettier**, **ShadCN UI**, and **Next-Themes** for dark mode support.  
```
## 🚀 Getting Started  

### **Clone the Repository**
First, clone the project to your local machine using Git:

```sh
git clone https://github.com/b3t0247/nextjs-tailwind.git
cd nextjs-tailwind
```

### **Install Dependencies**
After navigating into the project directory, install dependencies using **PNPM** (recommended):

```sh
pnpm install
```
Alternatively, you can use:
```sh
npm install
# or
yarn install
# or
bun install
```

### **Run the Development Server**
Start the Next.js development server:

```sh
pnpm dev  # Recommended
# or
npm run dev
# or
yarn dev
# or
bun dev
```

Now, open [http://localhost:3000](http://localhost:3000) in your browser.  

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.  

## 🔧 Project Configuration  

### **Core Dependencies**  
- **Next.js** (`15.3.3`) - React framework for server-side rendering and static site generation.  
- **React** (`19.1.0`) - UI library for building components.  
- **React-DOM** (`19.1.0`) - DOM bindings for React.  
- **Next-Themes** (`0.4.6`) - Theme toggling for dark/light mode.  
- **ShadCN UI** - Pre-built, customizable UI components.  

### **Styling & UI**  
- **Tailwind CSS** (`4.1.10`) - Utility-first CSS framework.  
- **Tailwind Merge** (`3.3.1`) - Merges Tailwind class names efficiently.  
- **Lucide React** (`0.514.0`) - Modern icons for UI components.  
- **Class Variance Authority** (`0.7.1`) - Manages utility class combinations.  
- **clsx** (`2.1.1`) - Conditional class merging.  
- **tw-animate-css** (`1.3.4`) - Tailwind animation utilities.  

### **Development Tools**  
- **TypeScript** (`5.8.3`) - Static typing for JavaScript.  
- **ESLint** (`9.28.0`) - Linter for maintaining code quality.  
- **Prettier** (`3.5.3`) - Code formatter.  
- **ESLint Plugin Prettier** (`5.4.1`) - Integrates Prettier into ESLint.  
- **Prettier Plugin Tailwind CSS** (`0.6.12`) - Automatically sorts Tailwind classes.  
- **ESLint Config Prettier** (`10.1.5`) - Disables ESLint rules conflicting with Prettier.  
- **ESLint Config Next** (`15.3.3`) - Next.js-specific linting rules.  
- **@typescript-eslint/eslint-plugin** (`8.34.0`) - TypeScript linting rules.  
- **@typescript-eslint/parser** (`8.34.0`) - Parses TypeScript for ESLint.  
- **@types/node** (`24.0.1`) - Type definitions for Node.js.  
- **@types/react** (`19.1.8`) - Type definitions for React.  

### **Build & Performance**  
- **Turbopack** - Next.js' high-performance bundler for development.  

## 🎨 Dark Mode Toggle  
This project includes a **dark mode toggle**, powered by **Next-Themes**.  

## 🛠 Formatting & Linting  
To maintain code consistency, use:  

```sh
pnpm lint       # Runs ESLint  
pnpm format     # Runs Prettier  
pnpm lint --fix # Auto-fixes ESLint issues  
pnpm exec prettier --write . # Formats all files  
```

## 📚 Learn More  
Explore more resources:  
- [Next.js Documentation](https://nextjs.org/docs)  
- [Next.js GitHub](https://github.com/vercel/next.js)  
- [ShadCN UI](https://ui.shadcn.com/)  
- [Tailwind CSS](https://tailwindcss.com/docs)  

## 🚀 Deploy on Vercel  
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).  

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.  

---

