import {collection, firestore} from "../firebase.ts";
import {useGetAuthUserHook} from "./useGetAuthUserHook.tsx";
import { query } from "firebase/firestore";
import {practiceConverter} from "../data/converters/practice.converter.ts";
import {useFirestoreQueryData} from "@react-query-firebase/firestore";

const useGetPractice = () => {
    const {data:authUser,isLoading:userLoading} = useGetAuthUserHook();
    let ref;
    if (authUser?.practiceId) {
        // ref = query(collection(firestore, "practices").withConverter(practiceConverter), where('practiceId', "==",  authUser?.practiceId ));
        ref = query(collection(firestore, "practices").withConverter(practiceConverter));
    }
    const {data, ...queryData} = useFirestoreQueryData(['practiceId', {'practiceId': authUser?.practiceId}], ref,
        {subscribe:true}, { enabled: !!authUser?.practiceId && !!ref});

    console.log(data?.find(item=>item.docId === authUser?.practiceId))
    return {...queryData, data: data?.length ? data.find(item=>item.docId === authUser?.practiceId) : null, isLoading:userLoading || queryData.isLoading}

}

export default useGetPractice;