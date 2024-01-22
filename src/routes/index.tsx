import {Suspense} from 'react';
import {Route, Routes} from 'react-router';
import PrivateRoutes from "./PrivateRoutes.tsx";
import PublicRoutes from "./PublicRoutes.tsx";
import {useGetAuthUserHook} from "../firebase/useGetAuthUserHook.tsx";


const RoutesPage = () => {
    const user = useGetAuthUserHook();
    if (user.isLoading ) return null;
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/*" element={<PublicRoutes isLoggedIn={!!user.data} />} />
                <Route path="app/*" element={<PrivateRoutes isLoggedIn={!!user.data} />} />
            </Routes>
        </Suspense>
    );
};
export default RoutesPage;