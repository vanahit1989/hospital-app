import {Timestamp} from "firebase/firestore";
import {EPaymentStatusDB, EPaymentStatusUI} from "./general.types.ts";


export type TServiceDB = {
    name: string; count: number; price: number;
}

export type TServiceUI = {
    name: string; count: number; price: number;
}



export type TVisitUI = {
    docId?: string;
    patientName?: string;
    creationDate: Timestamp | string
    doctorId: string;
    issue: string;
    patientId: string;
    practiceId: string;
    patientPortion?: number;
    paymentStatus?: EPaymentStatusUI
    services: TServiceUI[];
    totalAmount?: number;
    amountPaid?: number;


}

export type TVisitDB = {
    creationDate: Timestamp;
    doctorId: string;
    issue: string;
    patientId: string;
    practiceId: string;
    patientPortion?: number;
    paymentStatus?: EPaymentStatusDB
    services: TServiceDB[];
    patientName?: string;
    totalAmount?: number;
    amountPaid?: number;
}

export type TPaymentLinkUI = {
    amount: number;
    practiceId: string;
    quantity: number;
    reason: string;
    visitId: string
}

export type TPaymentLinkDB = {
    amount: number;
    practiceId: string;
    quantity: number;
    reason: string;
    visitId: string
}