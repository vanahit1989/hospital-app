import {TConvertor, TFirebaseConverterType} from "../types/converter.types.ts";
import {Timestamp} from "../../firebase.ts";
import {QueryDocumentSnapshot, SnapshotOptions} from "firebase/firestore";
import dayjs from "dayjs";
import {TServiceDB, TServiceUI, TVisitDB, TVisitUI} from "../types/visit.types.ts";
import {paymentStatusConverter} from "./general.converters.ts";
import {EPaymentStatusDB} from "../types/general.types.ts";

export const visitConverter:TFirebaseConverterType<TVisitUI> = {
    toFirestore: (visit:TVisitUI): TVisitDB => {
        return {
            creationDate: Timestamp.now(),
            issue: visit.issue,
            doctorId: visit.doctorId,
            practiceId: visit.practiceId,
            patientId: visit.patientId,
            services: (visit.services || []).map(item =>  serviceConverter.toDb(item))
        };
    },
        fromFirestore: (
            snapshot: QueryDocumentSnapshot,
            options: SnapshotOptions
        )=>  {
            const visit = snapshot.data(options)! as TVisitDB;
            return {
                patientName: visit.patientName || '',
                docId: snapshot.id,
                doctorId: visit.doctorId,
                issue: visit.issue,
                creationDate: dayjs(visit.creationDate.toDate()).format('DD/MM/YYYY'),
                practiceId: visit.practiceId,
                patientId: visit.patientId,
                totalAmount: visit.totalAmount || 0,
                paymentStatus: paymentStatusConverter.fromDb(visit.paymentStatus || EPaymentStatusDB.PENDING),
                patientPortion: visit.patientPortion || 0,
                amountPaid: visit?.amountPaid || 0,
                services: (visit.services || []).map(item =>  serviceConverter.fromDb(item))

            }
        }
    };

export const serviceConverter: TConvertor<TServiceUI, TServiceDB> = {
    fromDb: (data) => {
        return {
            name: data.name,
            price: data.price,
            count: data.count
        }
    },
    toDb: (data) => {
        return {
            name: data.name,
            price: Number(data.price),
            count: Number(data.count)
        }
    }
}