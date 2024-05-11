import React from 'react'
type AccountTypeProps = {
  name: string;
  intershipId: string;
  companyId: string;
  setAccountType: React.Dispatch<React.SetStateAction<string>>;
}
const AccountType = (source: AccountTypeProps) => {
  const { setAccountType } = source;
  return (
    <div className="account-type flex flex-row justify-center items-center w-full bg-white">
      <input className='hidden' type="radio" id={source.intershipId} name={source.name} value="intership-seeker" />
      <label className='cursor-pointer p-2 text-[#4640DE] font-semibold m-1 checkbox-label text-center' htmlFor={source.intershipId} onClick={(e) => setAccountType('INTERSHIP_SEEKER')}>Intership Seeker</label>
      <input className='hidden' type="radio" id={source.companyId} name={source.name} value="company" />
      <label className='cursor-pointer p-2 text-[#4640DE] font-semibold checkbox-label' htmlFor={source.companyId} onClick={(e) => setAccountType('COMPANY')}>Company</label> 
    </div>
  )
}

export default AccountType