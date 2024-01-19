import {DocumentReference, FirestoreError, WithFieldValue} from "firebase/firestore";
import {UseMutationOptions} from "react-query";

export type TUseMutationOptions<T> = UseMutationOptions<DocumentReference<T>, FirestoreError, WithFieldValue<T>>
