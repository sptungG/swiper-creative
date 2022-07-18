# Panorama Slider

Panorama Slider is a [Swiper](https://swiperjs.com) plugin that adds new fancy 3D "panorama" effect.

It can be easily integrated into your [Framework7](https://framework7.io) or [Ionic](https://ionicframework.com) app as Swiper already integrated into these frameworks.

## Features

- it is created as [Swiper](https://swiperjs.com) plugin/module, so it can be easily added to any existing Swiper
- any content can be placed within slides
- can be actually any size (aspect ratio)
- configurable "panorama" depth and rotation
- correctly supports breakpoint

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
- `/dist/` - folder with Panorama Effect scripts and sources
- `/public/` - folder with static assets (usually images) which are not processed by Vite during development, but still will be bundled on production build.
- `/www/` - folder with production build bundled with Vite (this folder will appear when you run a command to create production build).
-

## Usage

### HTML Layout

Check `./src/index.html` for required HTML layout

### In Browser Environment

You need to include Panorama Effect scripts and styles in addition to Swiper scripts and styles from the (`./dist/` folder), e.g.

```html
<head>
  <!-- Swiper styles -->
  <link rel="stylesheet" href="http://unpkg.com/swiper/swiper-bundle.min.css" />
  <!-- Panorama Effect styles -->
  <link rel="stylesheet" href="path/to/effect-panorama.min.css" />
</head>

<body>
  <div id="app">
    <!-- Panorama slider -->
    <div class="swiper">
      <!-- ... -->
    </div>
  </div>
  <!-- Swiper script -->
  <script src="http://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <!-- Panorama effect script -->
  <script src="path/to/effect-panorama.min.js"></script>
</body>
```

### In ESM Environment

In environment with ES modules support (webpack, Vite, rollup, etc.), you can just import `effect-panorama.esm.js` and `effect-panorama.css` (or `effect-panorama.scss`) from the `./dist/` folder, e.g.:

```js
// import Panorama effect module
import EffectPanorama from './effect-panorama.esm.js';
// import Panorama effect styles
import './effect-panorama.scss';
```

### Initialization

After you included (or imported) required Panorama Effect scripts and styles and have the required layout, you need to pass Panorama Effect module to Swiper constructor and set effect to `'panorama'`:

In browser environment:

```html
<head>
  <link rel="stylesheet" href="http://unpkg.com/swiper/swiper-bundle.min.css" />
  <link rel="stylesheet" href="path/to/effect-panorama.min.css" />
</head>

<body>
  <div id="app">
    <!-- Panorama slider -->
    <div class="swiper">
      <!-- ... -->
    </div>
  </div>
  <script src="http://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script src="path/to/effect-panorama.min.js"></script>
  <!-- Init Panorama Effect -->
  <script>
    const swiper = new Swiper({
      // pass EffectPanorama module to modules
      modules: [EffectPanorama],
      // specify "panorama" effect
      effect: 'panorama',
      // other parameters
    });
  </script>
</body>
```

In ESM environment:

```js
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import EffectPanorama from './effect-panorama.esm.js';
import './effect-panorama.scss';
import './main.scss';

// Init Panorama Effect
const swiper = new Swiper({
  // pass EffectPanorama module to modules
  modules: [Autoplay, Navigation, Pagination, EffectPanorama],
  // specify "panorama" effect
  effect: 'panorama',
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
