import React from 'react'
type AccountTypeProps = {
  name: string;
  intershipId: string;
  companyId: string;
}
const AccountType = (source: AccountTypeProps) => {
  return (
    <div className="account-type flex flex-row justify-center items-center w-full bg-white">
      <input className='hidden' type="radio" id={source.intershipId} name={source.name} value="intership-seeker" />
      <label className='cursor-pointer p-2 text-[#4640DE] font-semibold m-1 checkbox-label text-center' htmlFor={source.intershipId}>Intership Seeker</label>
      <input className='hidden' type="radio" id={source.companyId} name={source.name} value="company" />
      <label className='cursor-pointer p-2 text-[#4640DE] font-semibold checkbox-label' htmlFor={source.companyId}>Company</label> 
    </div>
  )
}

export default AccountType