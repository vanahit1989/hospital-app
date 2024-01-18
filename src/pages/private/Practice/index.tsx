import PageWrapper from "../../../components/PageWrapper";
import {Col, Row} from "antd";
import useGetPractice from "../../../hooks/useGetPractice.tsx";
import PracticeUpdateForm from "./PracticeUpdateForm.tsx";
import {useGetAuthUserHook} from "../../../firebase/useGetAuthUserHook.tsx";

const Practice = () => {
    const {data} = useGetPractice()
    const {data:userData} = useGetAuthUserHook()

    return (
        <PageWrapper title='Practice' subtitle='Complete your practice details'>
            {
                (data && userData?.practiceId)  ?
                    (<Row justify='center'>
                        <Col>
                            <PracticeUpdateForm data={data} id={userData.practiceId} />
                        </Col>
                    </Row>)
                    :
                    <></>
            }
        </PageWrapper>
    );
};

export default Practice;