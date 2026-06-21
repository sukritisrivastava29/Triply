# Triply

Triply is a modern travel planning web application that helps users discover destinations, explore travel packages, and generate personalized travel itineraries using AI. The application features a clean, responsive interface with secure user authentication and an intuitive user experience.

## Features

- Personalized AI-generated travel itineraries
- Destination exploration with detailed information
- Travel package listings
- Secure authentication with Firebase
- Responsive design for desktop and mobile
- Modern and intuitive user interface
- Copy itinerary functionality

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router

### Backend & Services
- Firebase Authentication
- Google Gemini API

## Project Structure

```
src/
├── components/
├── pages/
├── services/
├── data/
├── assets/
└── App.jsx
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/sukritisrivastava29/Triply.git
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root.

```env
VITE_GEMINI_API_KEY=your_api_key
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

### Start the development server

```bash
npm run dev
```

## Live Demo

https://triply-fawn.vercel.app/

## Future Improvements

- Save generated itineraries
- PDF export
- Trip sharing
- Weather integration
- Interactive maps
- Hotel and flight recommendations

## Author

**Sukriti Srivastava**

GitHub: https://github.com/sukritisrivastava29
