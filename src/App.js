import React, { useState } from 'react';
import { DatePicker, message, Table, Button } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

const daybookData = [
  {
    key: '1',
    itemName: 'Gold Pendant',
    price: 50,
    discount: 'none',
    date: '31 st july',
  },

  {
    key: '2',
    itemName: 'Diamond Pendant',
    price: 90,
    discount: 'none',
    date: '21st july',
  },

  {
    key: '3',
    itemName: 'Gold Necklace',
    price: 80,
    discount: 'none',
    date: '11th july',
  },
];

const dataSource = [
  {
    key: '1',
    name: 'Sola',
    age: 30,
    address: '10 Downing Street',
  },

  {
    key: '2',
    name: 'John',
    age: 42,
    address: '12 Downing street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
const dataColumns = [
  {
    title: 'ItemName',
    dataIndex: 'itemName',
    key: 'itemName',
  },

  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },

  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
  },

  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
];

export default function App() {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
    );
    setDate(value);
  };

  return (
    <div style={{ width: 400, margin: '100px auto', color: 'blue' }}>
      Hello from Luca Pacioli, pick date
      <DatePicker
        onChange={handleChange}
        style={{ Backgroundcolor: 'green' }}
      />
      <div style={{ marginTop: 16 }}>
        selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        <Table dataSource={daybookData} columns={dataColumns} />
        <Button />
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}
