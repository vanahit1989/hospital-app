import {collection, doc} from "firebase/firestore";
import {firestore} from "../firebase.ts";
import {useFirestoreDocumentData} from "@react-query-firebase/firestore";
import {useGetAuthUserHook} from "../firebase/useGetAuthUserHook.tsx";

export type TPractice = {
    address: {
        city: string;
        country: string;
        state: string;
        street: string;
        zipCode: string
    };
    creationDate:string;
    doctors:string[];
    logoUrl:string;
    name:string;
    timeZone:string;
}
const useGetPractice = () => {
    const {data} = useGetAuthUserHook()

    const collectionRef = collection(firestore, "practices");
    let ref ;
    if (data?.practiceId){
        ref = doc(collectionRef, data?.practiceId )
    }
    const documentData = useFirestoreDocumentData(['practices', data?.practiceId], ref,{},{
        enabled:!!data?.practiceId && !!ref
    })

    return {
        ...documentData,
        data: documentData.data ? documentData.data as TPractice : null
    }
}

export default useGetPractice;