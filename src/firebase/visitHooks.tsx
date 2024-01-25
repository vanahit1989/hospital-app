import {collection, firestore} from "../firebase.ts";
import {useGetAuthUserHook} from "./useGetAuthUserHook.tsx";
import {
    useFirestoreCollectionMutation,
    useFirestoreDocument,
    useFirestoreDocumentMutation,
    useFirestoreQuery
} from "@react-query-firebase/firestore";
import message from "antd/es/message/index";
import {TUseDocumentMutationOptions, TUseMutationOptions} from "../data/types/firebase.types.ts";
import {TPaymentLinkUI, TServiceUI, TVisitUI} from "../data/types/visit.types.ts";
import {visitConverter} from "../data/converters/visit.converter.ts";
import {doc} from "firebase/firestore";
import {useGetPatients} from "./useGetPatientsHook.tsx";
import {paymentLinkConverter} from "../data/converters/user.converters.ts";

export const useCreateVisitHook = (mutationOptions?: TUseMutationOptions<TVisitUI> ) => {
    const {data:authUser} = useGetAuthUserHook();
    const ref = collection(firestore, "visits").withConverter(visitConverter);
    const mutation = useFirestoreCollectionMutation<TVisitUI>(ref, {...mutationOptions});
    const mutate = (data: TVisitUI)  => {
        if (authUser?.practiceId) {
            mutation.mutate({
                ...data,
                creationDate: new Date().toString(),
                practiceId: authUser.practiceId,
            })
        } else {
            message.error(`You are not authorized`, 3);

        }
    }
    return {...mutation, mutate};
};

export const useCreateVisitServiceHook = (visitId: string, mutationOptions?: TUseDocumentMutationOptions<TVisitUI> ) => {
    const {data:authUser} = useGetAuthUserHook();
    const collectionRef = collection(firestore, "visits").withConverter(visitConverter);
    const ref = doc(collectionRef, visitId);
    const visitDataWithSnapshot = useFirestoreDocument(["visit", visitId], ref, {},{
        enabled: !!authUser?.practiceId && !!ref,
    });
    const visitData = visitDataWithSnapshot.data?.data();

    const mutation = useFirestoreDocumentMutation(ref, {}, {...mutationOptions});
    const mutate = (data: TServiceUI)  => {
        if (authUser?.practiceId) {
            mutation.mutate({
                ...visitData,
                services: [data, ...(visitData?.services || [])]
            } as TVisitUI)
        } else {
            message.error(`You are not authorized`, 3);

        }
    }
    return {...mutation, mutate};
};

export const useGetVisitsHook = (queryOptions?: any) => {
    const { data:authUser} = useGetAuthUserHook();
    const { data:patients, isLoading} = useGetPatients();
    const ref = collection(firestore, "visits").withConverter(visitConverter);
    const queryData =  useFirestoreQuery<TVisitUI>(['visits'], ref, {subscribe: true}, {
        ...queryOptions,
        enabled: !!authUser?.practiceId && !!ref && !isLoading,
    })
    const data = queryData.data?.docs.map(snapshot => {
        const visitData = snapshot.data();
        const patientData = patients?.find(item => item.docId === visitData.patientId);
        return {...visitData, patientName: patientData?.name || ''}
    });
    return {...queryData, data}
}


export const useGetVisitByIdHook = (visitId: string, queryOptions?: any) => {
    const {data:authUser} = useGetAuthUserHook();
    const { data:patients, isLoading} = useGetPatients();

    const collectionRef = collection(firestore, "visits");
    const ref = doc(collectionRef, visitId).withConverter(visitConverter);

    // The Query Key now reflects the reference id.
    const visitDataWithSnapshot = useFirestoreDocument(["visit", visitId], ref, { subscribe: true, includeMetadataChanges: true}, {
        ...queryOptions,
        enabled: !!authUser?.practiceId && !!ref && !isLoading,
    });
    const visitData = visitDataWithSnapshot.data?.data()
    const patientData = patients?.find(item => item.docId === visitData?.patientId);
    return {...visitDataWithSnapshot, data: {...visitData, patientName:  patientData?.name || ''}}
}

export const useSendPaymentLinkHook = (mutationOptions?: TUseMutationOptions<TPaymentLinkUI>) => {
    const { data:authUser} = useGetAuthUserHook();
    const ref = collection(firestore, "paymentLinks").withConverter(paymentLinkConverter);
    const mutation = useFirestoreCollectionMutation(ref, {...mutationOptions});
    const mutate = (data: TPaymentLinkUI)  => {
        if (authUser?.practiceId) {
            mutation.mutate({
                ...data,
                practiceId: authUser.practiceId
            } as TPaymentLinkUI)
        } else {
            message.error(`You are not authorized`, 3);

        }
    }
    return { ...mutation, mutate };
}