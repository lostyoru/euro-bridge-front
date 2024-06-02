import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function ResponsiveDatePickers({
  finalDate,
  setFinalDate
}: {
  finalDate: string,
  setFinalDate: (date: string) => void
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        defaultValue={dayjs(finalDate)}
        onChange={(newValue: Dayjs | null) => {
          if (newValue) {
            setFinalDate(newValue.format('YYYY-MM-DD'));
          }
        }}
      />
    </LocalizationProvider>
  );
}
