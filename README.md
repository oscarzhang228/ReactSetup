# React Setup Without Tooling

This is a personal project to manually set up a React app from scratch without relying on prebuilt tools like `create-react-app`. The goal is to understand how various tools integrate and work together in a React application. This setup will include:

- [Webpack](https://webpack.js.org/) for development server and bundling
- [Babel](https://babeljs.io) for JavaScript transpilation
- [ESLint](https://eslint.org) for linting
- [Prettier](https://prettier.io) for code formatting
- [Husky](https://typicode.github.io/husky) for Git hooks

## Goals

1. Set up a modern React project from scratch, learning the intricacies of each tool.
2. Build a lightweight and highly configurable development environment.
3. Avoid unnecessary abstractions and focus on full control over the setup.

## Project Plan

### Step 1: Initialize the Project

- Start with `npm init` to create a `package.json`.
- Define the project structure and dependencies.

### Step 2: Webpack Setup

- Use Webpack for the development server and bundling.
- Configure Webpack to work with React.

### Step 3: Babel Setup

- Set up Babel for JavaScript transpilation.
- Add the necessary presets for modern JavaScript and React.

### Step 4: ESLint Setup

- Configure ESLint to enforce code quality.
- Add rules specific to React and JSX.

### Step 5: Prettier Setup

- Integrate Prettier for consistent code formatting.
- Ensure it works seamlessly with ESLint.

### Step 6: Husky Setup

- Add Git hooks with Husky for pre-commit linting and formatting.
- Automate code quality checks in the development workflow.
