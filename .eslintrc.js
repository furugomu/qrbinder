module.exports = {
  plugins: ["@furugomu"],
  extends: [
    "plugin:@furugomu/recommended",
    "plugin:@furugomu/+ts",
    "plugin:@furugomu/+tsx"
  ],
  settings: { react: { version: "16.7" } }
};
