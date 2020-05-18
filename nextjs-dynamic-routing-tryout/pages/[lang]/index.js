import React from 'react';
import { useRouter } from 'next/router'


function langIndex(){
  const router = useRouter()
  const test = router.query
  return(
    <>
      {JSON.stringify(test)}
      langIndex
    </>
  )
}

export default langIndex