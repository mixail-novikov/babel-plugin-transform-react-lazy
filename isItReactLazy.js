const { types: t } = require("@babel/core");

const PURE_CALLS = new Map([["react", ["lazy"]]]);

const isItReactLazy = (path) => {
  if (!t.isMemberExpression(path.node.callee)) {
    const callee = path.get("callee");

    for (const [module, methods] of PURE_CALLS) {
      for (const method of methods) {
        if (callee.referencesImport(module, method)) {
          return true;
        }
      }
    }

    return false;
  }

  // Otherwise, check if the member expression's object matches
  // a default import (`import React from 'react'`) or namespace
  // import (`import * as React from 'react'), and check if the
  // property matches one of the pure methods.
  for (const [module, methods] of PURE_CALLS) {
    const object = path.get("callee.object");
    if (
      object.referencesImport(module, "default") ||
      object.referencesImport(module, "*")
    ) {
      for (const method of methods) {
        if (t.isIdentifier(path.node.callee.property, { name: method })) {
          return true;
        }
      }

      return false;
    }
  }

  return false;
};

module.exports = isItReactLazy;
