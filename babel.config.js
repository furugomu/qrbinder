const presets = ["@babel/preset-react", "@babel/preset-typescript"];
const plugins = [];

if (process.env.NODE_ENV === "test") {
  presets.push("power-assert");
  plugins.push("@babel/plugin-transform-modules-commonjs");
}

if (process.env.NODE_ENV === "production") {
  // presets.push("@babel/preset-env");
}

module.exports = {
  presets,
  plugins
};
