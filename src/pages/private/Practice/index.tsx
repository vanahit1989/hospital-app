import PageWrapper from "../../../components/PageWrapper";
import { Col, Row} from "antd";
import useGetPractice from "../../../firebase/useGetPractice.tsx";
import PracticeUpdateForm from "./PracticeUpdateForm.tsx";

const Practice = () => {
    const {data} = useGetPractice()

    return (
        <PageWrapper title='Practice' subtitle='Complete your practice details'>
            {
                data  ?
                    (<Row justify='start'>
                        <Col>
                            <PracticeUpdateForm data={data} />
                        </Col>
                    </Row>)
                    :
                    <></>
            }
        </PageWrapper>
    );
};

export default Practice;