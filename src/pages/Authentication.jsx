import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebaseconfig'
import Login from '../component/auth/login'
import Register from '../component/auth/register'

export default function Authentication() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      if (isLogin) {
        // Handle Login
        await signInWithEmailAndPassword(auth, email, password)
        console.log('Successfully logged in!')
        navigate('/mainPage') // Redirect to the main page after successful login
      } else {
        // Handle Register
        await createUserWithEmailAndPassword(auth, email, password)
        console.log('Successfully registered!')
        navigate('/') // Redirect to home page after successful registration
      }
    } catch (error) {
      console.error('Authentication error:', error)
      setError(error.message.replace('Firebase:', ''))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            {isLogin ? 'Login' : 'Create Account'}
          </h2>
          <p className="text-gray-600 text-center">
            {isLogin ? 'Welcome back!' : 'Join us today!'}
          </p>
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">Authentication Error</p>
          )}
        </div>

        {isLogin ? (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
          />
        ) : (
          <Register
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
          />
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => {
                setIsLogin(!isLogin)
                setError('')
              }}
              className="text-blue-600 hover:underline focus:outline-none"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
