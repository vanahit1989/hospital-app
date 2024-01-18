import {collection, doc} from "firebase/firestore";
import {firestore} from "../firebase.ts";
import {useFirestoreDocumentData} from "@react-query-firebase/firestore";

type TPractice = {
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
const useGetPractice = (id: string = 'none') => {

    const collectionRef = collection(firestore, "practices");
    const ref1 = doc(collectionRef, id)
    const documentData = useFirestoreDocumentData(['practices', id], ref1,)

    return {
        ...documentData,
        data: documentData.data ? documentData.data as TPractice : null
    }
}

export default useGetPractice;