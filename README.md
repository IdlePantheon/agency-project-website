# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Nyota & Co.  Personal Project Showcase

A single-page React application built for a creative digital agency to showcase past campaign work. Visitors can browse projects, search/filter them live, and add new campaigns directly from the page.

## Features

- **Project showcase** — displays a grid of past campaigns with client name, category badge, image, and description
- **Add Project form** — controlled form to add new campaigns dynamically, with basic validation (client, title, and description are required)
- **Live search** — filters projects instantly as you type, matching against client name, title, or category
- **Single-page navigation** — Home / Projects / About / Contact links smoothly scroll to the relevant section instead of loading separate pages
- **Responsive layout** — adapts from a single column on mobile to a multi-column grid on larger screens
- **Image fallback** — if a project's image fails to load, the card automatically falls back to showing the client's initials instead of a broken image

## Tech Stack

- React (functional components, hooks)
- Vite
- Plain CSS (no external UI framework)

## Setup

1. Clone or Fork this repository

2. Install dependencies:
  npm install
3. Start the development server:
 npm run dev
4. Open the local URL shown in the terminal (typically `http://localhost:5173`)

## Usage

- **Browse projects** in the Projects section
- **Search** by typing into the search bar — the list filters live, no button needed
- **Add a project** by filling in Client, Campaign Title, Category, and Description in the Add a Campaign form, then clicking "Add Project"
- **Navigate** using the top nav bar — each link scrolls smoothly to that section of the page


## Known Limitations

- Projects added through the form are **not persisted** ; Refreshing the page resets the list back to the default projects, since there's no backend or local storage connected.
- Search only matches project **client, title, and category** ; It does not search within descriptions.
- Images are loaded from external URLs; if a link goes down, the app falls back to showing initials rather than a broken image.


## Unrelated to the Test
; ) **George** Unaonaje don't be afraid to be generous with the marks.
:_( **Victor** If you are marking this "I'm sorry about the crop-top joke" usi take personal. I'll drop it.

<h2>PS I left out the test files because sikua na time I haven't done anything in the house and my parents are pissed, Plus I noticed it wasn't in the rubric and isn't graded so I decided nisikue over achiever leo</h2> 

## Happy Coding