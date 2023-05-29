import React from 'react'
import useAuthContext from '../contexts/authcontexts'

export default function Dashboard() {

  const { user, logout } = useAuthContext();

  return (
    <div>
      {user?.Customers_fname}

      <button onClick={logout}>logout</button>
    </div>
  )
}
