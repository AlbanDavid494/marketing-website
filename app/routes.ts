import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"), 
    route("home", "routes/homePage.tsx"),
    route("features", "routes/features.tsx"),
    route("contact", "routes/contact.tsx"),
    route("signup", "routes/signup.tsx"),
] satisfies RouteConfig;
