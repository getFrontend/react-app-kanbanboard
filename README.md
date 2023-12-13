# About

A useful **Kanban Board** to increase your productivity!

This is my personal pet project made as part of a **React** JS study. **TypeScript** is used for typing props. *Chakra UI* is used as an interface.

The React-dnd library was used to drag and drop cards from one column to another. 

All data is stored in local storage and is not lost when the page is refreshed or the session is terminated.

Maximum number of tasks in one column: **12**.

## [Live Demo](https://u-kanbanboard.vercel.app/)

Light theme

<img src="https://github.com/getFrontend/react-app-kanbanboard/blob/main/public/img/u-kanbanboard_preview_s.png?raw=true" />

Dark theme

<img src="https://github.com/getFrontend/react-app-kanbanboard/blob/main/public/img/u-kanbanboard_preview_darkmode_s.png?raw=true" />

### Validator

✅ Completely [valid](https://validator.w3.org/nu/?doc=https%3A%2F%2Fu-kanbanboard.vercel.app%2F "valid") code.

### PageSpeed Insights

✅ [Mobile](https://pagespeed.web.dev/analysis/https-u-kanbanboard-vercel-app/n69aabm2up?form_factor=mobile "Mobile"): 79 / 93 / 100 / 100

✅ [Desktop](https://pagespeed.web.dev/analysis/https-u-kanbanboard-vercel-app/n69aabm2up?form_factor=desktop "Desktop"): 97 / 93 / 100 / 100

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
