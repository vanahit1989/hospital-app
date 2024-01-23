import {TConvertor, TFirebaseConverterType} from "../types/converter.types.ts";
import {QueryDocumentSnapshot, SnapshotOptions} from "firebase/firestore";
import {
    TPracticeAddressDB,
    TPracticeAddressUI,
    TPracticeDB, TPracticeUI,
} from "../types/practice.type.ts";

export const practiceAddressConverter: TConvertor<TPracticeAddressUI, TPracticeAddressDB> = {
    fromDb: (data) => {
        return {
            city:data?.city || '',
            country: data?.country || '',
            state: data?.state || '',
            street:data?.street || '' ,
            zipCode: data?.zipCode || '',
        };
    } ,
    toDb: (data) => {
        return {
            city:data?.city || '',
            country: data?.country || '',
            state: data?.state || '',
            street:data?.street || '' ,
            zipCode: data?.zipCode || '',
        };
    }
}


export const practiceConverter:TFirebaseConverterType<TPracticeUI> = {
    toFirestore: (practice: TPracticeUI):TPracticeDB => {
        return {
            name:practice.name,
            logoUrl:practice.logoUrl ,
            timeZone:practice.timeZone ,
            doctors:practice.doctors || [],
            creationDate:practice.creationDate || '',
            address:practiceAddressConverter.toDb(practice?.address)
        };
    },
    fromFirestore: (
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ) => {
        const practice = snapshot.data(options)! as TPracticeDB;
        return {
            docId: snapshot.id,
            creationDate:practice.creationDate,
            logoUrl:practice.logoUrl,
            name:practice.name,
            timeZone:practice.timeZone,
            doctors:practice.doctors || [],
            address:practiceAddressConverter.fromDb(practice?.address)
        }
    }
};
