import { useRouter } from 'next/router'
import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';

export default function Page() {
  const router = useRouter()

  return (
    <p className='back' onClick={() => router.back()}>
      <AiOutlineLeft /> Back
    </p>
  )
}