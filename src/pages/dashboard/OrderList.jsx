import React from "react";
import { CardItem } from "../style";
import { Table, Badge } from "antd";
import Icon, { EllipsisOutlined } from '@ant-design/icons'
function getData(id, customer, price, date, status) {
    return {
        id, customer, price, date, status,
    }
}
function getColumn(title, dataIndex, key, align, render) {
    return {
        title, dataIndex, key, align, render
    }
}
const dataSource = [
    getData('0125', "Fedissa Buskov", "$152", "24/08/2018", <Badge color='green' />),
    getData('0125', "Amir Kan", "$241", "22/08/2018", <Badge color='gold' />),
    getData('0125', "Nuhad Sed", "$110", "20/08/2018", <Badge color='red' />),
    getData('0125', "Wisteria Eagle", "$325", "30/08/2018", <Badge color='green' />),
    getData('3214', "Tyson Bad", "$114", "13/08/2018", <Badge color='gold' />),
    getData('0125', "Jessie talent", "$241", "10/08/2018", <Badge color='green' />),
    getData('3917', "Micheal Durost", "$127", "11/07/2018", <Badge color='green' />),
];

const columns = [
    getColumn('#', 'id', 'id'),
    getColumn('Customer', 'customer', 'customer'),
    getColumn('Price', 'price', 'price'),
    getColumn('Date', 'date', 'date'),
    getColumn('Status', 'status', 'status', 'center'),
    getColumn('', 'dot3', 'dot3', 'center', () => (<EllipsisOutlined style={{ color: '#B1B0B0' }} />))
];

export const OrderList = () => {
    return (
        <CardItem style={{ padding: '0' }}>
            <h5 style={{
                fontWeight: 800,
                padding: '20px 30px 10px',
            }} className="bottom-border">ORDER LIST</h5>
            <Table dataSource={dataSource} columns={columns} pagination={false} />
        </CardItem>
    )
}