import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function ResponsiveDatePickers({
  date,
  setDate
}: {
  date: string,
  setDate: (date: string) => void
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        defaultValue={dayjs(date)}
        onChange={(newValue: Dayjs | null) => {
          if (newValue) {
            setDate(newValue.format('YYYY-MM-DD'));
          }
        }}
      />
    </LocalizationProvider>
  );
}
