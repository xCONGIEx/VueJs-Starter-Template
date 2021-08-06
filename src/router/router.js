import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Example from "../Views/Example.vue";

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [{
            path: "/",
            component: HelloWorld,
        },
        {
            path: "/example",
            component: Example,
        },
    ],
});

export default router;