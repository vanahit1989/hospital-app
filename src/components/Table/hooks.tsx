import { SearchOutlined } from '@ant-design/icons';
import {InputRef} from 'antd';
import { Button, Input, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import {Key, useRef, useState} from "react";
import {FilterDropdownProps} from "antd/es/table/interface";

export const useGetSearchColumnProps = () => {
    const [searchTexts, setSearchTexts] = useState<{[key: string]: string}>({});
    const [searchedColumns, setSearchedColumns] = useState<string[]>([]);
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: string,
    ) => {
        confirm();
        setSearchTexts(p => ({...p, [dataIndex]: selectedKeys[0]}));
        if (!searchedColumns.includes(dataIndex)) {
            setSearchedColumns(p => ([...p, dataIndex]))
        }
    };

    const handleReset = (dataIndex:string, clearFilters?: () => void) => {
        if (clearFilters) {
            clearFilters();
        }
        setSearchTexts(p => ({...p, [dataIndex]: ''}));
        setSearchedColumns(p => p.filter(item => item !== dataIndex))
    };

    const getColumns = (dataIndex:  string) => {
        return {
                filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: FilterDropdownProps) => (
                    <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                        <Input
                            ref={searchInput}
                            placeholder={`Search ${dataIndex}`}
                            value={selectedKeys[0]}
                            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                            onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                            style={{ marginBottom: 8, display: 'block' }}
                        />
                        <Space>
                            <Button
                                type="primary"
                                onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                                icon={<SearchOutlined />}
                                size="small"
                                style={{ width: 90 }}
                            >
                                Search
                            </Button>
                            <Button
                                onClick={() => {
                                    handleReset(dataIndex, clearFilters)
                                    setSelectedKeys([]);
                                    confirm();
                                    close();
                                }}
                                size="small"
                                style={{ width: 90 }}
                            >
                                Reset
                            </Button>
                        </Space>
                    </div>
                ),
                filterIcon: (filtered: boolean) => (
                    <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
                ),
                onFilter: (value: boolean | Key, record: any) =>
                    record[dataIndex]
                        .toString()
                        .toLowerCase()
                        .includes((value as string).toLowerCase()),
                onFilterDropdownOpenChange: (visible: boolean) => {
                    if (visible) {
                        setTimeout(() => searchInput.current?.select(), 100);
                    }
                },
                render: (text: string) =>
                    searchedColumns.includes(dataIndex) ? (
                        <Highlighter
                            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                            searchWords={[searchTexts[dataIndex]]}
                            autoEscape
                            textToHighlight={text ? text.toString() : ''}
                        />
                    ) : (
                        text
                    ),

        }
    }
   return  { getColumns };
}
