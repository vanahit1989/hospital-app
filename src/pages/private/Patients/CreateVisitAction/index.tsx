import {TPatientUI} from "../../../../data/types/patient.types.ts";
import CreateVisitModal from "./CreateVisitModal";
import {useRef} from "react";
import Button from "../../../../components/Button";


 const CreateVisitAction = ({docId}: TPatientUI) => {
    const visitRef = useRef<{open:() => void}>();
    if (!docId) return null;
    return (
        <>
            <CreateVisitModal ref={visitRef} patientId={docId}/>
            <Button type='primary' onClick={() => visitRef.current?.open()}>Create Visit</Button>
        </>
    );
};

 export default CreateVisitAction;