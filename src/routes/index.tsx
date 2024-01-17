import {Suspense} from 'react';
import { Routes, Route } from 'react-router';
import PrivateRoutes from "./PrivateRoutes.tsx";
import PublicRoutes from "./PublicRoutes.tsx";
import { useAuthUser } from '@react-query-firebase/auth';
import {auth} from "../firebase.ts";


const RoutesPage = () => {
    const user = useAuthUser('user', auth);
    if (user.isLoading) return null;
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path="/*" element={<PublicRoutes isLoggedIn={!!user.data?.uid} />} />
                <Route path="app/*" element={<PrivateRoutes loggedInUserId={user.data?.uid} />} />
            </Routes>
        </Suspense>
    );
};
export default RoutesPage;