import {FirestoreDataConverter} from "firebase/firestore";

export type TFirebaseConverterType<T> = FirestoreDataConverter<T>;

export type TConvertor<FD, BD> = {
    toDb: (data: FD) => BD;
    fromDb: (data: BD) => FD;
};

export type TFetchConverter<FD, BD> = {
    fromDb: (data: BD) => FD;
};

export type TCreateConverter<FD, BD> = {
    toDb: (data: FD) => BD;
};