import {collection, query, where} from "firebase/firestore";
import {auth, firestore} from "../firebase.ts";
import {useFirestoreQueryData} from "@react-query-firebase/firestore";
import {useAuthUser} from "@react-query-firebase/auth";
import {userConverter} from "../data/converters/user.converters.ts";

export const useGetAuthUserHook = () => {
    const user = useAuthUser('user', auth);
    let ref;
    if (user.data?.uid) {
        ref = query(collection(firestore, "auth_users"), where('fUserId', "==",  user?.data?.uid)).withConverter(userConverter);
    }
    const {data, ...queryData} = useFirestoreQueryData(['auth_users', {'fUserId': user.data?.uid}], ref, {
    }, { enabled: !!user?.data?.uid && !!ref});
    return {...queryData, data: data?.length ? data[0] : null}
}