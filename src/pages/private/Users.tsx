import PageWrapper from "../../components/PageWrapper";
import { Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {TUserUI} from "../../data/types/user.types.ts";
import {useGetDoctors} from "../../firebase/userHooks.tsx";
import {useGetSearchColumnProps} from "../../components/Table/hooks.tsx";



const Users = () => {
    const {data,isLoading}= useGetDoctors();
    const { getColumns } = useGetSearchColumnProps();
    const columns:ColumnsType<TUserUI> = [
        {
            key:'displayName',
            title:'Name',
            dataIndex:'displayName',
            sorter: (a, b) => a.displayName.localeCompare(b.displayName),
            ...getColumns('displayName')
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