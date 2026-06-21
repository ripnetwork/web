# ripnet-web

Official website for the ripnet network diagnostics toolkit.

## Features

- **Retro Black & White Design** - Classic terminal-inspired aesthetic with CRT effects
- **React & Next.js** - Built with modern React framework for optimal performance
- **Lucide Icons** - Beautiful, consistent iconography throughout
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Fast Navigation** - Client-side routing with Next.js App Router

## Pages

- **Home** - Overview of ripnet features and capabilities
- **Downloads** - Installation instructions and system requirements
- **Documentation** - Complete command reference and usage examples
- **Projects** - Overview of the ripnetwork ecosystem and related projects

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Navigate to the web directory:
```bash
cd web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
web/
├── app/
│   ├── globals.css          # Global styles with retro theme
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page
│   ├── downloads/
│   │   └── page.tsx         # Downloads page
│   ├── documentation/
│   │   └── page.tsx         # Documentation page
│   └── projects/
│       └── page.tsx         # Projects page
├── components/
│   └── Navigation.tsx       # Navigation component
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Design System

The website uses a retro black and white theme inspired by classic terminals:

- **Colors**: Black (#0a0a0a), White (#f5f5f5), Gray (#2a2a2a)
- **Typography**: Courier New monospace font
- **Effects**: CRT scanlines, retro borders, hover animations
- **Components**: Cards with retro borders, code blocks with terminal styling

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --retro-black: #0a0a0a;
  --retro-white: #f5f5f5;
  --retro-gray: #2a2a2a;
  --retro-light: #e5e5e5;
}
```

### Tailwind Config

Modify `tailwind.config.js` to add custom colors or extend the theme.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the project and deploy the `.next` folder to any hosting platform that supports Node.js.

## License

See LICENSE file in the parent directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
