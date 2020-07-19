// NOTICE
// Copy pasted from babel-plugin-transform-react-pure-annotations

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
