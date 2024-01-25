import {TConvertor, TFirebaseConverterType} from "../types/converter.types.ts";
import {ERoleDB, ERoleUI, EUserTypeDB, EUserTypeUI, TUserDB, TUserUI} from "../types/user.types.ts";
import {QueryDocumentSnapshot, SnapshotOptions} from "firebase/firestore";
import {TPaymentLinkDB, TPaymentLinkUI} from "../types/visit.types.ts";

export const roleConverter: TConvertor<ERoleUI, ERoleDB> = {
    fromDb: (data) => {
        const sources: {
            [key in ERoleDB]: ERoleUI;
        } = {
            [ERoleDB.ADMIN]: ERoleUI.ADMIN,
        };
        return sources[data];
    } ,
    toDb: (data) => {
        const sources: {
            [key in ERoleUI]: ERoleDB;
        } = {
            [ERoleUI.ADMIN]: ERoleDB.ADMIN,
        };
        return sources[data];
    }
}

export const userTypeConverter: TConvertor<EUserTypeUI, EUserTypeDB> = {
    fromDb: (data) => {
        const sources: {
            [key in EUserTypeDB]: EUserTypeUI;
        } = {
            [EUserTypeDB.DOCTOR]: EUserTypeUI.DOCTOR,
        };
        return sources[data];
    } ,
    toDb: (data) => {
        const sources: {
            [key in EUserTypeUI]: EUserTypeDB;
        } = {
            [EUserTypeUI.DOCTOR]: EUserTypeDB.DOCTOR,
        };
        return sources[data];
    }
}


export const userConverter:TFirebaseConverterType<TUserUI> = {
    toFirestore: (user: TUserUI):TUserDB => {
        return {
            displayName: user.displayName,
            email:user.email,
            fUserId: user.fUserId,
            practiceId: user.practiceId,
            role: roleConverter.toDb(user.role),
            type:userTypeConverter.toDb(user.type)
        };
    },
    fromFirestore: (
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ) => {
        const user = snapshot.data(options)! as TUserDB;
        return {
            docId: snapshot.id,
            displayName: user.displayName,
            practiceId: user.practiceId,
            role: roleConverter.fromDb(user.role),
            type: userTypeConverter.fromDb(user.type),
            fUserId: user.fUserId,
            email: user.email
        }
    }
};


export const paymentLinkConverter:TFirebaseConverterType<TPaymentLinkUI> = {
    toFirestore: (data: TPaymentLinkUI):TPaymentLinkDB => {
        return {
            amount: data.amount,
            practiceId: data.practiceId,
            visitId: data.visitId,
            reason: data.reason,
            quantity: data.quantity,
        };
    },
    fromFirestore: (
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ) => {
        const data = snapshot.data(options)! as TPaymentLinkDB;
        return {
            amount: data.amount,
            practiceId: data.practiceId,
            visitId: data.visitId,
            reason: data.reason,
            quantity: data.quantity,
        }
    }
};