import React, { useState } from "react";
import {
    DataSheetGrid,
    dateColumn,
    floatColumn,
    intColumn,
    textColumn,
    keyColumn,
  } from 'react-datasheet-grid'
  
  import 'react-datasheet-grid/dist/style.css'
  
  const Admin = () => {
    const [ data, setData ] = useState([
      { product: 'VueXY Theme', price: 234.23, count: 4, buyer: 'Edgar Papyan', date: new Date() },
    ])
  
    const columns = [
      { ...keyColumn('product', textColumn), title: 'Product' },
      { ...keyColumn('price', floatColumn), title: 'Price' },
      { ...keyColumn('count', intColumn), title: 'Count' },
      { ...keyColumn('buyer', textColumn), title: 'Buyer Name' },
      { ...keyColumn('date', dateColumn), title: 'Buyer Date' },
    ]
  
    return (
        <div className="px-20 cw:px-5 py-10">
            <DataSheetGrid
              value={data}
              onChange={setData}
              columns={columns}
            />
        </div>
    )
  }

  export default Admin;