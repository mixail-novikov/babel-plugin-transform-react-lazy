# Description

## Problem

Usage of `React.lazy` forces [Fast Refresh](https://reactnative.dev/docs/fast-refresh) to reload page.

## Solution

Replace dynamic imports to the regular imports

## Caveats

- only handles `React.lazy` and `lazy` calls
- import source must be a regular string

### Examples

```javascript
const LazyComponent = React.lazy(() => import("./LazyComponent"));
```

```javascript
const LazyComponent = lazy(() => import("./LazyComponent"));
```

# Usage with [CRA](https://create-react-app.dev/) and [customize-cra](https://github.com/arackaf/customize-cra#readme)

1. Enable Fast Refresh:

   - Using CRA env variable FAST_REFRESH. Read more [here](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/advanced-configuration.md)

   - Using [customize-cra-react-refresh](https://github.com/esetnik/customize-cra-react-refresh) addon

2. Install the plugin

```
npm install --save-dev babel-plugin-transform-react-lazy
```

3. Use the plugin

```javascript
// config-overrides.js
const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(
  process.env.NODE_ENV === "development" &&
    addBabelPlugin("transform-react-lazy")
);
```
