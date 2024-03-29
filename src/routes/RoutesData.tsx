import {ERoutesPaths, PrivateRouteType, PublicRouteType} from "./Routes.types.ts";
import {EIconNames} from "../components/Icon/Icon.type.ts";
import Login from '../pages/public/Login.tsx';
import Practice from '../pages/private/Practice';
import Patients from '../pages/private/Patients';
import Users from '../pages/private/Users.tsx';
import Automation from '../pages/private/Automation.tsx';
import VisitDetails from "../pages/private/Visits/VisitDetails";
import VisitsTable from "../pages/private/Visits";

export const privateRoutes: PrivateRouteType[] = [{
    title: 'Patients', component: Patients, path: ERoutesPaths.PATIENTS, index: true, icon: EIconNames.USERS,
}, {
    title: 'Visits', component:VisitDetails, path: `${ERoutesPaths.VISITS}/:id`, icon: EIconNames.LAYERS, hideFromSideBar: true,
}, {
    title: 'Visits', component:VisitsTable, path: ERoutesPaths.VISITS, icon: EIconNames.LAYERS,
}, {
    title: 'Practice Settings', component: Practice, path: ERoutesPaths.PRACTICE, icon: EIconNames.COMPANY,
}, {
    title: 'Automation', component: Automation, path: ERoutesPaths.AUTOMATION, icon: EIconNames.LAYERS,
}, {
    title: 'Users', component:Users, path: ERoutesPaths.USERS, icon: EIconNames.USERS,
},]


export const publicRoutes:PublicRouteType[] = [
    {
        component: Login,
        path: ERoutesPaths.LOGIN,
        index: true,
    },
]