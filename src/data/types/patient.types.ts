import {ESourceDB, ESourceUI, TAddressDB, TAddressUI} from "./general.types.ts";
import {Timestamp} from "firebase/firestore";

export type TPatientDB = {
    name: string;
    address: TAddressDB;
    creationDate: Timestamp;
    practiceId: string;
    source: ESourceDB;
    email: string;
}

export type TPatientUI =  {
    docId?: string;
    name: string;
    address: TAddressUI;
    addressStr?: string;
    creationDate: string | Timestamp;
    practiceId: string;
    source: ESourceUI;
    email: string;
}

export type TPatientShortDataUI = {
    docId: string;
    name: string;
}

export type TPatientShortDataDB = {
    name: string;
    docId: string;

}