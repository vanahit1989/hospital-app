import {Navigate, Outlet, Route, Routes, useNavigate} from "react-router";
import {FC, Suspense, useEffect} from "react";
import {Layout} from "antd";
import {privateRoutes} from "./RoutesData.tsx";
import {ERoutesPaths} from "./Routes.types.ts";
import {firestore} from "../firebase.ts";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import {
    query,
    collection,
    where
} from "firebase/firestore";

type Props = {
    loggedInUserId?: string;
};
const PrivateRoutes = ({loggedInUserId}: Props) => {
    console.log(loggedInUserId, 'logged in user')
    const navigate = useNavigate();
    const ref = query(collection(firestore, "auth_users"), where('fUserId', "==",  loggedInUserId));
    const queryData = useFirestoreQueryData(['auth_users', {'fUserId': loggedInUserId}], ref);


    useEffect(() => {
        if (!loggedInUserId) {
            navigate(ERoutesPaths.LOGIN);
        }
    }, [loggedInUserId]);

    console.log(queryData.data, 'logged in user')
    return (
        <Suspense fallback={<Layout />}>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="*"
                        element={<Navigate replace to={ERoutesPaths.PAGE_NOT_FOUND} />}
                    />
                    {privateRoutes.map(({ path, component, subRoutes }) => {
                        const Component = component as FC;
                        if (!subRoutes?.length) {
                            return (
                                <Route key={path} path={`${path}`} element={<Component />} />
                            );
                        }
                        return (
                            <Route
                                key={path}
                                path={`${path}/*`}
                                element={
                                    <Routes>
                                        <Route path="/" element={<Outlet />}>
                                            <Route path="*" element={<Navigate to="/app/404" />} />
                                            {subRoutes?.map(
                                                ({ path: subRoute, component: subComponent }) => {
                                                    const SubComponent = subComponent as FC;
                                                    const subPath = subRoute.replace(path, '');
                                                    return (
                                                        <Route
                                                            key={subPath}
                                                            path={`${subPath}`}
                                                            element={<SubComponent />}
                                                        />
                                                    );
                                                },
                                            )}
                                            )
                                        </Route>
                                    </Routes>
                                }
                            />
                        );
                    })}
                </Route>
            </Routes>
        </Suspense>

    );
};

export default PrivateRoutes;