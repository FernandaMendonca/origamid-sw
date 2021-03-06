import React from 'react'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <UserContext.Provider value={user: 'Fefa'
}>
  { children }
    </UserContext.Provider >
  )
}
