# Carousel Slider

Carousel Slider is an infinite 3D carousel slider template (based on [Swiper](https://swiperjs.com)).

It can be easily integrated into your [Framework7](https://framework7.io) or [Ionic](https://ionicframework.com) app as Swiper already integrated into these frameworks.

## Features

- it is based on [Swiper](https://swiperjs.com), so it supports all Swiper features
- any content can be placed within slides
- can be actually any size (aspect ratio)
- designed to be used with at least 5 slides (but can be tweaked for less slides)

![image](https://user-images.githubusercontent.com/61298021/179510646-121f0246-6bb6-4237-9f15-89b2e6183833.png)

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
- `/dist/` - folder with Carousel Effect scripts and sources
- `/public/` - folder with static assets (usually images) which are not processed by Vite during development, but still will be bundled on production build.
- `/www/` - folder with production build bundled with Vite (this folder will appear when you run a command to create production build).

## Usage

### HTML Layout

Check `./src/index.html` for required HTML layout

### In Browser Environment

You need to include Carousel Effect scripts and styles in addition to Swiper scripts and styles from the (`./dist/` folder), e.g.

```html
<head>
  <!-- Swiper styles -->
  <link rel="stylesheet" href="http://unpkg.com/swiper/swiper-bundle.min.css" />
  <!-- Carousel Effect styles -->
  <link rel="stylesheet" href="path/to/effect-carousel.min.css" />
</head>

<body>
  <div id="app">
    <!-- Carousel slider -->
    <div class="swiper">
      <!-- ... -->
    </div>
  </div>
  <!-- Swiper script -->
  <script src="http://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <!-- Carousel effect script -->
  <script src="path/to/effect-carousel.min.js"></script>
</body>
```

### In ESM Environment

In environment with ES modules support (webpack, Vite, rollup, etc.), you can just import `effect-carousel.esm.js` and `effect-carousel.css` (or `effect-carousel.scss`) from the `./dist/` folder, e.g.:

```js
// import Carousel effect module
import EffectCarousel from './effect-carousel.esm.js';
// import Carousel effect styles
import './effect-carousel.scss';
```

### Initialization

After you included (or imported) required Carousel Effect scripts and styles and have the required layout, you need to pass Carousel Effect module to Swiper constructor and set effect to `'carousel'`:

In browser environment:

```html
<head>
  <link rel="stylesheet" href="http://unpkg.com/swiper/swiper-bundle.min.css" />
  <link rel="stylesheet" href="path/to/effect-carousel.min.css" />
</head>

<body>
  <div id="app">
    <!-- Carousel slider -->
    <div class="swiper">
      <!-- ... -->
    </div>
  </div>
  <script src="http://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script src="path/to/effect-carousel.min.js"></script>
  <!-- Init Carousel Effect -->
  <script>
    const swiper = new Swiper({
      // pass EffectCarousel module to modules
      modules: [EffectCarousel],
      // specify "carousel" effect
      effect: 'carousel',
      // other parameters
    });
  </script>
</body>
```

In ESM environment:

```js
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import EffectCarousel from './effect-carousel.esm.js';
import './effect-carousel.scss';
import './main.scss';

// Init Carousel Effect
const swiper = new Swiper({
  // pass EffectCarousel module to modules
  modules: [Autoplay, Navigation, Pagination, EffectCarousel],
  // specify "carousel" effect
  effect: 'carousel',
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
