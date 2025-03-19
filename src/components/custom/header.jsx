import React from 'react'
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { addUserInfo, removeUserInfo } from '../../store/userSlice'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setDialogOpen } from '../../store/dialogSlice'
import { IoReorderThreeOutline } from "react-icons/io5";
  

function Header() {
  const dispatch = useDispatch();
  const dialogOpen = useSelector((state) => state.dialog.open);
  const user = useSelector((state) => state.user.userInfo);


  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
        try {
            const userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            });

            dispatch(addUserInfo(userInfo.data));
            dispatch(setDialogOpen(false)); 
        } catch (error) {
            console.error("Google Auth Error:", error);
        }
    },
    onError: (error) => console.error("Login Failed:", error),

});

const handleSignIn = () => {
  if (!user) {
    dispatch(setDialogOpen(true));
    return;
}
}

const handleLogout = () => {
    googleLogout(); 
    dispatch(removeUserInfo()); 
    window.location.href = "/"; 
  };


return (
    <>
    <div className='flex justify-between items-center px-4 shadow-sm bg-fixed w-screen'>
        <div className='items-center gap-2'>
            <img src="/vite.svg" alt="logo" className='h-10 w-10 md:w-15 md:h-10 size-10 cursor-pointer' onClick={() => (window.location.href = '/')}/>
            <h1 className='text-xs md:text-xl font-bold font-serif text-[#8046FD]'>eVento</h1>

        </div>

        <div>
          
          <Dialog open={dialogOpen} onOpenChange={(isOpen) => dispatch(setDialogOpen(isOpen))} >
                <DialogContent className={"bg-white text-black"}>
                    <DialogHeader>
                    <DialogTitle>.</DialogTitle>
                        <DialogDescription>
                            <img src="./vite.svg" alt="logo" />
                            <h2 className="text-2xl font-serif font-bold mt-5">Sign in to continue</h2>
                            <p>Please sign in with Google authentication securely</p>
                        </DialogDescription>
                    </DialogHeader>
                    <Button onClick={() => login()} className={"text-md mt-5 flex gap-4 items-center w-full cursor-pointer bg-black text-white"}> <FcGoogle className='h-6 w-6'/> Sign in with Google </Button>
                </DialogContent>
            </Dialog>
            

            <div className='flex items-center gap-2'>
                <a href='/about'>
                    <Button className={'cursor-pointer font-bold w-17 md:w-30 md:h-8 h-6 md:text-sm font-serif text-[8px] bg-gray-300 text-[#8046FD]'} size={"sm"}>About</Button>
                </a>
                {user ? 
                    <div className='flex items-center md:gap-5 gap-2'>
                        <a href='/create-event'>
                            <Button className={'cursor-pointer hidden md:block sm:hidden font-semibold w-22 md:w-37 md:h-8 h-6 text-[8px] md:text-sm font-serif bg-gray-300 text-[#8046FD]'} size={"sm"}>➕ Create Events</Button>
                        </a>
                        <a href='/view-event'>
                            <Button className={'cursor-pointer font-bold w-17 md:w-30 md:h-8 h-6 md:text-sm font-serif text-[8px] bg-gray-300 text-[#8046FD]'} size={"sm"}>Explore Events</Button>
                        </a>
                        <Popover>
                            <PopoverTrigger>
                                <IoReorderThreeOutline className='size-7 md:size-9 cursor-pointer'/>
                            </PopoverTrigger>
                            {/* <PopoverTrigger>
                                <IoReorderThreeOutline />
                            </PopoverTrigger> */}

                            <PopoverContent className='w-57 bg-white'>
                                <div className='flex'>
                                    <img src={user?.picture} alt="user" className='w-8 h-8 md:w-11 md:h-11 rounded-full shadow-xl border-2 border-gray-300 object-cover cursor-pointer' /> 
                                    <h1 className='text-sm font-bold font-serif px-1'>{user?.name}</h1>
                                </div>
                                <p className='text-xs text-gray-500 font-serif py-2'>📧 {user?.email}</p>
                                <a href='/'>
                                    <Button className={'cursor-pointer md:hidden block sm:block font-semibold w-22 md:w-37 md:h-8 h-6 text-[8px] md:text-sm font-serif bg-gray-300 text-[#8046FD]'} size={"sm"}>Home</Button>
                                </a>
                                
                                <a href='/create-event'>
                                    <Button className={'cursor-pointer my-3 md:hidden block sm:block font-semibold w-22 md:w-37 md:h-8 h-6 text-[8px] md:text-sm font-serif bg-gray-300 text-[#8046FD]'} size={"sm"}>➕ Create Events</Button>
                                </a>
                                <a href='/'>
                                    <Button onClick={handleLogout} className={"cursor-pointer font-bold w-13 md:w-25 md:h-8 h-6 text-sm md:text-sm font-serif text-[8px] bg-gray-300 text-[#8046FD]"} size={"sm"}>
                                        Logout
                                    </Button>
                                </a>
                            </PopoverContent>
                        </Popover>
                    </div>
                        : 
                    <Button onClick={handleSignIn} className={"cursor-pointer w-13 md:w-20 md:h-8 h-6 text-xs md:text-sm font-serif bg-black text-white hover:bg-gray-600"} size={"sm"}>Sign In</Button>
                }
            </div>

        </div>
    </div>
    </>
      )
}

export default Header;