import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import uploadImage from '@/public/Textfield.png';
import ResponsiveDatePickers from './Date';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import SelectGender from './SelectGender';
import  useAuth from '@/hooks/useAuth';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { useRouter } from 'next/navigation';
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

export default function Settings() {
  const { auth, setAuth }: any = useAuth();
  const [gender, setGender] = React.useState(auth?.user.gender);
  const [value, setValue] = React.useState(0);
  const [pfp , setPfp] = React.useState(auth?.user?.image);
  const [phone, setPhone] = React.useState(auth?.user?.phone);
  const [email, setEmail] = React.useState(auth?.user?.email);
  const [fullname, setFullname] = React.useState(auth?.user?.name);
  const [dob, setDob] = React.useState(auth?.user?.dob);
  const [location, setLocation] = React.useState(auth?.user?.location);
  const axiosPrivate = useAxiosPrivate();
  const router = useRouter();
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleUpload = () => {
    const uploadPfp = document.getElementById('upload-pfp');
    uploadPfp?.click();
    const profilePfp = document.getElementById('profilepfp');
    uploadPfp?.addEventListener('change', (e) => {
        const file = (e.target as HTMLInputElement).files;
        if(file){
            const reader = new FileReader();
            reader.onload = function(){
                if(profilePfp){
                    setPfp(reader.result as string);
                    profilePfp.setAttribute('src', reader.result as string);
                }
            }
            reader.readAsDataURL(file[0]);
        }
    });
}

const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const handleSubmite = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', fullname);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('gender', gender);
    formData.append('dob', dob);
    formData.append('location', location);
    
    const fileInput = document.getElementById('upload-pfp') as HTMLInputElement;
    if (fileInput.files?.length) {
      formData.append('file', fileInput.files[0]);
    }
    try {
      console.log("dob", dob);
      console.log("type of dob", typeof dob);
      const response = await axiosPrivate.put(`/users/${auth.user.id}`, formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          
        }
      },
      );
      console.log("response", response.data);
      setAuth(response.data);
    }catch (error) {
      console.log(error);
  }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} textColor="inherit" >
          <Tab label="My Profile" {...a11yProps(0)} />
          <Tab label="Login Details" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <div>
            <h3 className='font-bold my-2 text-[#25324B]'>Basic Information</h3>
            <p className='text-sm text-[#515B6F]'>
                This is your personal information that you can update anytime.
            </p>
        </div>
        <hr className='h-2 my-5'/>
        <FormControl fullWidth className='relative'>
        <div className='flex flex-row justify-between w-full'>
            <div className='w-1/4 mr-20'>
                <h3 className='font-bold my-2 text-[#25324B]'>Profile Photo</h3>
                <p className='text-sm text-[#515B6F]'>
                    This image will be shown publicly as your profile picture, it will help recruiters recognize you!
                </p>
            </div>
            <div className='w-3/4 h-full'>
                <div className='flex flex-row justify-center items-center h-4/5'>
                    <div>
                        <Image src={pfp} alt='profile' width={120} height={120} className='rounded-full' id='profilepfp'/>
                    </div>
                    <div className='w-1/2 border-2 border-red-50 h-4/5 relative mx-5 cursor-pointer'>
                        <input type="file" name="file" id="upload-pfp" className='h-40 w-full z-10 opacity-0 '/>
                        <Image src={uploadImage} alt='upload' className='absolute top-0 left-0 z-0 h-full' onClick={handleUpload}/>
                    </div>
                </div>
            </div>
        </div>
        <hr className='h-2 my-5'/>
        <div className='flex flex-row justify-between w-full'>
            <div className='w-1/4 mr-20'>
                <h3 className='font-bold my-2 text-[#25324B]'>Personal Details</h3>
            </div>
            <div className='w-3/4 h-full px-10 py-2'>
                <label htmlFor="fullname" className='font-bold text-[#515B6F]'>Full Name</label>
                <br />
                <input type="text" name="fullname" id="fullname" className=' p-2 mb-5 mt-3 w-4/5 h-10 border-2 border-gray-200 outline-none' value={fullname} onChange={e => setFullname(e.target.value)}/>
                <br />
                <label htmlFor="phone-number" className='mr-36 font-bold text-[#515B6F]'>Phone Number</label>
                <label htmlFor="email" className='font-bold text-[#515B6F]'>Email</label>
                <br />
                <input type="tel" name="phone-number" id="phone-number" className='p-2 mb-5 mr-9 mt-3 w-1/3 h-10 border-2 border-gray-200 outline-none' value={phone} onChange={e => setPhone(e.target.value)}/>
                <input type="email" name="email" id="email" className='p-2 mb-5 mt-3 w-2/5 h-10 border-2 border-gray-200 outline-none' value={email} onChange={e => setEmail(e.target.value)}/>
                <br />
                <label htmlFor="date-of-birth" className='font-bold mr-40 text-[#515B6F]'>Date of Birth</label>
                <label htmlFor="gender" className=' text-[#515B6F] font-bold'>Gender</label>
                <br />
                <div className="flex flex-row ">
                    <div className="w-1/3 mt-3 mb-5 mr-9">
                        <ResponsiveDatePickers date={dob} setDate={setDob}/>
                    </div>
                    <div className="w-1/3 mt-3 mb-5">
                        <SelectGender gender={gender} setGender={setGender} handleChangeGender={handleChangeGender} />
                    </div>
                </div>

            </div>
        </div>
        <hr className='h-2 my-5'/>
        <div className='flex flex-row justify-between w-full'>
            <div className='w-1/4 mr-20'>
                <h3 className='font-bold my-2 text-[#25324B]'>Location</h3>
            </div>
            <div className='w-3/4 h-full px-10 py-2'>
                <label htmlFor="location" className='font-bold text-[#515B6F]'>Location</label>
                <br />
                <input type="text" name="location" id="location" className=' p-2 mb-5 mt-3 w-4/5 h-10 border-2 border-gray-200 outline-none' value={location} onChange={e => setLocation(e.target.value)}/>
            </div>
        </div>
        <hr className='h-2 my-5'/>
        <button
            type="button"
            className="p-4 text-[#FFFFFF] bg-primary mr-14 ml-8 w-36 absolute -bottom-10 right-0" 
            onClick={e => handleSubmite(e)}
          >
            Save Profile
        </button>
        </FormControl>
      </CustomTabPanel>
      
      <CustomTabPanel value={value} index={1}>
        <div>
            <h3 className='font-bold my-2 text-[#25324B]'>Basic Information</h3>
            <p className='text-sm text-[#515B6F]'>
                This is login information that you can update anytime.
            </p>
        </div>
        <hr className='h-2 my-5'/>
        <div className='flex flex-row justify-between w-full'>
            <div className='w-1/4 mr-20'>
                <h3 className='font-bold my-2 text-[#25324B]'>Update Email</h3>
                <p className='text-sm text-[#515B6F]'>
                    Update your email address to make sure it is safe
                </p>
            </div>
            <div className='w-2/4 h-full'>
                <FormControl fullWidth className='relative py-10' onSubmit={e => handleSubmite(e)}>
                    <div>
                        <p className='text-[#25324B]'>{auth.user.email}</p>
                        <p className='text-sm text-[#7C8493] mb-3 '>Your email address is verified.</p>
                    </div>
                    <label htmlFor="update-email" className='mb-3 text-[#515B6F] font-bold'>Update Email</label>
                    <input type="email" name="update-email" id="update-email" placeholder='Enter your new email' className='p-2 mb-5 px-2 py-1 w-3/5 h-10 border-2 border-gray-200 outline-none'/>
                    <button
                        type="button"
                        className="p-4 text-[#FFFFFF] bg-primary mr-14 w-36" 
                    >
                        Update Email
                    </button>
                </FormControl>
            </div>
        </div>
        <hr className='h-2 my-5'/>
        <div className='flex flex-row justify-between w-full'>
            <div className='w-1/4 mr-20'>
                <h3 className='font-bold my-2 text-[#25324B]'>New Password</h3>
                <p className='text-sm text-[#515B6F]'>
                    Manage your password to make sure it is safe
                </p>
            </div>
            <div className='w-2/4 h-full'>
                <FormControl fullWidth className='update-password-form'>
                    <label htmlFor="old-password" className='mb-3 text-[#515B6F] font-bold'>Old Password</label>
                    <input type="password" name="old-password" id="old-password" placeholder='Enter your old password' className='mb-5 px-2 py-1 w-3/5 h-10 border-2 border-gray-200 outline-none'/>
                    <label htmlFor="new-password" className='mb-3 text-[#515B6F] font-bold'>New Password</label>
                    <input type="password" name="new-password" id="new-password" placeholder='Enter your new password' className='mb-5 px-2 py-1 w-3/5 h-10 border-2 border-gray-200 outline-none'/>
                    <button
                        type="button"
                        className="p-4 text-[#FFFFFF] bg-primary mr-14 w-44 " 
                    >
                        Change Password
                    </button>
                </FormControl>
            </div>
        </div>
      </CustomTabPanel>
      
    </Box>
  );
}
