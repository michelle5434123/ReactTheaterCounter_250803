# 🎭 ReactTheaterCounter_0803
After creating the [People-Counter-in-Theater_0710](https://github.com/michelle5434123/People-Counter-in-Theater_250710), with similar functionalities, I rebuilt this app with React called **TheaterCounter** that counts how many people enter a theater. It features an interactive counter UI with a clean layout, styled using CSS and enhanced with a background image.
![image](https://github.com/user-attachments/assets/a2ab452c-4dcb-4849-ac36-798ca7e47b9c)


## Features
- Live-updating counter using React state
- Accessible buttons with `aria-labels` for screen readers
- Footer section for branding
- Fully modular React component structure


## How It Works
- The app consists of two main components:
  - `App.jsx`: Handles state (`count`) and renders the counter interface
  - `Footer.jsx`: Renders the footer content
- `useState` from React is used to keep track of the number of people
- Button clicks call `add()` or `subtract()` to adjust the count


## Notes
- The background image file `ReactTheater.jpg` must be located in the root directory (or update the `background-image` path in `index.css`)


## How to Run This Project Locally
These instructions assume you have **Node.js** and **npm** installed on your computer. If not, download them from [nodejs.org](https://nodejs.org/).

### 1. Clone or Download the Repo
Click on the green **Code** button and choose **Download ZIP** or use Git:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```
### 2. Install Dependencies:
Make sure react, react-dom, and vite are included in your package.json
```bash
npm install
```
### 3. Start the Development Server
If you’re using Vite (recommended for this setup):
```bash
npm run dev
```
This will start the server and Open the link in your browser.


