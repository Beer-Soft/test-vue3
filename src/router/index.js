import {createWebHistory,createRouter} from "vue-router";
import CompHome from "@/components/Home.vue";
import CompApi from "@/components/Api.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: CompHome,
    },
    {
        path: "/Api",
        name: "Api",
        component: CompApi,
    }
    // {
    //     path: "/FetchData",
    //     name: "FetchData",
    //     component: FetchData,
    // }
];


const router = createRouter({
history:createWebHistory(),
routes,
});


export default router;