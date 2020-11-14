# 📦 Una Scultura

## Folder Structure

```
src/
  _data/
    Eleventy data files
  _includes/
    layouts/
      Base page layouts and individual page templates
    partials/
      UI partials
  fonts/
    All used fonts
  images/
    All used images
  scripts/
    .js
  styles/
    .css
  Content
Configuration and build files
```

## Install Dependencies

First, make sure you have `npm` (packaged with
[Node.js](https://nodejs.org)) installed, then run `npm run setup` to install
the dependencies and validate that everything is running correctly.

## Available Scripts

### Development

```bash
# runs the app in the development mode.
npm run dev
```

Open http://localhost:8080 to view it in the browser.

The page will reload if you make file changes.

### Production

```bash
# builds a static copy of your site to the `dist/` folder.
npm run build
```

```bash
# serve the content from the `dist/` folder.
npm run serve
```

Open http://localhost:8080 to view it in the browser.

## Deployment

```bash
# Deploy the content from the `dist/` folder to gh-pages.
sh deploy.sh
```
