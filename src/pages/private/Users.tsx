import PageWrapper from "../../components/PageWrapper";
import { Table} from "antd";
import useGetDoctorsHook from "../../firebase/useGetDoctorsHook.tsx";
import {ColumnsType} from "antd/es/table";
import { TUserUI } from "../../data/types/user.types.ts";

const columns:ColumnsType<TUserUI> = [
    {
        key:'displayName',
        title:'Name',
        dataIndex:'displayName'
    },
    {
        key:'email',
        title:'Email',
        dataIndex:'email'
    }
]
const Users = () => {
    const {data,isLoading}= useGetDoctorsHook();
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