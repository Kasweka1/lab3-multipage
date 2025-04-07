# Shifu & Sons - Multipage Website

## Project Overview
This project is a multipage website for **Shifu & Sons**, a stationery company. The site consists of a **Home Page**, **Services Page**, and **Contact Page**. It demonstrates the use of modern CSS techniques such as **Flexbox, Grid, Media Queries, and Animations** to create a responsive and visually appealing layout.

## Group Members
1. Simon Chanda
2. Kasweka Michael Mukoko

## Branch Information
### Lab 3 Branch
- The `lab3` branch contains the code for **Lab 3**, which includes the initial implementation of the multipage website with basic features such as:
  - A **hero section** on the home page.
  - A **services page** with service cards styled using CSS Grid.
  - A **contact page** with a styled HTML5 form and basic validation.

### Lab 4 Branch
- The `lab4` branch includes the following updates made during **Lab 4**:
  - **Real-time Clock**: Added a real-time clock to the hero section of the home page using JavaScript and `setInterval()`.
  - **Theme Toggle**: Implemented a floating button to toggle between light and dark themes.
  - **Interactive FAQ Section**: Added an FAQ section on the contact page with a toggle feature to show/hide answers using JavaScript.
  - **Fetch API Integration**: Displayed a list of team members dynamically on the contact page by fetching data from a remote API.
  - **Responsive Design Enhancements**: Improved the layout of the team members and FAQ sections to display side by side on larger screens using Flexbox.

### Main Branch
- The `main` branch contains the merged code from **Lab 3** and **Lab 4**, incorporating all the features and updates.

## Page Descriptions
### 1. **Home Page (index.html)**
   - Features a **hero section** with a background image, welcome text, and a real-time clock.
   - Includes a **theme toggle button** to switch between light and dark modes.
   - Uses **Flexbox** to display sections responsively.
   - Includes a **navigation bar** that is shared across all pages.

### 2. **Services Page (services.html)**
   - Uses **CSS Grid** to display four service cards.
   - Each card contains a heading, description, and hover effect.
   - Maintains a consistent header and navigation bar.

### 3. **Contact Page (contact.html)**
   - Includes a **styled HTML5 form** with fields for Name, Email, Subject, and Message.
   - Uses **CSS for responsive form layout**.
   - Form validation implemented using HTML5 attributes.
   - Displays a **list of team members** dynamically fetched from a remote API.
   - Includes an **interactive FAQ section** with toggle functionality.

## Features Used
### ✅ **Selectors & Styling**
- Used **CSS selectors** to apply styles efficiently.
- Shared **navigation bar** styled using **Flexbox**.
- Service cards styled with padding, borders, and hover effects.

### ✅ **Flexbox & Grid**
- **Flexbox**: Used for layout in the home page and contact page.
- **Grid**: Used for the services page to align service cards responsively.

### ✅ **Responsive Design**
Implemented **Media Queries** for the following breakpoints:
- `max-width: 1024px` (Tablet and medium screens)
- `max-width: 768px` (Small tablets and large phones)
- `max-width: 480px` (Mobile screens)

### ✅ **Animations & Transitions**
- Used `@keyframes` for **fade-in animation** on the hero section.
- **Hover effects** added to buttons and service cards for better user experience.

### ✅ **JavaScript Features**
- **Real-time Clock**: Displays the current time in the hero section, updated every second.
- **Theme Toggle**: Allows users to switch between light and dark themes.
- **Interactive FAQ**: Users can click questions to reveal or hide answers.
- **Fetch API Integration**: Dynamically displays team members fetched from a remote API.

## Folder Structure
```
lab3-multipage/
├── index.html (Home page)
├── services.html (Services page)
├── contact.html (Contact page)
├── style.css (Main stylesheet)
├── script.js (JavaScript functionality)
├── images/ (Folder for images)
├── README.md (This file)
```

## How to Use
1. Clone the repository.
2. Switch to the desired branch:
   - For Lab 3 code: `git checkout lab3`
   - For Lab 4 updates: `git checkout lab4`
   - For the final merged code: `git checkout main`
3. Open `index.html` in a web browser.
4. Navigate between pages using the navigation bar.
