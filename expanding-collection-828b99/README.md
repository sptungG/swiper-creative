# Expanding Collection

Expanding Collection is an expandable content cards slider based on [Swiper](https://swiperjs.com).

It can be easily integrated into your [Framework7](https://framework7.io) or [Ionic](https://ionicframework.com) app as Swiper already integrated into these frameworks.

Inspired by [Ramotion Expanding Collection](https://github.com/Ramotion/expanding-collection).

## Features

- it is based on [Swiper](https://swiperjs.com), so it supports all Swiper features
- any content can be placed within the card cover
- any content can be placed within the expandable underneath card content
- can be actually any size (aspect ratio)
- fully customizable

![image](https://user-images.githubusercontent.com/61298021/179511620-47fbb1e6-e959-4ea2-8a3b-c35b70ac5426.png)

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
- `/public/` - folder with static assets (usually images) which are not processed by Vite during development, but still will be bundled on production build.
- `/dist/` - folder with production build bundled with Vite (this folder will appear when you run a command to create production build).
-

### Dependencies

First of all, we need to install all dependencies, run in terminal:

```
npm i
```

### Development

To launch development server (with hot reload), run the following command in terminal:

```
npm run dev
```

And the project will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

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
