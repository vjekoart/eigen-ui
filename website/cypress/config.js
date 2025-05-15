import { defineConfig } from "cypress";

import core from "../.boring/frontend/index.js";

export default defineConfig
({
    video : false,
    e2e :
    {
        baseUrl : core.tests.getE2ELocation(),
        supportFile : false
    }
});

