import PageWrapper from "../../../components/PageWrapper";
import {Button, Table, TableProps} from "antd";
import {ColumnsType} from "antd/es/table";
import CreatePatient from "./CreatePatient";
import {useRef} from "react";
import {Colors} from "../../../core/CssVariables.ts";
import {TPatientUI} from "../../../data/types/patient.types.ts";
import {useGetPatients} from "../../../firebase/useGetPatientsHook.tsx";
import CreateVisitAction from "./CreateVisitAction";

const Patients = () => {
    const createRef = useRef<{open: () =>void }>();
    const {data, isLoading} = useGetPatients();
    const columns: ColumnsType<TPatientUI> = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '200px',
            ellipsis: true
        },
        {
            title: 'Creation date',
            dataIndex: 'creationDate',
            width: '200px',
            ellipsis: true,
        },
        {
            title: 'Address',
            dataIndex: 'addressStr',
            width: '300px',
            ellipsis: true
        },
        {
            title: 'Action',
            key: 'action',
            sorter: true,
            render: (row:TPatientUI) => <CreateVisitAction {...row} />
        },
    ];

    const tableProps: TableProps<TPatientUI> = {
        bordered: false,
        loading: false,
        size: 'middle',
        showHeader: true,
        scroll: {y: '80vh', x: '100vw'},
        tableLayout: 'auto',
    };

    return (
        <PageWrapper title='Patients' actions={<Button type='primary' color={Colors.PrimaryColor} onClick={() => createRef.current?.open()}>Create Patient</Button>}>
            <>
            <CreatePatient ref={createRef} />
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

export default Patients;