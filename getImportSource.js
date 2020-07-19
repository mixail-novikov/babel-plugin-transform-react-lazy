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

module.exports = getImportSource;
