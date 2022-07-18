# Slicer Slider

Slicer Slider is an image slicer slider template (based on [Swiper](https://swiperjs.com)).

It can be easily integrated into your [Framework7](https://framework7.io) or [Ionic](https://ionicframework.com) app as Swiper already integrated into these frameworks.

## Features

- it is based on [Swiper](https://swiperjs.com), so it supports all Swiper features
- any content can be placed within slides
- supports both horizontal and vertical directions
- configurable amount of "slices"
- can be actually any size (aspect ratio)

## Package

In the package you will find:

- fully functional project created with Vite and Swiper
- all required extra styles (in `SCSS`)
- all required JavaScript to make it work
- instructions on how to build, run and preview the project

<!-- STORE_END -->

## Project Structure

This project uses [Vite](https://vitejs.dev) for development and bundling the production build.

- `/src/` - folder with `.html`, `.js`, `.scss` source files. These files are processed by Vite during development, and will be bundled on production build.
- `/dist/` - folder with Slicer Effect scripts and sources
- `/public/` - folder with static assets (usually images) which are not processed by Vite during development, but still will be bundled on production build.
- `/www/` - folder with production build bundled with Vite (this folder will appear when you run a command to create production build).

## Usage

### HTML Layout

Check `./src/index.html` for required HTML layout

### In Browser Environment

You need to include Slicer Effect scripts and styles in addition to Swiper scripts and styles from the (`./dist/` folder), e.g.

```html
<head>
  <!-- Swiper styles -->
  <link rel="stylesheet" href="http://unpkg.com/swiper/swiper-bundle.min.css" />
  <!-- Slicer Effect styles -->
  <link rel="stylesheet" href="path/to/effect-slicer.min.css" />
</head>

<body>
  <div id="app">
    <!-- Slicer slider -->
    <div class="swiper">
      <!-- ... -->
    </div>
  </div>
  <!-- Swiper script -->
  <script src="http://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <!-- Slicer effect script -->
  <script src="path/to/effect-slicer.min.js"></script>
</body>
```

### In ESM Environment

In environment with ES modules support (webpack, Vite, rollup, etc.), you can just import `effect-slicer.esm.js` and `effect-slicer.css` (or `effect-slicer.scss`) from the `./dist/` folder, e.g.:

```js
// import Slicer effect module
import EffectSlicer from './effect-slicer.esm.js';
// import Slicer effect styles
import './effect-slicer.scss';
```

### Initialization

After you included (or imported) required Slicer Effect scripts and styles and have the required layout, you need to pass Slicer Effect module to Swiper constructor and set effect to `'slicer'`:

In browser environment:

```html
<head>
  <link rel="stylesheet" href="http://unpkg.com/swiper/swiper-bundle.min.css" />
  <link rel="stylesheet" href="path/to/effect-slicer.min.css" />
</head>

<body>
  <div id="app">
    <!-- Slicer slider -->
    <div class="swiper">
      <!-- ... -->
    </div>
  </div>
  <script src="http://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script src="path/to/effect-slicer.min.js"></script>
  <!-- Init Slicer Effect -->
  <script>
    const swiper = new Swiper({
      // pass EffectSlicer module to modules
      modules: [EffectSlicer],
      // specify "slicer" effect
      effect: 'slicer',
      // other parameters
    });
  </script>
</body>
```

In ESM environment:

```js
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import EffectSlicer from './effect-slicer.esm.js';
import './effect-slicer.scss';
import './main.scss';

// Init Slicer Effect
const swiper = new Swiper({
  // pass EffectSlicer module to modules
  modules: [Autoplay, Navigation, Pagination, EffectSlicer],
  // specify "slicer" effect
  effect: 'slicer',
  // other parameters
});
```

## Dependencies

First of all, we need to install all dependencies, run in terminal:

```
npm i
```

## Development

To launch development server (with hot reload), run the following command in terminal:

```
npm run dev
```

And the project will be available at [http://localhost:3000](http://localhost:3000)

## Production Build

To create a production build, run the following command in terminal:

```
npm run build
```

And production-ready project will be available in `/dist/` folder.

## Connect to Git

It is possible to connect this project folder to the new repository. For example for GitHub:

1. Create new GitHub repository at https://github.com/new

2. Initialize Git. In terminal run:

   ```
   git init
   ```

3. Add remote origin. Replace $USERNAME and $REPOSITORY with your GitHub username and newly created repository name:
   ```
   git remote add origin https://github.com/$USERNAME/$REPOSITORY.git
   ```

That is all, after that you can track, commit and push/pull to repo, for example:

```
git add .
git commit -m "initial commit"
git push origin master
```
