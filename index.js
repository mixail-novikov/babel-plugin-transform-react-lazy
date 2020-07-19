const { declare } = require("@babel/helper-plugin-utils");
const { addDefault } = require("@babel/helper-module-imports");

const isItReactLazy = require("./isItReactLazy");
const getImportName = require("./getImportName");
const getImportSource = require("./getImportSource");

module.exports = declare((api) => {
  api.assertVersion(7);

  return {
    name: "transform-react-lazy",
    visitor: {
      CallExpression: (path) => {
        if (!isItReactLazy(path)) {
          return;
        }

        const statementParent = path.getStatementParent();

        const importName = getImportName(statementParent);
        if (!importName) {
          return;
        }

        const importSource = getImportSource(statementParent);
        if (!importSource) {
          return;
        }

        const importDeclaration = addDefault(path, importSource, {
          nameHint: importName,
        });

        statementParent.scope.rename(importName, importDeclaration.name);
        statementParent.remove();
      },
    },
  };
});
