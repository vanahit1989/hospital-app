import {ERoutesPaths, PrivateRouteType, PublicRouteType} from "./Routes.types.ts";
import {EIconNames} from "../components/Icon/Icon.type.ts";
import Login from '../pages/public/Login.tsx';
export const privateRoutes: PrivateRouteType[] = [{
    title: 'Patients', component: <>Patients</>, path: ERoutesPaths.PATIENTS, index: true, icon: EIconNames.USERS,
}, {
    title: 'Practice', component: <>Practice</>, path: ERoutesPaths.PRACTICE, icon: EIconNames.COMPANY,
}, {
    title: 'Automation', component: <>Automation</>, path: ERoutesPaths.AUTOMATION, icon: EIconNames.LAYERS,
}, {
    title: 'USERS', component: <>Users</>, path: ERoutesPaths.USERS, icon: EIconNames.USERS,
}, {
    title: 'Page not found', component: <>Page not found</>, path: ERoutesPaths.PAGE_NOT_FOUND,
},]


export const publicRoutes:PublicRouteType[] = [
    {
        component: Login,
        path: ERoutesPaths.LOGIN,
        index: true,
    },
]