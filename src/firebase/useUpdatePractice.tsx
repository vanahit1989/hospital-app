import {collection, doc} from "firebase/firestore";
import {firestore} from "../firebase.ts";
import { useFirestoreDocumentMutation } from "@react-query-firebase/firestore";


const useUpdatePractice = (practiceId:string)=>{
    const collectionRef = collection(firestore, "practices");
    const  ref = doc(collectionRef, practiceId )
   const mutation = useFirestoreDocumentMutation(ref)
    return {...mutation}
}

export default useUpdatePractice;