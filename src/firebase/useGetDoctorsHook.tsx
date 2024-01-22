import {useGetAuthUserHook} from "./useGetAuthUserHook.tsx";
import {collection, query, where} from "firebase/firestore";
import {firestore} from "../firebase.ts";
import {useFirestoreQueryData} from "@react-query-firebase/firestore";
import {TUserUI} from "../data/types/user.types.ts";


const useGetDoctorsHook =()=>{
    const user = useGetAuthUserHook()
    let ref;
    if (user.data?.practiceId) {
        ref = query(collection(firestore, "auth_users"), where('practiceId', "==",  user.data?.practiceId));
    }

    const {data, ...queryData} = useFirestoreQueryData(['auth_users', {'practiceId': user.data?.practiceId}], ref, {
    }, { enabled: !!user.data?.practiceId && !!ref});
    return {...queryData,data: data?.length ? data as TUserUI[]: null}
}
export default useGetDoctorsHook;