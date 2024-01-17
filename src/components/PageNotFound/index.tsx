import { Row, Col } from 'antd';
import Title from 'antd/es/typography/Title';

const PageNotFound = () => {
    return (
        <Row justify="center" className="mt-10 pt-10">
            <Col>
                {/*<Row>*/}
                {/*    <Image src={PageNotFoundImg} alt="page not found" />*/}
                {/*</Row>*/}
                <Row justify="center">
                    <Title level={4}>
                        Oops... Page not found...
                    </Title>
                </Row>
            </Col>
        </Row>
    );
};

export default PageNotFound;