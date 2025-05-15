# Denv 'static-website'

Development environment for building static websites with dynamic parts.

The goal is to provide everything required for development, testing,
building and deployment of static websites where a simple nginx server
serves as a router.

There are mecahnisms for basic GitHub CI, deployment to a private VPS Linux
server, and a simple analytics script for tracking visits (not really
useful).


## Template

There's 'src' folder that has views, components and shared utilities.

All tests are placed near the file, e.g. 'component.js' has a nearby
'component.test.js' file, where E2E tests are placed separately.


## Requirements

* git
* nodejs v22+
* npm


## Actions

* build : `npm run build`
* deploy : `npm run deploy`
* prepare : `npm install`
* dev : `npm run dev`
* test : `npm run test &amp;&amp; npm run e2e`
* quality : `npm run lint`


## Recipes

### generate-component

Generates a boilerplate web component with a single test.

### generate-service

Generates a boilerplate service with a single test.

### generate-view

Generates an empty view with optional CSS/JS files.


## Configuration

* key : eigen-ui
  String in kebab case, used as a project identifier.

* title : Eigen UI
  Used for website title and as a placeholder.

* shortName : EigenUI
  Short name used in the manifest.json file

* description : Holistic UI system.
  For SEO and internal usage.

* keywords : eigengrau, ui, retro, futuristic
  For SEO purposes.

* themeColor : #29297c
  Main accent color in the hex (#rrggbb) format.

* backgroundColor : #16161d
  Main background color in the hex (#rrggbb) format.

* enableAnalytics : true
  Include analytics script for tracking visits.

* enableCI : true
  Include basic GitHub CI configuration.

* author : vjekoart <vjekoart@pm.me>
  Author information for license and package info.


