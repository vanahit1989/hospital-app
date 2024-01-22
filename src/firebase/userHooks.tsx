import {useGetAuthUserHook} from "./useGetAuthUserHook.tsx";
import {query, where} from "firebase/firestore";
import {collection, firestore} from "../firebase.ts";
import {useFirestoreQuery} from "@react-query-firebase/firestore";
import {userConverter} from "../data/converters/user.converters.ts";
import { EUserTypeUI, TUserUI} from "../data/types/user.types.ts";

export const useGetDoctors = (queryOptions?:any) => {
    const {data:authUser} = useGetAuthUserHook();
    let ref;
    if (authUser?.practiceId) {
        ref = query(collection(firestore, "auth_users").withConverter(userConverter), where('practiceId', '==', authUser?.practiceId, ));
    }
    const queryData =  useFirestoreQuery<TUserUI>(['auth_users'], ref, {subscribe: true}, {
        ...queryOptions,
        enabled: !!authUser?.practiceId && !!ref,
    })
    const data = queryData.data?.docs.map(snapshot => snapshot.data()).filter(item => item.type === EUserTypeUI.DOCTOR);
    return {...queryData, data}
};