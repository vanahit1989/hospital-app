import {firestore} from "../firebase.ts";
import {useGetAuthUserHook} from "./useGetAuthUserHook.tsx";
import {useEffect, useState} from "react";
import { doc, onSnapshot } from "firebase/firestore";


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
    const {data:userData} = useGetAuthUserHook()
    const [data,setData] = useState<TPractice | null>(null);

    useEffect(() => {
        const unsub = onSnapshot(doc(firestore, "practices",  userData?.practiceId || ''), (document) => {
            if (document.exists()){
                setData(document.data() as TPractice)
            }
            else setData(null)
        });

        return ()=>{
            unsub();
        }
    }, []);

    return {
        data
    }
}

export default useGetPractice;