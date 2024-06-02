// pages/IntershipListings/[id].tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PersistentLogin from '../../components/PersistentLogin';
import RequireAuth from '../../components/auth/RequireAuth';
import SideBar from '../../components/SideBar';

const ApplicantsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [internship, setInternship] = useState<any>(null);

  useEffect(() => {
    const fetchInternship = async () => {
      const response = await fetch(`/api/internships/${id}`);
      const data = await response.json();
      setInternship(data);
    };

    if (id) {
      fetchInternship();
    }
  }, [id]);

  if (!internship) {
    return <div>Loading...</div>;
  }

  return (
    <PersistentLogin Children={
      <RequireAuth allowedRoles={['INTERSHIP_SEEKER', 'COMPANY']}>
        <div className="flex flex-row w-full">
          <SideBar />
          <div className="settings p-8 w-full hide-y-scroll overflow-hidden h-screen">
            <h2 className='capitalize font-bold text-xl my-4 py-3'>
              Applicants for {internship.title}
            </h2>
            <ul>
              {internship.appliedUsers.map((applicant: any, index: number) => (
                <li key={index} className="flex justify-between">
                  <span>{applicant.name}</span>
                  <span>{applicant.status}</span>
                  <span>{applicant.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RequireAuth>
    } />
  );
};

export default ApplicantsPage;
