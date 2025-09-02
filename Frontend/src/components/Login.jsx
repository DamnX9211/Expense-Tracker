import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import Logo from './shared/Logo'
import { Button } from './ui/button'
import axios from 'axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInput({...input , [e.target.name]: e.target.value})
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:8000/api/v1/user/login", input, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        console.log(res);
        if(res.data.success){
          toast.success(res.data.message)
          navigate("/")
        }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
  }
}
  return (
    <div className='flex items-center justify-center w-screen h-screen rounded'>
      
      <form onSubmit={submitHandler} className='w-96 p-8 shadow-lg'>
         <div className='w-full flex flex-col items-center space-x-2 mb-4'>
          <Logo />
          <span className="text-xl font-bold mt-2">Expense Tracker</span>
        </div>
          <div className='mb-4'>
            <Label className='text-sm font-medium'>Email</Label>
            <Input onChange={changeHandler} value={input.email} type="email" name="email"  />
          </div>
          <div className='mb-4'>
            <Label className='text-sm font-medium'>Password</Label>
            <Input onChange={changeHandler} value={input.password} type="password" name="password"  />
          </div>
        <Button type="submit" className='bg-black text-white px-4 py-2 w-full my-4 rounded hover:cursor-pointer'>Login</Button>
        <p className='text-sm text-center'>Don't have an account? <a href="/signup" className='text-blue-500'>Signup</a></p>
      </form>
    </div>
  )
}

export default Signin
