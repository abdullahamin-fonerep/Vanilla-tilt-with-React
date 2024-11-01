# react_shop

A shopping app built with React, TypeScript, and Vite, react_shop demonstrates complex UI interactions and state management using React's hooks (useState, useEffect). This project provides search functionality with checkboxes, URL updates through URLSearchParams, back/forward navigation tracking with popstate events, and customizable sorting and favorites options.



## Overview

react_shop was created as a learning project to explore and solidify the functionality of hooks in React, specifically focusing on useState and useEffect. Through this project, users can gain a hands-on understanding of:

- **Managing component state with useState**
- **Reacting to changes and side effects with useEffect**
- **Handling browser history events with popstate**



## Features

- **Search Functionality:** Users can search for items and filter results with checkboxes.
- **URL Synchronization:** The application updates the URL in real-time based on the selected search and filter parameters using URLSearchParams.
- **Navigation with Popstate Events:** Supports navigation with back and forward browser buttons by responding to popstate events, allowing seamless state tracking and user experience.
- **Favorites Option:** Users can mark items as favorites for easy reference.
- **Sorting:** Items can be sorted based on different parameters, providing an enhanced browsing experience.



## Technology Stack

- **React 19**: Modern UI library for building interactive interfaces.
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Vite**: Fast build tool optimized for modern front-end projects.

## Prerequisites
Node.js (>=14.x.x) and npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/react_shop.git
cd react_shop
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Running the Project
To start the development server, use the following command:

bash
Copy code
npm run dev
# or
yarn dev
The application will run locally, typically on http://localhost:5173 (or another available port).

Building for Production
To create a production-ready build, run:

bash
Copy code
npm run build
# or
yarn build
The optimized files will be in the dist directory.

## Learnings and Objectives

This project was developed to deepen the understanding of React's core hooks:

**useState:** Managing local component state
**useEffect:** Handling side effects, including URL parameter updates and event listeners

It offers practical experience in building responsive, user-friendly applications with dynamic URL parameters and state persistence, using modern React features and best practices.



## License

This project is open-source. Feel free to use it as a reference or for your own learning purposes.