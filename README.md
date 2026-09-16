<div align="center">

# ⚛️ myReact

### My personal React learning playground — from first `createElement` to a 3D scene in the browser

[![React](https://img.shields.io/badge/React-16.13-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Create React App](https://img.shields.io/badge/react--scripts-5.0.1-09D3AC?logo=createreactapp&logoColor=white)](https://create-react-app.dev/)
[![three.js](https://img.shields.io/badge/three.js-r125-000000?logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Yarn](https://img.shields.io/badge/package%20manager-yarn-2C8EBB?logo=yarn&logoColor=white)](https://classic.yarnpkg.com/)
[![Security](https://img.shields.io/badge/yarn%20audit-0%20vulnerabilities-brightgreen?logo=github)](https://github.com/amitukind/myReact/security)

*Two hands-on Create React App projects: one that walks through every core React
concept a component at a time, and one that renders real-time 3D with
react-three-fiber.*

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Repository Structure](#-repository-structure)
- [Getting Started](#-getting-started)
- [Project 1 — hello-world](#-project-1--hello-world)
- [Project 2 — react-three](#-project-2--react-three)
- [Available Scripts](#-available-scripts)
- [Security & Maintenance](#-security--maintenance)
- [Learning Notes & Gotchas](#-learning-notes--gotchas)
- [Author](#-author)

---

## 🔭 Overview

This repository is a **learning-by-building** journal of React. Every commit maps to
a concept being studied — you can literally follow the git history from
*"Hooks: useState()"* to *"React-Three: Basic Scene"* and watch the ideas stack up.

It contains **two independent Create React App projects**:

| Project | What it teaches | Stack |
|---|---|---|
| [`hello-world`](hello-world/) | Core React: components, props, state, events, lifecycle, fragments, refs, and the complete hooks toolkit (`useState`, `useEffect`, `useRef`, `useMemo`) | React 16.13 · react-scripts 5.0.1 · Testing Library |
| [`react-three`](react-three/) | Declarative 3D rendering in React: canvas, meshes, geometry, materials, lights, and per-frame animation | React 16.13 · react-three-fiber 4 · three.js r125 |

Both apps are plain JavaScript (no TypeScript), use **yarn** with a committed
`yarn.lock`, and run on any modern Node (18+) thanks to the webpack 5 toolchain.

---

## 🗂 Repository Structure

```text
myReact/
├── README.md                     ← you are here
│
├── hello-world/                  ← Project 1: React fundamentals
│   ├── package.json              react-scripts 5.0.1 + security resolutions
│   ├── yarn.lock                 single source of truth for dependencies
│   ├── patches/                  patch-package fix for webpack-dev-server 5
│   ├── public/                   static HTML shell, manifest, icons
│   └── src/
│       ├── index.js              ReactDOM.render entry point
│       ├── App.js                mounts every demo component at once
│       ├── App.test.js           smoke test (Testing Library + jest-dom)
│       ├── Notes.js              optimization notes (PureComponent vs memo)
│       ├── serviceWorker.js      CRA offline support (unregistered)
│       └── components/           20 single-concept demo components
│
└── react-three/                  ← Project 2: 3D in React
    ├── package.json              same toolchain + three.js r125
    ├── yarn.lock
    ├── patches/
    ├── public/
    └── src/
        ├── index.js
        ├── App.js                <Canvas> hosting the scene
        ├── Cubes.js              3 randomized cubes via useRef + useFrame
        ├── Sphere.js             standard-material sphere mesh
        └── Light.js              configurable <rectAreaLight>
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
|---|---|
| [Node.js](https://nodejs.org/) | 18 or newer (tested on 24) |
| [Yarn 1 (classic)](https://classic.yarnpkg.com/) | 1.22+ |

### Run the fundamentals app

```bash
cd hello-world
yarn install        # also applies the react-scripts patch automatically
yarn start          # opens http://localhost:3000
```

### Run the 3D app

```bash
cd react-three
yarn install
yarn start          # opens http://localhost:3000 with a live three.js canvas
```

> 💡 Every demo component in `hello-world` is mounted simultaneously by
> [`App.js`](hello-world/src/App.js), so the page is a living gallery — open the
> browser console to watch lifecycle logs and effect hooks fire as you interact.

---

## 📗 Project 1 — `hello-world`

A tour of core React, one focused component per file. Recommended reading order:

### 1. Components, JSX & Props

| Component | Concept |
|---|---|
| [`Greet.js`](hello-world/src/components/Greet.js) | Functional component receiving **props** (`nickname`) |
| [`Welcome.js`](hello-world/src/components/Welcome.js) | The same idea as a **class component** (`this.props`) |
| [`JSXHello.js`](hello-world/src/components/JSXHello.js) | What JSX compiles to — hand-written `React.createElement` calls, with the JSX equivalent kept in comments for comparison |

### 2. State & Events

| Component | Concept |
|---|---|
| [`Message.js`](hello-world/src/components/Message.js) | Class **state**, `setState` with a callback, and why mutating instance fields outside `setState` doesn't re-render |
| [`FunctionClick.js`](hello-world/src/components/FunctionClick.js) | Event handling in a function component |
| [`ClassClick.js`](hello-world/src/components/ClassClick.js) | Event handling in a class component |
| [`EventBind.js`](hello-world/src/components/EventBind.js) | **All four ways to bind `this`** in event handlers — inline arrow, `.bind` in JSX, constructor binding, and class-property arrow functions — side by side |

### 3. Lists, Lifecycle, Fragments & Refs

| Component | Concept |
|---|---|
| [`NameList.js`](hello-world/src/components/NameList.js) + [`Person.js`](hello-world/src/components/Person.js) | Rendering lists with **keys** and lifting item markup into a child component |
| [`LifecycleA.js`](hello-world/src/components/LifecycleA.js) + [`LifecycleB.js`](hello-world/src/components/LifecycleB.js) | The full class **lifecycle** (`constructor` → `getDerivedStateFromProps` → `render` → `componentDidMount` → update phase) logged to the console across a parent/child pair |
| [`FragmentDemo.js`](hello-world/src/components/FragmentDemo.js) | `React.Fragment` — multiple siblings without wrapper divs |
| [`RefsDemo.js`](hello-world/src/components/RefsDemo.js) | Both class-era ref styles: `React.createRef()` and **callback refs** |

### 4. Hooks

| Component | Concept |
|---|---|
| [`HookCounter.js`](hello-world/src/components/HookCounter.js) | `useState` in its simplest form |
| [`HookCounter2.js`](hello-world/src/components/HookCounter2.js) | **Functional updates** (`setCount(prev => prev + 1)`) and why the naive form breaks batched increments — the "bad way" is kept in comments |
| [`HookCounterObject.js`](hello-world/src/components/HookCounterObject.js) | `useState` with an **object** and the spread-operator merge pattern |
| [`HookEffectThree.js`](hello-world/src/components/HookEffectThree.js) | `useEffect` with a **dependency array** — updating `document.title` only when the counter changes |
| [`CounterMemo.js`](hello-world/src/components/CounterMemo.js) | `useMemo` — an intentionally expensive computation (a 2-billion-iteration loop!) memoized so unrelated state changes stay fast |
| [`FocusInputUseRef.js`](hello-world/src/components/FocusInputUseRef.js) | `useRef` for DOM access — autofocusing an input on mount |
| [`HooksTimer.js`](hello-world/src/components/HooksTimer.js) | `useRef` for storing a **mutable interval id** across renders |

📝 [`Notes.js`](hello-world/src/Notes.js) collects standalone optimization notes
(`React.PureComponent` vs `React.memo`).

---

## 📘 Project 2 — `react-three`

Declarative 3D with [react-three-fiber](https://github.com/pmndrs/react-three-fiber),
the React renderer for [three.js](https://threejs.org/):

| File | What it does |
|---|---|
| [`App.js`](react-three/src/App.js) | Sets up the `<Canvas>` — the bridge that turns React elements into a three.js scene graph |
| [`Cubes.js`](react-three/src/Cubes.js) | Renders **three cubes with randomized position, size, and RGB color**, collects their mesh instances in a single `useRef([])` via callback refs, and wires a `useFrame` loop ready for per-frame rotation |
| [`Sphere.js`](react-three/src/Sphere.js) | A `<mesh>` with `sphereGeometry` and a physically-based `meshStandardMaterial` (roughness/metalness), plus `userData` and shadow flags |
| [`Light.js`](react-three/src/Light.js) | A reusable `<rectAreaLight>` with `brightness`/`color` props |

Concepts covered: the JSX ↔ scene-graph mapping (`mesh`, `group`, geometry and
material as children with `attach`), prop-driven lights, refs to imperative
three.js objects, and the `useFrame` render-loop hook.

---

## 🧰 Available Scripts

Both projects expose the standard Create React App scripts:

| Command | Description |
|---|---|
| `yarn start` | Development server with hot reload on [localhost:3000](http://localhost:3000) |
| `yarn build` | Optimized production bundle in `build/` |
| `yarn test` | Jest + Testing Library in watch mode (`CI=true yarn test --watchAll=false` for a single pass) |
| `yarn eject` | Ejects from CRA — one-way door, not needed here |
| `postinstall` | Runs [`patch-package`](https://github.com/ds300/patch-package) automatically after `yarn install` (see below) |

---

## 🔒 Security & Maintenance

This repo went through a **full security overhaul** (August 2026) and both
dependency trees now pass `yarn audit` with **zero known vulnerabilities** at
every severity level.

What that involved:

- **Toolchain upgrade** — `react-scripts` 3.4.1 → **5.0.1** (webpack 4 → 5,
  jest 24 → 27) in both projects. This removed entire families of unfixable
  vulnerable transitives (`request`, old `tough-cookie`, `elliptic`, postcss 7)
  and restored the ability to build on modern Node, which webpack 4 could not do.
- **One lockfile per project** — the stale `react-three/package-lock.json` was
  removed; **yarn.lock is the single source of truth**. Don't run `npm install`
  here — use yarn, so the lockfile and Dependabot stay consistent.
- **Pinned patched versions** via the `resolutions` field in each
  `package.json` for transitives that upstream packages still pin to vulnerable
  ranges: `postcss`, `nth-check`, `serialize-javascript`, `svgo`, `underscore`,
  `uuid`, `qs`, `fast-uri`, `colord`, `@tootallnate/once`, and
  `webpack-dev-server` 5.
- **Testing Library upgrade** (September 2026) — `@testing-library/jest-dom`
  4 → 6.9 (drops the `css` → `source-map-resolve` → `decode-uri-component`
  chain), `@testing-library/react` 9 → 12 (the last line supporting React 16)
  and `@testing-library/user-event` 7 → 13. `jest-dom` is held at `~6.9` because
  6.10+ requires `@testing-library/dom` 10 and Node 22, which RTL 12 can't use.
- **`patch-package`** — `react-scripts` 5.0.1 predates webpack-dev-server 5, so
  a small patch in each project's [`patches/`](hello-world/patches/) directory
  migrates its dev-server config (`https` → `server`,
  `onBefore/onAfterSetupMiddleware` → `setupMiddlewares`). It is applied
  automatically by the `postinstall` script — **no manual step needed**, just
  don't delete the `patches/` folder.
- **`three` bumped to r125** to clear a denial-of-service advisory, staying
  within the range supported by react-three-fiber 4.

Everything was verified after the overhaul: production builds, the jest suite,
and live `yarn start` dev servers for both apps.

---

## 💡 Learning Notes & Gotchas

A few deliberate quirks worth knowing before you judge the code 😄:

- **`CounterMemo` freezes on first render — on purpose.** The 2-billion-iteration
  loop exists to make the cost of an unmemoized computation *felt*, so the
  payoff of `useMemo` is obvious when Counter2 stays instant.
- **`EventBind` renders five buttons that do the same thing** — that's the
  point: it's a side-by-side comparison of every `this`-binding strategy.
- **Lifecycle logging is console-first.** Open DevTools before clicking
  *Change State* in `LifecycleA` to watch the update phase order across
  parent and child.
- **`HooksTimer`'s clear button is a known learning artifact** — the handler is
  invoked during render instead of being passed as a function, a classic hooks
  mistake preserved from the original lesson (see commit `d359a87`).
- **Randomized cubes re-roll on every render** in `react-three` — position,
  size, and color all come from `Math.random()` inline, which is a nice
  illustration of why stable values usually belong in state or refs.

---

## 👤 Author

**Amit Verma**

- GitHub: [@amitukind](https://github.com/amitukind)

This is a personal learning repository — feel free to browse, fork, and use any
of it for your own React journey.

<div align="center">

*Built with ⚛️ curiosity, one concept at a time.*

</div>
