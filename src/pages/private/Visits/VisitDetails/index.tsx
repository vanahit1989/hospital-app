import PageWrapper from "../../../../components/PageWrapper";
import {ERoutesPaths} from "../../../../routes/Routes.types.ts";
import {Paragraph, Text, Title} from "../../../../components/Typography";
import {useParams} from "react-router";
import {useGetVisitByIdHook} from "../../../../firebase/visitHooks.tsx";
import {Col, Row, Table, TableProps} from "antd";
import {Colors} from "../../../../core/CssVariables.ts";
import PaymentStatusTag from "../PaymentStatusTag";
import {TServiceUI} from "../../../../data/types/visit.types.ts";
import {ColumnsType} from "antd/es/table";
import CreateServiceAction from "../CreateServiceAction";
import SendPaymentLinkAction from "../SendPaymentLinkAction";

const tableProps: TableProps<TServiceUI> = {
    bordered: false,
    loading: false,
    size: 'middle',
    showHeader: true,
    scroll: {y: '80vh', x: 'auto'},
    tableLayout: 'auto',
};
export const VisitDetails = () => {
    const { id} = useParams();
    const {data, isLoading} = useGetVisitByIdHook(id || '', {

    });
    if (!data) return null;

    const columns:ColumnsType<TServiceUI> = [
        {
            key:'name',
            title:'Service name',
            dataIndex:'name',
        },
        {
            key:'count',
            title:'Count',
            dataIndex:'count',
            align: "center",
        },
        {
            key:'price',
            title:'Price',
            dataIndex:'price',
            align: "center",
        }
    ]

    return (
        <PageWrapper actions={<Row gutter={[12, 12]}>
            <Col><CreateServiceAction docId={data?.docId || ''} /> </Col>
            <Col><SendPaymentLinkAction visit={data} /> </Col> </Row>}  title={`Visit details of ${data.patientName}`} subtitle={`Created: ${data.creationDate?.toString()}`} backPath={`/app/${ERoutesPaths.VISITS}`}>
           <Row gutter={[0, 10]}>
               <Col span={24}><Title level={4}>Issue description</Title></Col>
               <Col span={24}><Paragraph color={Colors.Grey} fontSize={16}>{data.issue}</Paragraph></Col>
               <Col>
                   <Row gutter={[12, 12]} style={{marginTop: '20px'}}>
                       <Col span={24}>
                           <Title level={4}>Payment information  <PaymentStatusTag status={data?.paymentStatus} /></Title>
                       </Col>
                       <Col>
                           <Text fontSize={16}>Total amount: {data?.totalAmount} $ </Text>
                       </Col>
                       <Col>
                           <Text fontSize={16}>Patient portion: {data?.patientPortion} $</Text>
                       </Col>
                       <Col>
                           <Text fontSize={16}>Amount paid: {data?.amountPaid} $</Text>
                       </Col>
                       <Col span={24} style={{marginTop: '20px'}}>
                               <Title level={4}>Services</Title>
                       </Col>
                       <Col span={24}>
                           <Table
                               {...tableProps}
                               loading={isLoading}
                               columns={columns}
                               dataSource={(data?.services || []).map((item, index)=>{
                                   return {
                                       ...item,
                                       key:index
                                   }
                               })}
                           />
                       </Col>
                   </Row>
               </Col>
           </Row>

        </PageWrapper>
    );
};

export default VisitDetails;