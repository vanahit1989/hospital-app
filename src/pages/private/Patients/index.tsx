import PageWrapper from "../../../components/PageWrapper";
import {Table, TableProps} from "antd";
import {Space} from "antd/lib";
import {DownOutlined} from '@ant-design/icons';
import {ColumnsType} from "antd/es/table";


interface DataType {
    key: number;
    name: string;
    age: number;
    address: string;
    description: string;
}
const Patients = () => {
    const data: DataType[] = [];

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value, record) => record.address.indexOf(value as string) === 0,
        },
        {
            title: 'Action',
            key: 'action',
            sorter: true,
            render: () => (
                <Space size="middle">
                    <a>Delete</a>
                    <a>
                        <Space>
                            More actions
                            <DownOutlined />
                        </Space>
                    </a>
                </Space>
            ),
        },
    ];
    for (let i = 1; i <= 10; i++) {
        data.push({
            key: i,
            name: 'John Brown',
            age: Number(`${i}2`),
            address: `New York No. ${i} Lake Park`,
            description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        });
    }
    const tableProps: TableProps<DataType> = {
        bordered: false,
        loading: false,
        size: 'middle',
        showHeader: true,
        rowSelection: {} ,
        scroll: {y: '80vh', x: '100vw'},
        tableLayout: 'auto',
    };
    return (
        <PageWrapper title='Patients' >
            <Table
                {...tableProps}
                pagination={{ position: ['bottomRight'] }}
                columns={columns}
                dataSource={data}
                scroll={scroll}
            />
        </PageWrapper>
    );
};

export default Patients;