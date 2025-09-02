import React from 'react'
import Logo from './shared/logo'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Avatar, AvatarImage } from './ui/avatar';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import axios from 'axios';
import { toast } from 'sonner';

const Navbar = () => {
    const user = true;
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            // network call
          const res = await axios.post("http://localhost:8000/api/v1/user/logout");
          if(res.data.success){
              navigate("/login");
              toast.success(res.data.message);
          }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
  return (
    <div className='border-0 border-gray-300'>
        <div className='flex items-center justify-between max-w-7xl mx-auto h-16'>
           <Logo />
     { 
        user ? (
            <Popover >
               <PopoverTrigger>
                   <Avatar>
                       <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                   </Avatar>
               </PopoverTrigger>
               <PopoverContent className='w-40'>
                   <Button variant="Link" onClick={logoutHandler}>Logout</Button>
               </PopoverContent>
            </Popover>
        ) : (
            <div className='flex items-center space-x-4 hover:cursor-pointer'>
                <Link to="/login"><Button variant="Link">Login</Button></Link>
                <Link to="/signup"><Button >Sign Up</Button></Link>
            </div>
        )
     } 
        </div>
     
    </div>
  )
}

export default Navbar
