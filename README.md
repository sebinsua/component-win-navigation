# [component-win-navigation](http://economist-components.github.io/component-library/#@economist/component-win-navigation)
> Multi-level navigation of articles.

Given a list of articles in a category/subcategory hierarchy, `Navigation` generates a nested list structure.

## Usage

[See `example.es6` for usage instructions.](./example.es6)

## Install

```
npm install --save @economist/component-win-navigation;
```

## Run tests

```
npm test;
```

## TODO

### Refactor

- [ ] Write documentation.
- [ ] The testing if not a mobile browser that exists when setting the default subcategory is complicating what otherwise should have been simple.
- [ ] Decide how the whole component or smaller parts can be shared with the rest of the Economist. Removing the `win-` prefix.
- [ ] Refactor so that delegating elements are pass-through as opposed to knowing their arguments.

### New components

- [ ] Page indicator mini component for the subcategory component.
- [ ] Page prev/next links component for the subcategory-card component.

### Functionality

- [ ] Clicking outside of navigation component should reset its focus. See: https://github.com/Pomax/react-onclickoutside
Potentially need to wait for this: https://github.com/Pomax/react-onclickoutside/issues/18#issuecomment-137430184

### Fix

- [ ] Define working anchors for categories and subcategories that are used with JavaScript and without.
- [ ] [NPM or eslint need to fix a bug with estraverse not being installed. Until then we need to install it manually.](https://github.com/EconomistDigitalSolutions/fe-component-devpack/issues/18#issuecomment-142613986)
