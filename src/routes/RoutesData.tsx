import {ERoutesPaths, PrivateRouteType, PublicRouteType} from "./Routes.types.ts";
import {EIconNames} from "../components/Icon/Icon.type.ts";
import Login from '../pages/public/Login.tsx';
import Practice from '../pages/private/Practice';
import Patients from '../pages/private/Patients';
import Users from '../pages/private/Users.tsx';
import Automation from '../pages/private/Automation.tsx';
import PageNotFound from '../components/PageNotFound';

export const privateRoutes: PrivateRouteType[] = [{
    title: 'Patients', component: Patients, path: ERoutesPaths.PATIENTS, index: true, icon: EIconNames.USERS,
}, {
    title: 'Practice Settings', component: Practice, path: ERoutesPaths.PRACTICE, icon: EIconNames.COMPANY,
}, {
    title: 'Automation', component: Automation, path: ERoutesPaths.AUTOMATION, icon: EIconNames.LAYERS,
}, {
    title: 'Users', component:Users, path: ERoutesPaths.USERS, icon: EIconNames.USERS,
}, {
    title: 'Page not found', hideFromSideBar: true,  component: PageNotFound, path: ERoutesPaths.PAGE_NOT_FOUND,
},]


export const publicRoutes:PublicRouteType[] = [
    {
        component: Login,
        path: ERoutesPaths.LOGIN,
        index: true,
    },
]