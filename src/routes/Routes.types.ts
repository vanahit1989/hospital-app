import {FC, ReactElement} from "react";

export type PublicRouteType = {
    component: FC<any> | ReactElement;
    path: string;
    index?: boolean;
};

export type PrivateRouteType = PublicRouteType & {
    title?: string;
    icon?: string;
    subRoutes?: PrivateRouteType[];
    notInSidebar?: boolean;
    hideFromSideBar?: boolean;
};

export enum ERoutesPaths {
    LOGIN = 'login',
    PATIENTS = 'patients',
    AUTOMATION = 'automation',
    PRACTICE = 'practice',
    USERS = 'users',
    PAGE_NOT_FOUND='403'
}