import {TCreatePatientDB} from "../data/types/patient.types.ts";
import {useGetAuthUserHook} from "./useGetAuthUserHook.tsx";

export const useCreatePatientHook = (data: TCreatePatientDB) => {
    const authUserData = useGetAuthUserHook();
};