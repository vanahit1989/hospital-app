import {TFetchConverter, TFirebaseConverterType} from "../types/converter.types.ts";
import {TPatientDB, TPatientShortDataDB, TPatientShortDataUI, TPatientUI} from "../types/patient.types.ts";
import {QueryDocumentSnapshot, SnapshotOptions} from "firebase/firestore";
import {Timestamp} from "../../firebase.ts";
import {addressConverter, addressToStringConverter, sourceConverter} from "./general.converters.ts";
import dayjs from "dayjs";

export const patientConverter:TFirebaseConverterType<TPatientUI> = {
    toFirestore(post: TPatientUI): TPatientDB {
        return {
            creationDate: Timestamp.now(),
            name: post.name || '',
            email: post.email || '',
            source: sourceConverter.toDb(post.source),
            practiceId: post.practiceId,
            address: addressConverter.toDb(post.address),
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ) {
        const patient = snapshot.data(options)! as TPatientDB;
        return {
            docId: snapshot.id,
            email: patient.email,
            name: patient.name,
            address: addressConverter.fromDb(patient.address),
            addressStr: addressToStringConverter.fromDb(patient.address),
            creationDate: dayjs(patient.creationDate.toDate()).format('DD/MM/YYYY') as string,
            practiceId: patient.practiceId,
            source: sourceConverter.fromDb(patient.source)
        }
    }
};
export const patientShortDataConverter:TFetchConverter<TPatientShortDataUI, TPatientShortDataDB> = {
    fromDb(
       patient
    ) {
        return {
            docId: patient.docId,
            name: patient.name,
        }
    }
};
