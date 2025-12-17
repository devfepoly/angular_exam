# News Portal - Angular Application

A modern, responsive news portal built with Angular 20 and styled with Tailwind CSS 4.

## Features

✨ **Modern Angular Architecture**

- Standalone components with signals
- Lazy loading for optimal performance
- TypeScript for type safety
- Modern Angular 20 features

🎨 **Beautiful UI with Tailwind CSS**

- Responsive design for all devices
- Gradient backgrounds and smooth transitions
- Clean and professional interface
- Mobile-friendly navigation

📰 **Core Functionality**

- Home page with feature showcase
- News listing with category filtering
- Contact form with validation
- Add news article form
- Integration with backend API

## Project Structure

```
angular_2/
├── src/
│   ├── app/
│   │   ├── home/          # Home component
│   │   ├── news/          # News listing component
│   │   ├── contact/       # Contact form component
│   │   ├── add-news/      # Add news form component
│   │   ├── app.ts         # Root component
│   │   ├── app.html       # App template with nav & footer
│   │   └── app.routes.ts  # Route configuration
│   ├── index.html
│   ├── main.ts
│   └── styles.css         # Tailwind CSS imports
└── angular.json
```

## Routes

| Path       | Component        | Description                        |
| ---------- | ---------------- | ---------------------------------- |
| `/`        | HomeComponent    | Landing page with feature showcase |
| `/blog`    | NewsComponent    | Display all news articles          |
| `/contact` | ContactComponent | Contact form                       |
| `/addNews` | AddNewsComponent | Form to submit new articles        |

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MySQL database (for backend)

## Installation

1. Navigate to the angular_2 directory:

   ```bash
   cd angular_2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Server

```bash
npm start
```

The application will run on `http://localhost:4200`

### Production Build

```bash
npm run build
```

Build artifacts will be in the `dist/` directory.

## Backend Integration

The application connects to a Node.js backend API running on `http://localhost:3000`.

### API Endpoints Used

- `GET /api/loaitin` - Fetch news categories
- `GET /api/tintucmoi` - Fetch latest news articles

Make sure the backend server is running before using news-related features.

## Components Overview

### HomeComponent

- Landing page with feature cards
- Links to main sections
- Benefits showcase
- Fully responsive design

### NewsComponent

- Displays news articles in a grid layout
- Shows category badges
- Formatted publication dates
- Loading and error states
- Responsive card design

### ContactComponent

- Contact form with validation
- Company information display
- Office hours section
- Success message on submission

### AddNewsComponent

- Form to submit new articles
- Category selection from API
- Rich text area for content
- Form validation
- Writing tips section

## Styling

The application uses **Tailwind CSS 4** with modern utility classes:

- Gradient backgrounds (`bg-gradient-to-br`)
- Shadow effects (`shadow-lg`, `hover:shadow-xl`)
- Smooth transitions (`transition-all`)
- Responsive utilities (`md:`, `lg:`)
- Custom color schemes (blue, green, purple gradients)

## Development Guidelines

### Component Structure

- Use standalone components
- Implement lazy loading for routes
- Use Angular signals for reactive state
- Follow Angular style guide

### Code Quality

- TypeScript strict mode enabled
- Proper type definitions
- Clean and readable code
- Consistent formatting with Prettier

### Best Practices

- Responsive design first
- Accessibility considerations
- Performance optimization
- Error handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Angular 20** - Frontend framework
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming
- **Angular Router** - Client-side routing
- **Angular Forms** - Form handling

## Future Enhancements

- [ ] User authentication
- [ ] Article details page
- [ ] Search functionality
- [ ] Category filtering
- [ ] Pagination for news list
- [ ] Image upload for articles
- [ ] Comments system
- [ ] Social sharing

## Troubleshooting

### Port already in use

If port 4200 is already in use:

```bash
npm start -- --port 4300
```

### API connection issues

Make sure the backend server is running on port 3000 and CORS is enabled.

### Build errors

Clear the Angular cache:

```bash
rm -rf .angular/cache
npm install
npm start
```

## License

This project is for educational purposes.

## Contact

For questions or support, please visit the Contact page in the application.
