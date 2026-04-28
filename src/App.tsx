import { useAuth } from './context/AuthContext'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'
import { useState } from 'react'
import './App.css'
type Page = 'login' | 'register' | 'recover'

export default function App() {
  const { isAuthenticated, user, logout } = useAuth()
  const [page, setPage] = useState<Page>('login')

  if (isAuthenticated && user) {
    return <Dashboard user={user} onLogout={logout} />
  }

  return (
    <LoginPage
      onGoRegister={() => setPage('register')}
      onGoRecover={() => setPage('recover')}
    />
  )
}