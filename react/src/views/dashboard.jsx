import React, { useEffect } from 'react'
import useAuthContext from '../contexts/authcontexts'

export default function Dashboard() {

  const {user, getUser} = useAuthContext();

  useEffect(() => {
    if(!user){
      getUser();
    }
  }, [])

  return (
    <div>
      {user?.Customers_fname}
    </div>
  )
}
