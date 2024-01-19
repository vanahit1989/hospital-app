import { TPatientUI} from "../data/types/patient.types.ts";
import {collection, firestore} from "../firebase.ts";
import {useGetAuthUserHook} from "./useGetAuthUserHook.tsx";
import {useFirestoreCollectionMutation} from "@react-query-firebase/firestore";
import message from "antd/es/message/index";
import {patientConverter} from "../data/converters/patient.converters.ts";
import {TUseMutationOptions} from "../data/types/firebase.types.ts";
import {ESourceUI} from "../data/types/general.types.ts";

export const useCreatePatientHook = (mutationOptions?: TUseMutationOptions<TPatientUI> ) => {
    const {data:authUser} = useGetAuthUserHook();
    const ref = collection(firestore, "patients").withConverter(patientConverter);
    const mutation = useFirestoreCollectionMutation<TPatientUI>(ref, mutationOptions);
    const mutate = (data: TPatientUI)  => {
        if (authUser?.practiceId) {
            mutation.mutate({
                ...data,
                creationDate: new Date(),
                practiceId: authUser.practiceId,
                source: ESourceUI.MANUAL,
            })
        } else {
            message.error(`You are not authorized`, 3000);

        }
    }
    return {...mutation, mutate};
};