import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../../components/molecules/LoginForm'
import SignUp from '../../components/molecules/SignUp'
import ForgotPassword from '../../components/molecules/ForgotPassword'
import ResetPassword from '../../components/molecules/ResetPassword'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </div>
  )
}

export default Login