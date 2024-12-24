import "core-js/stable";
import "regenerator-runtime/runtime";
import "babel-polyfill";
import "./getRootNodePolyfill";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");
