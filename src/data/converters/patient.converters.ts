import {TFirebaseConverterType} from "../types/converter.types.ts";
import {TPatientDB, TPatientUI} from "../types/patient.types.ts";
import {QueryDocumentSnapshot, SnapshotOptions} from "firebase/firestore";
import {Timestamp} from "../../firebase.ts";
import {addressConverter, sourceConverter} from "./general.converters.ts";

export const patientConverter:TFirebaseConverterType<TPatientUI> = {
    toFirestore(post: TPatientUI): TPatientDB {
        return {
            creationDate: Timestamp.now(),
            name: post.name,
            source: sourceConverter.toDb(post.source),
            practiceId: post.practiceId,
            address: post.address,
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ) {
        const patient = snapshot.data(options)! as TPatientDB;
        return {
            docId: snapshot.id,
            name : patient.name,
            addressStr : addressConverter.fromDb(patient.address),
            address : patient.address,
            creationDate : patient.creationDate.toDate(),
            practiceId : patient.practiceId,
            source : sourceConverter.fromDb(patient.source)
        }
    }
};
