import PageWrapper from "../../components/PageWrapper";
import {Input, Space, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {TUserUI} from "../../data/types/user.types.ts";
import {useGetDoctors} from "../../firebase/userHooks.tsx";
import Button from "../../components/Button";

const columns:ColumnsType<TUserUI> = [
    {
        key:'displayName',
        title:'Name',
        dataIndex:'displayName',
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    placeholder={`Search`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => confirm()}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => confirm()}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => {
                            if(clearFilters) {
                                clearFilters();
                                confirm()
                            }
                        }}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        onFilter: (value, record) =>
            record["displayName"]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        filterSearch:true,
        sorter: (a, b) => a.displayName.localeCompare(b.displayName)
    },
    {
        key:'email',
        title:'Email',
        dataIndex:'email'
    },
    {
        key:'type',
        title:'Type',
        dataIndex:'type'
    }
]

const Users = () => {
    const {data,isLoading}= useGetDoctors();
    console.log(data)
    return (
        <PageWrapper title='Doctors'>
                <Table
                    loading={isLoading}
                    columns={columns}
                    dataSource={(data || []).map(item=>{
                        return {
                            ...item,
                            key:item.fUserId
                        }
                    })}
                />
        </PageWrapper>
    );
};

export default Users;