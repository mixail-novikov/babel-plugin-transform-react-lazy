import path from "path";
import pluginTester, { prettierFormatter } from "babel-plugin-tester";
import transformReactLazy from "../index";

const rootDir = path.join(__dirname, "..");

const formatResult = (r) =>
  prettierFormatter(r).replace(new RegExp(rootDir, "g"), "~");

pluginTester({
  plugin: transformReactLazy,
  pluginName: transformReactLazy.name,
  fixtures: path.join(rootDir, "__fixtures__"),
  formatResult,
  babelOptions: {
    presets: ["react-app"],
  },
});
