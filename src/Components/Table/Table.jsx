import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './Table.css'
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'sai kiran', firstName: 'nandam', age: 23 },
  { id: 2, lastName: 'sai sankar', firstName: 'vallabaneni', age: 23 },
  { id: 3, lastName: 'masood', firstName: 'pathan', age: 23 },
  { id: 4, lastName: 'varun', firstName: 'patibantula', age: 24 },
  { id: 5, lastName: 'basha', firstName: 'shaik', age: 23 },
  { id: 6, lastName: 'nagendra', firstName: 'meddineni', age: 25 },
  { id: 7, lastName: 'krishna', firstName: 'nandam', age: 22 },
  { id: 8, lastName: 'chanti', firstName: 'jangam', age: 23 },
  { id: 9, lastName: 'bhanti', firstName: 'jangam', age: 25 },
];

export default function DataTable() {
  return (
    <div className='Table'>
        <h2 style={{marginLeft:'30px'}}>Recent Orders</h2>
    <div style={{ height: 400, width: '95%',marginLeft:'20px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        style={{color:'white'}}
      />
    </div>
    </div>
  );
}
