import React, { useState } from 'react';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './style.css';

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
      </div>
    </div>
  );
}
