import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress for loading indicator

interface Column {
  id: 'title' | 'postedDate' | 'finalDate' | 'type' | 'applicants' | 'remove';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'title', label: 'Role', minWidth: 100 },
  { id: 'postedDate', label: 'Date Posted', minWidth: 170 },
  { id: 'finalDate', label: 'Due Date', minWidth: 170 },
  { id: 'type', label: 'Job Type', minWidth: 170 },
  { id: 'applicants', label: 'Applicants', minWidth: 170 },
  { id: 'remove', label: 'Delete', minWidth: 170 },
];

interface Data {
  title: React.ReactNode;
  postedDate: string;
  finalDate: string;
  type: React.ReactNode;
  applicants: number;
  remove: React.ReactNode;
}

const IntershipsListings = () => {
  const [rows, setRows] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { auth }: any = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axiosPrivate.get(`/users/${auth?.user?.id}/company/postedinterships`);
        const data = response.data;
        console.log(data);
        const formattedData = data.map((item: any) => ({
          title: (
            <Link href={`/IntershipListings/${item.id}`}>
              <p className='text-primary'>{item.title}</p>
            </Link>
          ),
          postedDate: item.postedDate,
          finalDate: item.finalDate,
          type: (
            <button
              type="button"
              className="bg-white border-2 border-primary rounded-full text-primary px-2 py-1"
            >
              {item.type}
            </button>
          ),
          applicants: item.applicants,
          remove: (
            <button className='bg-red-500 text-white px-3 py-1 rounded-md'>Delete</button>
          ),
        }));
        setRows(formattedData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching internships:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchInternships();
  }, []);

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
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
            <CircularProgress />
          </div>
        ) : (
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow className='font-bold'>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, textAlign: 'center' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, textAlign: 'center' }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
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
};

export default IntershipsListings;
