import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { signIn, signUp } from '../Actions/AuthAction' 

const Auth = () => {

  const dispatch = useDispatch()
  const loading = useSelector((state)=> state.authReducer.lodaing)

  const [isSignUp, setIsSignUp] = useState(true)
  const [formData, setFormData] = useState({ username: "", fullName: "", email: "", password: ""})

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignUp) {
      dispatch(signUp(formData))
    } else {
      dispatch(signIn(formData))
    }
  }

  const resetForm = () => {
    setFormData({ username: "", fullName: "", email: "", password: ""})
  }

  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div
          className="p-4 py-6 text-white bg-gray-600 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <h2>Quiz System</h2>
          </div>
          <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            Dynamic Quiz System for Appify Lab!
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>{isSignUp ? "Already have an account?" : "Don't have an account?"}</span>
            <span className="underline cursor-pointer" onClick={()=> {setIsSignUp((prev)=> !prev); resetForm()}}>Get Started!</span>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700">{ isSignUp ? 'Sign Up' : 'Sign In'}</h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
              <label htmlFor="username" className="text-sm font-semibold text-gray-500">Username</label>
              </div>
              <input
                type="text"
                name="username"
                autoFocus
                value={formData.username}
                onChange={handleChange}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            { isSignUp && <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
              <label htmlFor="fullName" className="text-sm font-semibold text-gray-500">Full Name</label>
              </div>
              <input
                type="text"
                name="fullName"
                autoFocus
                value={formData.fullName}
                onChange={handleChange}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>}
            { isSignUp && <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
              <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
              </div>
              <input
                type="email"
                name="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>}
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
              </div>
              <input
                type="password"
                name="password"
                autoFocus
                value={formData.password}
                onChange={handleChange}
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <p className="text-sm font-semibold text-gray-500" onClick={()=> {setIsSignUp((prev)=> !prev); resetForm()}}>
              {isSignUp ? 'Already have an account? Login!' : "Don't have an account? Sign Up!"}
              </p>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
               {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth