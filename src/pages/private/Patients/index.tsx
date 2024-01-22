import PageWrapper from "../../../components/PageWrapper";
import {Button, Table, TableProps} from "antd";
import {ColumnsType} from "antd/es/table";
import CreatePatient from "./CreatePatient";
import { useRef } from "react";
import {Colors} from "../../../core/CssVariables.ts";
import {TPatientUI} from "../../../data/types/patient.types.ts";
import {useGetPatients} from "../../../firebase/useGetPatientsHook.tsx";
import CreateVisitAction from "./CreateVisitAction";
import Tag from "../../../components/Tag/index.tsx";
import {ESourceUI} from "../../../data/types/general.types.ts";
import {useGetSearchColumnProps} from "../../../components/Table/hooks.tsx";

const Patients = () => {
    const createRef = useRef<{open: () =>void }>();
    const {data, isLoading} = useGetPatients();
    const { getColumns } = useGetSearchColumnProps();
    const columns: ColumnsType<TPatientUI> = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '200px',
            ellipsis: true,
            sorter: (a, b) => a.name.localeCompare(b.name),
            ...getColumns('name'),

        },
        {
            title: 'Creation date',
            dataIndex: 'creationDate',
            width: '200px',
            ellipsis: true,
            sorter: (a, b) => a.creationDate.toString().localeCompare(b.creationDate.toString())
        },
        {
            title: 'Address',
            dataIndex: 'addressStr',
            width: '300px',
            ellipsis: true,
            ...getColumns('addressStr')
        },
        {
            title: 'Source',
            dataIndex: 'source',
            filters: [
                {
                    text: ESourceUI.MANUAL,
                    value: ESourceUI.MANUAL
                },
                {
                    text: ESourceUI.EHR,
                    value: ESourceUI.EHR
                },
            ],
            onFilter: (value, record) => record.source.startsWith(value as string),
            filterSearch: true,
            width: '150px',
            ellipsis: true,
            render: (source) =>  <Tag>{source}</Tag>
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