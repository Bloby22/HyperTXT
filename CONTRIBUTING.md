# Contributing to HyperTXT

Thank you for wanting to contribute to **HyperTXT**! ❤️

Every contribution is welcome – whether it’s a bug fix, a new feature, documentation improvement, or a suggestion for improvement.

---

## Requirements

Before you start, install:

* Node.js 22+

* Rust (stable)

* Cargo

* Git

---

## Installation

```bash
git clone https://github.com/Bloby22/HyperTXT.git
cd HyperTXT

npm install
```

Starting the development environment:

```bash
npm run tauri dev
```

---

## Project Structure

```text
src/ React application
src-tauri/ Rust backend (Tauri)
```

---

## Code Style

The project uses:

* TypeScript
* React
* ESLint
* Prettier
* EditorConfig

Before creating a Pull Request, run:

```bash
npm run lint
npm run format
```

---

## Commit

Use concise and understandable commit messages.

Examples:

```text
feat: add file explorer
fix: resolve tab closing bug
refactor: simplify editor store
docs: update README
style: format code
```

---

## Pull Request

Before opening a Pull Request, make sure that:

* the project compiles,

* ESLint does not report errors,
* Prettier does not modify anything,
* the new feature does not break existing behavior.

In the PR description, write:

* what was changed,
* why the change was needed,
* if necessary, add a screenshot.

---

## Issues

When creating an Issue, specify:

* operating system,
* HyperTXT version,
* reproduction procedure,
* expected behavior,
* actual behavior.

---

## Coding Guidelines

* Write readable and simple code.
* Prefer TypeScript to JavaScript.
* Use functional React components.
* Don't add unnecessary dependencies.
* Break larger components into smaller ones.
* Keep the existing project structure.

---

## License

By submitting your contribution, you agree that it will be distributed under the same license as the project.