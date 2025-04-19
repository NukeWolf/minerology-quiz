# Minerology Quiz

A React-based web application for studying minerology through an interactive quiz system. This app helps students identify minerals by showing mineral images and asking users to select the correct mineral name from multiple choices.

## Features

- Interactive mineral identification quiz
- Multiple choice question format with hints
- Study mode with detailed mineral information
- Support for multiple images per mineral
- Smart image selection that avoids showing duplicates
- Mineral classification data
- Score tracking with localStorage persistence
- Responsive design that works on desktop and mobile

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm (comes with Node.js)

### Installation

1. Clone the repository
2. Install dependencies:
```
npm install
```
3. Start the development server:
```
npm run dev
```
4. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173/)

## Using the Application

### Quiz Mode
- Answer mineral identification questions by selecting from multiple choices
- View hints if you need help
- Track your progress with the score counter
- The quiz automatically shows different images for minerals across questions
- Images seamlessly cycle through when all have been seen

### Study Mode
- Browse a grid of all minerals in the database
- Search for minerals by name, formula, or classification
- Click on a mineral to view detailed information
- Navigate between multiple images for each mineral

## Adding Your Own Minerals

To add your own minerals, edit the mineral data in `src/data/minerals.ts`:
- Add a new entry to the `minerals` array following the existing format
- Make sure each mineral has a unique `id`
- Include multiple images in the `imageUrls` array
- Example:
```typescript
{
  id: "my-mineral",
  name: "My Mineral",
  imageUrls: [
    "/images/minerals/my-mineral-1.jpg",
    "/images/minerals/my-mineral-2.jpg"
  ],
  formula: "Chemical Formula",
  classification: "Silicate - Tectosilicate",
  characteristics: "Hardness, luster, fracture, etc.",
  hints: ["Hint 1", "Hint 2", "Hint 3"]
}
```

## Building for Production

To create a production build:

```
npm run build
```

The build will be output to the `dist` directory, which can be deployed to any static hosting service.

## Technologies Used

- React
- TypeScript
- Vite
- CSS (no external UI libraries)
- LocalStorage for data persistence and tracking seen images

## License

This project is open source and available under the MIT License.
