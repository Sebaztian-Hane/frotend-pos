import { useAuth } from './context/AuthContext'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import RecoverPage from './components/RecoverPage'
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

  if (page === 'register') {
    return (
      <RegisterPage
        onGoLogin={() => setPage('login')}
        onRegistered={() => setPage('login')}
      />
    )
  }

  if (page === 'recover') {
    return <RecoverPage onGoLogin={() => setPage('login')} />
  }

  return (
    <LoginPage
      onGoRegister={() => setPage('register')}
      onGoRecover={() => setPage('recover')}
    />
  )
}