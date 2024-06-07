// vite.config.js
const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");

module.exports = defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
