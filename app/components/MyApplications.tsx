"use client";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyAppDashboard from './MyApplicationsTables/MyAppDashboard';
import InReviewApp from './MyApplicationsTables/InReviewApp';
import OfferedApp from './MyApplicationsTables/OfferedApp';
import UnsuccessfulApp from './MyApplicationsTables/UnsuccessfulApp';
import InterviewingApp from './MyApplicationsTables/InterviewingApp';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MyApplications() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All (45)" {...a11yProps(0)} />
          <Tab label="In Review (34)" {...a11yProps(1)} />
          <Tab label="Interviewing (18)" {...a11yProps(2)} />
          <Tab label="Offered (5)" {...a11yProps(3)} />
          <Tab label="Unsuccessful (3)" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h3 className='font-bold text-xl px-3 mb-5'>Applications History</h3>
        <MyAppDashboard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h3 className='font-bold text-xl px-3 mb-5'>Applications History</h3>
        <InReviewApp />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h3 className='font-bold text-xl px-3 mb-5'>Applications History</h3>
        <InterviewingApp />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h3 className='font-bold text-xl px-3 mb-5'>Applications History</h3>
        <OfferedApp />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <h3 className='font-bold text-xl px-3 mb-5'>Applications History</h3>
        <UnsuccessfulApp />
      </CustomTabPanel>
    </Box>
  );
}
