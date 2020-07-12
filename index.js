const { declare } = require("@babel/helper-plugin-utils");
const { addDefault } = require("@babel/helper-module-imports");

module.exports = declare((api) => {
  api.assertVersion(7);

  const isItReactLazy = (path) =>
    path.get("object").isIdentifier({ name: "React" }) &&
    path.get("property").isIdentifier({ name: "lazy" });

  const isItJustLazy = (path) =>
    path.get("callee").isIdentifier({ name: "lazy" });

  const getImportName = (path) => {
    let importName;

    path.traverse({
      VariableDeclarator(path) {
        importName = path.node.id.name;
        path.stop();
      },
    });

    return importName;
  };

  const getImportSource = (path) => {
    let importSource;

    path.traverse({
      Import(path) {
        const importString = path.parentPath.get("arguments.0");

        if (!importString.isStringLiteral()) {
          return;
        }

        importSource = importString.node.value;
        path.stop();
      },
    });

    return importSource;
  };

  return {
    name: "transform-react-lazy",
    visitor: {
      "MemberExpression|CallExpression": (path) => {
        if (!isItReactLazy(path) && !isItJustLazy(path)) {
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
