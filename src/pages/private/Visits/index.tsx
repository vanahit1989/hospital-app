import PageWrapper from "../../../components/PageWrapper";
import { Table, TableProps} from "antd";
import {ColumnsType} from "antd/es/table";
import {useGetSearchColumnProps} from "../../../components/Table/hooks.tsx";
import dayjs from "dayjs";
import {TVisitUI} from "../../../data/types/visit.types.ts";
import {useGetVisitsHook} from "../../../firebase/visitHooks.tsx";
import PaymentStatusTag from "./PaymentStatusTag";
import {EPaymentStatusUI} from "../../../data/types/general.types.ts";
import CreateServiceAction from "./CreateServiceAction";
import {Link} from "react-router-dom";
import {LinkText} from "../../../components/Typography";

const Visits = () => {
    const {data, isLoading} = useGetVisitsHook();
    const { getColumns } = useGetSearchColumnProps();

    const columns: ColumnsType<TVisitUI> = [
        {
            title: 'Patient',
            dataIndex: 'patientName',
            width: '130px',
            ellipsis: true,
             sorter: (a, b) => (a.patientName || '').localeCompare(b.patientName || ''),
            ...getColumns('patientName'),
            render: (patientName, row) => <Link to={`${row.docId}`}><LinkText>{patientName}</LinkText></Link>

        },
        {
            title: 'Creation date',
            dataIndex: 'creationDate',
            width: '100px',
            ellipsis: true,
            sorter: (a, b) =>  dayjs(a.creationDate.toString(),'DD/MM/YYYY').isBefore(dayjs(b.creationDate.toString(),'DD/MM/YYYY'))? -1 : 1
        },
        {
            title: 'Issue',
            dataIndex: 'issue',
            width: '150px',
            ellipsis: true,
            ...getColumns('issue')
        },
        {
            title: 'Total Amount',
            dataIndex: 'totalAmount',
            width: '80px',
            align: 'center',
            ellipsis: true,
            render: (amount: number) => `${amount} $`

        },
        {
            title: 'Patient portion',
            dataIndex: 'patientPortion',
            width: '90px',
            align: 'center',
            ellipsis: true,
            render: (patientPortion: number) => `${patientPortion} $`
        },
        {
            title: 'Paid amount',
            dataIndex: 'amountPaid',
            width: '90px',
            align: 'center',
            ellipsis: true,
            render: (amountPaid: number) => `${amountPaid || 0} $`
        },
        {
            title: 'Payment status',
            dataIndex: 'paymentStatus',
            width: '100px',
            align: 'center',
            filters: [
                {
                    text: EPaymentStatusUI.PENDING,
                    value: EPaymentStatusUI.PENDING
                },
                {
                    text: EPaymentStatusUI.PAID,
                    value: EPaymentStatusUI.PAID
                },
            ],
            onFilter: (value, record) => (record.paymentStatus || '')?.startsWith(value as string),

            ellipsis: true,
            render: (status: EPaymentStatusUI) => <PaymentStatusTag status={status}/>
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            width: '100px',
            render: (row: TVisitUI) => <CreateServiceAction docId={row.docId || ''} />
        },
    ];

    const tableProps: TableProps<TVisitUI> = {
        bordered: false,
        loading: false,
        size: 'middle',
        showHeader: true,
        scroll: {y: '80vh', x: 'auto'},
        tableLayout: 'fixed',
    };

    return (
        <PageWrapper title='Visits'>
            <>
            {/* <CreateServiceModal ref={createRef} /> */}
            <Table
                key='docId'
                {...tableProps}
                loading={isLoading}
                pagination={{ position: ['bottomRight'] }}
                tableLayout='fixed'
                columns={columns}
                dataSource={data}
            />
                </>
        </PageWrapper>
    );
};

export default Visits;