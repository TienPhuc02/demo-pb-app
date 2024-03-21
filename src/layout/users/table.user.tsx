import React, { useEffect, useState } from "react";
import { Pagination, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { callGetAllUserPaginate } from "../../service/backend-service.api";

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}

const TableUser: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataUser, setDataUser] = useState([]);
  const [total, setTotal] = useState(0);
  const getAllUsers = async () => {
    const res = await callGetAllUserPaginate(current, pageSize);
    console.log(">>check res", res);
    if (res && res.data) {
      setCurrent(res.data.data.meta.current);
      setPageSize(res.data.data.meta.pageSize);
      setTotal(res.data.data.meta.total);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: true,
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      sorter: true,
    },
    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
      sorter: true,
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Table
        columns={columns}
        // dataSource={data}
        onChange={onChange}
        loading={false}
        showHeader={true}
        pagination={false}
        className="mb-[20px]"
      />
      <Pagination
        total={total}
        current={current}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        defaultPageSize={20}
        defaultCurrent={1}
        className="flex justify-end"
        showSizeChanger={true}
      />
    </div>
  );
};

export default TableUser;
