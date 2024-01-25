import {collection, doc} from "firebase/firestore";
import {firestore} from "../firebase.ts";
import { useFirestoreDocumentMutation } from "@react-query-firebase/firestore";
import {practiceConverter} from "../data/converters/practice.converter.ts";


const useUpdatePractice = (practiceId:string)=>{
    const collectionRef = collection(firestore, "practices");
    const  ref = doc(collectionRef, practiceId ).withConverter(practiceConverter)
    const mutation = useFirestoreDocumentMutation(ref)
    return {...mutation}
}

export default useUpdatePractice;