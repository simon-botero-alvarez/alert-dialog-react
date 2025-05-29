# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Implement an alert dialog system

Requirements:
- Imagine there is an endpoint that returns an array of alerts; it has been abstracted into a getAlerts function.
- Show the alert in order of most recent first (newest on top, oldest on bottom).
- Each alert should be able to be closed.
- The alert should be styled using css
- The alert should show on the top-right corner of the page without pushing the contents down.
- If multiple alerts are present, they should be stacked on top of each other.
- Bonus: Add button that shows/hides all current alerts
- Bonus: Add button that console.logs the visible alerts