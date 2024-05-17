import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type GenderProps = {
    gender: string,
    setGender: (gender: string) => void
    handleChangeGender: (event: SelectChangeEvent<string>, child: React.ReactNode) => void
}
export default function SelectGender({
    gender,
    setGender,
    handleChangeGender
}: GenderProps){


  return (
      <>
        <Select
          id="gender"
          value={gender}
          onChange={handleChangeGender}
          fullWidth
        >
          <MenuItem value={"Male"} defaultChecked>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
        </Select>
    </>
  );
}
