# Pokedex Web App

A modern, responsive Pokedex web application built with Next.js and TypeScript that allows users to explore Pokemon data from the PokeAPI.

// TODO : ADD SCREENSHOTS

## ✨ Features

- **Pokemon Listing**: Browse through all Pokemon with pagination support
- **Pokemon Details**: View comprehensive information about each Pokemon including:
  - **About**: Basic information, height, weight, abilities, and description
  - **Base Stats**: Visual representation of Pokemon stats with progress bars
  - **Evolution**: Complete evolution chain with triggers and requirements
  - **Moves**: Detailed move list with power, accuracy, and descriptions
- **Type-based Theming**: Dynamic color schemes based on Pokemon types
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Skeleton components and spinners for better UX
- **Error Handling**: Graceful error handling with toast notifications

## 🚀 Tech Stack

- **Framework**: [Next.js 15.4.4](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [TanStack Query v5](https://tanstack.com/query) for server state
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **API**: [PokeAPI](https://pokeapi.co/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pokedex-nextjs.git
   cd pokedex-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   NEXT_PUBLIC_API_URL=https://pokeapi.co/api/v2
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
src/
├── api/                 # API layer and HTTP client setup
│   └── pokemon.ts       # Pokemon API functions
├── components/          # Reusable UI components
│   ├── feature/         # Feature-specific components
│   └── ui/              # Generic UI components
├── config/              # Application configuration
├── constants/           # Application constants
├── hooks/               # Custom React hooks
├── pages/               # Next.js pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx        # Home page with Pokemon list
│   └── pokemon/
│       └── [id].tsx     # Pokemon detail page
├── styles/              # Global styles
│   └── globals.css
├── types/               # TypeScript type definitions
│   └── pokemon.ts
└── utils/               # Utility functions
    ├── display-error-toast.ts
    ├── helper.ts
    └── pokemon.ts
```

## 🎯 Key Components

### Pokemon Card
- Displays Pokemon name, ID, image, and types
- Dynamic background colors based on primary type
- Skeleton loading state for better UX

### Pokemon Detail Page
- **Tabbed Interface**: Organized information in easy-to-navigate tabs
- **Dynamic Theming**: Background colors adapt to Pokemon's primary type
- **Comprehensive Data**: Shows abilities, stats, evolution chain, and moves

### Responsive Design
- **Mobile-first approach** with responsive grid layouts
- **Adaptive pagination** that works across all screen sizes
- **Touch-friendly** interface elements

## 🔌 API Integration

The app integrates with the [PokeAPI](https://pokeapi.co/) to fetch:

- **Pokemon List**: Paginated list of all Pokemon
- **Pokemon Details**: Comprehensive Pokemon information
- **Species Data**: Flavor text, evolution chain, and classification
- **Evolution Chain**: Complete evolution requirements and triggers
- **Move Details**: Move descriptions, power, accuracy, and effects

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Organization

- **Separation of Concerns**: Clear separation between UI, business logic, and data fetching
- **Custom Hooks**: Encapsulated data fetching logic with React Query
- **TypeScript**: Full type safety with comprehensive type definitions
- **Component Composition**: Reusable components with clear prop interfaces

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful component and variable names
- Write self-documenting code with comments where necessary
- Ensure responsive design across all screen sizes
- Test thoroughly before submitting PRs

## 🔗 Live Demo

[Pokedex Live Demo](https://pokedex-gold-delta.vercel.app/).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the comprehensive Pokemon data
- [Next.js](https://nextjs.org/) team for the amazing framework
- [TanStack Query](https://tanstack.com/query) for excellent data fetching tools
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---