import {collection, firestore} from "../firebase.ts";
import {useGetAuthUserHook} from "./useGetAuthUserHook.tsx";
import {useFirestoreCollectionMutation} from "@react-query-firebase/firestore";
import message from "antd/es/message/index";
import {TUseMutationOptions} from "../data/types/firebase.types.ts";
import {TVisitUI} from "../data/types/visitation.types.ts";
import {visitConverter} from "../data/converters/visit.converter.ts";

export const useCreateVisitHook = (mutationOptions?: TUseMutationOptions<TVisitUI> ) => {
    const {data:authUser} = useGetAuthUserHook();
    const ref = collection(firestore, "visits").withConverter(visitConverter);
    const mutation = useFirestoreCollectionMutation<TVisitUI>(ref, {...mutationOptions});
    const mutate = (data: TVisitUI)  => {
        console.log(data, 'data')
        if (authUser?.practiceId) {
            mutation.mutate({
                ...data,
                creationDate: new Date().toDateString(),
                practiceId: authUser.practiceId,
            })
        } else {
            message.error(`You are not authorized`, 3);

        }
    }
    return {...mutation, mutate};
};