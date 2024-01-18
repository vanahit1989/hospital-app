import {useAuthUser} from "@react-query-firebase/auth";
import {auth, firestore} from "../firebase.ts";
import {collection, query, where} from "firebase/firestore";
import {useFirestoreQueryData} from "@react-query-firebase/firestore";

type TUser = {
    type:string,
    role:string,
    practiceId:string,
    fUserId:string,
    email:string,
    displayName:string,
    creationDate:string
}

const useGetUserData = ()=>{

    const user = useAuthUser('user', auth);
    const id =  user.data?.uid || '';
    const ref = query(collection(firestore, "auth_users"), where('fUserId', "==",  id));
    const queryData = useFirestoreQueryData(['auth_users', {'fUserId': id}], ref);

    if (queryData.data?.length){
        return {
            userData:queryData.data[0] as TUser,
            isError:queryData.isError,
            isSuccess:queryData.isSuccess,
            isLoading:queryData.isLoading
        }
    }
    else {
        return {
            userData:null,
            isError:queryData.isError,
            isSuccess:queryData.isSuccess,
            isLoading:queryData.isLoading
        }
    }
}
export default useGetUserData;