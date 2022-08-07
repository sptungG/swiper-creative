# Shaders Slider

Shaders Slider is an unique and premium SwiperGL module with WebGL based image transitions (based on [Swiper](https://swiperjs.com)).

It can be easily integrated into your [Framework7](https://framework7.io) or [Ionic](https://ionicframework.com) app as Swiper already integrated into these frameworks.

## Features

- it is based on [Swiper](https://swiperjs.com), so it supports almost all Swiper features
- except main slider image, any content can be placed within slides which behaves like usual Swiper

![image](https://user-images.githubusercontent.com/61298021/183315435-b7811a64-6286-4f14-9116-a4a44914a1f6.png)

## Known Limitations

Slides images are handled through WebGL here, so the following Swiper features are not supported:

- anything related to slides grid (`slidesPerView`, `slidesPerGroup` and `Grid` module)
- zoom functionality
- virtual slides

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
- `/dist/` - folder with SwiperGL scripts and sources
- `/public/` - folder with static assets (usually images) which are not processed by Vite during development, but still will be bundled on production build.
- `/www/` - folder with production build bundled with Vite (this folder will appear when you run a command to create production build).

## Usage

### HTML Layout

Check `./src/index.html` for required HTML layout

### In Browser Environment

You need to include SwiperGL module scripts and styles in addition to Swiper scripts and styles from the (`./dist/` folder), e.g.

```html
<head>
  <!-- Swiper styles -->
  <link rel="stylesheet" href="http://unpkg.com/swiper/swiper-bundle.min.css" />
  <!-- Swiper GL styles -->
  <link rel="stylesheet" href="path/to/swiper-gl.min.css" />
</head>

<body>
  <div id="app">
    <!-- Shaders slider -->
    <div class="swiper">
      <!-- ... -->
    </div>
  </div>
  <!-- Swiper script -->
  <script src="http://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <!-- SwiperGL module script -->
  <script src="path/to/swiper-gl.min.js"></script>
</body>
```

### In ESM Environment

In environment with ES modules support (webpack, Vite, rollup, etc.), you can just import `swiper-gl.esm.js` and `swiper-gl.css` (or `swiper-gl.scss`) from the `./dist/` folder, e.g.:

```js
// import SwiperGL module
import SwiperGL from './swiper-gl.esm.js';
// import SwiperGL styles
import './swiper-gl.scss';
```

### Initialization

After you included (or imported) required SwiperGL scripts and styles and have the required layout, you need to pass SwiperGL module to Swiper constructor and set effect to `'gl'`:

In browser environment:

```html
<head>
  <link rel="stylesheet" href="http://unpkg.com/swiper/swiper-bundle.min.css" />
  <link rel="stylesheet" href="path/to/swiper-gl.min.css" />
</head>

<body>
  <div id="app">
    <!-- Slider -->
    <div class="swiper">
      <!-- ... -->
    </div>
  </div>
  <script src="http://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script src="path/to/swiper-gl.min.js"></script>
  <!-- Init Slider -->
  <script>
    const swiper = new Swiper({
      // pass SwiperGL module to modules
      modules: [SwiperGL],
      // specify "gl" effect
      effect: 'gl',
      // other parameters
    });
  </script>
</body>
```

In ESM environment:

```js
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import SwiperGL from './swiper-gl.esm.js';
import './swiper-gl.scss';
import './main.scss';

// Init Slider
const swiper = new Swiper({
  // pass SwiperGL module to modules
  modules: [Autoplay, Navigation, Pagination, SwiperGL],
  // specify "gl" effect
  effect: 'gl',
  // other parameters
});
```

## Shader Effects

By default when effect set to `gl` it will use random shader with every new transition, it is possible to set specific shader like so:

```js
const swiper = new Swiper({
  modules: [Autoplay, Navigation, Pagination, SwiperGL],
  effect: 'gl',
  // SwiperGL module parameters
  gl: {
    // specify required shader effect
    shader: 'morph-x',
  },
});
```

There are following shaders available:

- random
- dots
- flyeye
- morph-x
- morph-y
- page-curl
- peel-x
- peel-y
- polygons-fall
- polygons-morph
- polygons-wind
- pixelize
- ripple
- shutters
- slices
- squares
- stretch
- wave-x
- wind

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
