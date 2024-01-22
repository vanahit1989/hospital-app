import {DocumentReference, FirestoreError, WithFieldValue} from "firebase/firestore";
import {UseMutationOptions} from "react-query";
import {UseQueryOptions} from "@tanstack/react-query";
import {WithIdField} from "@react-query-firebase/firestore";

export type TUseMutationOptions<T> = UseMutationOptions<DocumentReference<T>, FirestoreError, WithFieldValue<T>>
export type TUseQueryOptions<T> =  Omit<UseQueryOptions<WithIdField<T>[], FirestoreError,WithFieldValue<T>>, "queryFn">