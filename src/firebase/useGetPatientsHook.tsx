import {TPatientUI} from "../data/types/patient.types.ts";
import {collection, firestore} from "../firebase.ts";
import {useGetAuthUserHook} from "./useGetAuthUserHook.tsx";
import {useFirestoreQuery} from "@react-query-firebase/firestore";
import {patientConverter} from "../data/converters/patient.converters.ts";
import {query, where} from "firebase/firestore";

export const useGetPatients = (queryOptions?:any) => {
    const {data:authUser} = useGetAuthUserHook();
    let ref;
    if (authUser?.practiceId) {
        ref = query(collection(firestore, "patients").withConverter(patientConverter), where('practiceId', '==', authUser?.practiceId));
    }
    const queryData =  useFirestoreQuery<TPatientUI>(['patients'], ref, {subscribe: true}, {
        ...queryOptions,
        enabled: !!authUser?.practiceId && !!ref,
    })
    const data = queryData.data?.docs.map(snapshot => snapshot.data());
    return {...queryData, data}
};