import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/inputs/Input'
import { validateEmail } from '../../utils/helper'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email address")
      return
    }

    if (password.length < 8 || !password) {
      setError("Password must be at least 8 characters")
      return
    }

    setError("")
  }
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Login to your account</p>

        <form onSubmit={handleLogin}>
            <label className="block text-xs font-medium text-slate-700">Email Address</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              type="text"/>
            <label className="block text-xs font-medium text-slate-700">Password</label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Min 8 Characters'
              type="password"/>
            {error && <p className="text-red-500 text-xs mt-2 mb-2 font-bold">{error}</p>}
            <button type="submit" className="btn-primary">Login</button>

            <p className="text-xs text-slate-700 mt-4">Don't have an account? <span onClick={() => navigate('/signUp')} className="text-primary cursor-pointer">Register</span></p>
        </form>
      </div> 
    </AuthLayout>
  )
}

export default Login