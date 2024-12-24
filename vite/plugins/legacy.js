import legacy from "@vitejs/plugin-legacy";

export default function createLegacy(isBuild) {
  return legacy({
    additionalLegacyPolyfills: [
      "regenerator-runtime/runtime",
      "core-js/stable",
    ],
    renderLegacyChunks: true,
    polyfills: [],
  });
}
