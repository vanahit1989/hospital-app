import {Timestamp} from "firebase/firestore";

export type TVisitUI = {
    docId?: string;
    creationDate: Timestamp | string
    doctorId:string;
    issue:string;
    patientId: string;
    practiceId: string;
}

export type TVisitDB = {
    creationDate: Timestamp;
    doctorId:string;
    issue:string;
    patientId: string;
    practiceId: string;
}