# Next.js 15 Tailwind CSS 4 Starter Kit

```md
## 🚀 Overview

This starter kit is built with a **modern, optimized stack** to streamline development:

- **Tailwind CSS** – Utility-first styling for rapid UI design
- **TypeScript** – Static typing for improved reliability and maintainability
- **ESLint & Prettier** – Enforces code consistency and formatting best practices
- **ShadCN UI** – Pre-built, customizable UI components
- **Next-Themes** – Provides seamless dark mode support

### 💡 Supported Package Managers

This starter kit is compatible with:

- **PNPM** (Recommended for better performance and dependency management)
- **NPM** (Standard support)
- **Yarn** (Alternative option)
```

## 🏁 Getting Started

### **Clone the Repository**

First, clone the project to your local machine using Git:

```sh
git clone https://github.com/b3t0247/nextjs-tailwind.git
```

### **Navigate into the Project Directory**

```sh
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
```

### **Run the Development Server**

Start the Next.js development server:

```sh
pnpm dev  # Recommended
# or
npm run dev
# or
yarn dev
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

### **Performance & Optimization**

- **Turbopack** - Next.js' high-performance bundler for development.
- **@tailwindcss/oxide** (`4.1.10`) - Rust-based optimization for faster Tailwind CSS processing.
- **Sharp** (`0.34.2`) - High-performance image processing.
- **unrs-resolver** (`1.9.0`) - Fast Rust-based module resolution.

## 🎨 Dark Mode Toggle

This project includes a **dark mode toggle**, powered by **Next-Themes**.

## 🚀 Faster Tailwind Processing with Oxide

This starter kit includes **@tailwindcss/oxide**, a Rust-based optimization layer for Tailwind CSS that significantly speeds up processing.

**Optional:** `@tailwindcss/oxide` speeds up Tailwind processing but is not required. Tailwind CSS 4.1 works out-of-the-box without it.

**Note:** Tailwind CSS 4.1 no longer requires a configuration file by default.

## 🖼️ Image Processing with Sharp

This starter kit includes **sharp**, a high-performance image processing library used for resizing and optimizing images efficiently.

#### Troubleshooting

Some systems require additional dependencies to install `sharp`. If you encounter issues, try:

##### **macOS**

```sh
brew install libvips
```

##### **Linux**

```sh
sudo apt install libvips-dev
```

##### **Windows**

```sh
npm install --global windows-build-tools
```

Run the command in **PowerShell as Administrator** for best results.

## ⚡ Fast Module Resolution with unrs-resolver

This project uses **unrs-resolver**, a Rust-based module resolution tool that improves dependency resolution for Next.js and TypeScript.

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
