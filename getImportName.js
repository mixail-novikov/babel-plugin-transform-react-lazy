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

module.exports = getImportName;
