# Description

Restoring Fast Refresh when using `React.lazy`

## Problem

[Fast Refresh](https://reactnative.dev/docs/fast-refresh) can't properly handle `React.lazy`.

## Solution

Replace dynamic imports to the regular imports

## Benefits

- restored developer experience with Fast Refresh
- can catch syntax errors instantly(in comparison, using "dynamic import" the code executes only when it loaded)

## Caveats

- use only in development environment 
- import source must be a regular string


# Usage with [CRA](https://create-react-app.dev/) and [customize-cra](https://github.com/arackaf/customize-cra#readme)

1. Enable Fast Refresh:
   - Using [customize-cra-react-refresh](https://github.com/esetnik/customize-cra-react-refresh) addon

   - **Coming soon, but didn't work yet**. Using CRA env variable FAST_REFRESH. Read more [here](https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/advanced-configuration.md)

2. Install the plugin

```
npm install --save-dev babel-plugin-transform-react-lazy
```

3. Use the plugin

```javascript
// config-overrides.js
const { override, addBabelPlugin } = require("customize-cra");
const { addReactRefresh } = require("customize-cra-react-refresh");

module.exports = override(
  addReactRefresh(),
  process.env.NODE_ENV === "development" &&
    addBabelPlugin("transform-react-lazy")
);
```
