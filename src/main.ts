import { createApp } from "vue";
import { router } from "./router";
import "./styles/index.css";
import { initBackendClient } from "./api";
import App from "./App.vue";
import { registerToastManager } from "./app-utils";
import Accordion from "made-vue-accordion";

initBackendClient();

const app = createApp(App).use(router);
app.use(Accordion);
registerToastManager(app);
app.mount("#app");
