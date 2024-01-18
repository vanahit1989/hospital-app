import {Navigate, Route, Routes, useNavigate} from 'react-router';
import {FC, Suspense, useEffect} from 'react';
import {ERoutesPaths} from "./Routes.types.ts";
import {publicRoutes} from "./RoutesData.tsx";


const PublicRoutes: FC<{
    isLoggedIn: boolean;
}> = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log(isLoggedIn, 'isLoggedIn')
        if (isLoggedIn) {
            navigate(`app/${ERoutesPaths.PATIENTS}`);
        }
    }, [isLoggedIn]);
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate replace to={publicRoutes[0].path} />}
                />
                {publicRoutes.map(({ path, component }) => {
                    const Component = component as FC;
                    return <Route key={path} path={`${path}`} element={<Component />} />;
                })}
                <Route path="*" element={<Navigate to="/app/404" />} />
            </Routes>
        </Suspense>
    );
};

export default PublicRoutes;