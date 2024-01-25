import {useRef} from "react";
import Button from "../../../../components/Button";
import CreateServiceModal from "../CreateServiceModal";


 const CreateVisitAction = ({docId}: {docId: string}) => {
    const visitRef = useRef<{open:() => void}>();
    if (!docId) return null;
    return (
        <>
            <CreateServiceModal ref={visitRef} visitId={docId}/>
            <Button type='primary' onClick={() => visitRef.current?.open()}>Create Service</Button>
        </>
    );
};

 export default CreateVisitAction;