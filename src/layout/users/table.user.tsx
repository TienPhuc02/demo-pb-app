import React, { useEffect, useState } from "react";
import { message, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { callAPIGetAllUserPaginate } from "../../service/backend-service.api";

interface DataType {
  address: string;
  name: string;
  email: string;
  age: number;
  createdAt: string;
  updatedAt: string;
}

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableUser: React.FC = () => {
  const [listUser, setListUser] = useState([]);
  const getAllUser = async () => {
    const res = await callAPIGetAllUserPaginate();
    console.log(res);
    if (res && res.data) {
      message.success(res.message);
      setListUser(res.data.result);
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);
  console.log(listUser);
  // Function to convert createdAt timestamp to "hh-mm-ss dd/mm/yyyy" format
  const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
  };
  const columns: TableColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "_id",
      sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      sorter: true,
      render: (createdAt: string) => formatDateTime(createdAt),
    },
    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
      sorter: true,
      render: (updatedAt: string) => formatDateTime(updatedAt),
    },
    {
      title: "Action",
      render: () => {
        return <>aaaaaaaaaaa</>;
      },
    },
  ];

  // const data: DataType[] = [];
  return (
    <Table
      columns={columns}
      dataSource={listUser}
      onChange={onChange}
      pagination={{}}
      rowKey="_id"
      scroll={{ x: true }}
    />
  );
};

export default TableUser;
