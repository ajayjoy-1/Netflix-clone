# 🎬 Netflix Clone UI

A responsive and dynamic Netflix-style web interface built from scratch using **React** and **Vite**. This project focuses on modern frontend layout practices, state-driven UI changes, and responsive CSS styling.

🚀 **[Live Demo Link](https://your-vercel-deployment-link.vercel.app)** *(Replace this with your actual Vercel link once deployed!)*

---

## 🎯 Features

- **Dynamic Navbar**: Features a clean white background initially with visible text, which smoothly triggers a dark background transition upon scrolling.
- **Hero Banner Section**: Showcases a featured title with a modern landscape layout, tailored background fitting, and action buttons ("Play" and "More Info").
- **Horizontal Movie Rows**: Multiple categories of movies displayed in smooth, horizontally scrollable rows with hidden scrollbars for a clean look.
- **Interactive Hover Effects**: Hovering over any movie poster slightly scales the card and reveals a semi-transparent overlay with a play icon and movie title.
- **Responsive Layout**: fully optimized for a great experience on both Desktop and Mobile screen sizes.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React (Functional Components & Hooks)
- **Build Tool**: Vite (Next-generation frontend tooling)
- **Styling**: Vanilla CSS3 (including Flexbox, CSS Grid, and Media Queries)
- **Deployment Platform**: Vercel

---

## 📦 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository
```bash
git clone [https://github.com/ajayjoy-1/Netflix-clone.git](https://github.com/ajayjoy-1/Netflix-clone.git)
cd Netflix-clone
2. Install Dependencies
Bash
npm install
3. Start the Development Server
Bash
npm run dev
Open your browser and navigate to http://localhost:5173 (or the local port provided in your terminal) to view the application.

🚀 Deployment
This project is configured for continuous deployment on Vercel directly from the GitHub repository.

Manual Deployment via Vercel Dashboard:
Go to Vercel and sign in with your GitHub account.

Click Add New... and select Project.

Import your Netflix-clone repository.

Vercel automatically detects the Vite configuration. Click Deploy.

Any changes pushed to the main branch of your GitHub repository will automatically trigger a new deployment update on Vercel.

📸 Project Structure
netflix-clone/
├── src/
│   ├── components/
│   │   ├── Banner.jsx      # Hero Banner component
│   │   ├── Banner.css      # Styles for the Banner
│   │   ├── Navbar.jsx      # Fixed scrolling Navigation bar
│   │   ├── Navbar.css      # Styles for the Navbar
│   │   ├── Row.jsx         # Horizontal scrollable movie rows
│   │   └── Row.css         # Styles for movie posters & hover effects
│   ├── App.jsx             # Root application component
│   ├── main.jsx            # Application entry point
│   ├── index.css           # Global resets and core theme styles
│   └── mockData.js         # Placeholder data generator for movie categories
├── index.html
├── package.json
└── README.md
