import {TFirebaseConverterType} from "../types/converter.types.ts";
import {Timestamp} from "../../firebase.ts";
import {QueryDocumentSnapshot, SnapshotOptions} from "firebase/firestore";
import dayjs from "dayjs";
import {TVisitDB, TVisitUI} from "../types/visitation.types.ts";

export const visitConverter:TFirebaseConverterType<TVisitUI> = {
    toFirestore: (visit) => {
        return {
            creationDate: Timestamp.now(),
            issue: visit.issue,
            doctorId: visit.doctorId,
            practiceId: visit.practiceId,
            patientId: visit.patientId
        };
    },
        fromFirestore: (
            snapshot: QueryDocumentSnapshot,
            options: SnapshotOptions
        )=>  {
            const visit = snapshot.data(options)! as TVisitDB;
            return {
                docId: snapshot.id,
                doctorId: visit.doctorId,
                issue: visit.issue,
                creationDate: dayjs(visit.creationDate.toDate()).format('DD/MM/YYYY'),
                practiceId: visit.practiceId,
                patientId: visit.patientId

            }
        }
    };
