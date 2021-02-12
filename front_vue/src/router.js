import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alis: "/lampy",
            name: "lampylist",
            component: ()=> import("./components/LampList")
        },
        {
            path: "/lampy/:id",
            name: "lampydetail",
            component: ()=>import("./components/LampDetail")
        },
        {
            path:"/addnew",
            name: "addnewlamp",
            component:()=>import("./components/AddNewLamp")
        }
    ]
});