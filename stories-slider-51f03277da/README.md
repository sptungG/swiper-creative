# Stories Slider

Stories Slider is a Instagram-like stories slider made with [Swiper](https://swiperjs.com).

It can be easily integrated into your [Framework7](https://framework7.io) or [Ionic](https://ionicframework.com) app as Swiper already integrated into these frameworks.

## Features

- it is based on [Swiper](https://swiperjs.com) so a lot of Swiper features are supported
- any content can be placed within slides (stories)
- correctly working stories autoplay with pause on touch/tap-hold
- supports as many stories as you need
- can be actually any size (aspect ratio)

![image](https://user-images.githubusercontent.com/61298021/179512370-dd1c739e-83e4-4505-b06c-ae1b5fbe91ce.png)
![image](https://user-images.githubusercontent.com/61298021/179512457-0c1644d8-1599-461d-be10-6fbf92c937c1.png)

## Package

In the package you will find:

- fully functional project created with Vite and Swiper (for Core, React, Vue and Svelte versions)
- all required extra styles (in `SCSS`)
- all required JavaScript to make it work
- ready to drop in components for React, Vue and Svelte
- instructions on how to build, run and preview the project

<!-- STORE_END -->

## Project Structure

This project uses [Vite](https://vitejs.dev) for development and bundling the production build.

- `/src/` - folder with Stories Slider sources files (scripts, styles, React, Vue, Svelte components).
- `/demo/core` - folder with `.html`, `.js`, `.scss` source files. These files are processed by Vite during development, and will be bundled on production build.
- `/demo/react` - folder with demo React project.
- `/demo/svelte` - folder with demo Svelte project.
- `/demo/vue` - folder with demo Vue project.
- `/public/` - folder with static assets (usually images) which are not processed by Vite during development, but still will be bundled on production build.
- `/dist/` - folder with production ready Stories Slider files.
- `/www/` - folder with production demo build bundled with Vite (this folder will appear when you run a command to create production build).

## Demo

Project comes with demo project that you can launch, check the source.

First of all, we need to install all dependencies, run in terminal:

```
npm i
```

To launch development server run one of the following commands in terminal:

- `npm run core` - to run Core demo project (located in `/demo/core` folder)
- `npm run react` - to run React demo project (located in `/demo/react` folder)
- `npm run svelte` - to run Svelte demo project (located in `/demo/svelte` folder)
- `npm run vue` - to run Vue demo project (located in `/demo/vue` folder)

And the project will be available at [http://localhost:3000](http://localhost:3000)

## Core Version Usage

### HTML Layout

Check `./demo/core/index.html` for required HTML layout

### In Browser Environment

You need to include Stories Slider scripts and styles in addition to Swiper scripts and styles from the (`./dist/` folder), e.g.

```html
<head>
  <!-- Swiper styles -->
  <link rel="stylesheet" href="http://unpkg.com/swiper/swiper-bundle.min.css" />
  <!-- Stories Slider styles -->
  <link rel="stylesheet" href="path/to/stories-slider.min.css" />
</head>

<body>
  <div id="app">
    <!-- Stories Slider -->
    <div class="stories-slider">
      <!-- ... -->
    </div>
  </div>
  <!-- Swiper script -->
  <script src="http://unpkg.com/swiper/swiper-bundle.min.css"></script>
  <!-- Stories Slider script -->
  <script src="path/to/stories-slider.min.js"></script>
</body>
```

### In ESM Environment

In environment with ES modules support (webpack, Vite, rollup, etc.), you can just import `stories-slider.esm.js` and `stories-slider.css` (or `stories-slider.scss`) from the `./dist/` folder, e.g.:

```js
// import main Stories Slider function
import createStoriesSlider from './stories-slider.esm.js';
// import Stories Slider styles
import './stories-slider.scss';
```

### Initialization

After you included (or imported) required Stories Slider scripts and styles and have the required layout, you need to pass Stories Slider HTML element (`<div class="stories-slider">` to the `createStoriesSlider` function):

In browser environment:

```html
<head>
  <link rel="stylesheet" href="http://unpkg.com/swiper/swiper-bundle.min.css" />
  <link rel="stylesheet" href="path/to/stories-slider.min.css" />
</head>

<body>
  <div id="app">
    <div class="stories-slider">
      <!-- ... -->
    </div>
  </div>
  <script src="http://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script src="path/to/stories-slider.min.js"></script>
  <!-- Init Stories Slider -->
  <script>
    const sliderEl = document.querySelector('.stories-slider');
    createStoriesSlider(sliderEl, parameters);
  </script>
</body>
```

In ESM environment:

```js
import createStoriesSlider from './stories-slider.esm.js';
import './stories-slider.scss';
import './main.scss';

// Init Stories Slider
const sliderEl = document.querySelector('.stories-slider');
createStoriesSlider(sliderEl, parameters);
```

## Stories Slider Parameters

There are following parameters that you can pass to the `createStoriesSlider` function in second argument:

| Parameter               | Type                            | Default | Description                                                                                                                                                                 |
| ----------------------- | ------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoplayDuration`      | `number`                        | `5000`  | Autoplay duration (in ms)                                                                                                                                                   |
| `Swiper`                |                                 |         | Only for the case if you use ESM imports, pass here the Swiper constructor (e.g. result of `import Swiper from 'swiper'`)                                                   |
| `EffectCube`            |                                 |         | Only for the case if you use ESM imports, pass here the Cube effect module (e.g. result of `import { EffectCube } from 'swiper'`)                                           |
| `onSlidesIndexesChange` | `function(mainIndex, subIndex)` |         | Callback function that will be called on Stories/Story change, as arguments it receives index number of currently active Stories and index number of currently active Story |

## Stories Slider Object

`createStoriesSlider` function returns the special `storiesSlider` object with the following properties and methods:

| Parameter                       | Type          | Description                                                     |
| ------------------------------- | ------------- | --------------------------------------------------------------- |
| `el`                            | `HTMLElement` | Main stories Slider HTML element                                |
| `mainSwiper`                    | `Swiper`      | Main stories swiper instance                                    |
| `subSwipers`                    | `[Swiper]`    | Array with stories' swipers                                     |
| `.enable()`                     |               | Method to enable Stories Slider (e.g. launch autoplay)          |
| `.disable()`                    |               | Method to disable Stories Slider (e.g. stop autoplay)           |
| `.slideTo(mainIndex, subIndex)` |               | Method to slide to specific Stories and slide to specific Story |
| `.destroy()`                    |               | Method to destroy Stories Slider                                |

## React, Svelte and Vue Version Usage

There are `<StoriesSlider>`, `<Stories>` and `<Story>` framework specific components that you need to import from `./dist/stories-slider-[framework].js`

For usage example and layout check the `./demo/[framework]/App` file.

### `<StoriesSlider>` Props

`<StoriesSlider>` component receives the same props as <b>Stories Slider Parameters</b> with few additional ones:

| Parameter         | Type                      | Default | Description                                                                                                 |
| ----------------- | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `enabled`         | `boolean`                 | `true`  | Useful to set initially to `false` when component created hidden and suppose to become visible later        |
| `onStoriesSlider` | `function(storiesSlider)` |         | Callback function that will be called on Stories Slider creation with the Stories Slider object as argument |

### `<Story>` Props

`<Story>` component receives the following props:

| Parameter            | Type                      | Description                                                                                                         |
| -------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `avatar`             | `string \| React.Element` | Content of the user avatar to be displayed on story. In Vue and Svelte components should be passed as `avatar` slot |
| `userLink`           | `boolean`                 | `href` attribute of the user link displayed on story                                                                |
| `name`               | `string`                  | User name to be displayed on story. In Vue and Svelte components can be passed as `name` slot                       |
| `date`               | `string`                  | Story date to be displayed on story. In Vue and Svelte components can be passed as `date` slot                      |
| `closeButton`        | `boolean`                 | Displays close button on story                                                                                      |
| `onCloseButtonClick` | `function()`              | Callback function to be fire on close button click. In Vue version, should be used as `closeButtonClick` event      |

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
