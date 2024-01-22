import {ESourceDB, ESourceUI, TAddressDB, TAddressUI} from "./general.types.ts";
import {Timestamp} from "firebase/firestore";

export type TPatientDB = {
    name: string;
    address: TAddressDB;
    creationDate: Timestamp;
    practiceId: string;
    source: ESourceDB;
}

export type TPatientUI =  {
    docId?: string;
    name: string;
    address: TAddressUI;
    addressStr?: string;
    creationDate: string | Timestamp;
    practiceId: string;
    source: ESourceUI;
}
