"use client";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Nomad from '../../..//public/Nomad.png';
import Image from 'next/image';

interface Column {
  id: 'company' | 'code' | 'role' | 'date' | 'status' | 'delete';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'code', label: '#', minWidth: 100 },
  { id: 'company', label: 'Company Name', minWidth: 170 },
  { id: 'role', label: 'Roles', minWidth: 170 },
  { id: 'date', label: 'Date Applied', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 170 },
  { id: 'delete', label: 'delete', minWidth: 170 },
];

interface Data {
  code: number;
  company: React.ReactNode;
  role: string;
  date: string;
  status: React.ReactNode;
  delete: React.ReactNode;
}

function createData(
    code: number,
    company: React.ReactNode,
    role: string,
    date: string,
    status: React.ReactNode,
): Data {
  return { code, company, role, date, status, delete: <button className='bg-red-500 text-white px-3 py-1 rounded-md'>Delete</button>};
}

const rows = [
  createData(
    1,
    <>
        <div className='flex flex-row items-center'>
            <Image src={Nomad} alt='airbnb' width={50} height={50} />
            <p>Nomad</p>
        </div>
    </>,
    'Software Engineer',
    '24 May 2020' , 
    <>Status</>
    ),
  createData(
    1,
    <>
        <div className='flex flex-row items-center'>
            <Image src={Nomad} alt='airbnb' width={50} height={50} />
            <p>Nomad</p>
        </div>
    </>,
    'Software Engineer',
    '24 May 2020' , 
    <>Status</>
    ),
  createData(
    1,
    <>
        <div className='flex flex-row items-center'>
            <Image src={Nomad} alt='airbnb' width={50} height={50} />
            <p>Nomad</p>
        </div>
    </>,
    'Software Engineer',
    '24 May 2020' , 
    <>Status</>
    ),
  createData(
    1,
    <>
        <div className='flex flex-row items-center'>
            <Image src={Nomad} alt='airbnb' width={50} height={50} />
            <p>Nomad</p>
        </div>
    </>,
    'Software Engineer',
    '24 May 2020' , 
    <>Status</>
    ),
  createData(
    1,
    <>
        <div className='flex flex-row items-center'>
            <Image src={Nomad} alt='airbnb' width={50} height={50} />
            <p>Nomad</p>
        </div>
    </>,
    'Software Engineer',
    '24 May 2020' , 
    <>Status</>
    ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className='font-bold'>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
