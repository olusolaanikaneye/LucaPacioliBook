import React, { useState } from 'react';
import { DatePicker, message, Table } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

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
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}
